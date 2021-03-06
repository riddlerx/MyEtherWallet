<template>
  <div class="aave-container">
    <apollo-client
      ref="apolloClient"
      :address="account.address"
      @reserveData="updateReserveData"
      @userReserveData="updateUserReserveData"
      @usdPriceEth="updateUsdPriceEth"
      @liquidityRateHistory="updateLiquidityRateHistory"
    />
    <div class="header-container">
      <div class="row-desktop">
        <div v-if="$route.fullPath === '/interface/dapps/aave/action'">
          <div class="action-title">
            {{ actionTitle }} {{ reservesData.length > 0 ? token.symbol : '' }}
          </div>
        </div>
        <back-button
          v-if="$route.fullPath !== '/interface/dapps/aave/action'"
          :title="$t('dappsAmbrpay.exit-dapp')"
          :hide-border="true"
        />
        <div
          v-if="$route.fullPath !== '/interface/dapps/aave/action'"
          class="tab-container desktop"
        >
          <div
            :class="['action-btn', activeDepositTab ? 'active-tab' : '']"
            @click="toggleTabs('deposit')"
          >
            {{ $tc('dappsAave.deposit', 2) }}
          </div>
          <div
            :class="[
              'action-btn',
              'borrow-btn',
              activeBorrowTab ? 'active-tab' : ''
            ]"
            @click="toggleTabs('borrow')"
          >
            {{ $t('dappsAave.borrowings') }}
          </div>
        </div>
        <div class="health-container">
          <span>{{ $t('dappsAave.health-factor') }}</span>
          <i v-show="loadingHome" class="fa fa-spinner fa-spin health-score" />
          <span v-if="!loadingHome" class="health-score">{{
            convertToFixed(userSummary.healthFactor, 3)
          }}</span>
          <popover
            :popcontent="$t('dappsAave.health-factor-popover')"
            class="dapp-popover"
          ></popover>
        </div>
      </div>
      <div
        v-if="$route.fullPath !== '/interface/dapps/aave/action'"
        class="tab-container mobile"
      >
        <div
          :class="['action-btn', activeDepositTab ? 'active-tab' : '']"
          @click="toggleTabs('deposit')"
        >
          {{ $tc('dappsAave.deposit', 2) }}
        </div>
        <div
          :class="[
            'action-btn',
            'borrow-btn',
            activeBorrowTab ? 'active-tab' : ''
          ]"
          @click="toggleTabs('borrow')"
        >
          {{ $t('dappsAave.borrowings') }}
        </div>
      </div>
    </div>
    <router-view
      :active-deposit-tab="activeDepositTab"
      :active-borrow-tab="activeBorrowTab"
      :loading-home="loadingHome"
      :loading-reserves="loadingReserves"
      :reserves="reservesData"
      :reserves-stable="reservesStable"
      :health-factor="userSummary.healthFactor"
      :user-summary="userSummary"
      :pending-token="pendingToken"
      @emitTakeAction="emitTakeAction"
    />
  </div>
</template>

<script>
import ApolloClient from './ApolloClient.vue';
import BackButton from '@/layouts/InterfaceLayout/components/BackButton';
import { mapState, mapActions } from 'vuex';
import { Toast } from '@/helpers';
import {
  formatUserSummaryData,
  formatReserves,
  normalize
} from '@aave/protocol-js';
import moment from 'moment';
import BigNumber from 'bignumber.js';
import {
  depositDetails,
  borrowDetails,
  repayDetails,
  swapBorrowRateDetails,
  setUsageAsCollateralDetails,
  withdrawDetails
} from './graphQLHelpers.js';

export default {
  components: {
    'back-button': BackButton,
    'apollo-client': ApolloClient
  },
  props: {
    tokensWithBalance: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      activeDepositTab: true,
      activeBorrowTab: false,
      loadingHome: true,
      loadingReserves: true,
      reservesData: [],
      rawReserveData: [],
      reservesStable: [],
      actionType: '',
      userReserveData: [],
      token: {},
      usdPriceEth: '',
      userSummary: {},
      rateHistory: { labels: [], stableRates: [], variableRates: [] },
      pendingToken: {}
    };
  },
  computed: {
    ...mapState('main', ['web3', 'account']),
    actionTitle() {
      if (!this.actionType) {
        return this.activeDepositTab
          ? this.$tc('dappsAave.deposit', 1)
          : this.$t('dappsAave.borrow');
      }
      return this.actionType === 'Withdraw'
        ? this.$t('dappsAave.withdraw')
        : this.$t('dappsAave.repay');
    }
  },
  watch: {
    '$route.params.token'(newVal) {
      if (newVal) {
        this.$refs.apolloClient.getLiquidityRateHistoryUpdate(newVal.id);
        this.token = newVal;
      }
    },
    '$route.params.actionType'(newVal) {
      this.actionType = newVal;
    },
    tokensWithBalance() {
      this.getReserveBalances();
    }
  },
  mounted() {
    this.$eventHub.$on('emptyPendingToken', () => {
      this.pendingToken = {};
    });
  },
  beforeDestroy() {
    this.$eventHub.$off('emptyPendingToken');
  },
  methods: {
    ...mapActions('aave', ['setRateHistory']),
    convertToFixed(val, num) {
      if (val < 0) {
        return '-';
      }

      if (!val || val == 0) {
        return 0;
      }

      if (!num) {
        num = 2;
      }
      return new BigNumber(val).toFixed(num).toString();
    },
    updateLiquidityRateHistory(data) {
      this.rateHistory = { labels: [], stableRates: [], variableRates: [] };
      const rayDecimals = 27;
      const sortedData = data.sort((a, b) => a.timestamp - b.timestamp);

      sortedData.forEach(item => {
        const date = moment.unix(item.timestamp).format('MMM Do');
        this.rateHistory.labels.push(date);
        this.rateHistory.stableRates.push(
          new BigNumber(normalize(item.stableBorrowRate, rayDecimals))
            .times(100)
            .toFixed(2)
        );
        this.rateHistory.variableRates.push(
          new BigNumber(normalize(item.variableBorrowRate, rayDecimals))
            .times(100)
            .toFixed(2)
        );
      });
      this.setRateHistory(this.rateHistory);
    },
    updateReserveData(data) {
      this.rawReserveData = data;
      this.reservesData = formatReserves(data);
      this.reservesData = this.reservesData.reverse();
      this.loadingReserves = false;
      this.getFormatUserSummaryData();
    },
    updateUserReserveData(data) {
      this.userReserveData = data;
      this.getFormatUserSummaryData();
    },
    updateUsdPriceEth(data) {
      this.usdPriceEth = data;
      this.getFormatUserSummaryData();
    },
    getFormatUserSummaryData() {
      if (
        this.reservesData.length > 0 &&
        this.userReserveData &&
        this.usdPriceEth
      ) {
        this.userSummary = formatUserSummaryData(
          this.rawReserveData,
          this.userReserveData,
          this.account.address.toLowerCase(),
          this.usdPriceEth,
          Number(moment().format('X'))
        );
        this.mergeTheReserves();
        this.loadingHome = false;
      }
    },
    mergeTheReserves() {
      if (this.userSummary.reservesData.length > 0) {
        this.userSummary.reservesData.forEach(reserve => {
          const foundReserve = this.reservesData.find(
            elem => elem.name === reserve.reserve.name
          );
          foundReserve.user = reserve;
        });
      }
      this.getReserveBalances();
    },
    getReserveBalances() {
      const stableCoins = ['TUSD', 'DAI', 'USDT', 'USDC', 'sUSD'];
      if (this.reservesData.length > 0) {
        this.reservesData.forEach(reserve => {
          reserve.tokenBalance = 0;
          reserve.user = !reserve.user ? {} : reserve.user;
          if (reserve.symbol === 'ETH') {
            reserve.tokenBalance = this.web3.utils.fromWei(
              new BigNumber(this.account.balance).toFixed(),
              'ether'
            );
          }
          const foundReserve = this.tokensWithBalance.find(
            elem => elem.symbol === reserve.symbol
          );

          if (foundReserve) {
            reserve.tokenBalance = foundReserve.balance;
          }

          if (this.reservesStable.length < 5) {
            if (stableCoins.findIndex(coin => coin === reserve.symbol) >= 0) {
              this.reservesStable.push(reserve);
            }
          }
        });
      }
    },
    emitTakeAction(param) {
      param.data.userAddress = this.account.address;
      this.pendingToken = {
        symbol: param.symbol,
        amount: param.data.amount
      };

      switch (param.type) {
        case 'Deposit':
          this.pendingToken.type = 'deposit';
          this.deposit(param.data);
          break;
        case 'Borrow':
          this.pendingToken.type = 'borrow';

          this.borrow(param.data);
          break;
        case 'Withdraw':
          this.pendingToken.type = 'deposit';
          this.withdraw(param.data);
          break;
        case 'Repay':
          this.pendingToken.type = 'borrow';
          this.repay(param.data);
          break;
        case 'Collateral':
          this.pendingToken.type = 'deposit';
          this.switchCollateral(param.data);
          break;
        case 'SwitchRate':
          this.pendingToken.type = 'borrow';
          this.switchRate(param.data);
          break;
      }
    },
    async repay(param) {
      repayDetails(param)
        .then(resp => {
          const txArr = [];
          resp.data.repay.forEach(data => {
            txArr.push(data.tx);
          });
          this.sendTransaction(txArr);
        })
        .catch(err => {
          this.pendingToken = {};
          Toast.responseHandler(err, Toast.ERROR);
        });
    },
    async switchRate(param) {
      swapBorrowRateDetails(param)
        .then(resp => {
          const txArr = [];
          resp.data.swapBorrowRateMode.forEach(data => {
            txArr.push(data.tx);
          });
          this.sendTransaction(txArr);
        })
        .catch(err => {
          this.pendingToken = {};
          Toast.responseHandler(err, Toast.ERROR);
        });
    },
    async switchCollateral(param) {
      setUsageAsCollateralDetails(param)
        .then(resp => {
          const txArr = [];
          resp.data.setUsageAsCollateral.forEach(data => {
            txArr.push(data.tx);
          });
          this.sendTransaction(txArr);
        })
        .catch(err => {
          this.pendingToken = {};
          Toast.responseHandler(err, Toast.ERROR);
        });
    },
    async withdraw(param) {
      withdrawDetails(param)
        .then(resp => {
          const txArr = [];
          resp.data.redeem.forEach(data => {
            txArr.push(data.tx);
          });
          this.sendTransaction(txArr);
        })
        .catch(err => {
          this.pendingToken = {};
          Toast.responseHandler(err, Toast.ERROR);
        });
    },
    async deposit(param) {
      param.referralCode = 14;
      depositDetails(param)
        .then(resp => {
          const txArr = [];
          resp.data.deposit.forEach(data => {
            txArr.push(data.tx);
          });
          this.sendTransaction(txArr);
        })
        .catch(err => {
          this.pendingToken = {};
          Toast.responseHandler(err, Toast.ERROR);
        });
    },
    async borrow(param) {
      param.referralCode = 14;
      borrowDetails(param)
        .then(resp => {
          const txArr = [];
          resp.data.borrow.forEach(data => {
            txArr.push(data.tx);
          });
          this.sendTransaction(txArr);
        })
        .catch(err => {
          this.pendingToken = {};
          Toast.responseHandler(err, Toast.ERROR);
        });
    },
    async sendTransaction(param) {
      if (param.length > 1) {
        this.web3.mew
          .sendBatchTransactions(param)
          .then(() => {
            this.pendingToken = {};
            Toast.responseHandler(
              this.$t('sendTx.success.title'),
              Toast.SUCCESS
            );
          })
          .catch(err => {
            this.pendingToken = {};
            Toast.responseHandler(err, Toast.ERROR);
          });
      } else {
        this.web3.eth
          .sendTransaction(param[0])
          .then(() => {
            this.pendingToken = {};
            Toast.responseHandler(
              this.$t('sendTx.success.title'),
              Toast.SUCCESS
            );
          })
          .catch(err => {
            this.pendingToken = {};
            Toast.responseHandler(err, Toast.ERROR);
          });
      }
    },
    toggleTabs(action) {
      if (
        (action === 'borrow' && this.activeBorrowTab === true) ||
        (action === 'deposit' && this.activeDepositTab === true)
      ) {
        return;
      }
      this.activeDepositTab = !this.activeDepositTab;
      this.activeBorrowTab = !this.activeBorrowTab;
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'Aave.scss';
</style>
