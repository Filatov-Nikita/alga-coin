<template>
  <q-page
    class="tw-flex tw-flex-col tw-relative tw-overflow-hidden tw-container tw-pb-20 "
  >
    <div class="xl:tw-flex tw-justify-between tw-mb-14">
      <h2 class=" tw-mb-3 xl:tw-mb-0">{{ t("title") }}</h2>
      <div class=" tw-flex-wrap tw-justify-end tw-flex tw-gap-3 xl:tw-gap-14">
        <div>
          <div
            class="tw-text-xxs-1 tw-text-gray tw-flex tw-items-center tw-justify-end tw-gap-1.5 tw-mb-4"
          >
            <svg
              width="8"
              height="6"
              viewBox="0 0 8 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="tw-mt-0.5"
            >
              <rect
                y="2.18182"
                width="2.18182"
                height="2.90909"
                fill="#9596A3"
              />
              <rect
                x="2.90918"
                width="2.18182"
                height="5.09091"
                fill="#9596A3"
              />
              <rect
                x="5.81836"
                y="1.45453"
                width="2.18182"
                height="3.63636"
                fill="#9596A3"
              />
            </svg>

            <span> Monthly change </span>
          </div>
          <div class="tw-text-xxs tw-flex tw-justify-end tw-gap-2.5">
            <span> $0 </span>
            <span class="tw-text-green"> 0% </span>
          </div>
        </div>

      </div>
    </div>
    <div class=" tw-grid xl:tw-flex tw-gap-6.25">
      <div class="xl:tw-w-1/2">
        <!-- <div class="tw-flex tw-justify-between tw-mb-7.5">
          <div class="btns">
            <button class="tw-px-9 tw-h-full tw-bg-green tw-rounded-lg2">
              Exchanges
            </button>
            <button class="tw-px-9 tw-h-full">Coins</button>
          </div>
          <div class="field-search">
            <input type="text" placeholder="Search..." />
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.11543 2.62542C3.46992 1.37126 5.307 0.666687 7.22253 0.666687C8.17101 0.666687 9.1102 0.839665 9.98647 1.17574C10.8628 1.51182 11.659 2.00442 12.3296 2.62542C13.0003 3.24641 13.5323 3.98364 13.8953 4.79501C14.2582 5.60638 14.4451 6.476 14.4451 7.35422C14.4451 8.23243 14.2582 9.10205 13.8953 9.91342C13.7013 10.3471 13.459 10.7595 13.1731 11.1444L18 15.6138L16.1429 17.3334L11.3159 12.864C10.9003 13.1287 10.4548 13.3531 9.98647 13.5327C9.1102 13.8688 8.17101 14.0417 7.22253 14.0417C5.307 14.0417 3.46992 13.3372 2.11543 12.083C0.760943 10.8289 0 9.12786 0 7.35422C0 5.58057 0.760943 3.87957 2.11543 2.62542ZM7.22253 3.09852C6.00355 3.09852 4.8345 3.54688 3.97256 4.34498C3.11061 5.14308 2.62637 6.22553 2.62637 7.35422C2.62637 8.4829 3.11061 9.56535 3.97256 10.3634C4.8345 11.1615 6.00355 11.6099 7.22253 11.6099C7.82611 11.6099 8.42377 11.4998 8.9814 11.286C9.53903 11.0721 10.0457 10.7586 10.4725 10.3634C10.8993 9.96827 11.2378 9.49913 11.4688 8.9828C11.6998 8.46648 11.8187 7.91308 11.8187 7.35422C11.8187 6.79535 11.6998 6.24195 11.4688 5.72563C11.2378 5.20931 10.8993 4.74016 10.4725 4.34498C10.0457 3.9498 9.53903 3.63633 8.9814 3.42246C8.42377 3.20859 7.82611 3.09852 7.22253 3.09852Z"
                fill="#575656"
              />
            </svg>
          </div>
        </div> -->

        <div class="total-card tw-mb-8">
          <button class="filter">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.520011"
                y="0.520011"
                width="30.96"
                height="30.96"
                rx="7.28015"
                stroke="#575656"
                stroke-width="1.04002"
              />
              <circle
                cx="12.3075"
                cy="12.3077"
                r="2.69231"
                stroke="#575656"
                stroke-width="2"
              />
              <line
                x1="22.8613"
                y1="12"
                x2="13.9998"
                y2="12"
                stroke="#575656"
                stroke-width="2"
              />
              <circle
                cx="3.69231"
                cy="3.69231"
                r="2.69231"
                transform="matrix(-1 0 0 1 23.3848 16)"
                stroke="#575656"
                stroke-width="2"
              />
              <line
                x1="8.99413"
                y1="20.0462"
                x2="16.8557"
                y2="20"
                stroke="#575656"
                stroke-width="2"
              />
            </svg>
          </button>
          <h3 class="tw-text-sm tw-mb-4">Total</h3>
          <div class="tw-flex tw-items-center tw-gap-0.5 tw-mb-6">
            <span class="tw-text-md2"> $0.00</span>
            <span class="tw-text-xs tw-text-title"> ≈ </span>
            <span class="tw-text-xxs tw-text-title"> 0 BTC </span>
          </div>
          <div class="tw-flex tw-gap-3">
            <span class="tw-flex tw-gap-0.5 tw-text-xxs tw-text-green">
              <MarkIcon :mark="true" class="tw-w-2" />
              $0.00
            </span>
            <span class="tw-text-xxs tw-text-green"> +0.00$ </span>
          </div>
        </div>

        
      </div>
      <div class="xl:tw-w-1/2">
        <div class="chart-card tw-mb-8" v-if="charts.length > 0">
          <div class="btns btns_sm">
            <!-- <button
              class="tw-px-4 tw-h-full"
              :class="{ active: activeChart === 1 }"
              @click="newTime(2) activeChart = 1"
            >
              H
            </button> -->
            <button
              class="tw-px-4 tw-h-full"
              :class="{ active: activeChart === 2 }"
              @click="newTime(2, 2)"
            >
              D
            </button>
            <button
              class="tw-px-4 tw-h-full"
              :class="{ active: activeChart === 3 }"
              @click="newTime(3, 7)"
            >
              W
            </button>
            <button
              class="tw-px-4 tw-h-full"
              :class="{ active: activeChart === 4 }"
              @click="newTime(4, 30)"
            >
              M
            </button>
            <button
              class="tw-px-4 tw-h-full"
              :class="{ active: activeChart === 5 }"
              @click="newTime(5, 120)"
            >
              Y
            </button>
          </div>
          <AreaChart
            :valSeries="getChartData(1)"
            class="tw-order-2 xl:tw-order-1"
          />
        </div>
        <div class="swap-card">
          <div class="tw-mb-5 tw-flex tw-justify-between tw-items-center">
            <span class="tw-text-md2 tw-font-medium"> Swap </span>
            
          </div>
          <div class="tw-flex tw-justify-end tw-mb-1.5">
            <button class="tw-bg-title tw-rounded-lg tw-h-8 tw-px-4">
              Max
            </button>
          </div>
          <div class="tw-mb-4">
            <div class="tw-text-xxs-1 tw-mb-3">
              <span class="tw-text-text-gray"> From </span>
            </div>
            <div class="field-select">
              <input type="text" placeholder="0.00" />
              <div class="select">
                <img
                  src="https://admin.alga.finance/storage/coin_images/7rQbWbecOrwZdODcQ1w2who2iLSPonLCRt68AuvU.svg"
                  alt=""
                  width="16"
                  height="16"
                />
                <span> LTC </span>
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L4.8 4.8L8.6 1"
                    stroke="#D9D9D9"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
            <div class="tw-text-xxs-1 tw-mt-3">
              <span class="tw-text-text-gray"> Available: </span>
              0.00006000 LTC
            </div>
          </div>

          <div>
            <div class="tw-text-xxs-1 tw-mb-3">
              <span class="tw-text-text-gray"> To (estimated) </span>
            </div>
            <div class="field-select">
              <input type="text" placeholder="0.00" />
              <div class="select">
                <img
                  src="https://admin.alga.finance/storage/coin_images/7rQbWbecOrwZdODcQ1w2who2iLSPonLCRt68AuvU.svg"
                  alt=""
                  width="16"
                  height="16"
                />
                <span> LTC </span>
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L4.8 4.8L8.6 1"
                    stroke="#D9D9D9"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div class="tw-flex tw-justify-end tw-mt-10">
            <button
              class="tw-bg-title-light tw-rounded-xl tw-px-12 tw-h-12 tw-opacity-40 tw-flex tw-items-center tw-justify-center tw-gap-2"
            >
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.84615 11.3333L1 7.3333H13" stroke="#fff" />
                <path d="M11.1538 0.666626L13 4.66663H1" stroke="#fff" />
              </svg>
              <span> Swap </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useStore } from "vuex";
import { useQuasar } from "quasar";
import { useI18n } from "vue-i18n";
import useBuyWidthdrawalPopup from "src/composition/V3/useBuyWidthdrawalPopup";
import MarkIcon from "src/components/V3/MarkIcon.vue";
import AreaChart from "src/components/V3/AreaChart.vue";
import BtnsAnimate from "src/components/BtnsAnimate.vue";
import useChart from "src/composition/useChart.js";
const i18n = {
  messages: {
    "ru-RU": {
      title: "Моё Портфолио",
      card: {
        title: "Баланс",
      },
      "index-title": "Мои Индексы",
      "index-not": "У вас пока не было покупок",
      "index-not-btn": "Выбрать индекс",
      "index-table": {
        header: [
          "Индекс",
          "Дата закрытия",
          "Баланс",
          "Реализованный профит",
          "Действие",
        ],
        body: {
          date: "дней",
          action: {
            buy: "Купить",
            widthdrawal: "Вывод",
          },
        },
      },

      popup: {
        title: "Запрос на вывод средств",
        titleBuy: "Запрос на пополнение",
        text: "Доступно для вывода:",
        amount: {
          label: "Количество",
        },
        "wallet-number": {
          label: "Номер счета",
        },
        request: "Оставить заявку",
      },
    },
    "en-US": {
      title: "My Prortfolio",
      card: {
        title: "Balance",
      },
      "index-title": "My Indexes",
      "index-not": "You have not orders yet",
      "index-not-btn": "Choose index",
      "index-table": {
        header: [
          "Index",
          "Closing date",
          "Balance",
          "Realizad profit",
          "Ation",
        ],
        body: {
          date: "days",
          action: {
            buy: "Buy",
            widthdrawal: "Widthdraw",
          },
        },
      },

      popup: {
        title: "Withdrawal Request",
        titleBuy: "Replenishment request",
        text: "Available for withdrawal:",
        amount: {
          label: "Withdrawal amount",
        },
        "wallet-number": {
          label: "Wallet number",
        },
        request: "Leave a request",
      },
    },
    de: {
      title: "Mein Portfolio",
      card: {
        title: "Saldo",
      },
      "index-title": "Meine Indexe",
      "index-not": "Sie haben noch keine Käufe getätigt",
      "index-not-btn": "Index auswählen",
      "index-table": {
        header: [
          "Index",
          "Abschlussdatum",
          "Saldo",
          "Realisierter Gewinn",
          "Aktion",
        ],
        body: {
          date: "Tage",
          action: {
            buy: "Kaufen",
            widthdrawal: "Auszahlung",
          },
        },
      },

      popup: {
        title: "Antrag auf Auszahlung",
        titleBuy: "ntrag auf Aufladung",
        text: "Verfügbar zur Auszahlung:",
        amount: {
          label: "Anzahl",
        },
        "wallet-number": {
          label: "Kontonummer",
        },
        request: "Einen Antrag stellen",
      },
    },
    "zh-CN": {
      title: "我的投资组合",
      card: {
        title: "平衡",
      },
      "index-title": "我的索引",
      "index-not": "您还没有订单",
      "index-not-btn": "选择索引",
      "index-table": {
        header: ["指数", "截止日期", "平衡", "实现利润", "行动"],
        body: {
          date: "天",
          action: {
            buy: "买",
            widthdrawal: "宽度绘制",
          },
        },
      },

      popup: {
        title: "提款请求",
        titleBuy: "补货请求",
        text: "可提款:",
        amount: {
          label: "提款金额",
        },
        "wallet-number": {
          label: "钱包号码",
        },
        request: "留下请求",
      },
    },
  },
};
const { t } = useI18n(i18n);
const $q = useQuasar();
const store = useStore();
const { popup, isPopup, popupContent, buy, widthdrawal, popupAction } =
  useBuyWidthdrawalPopup();
const { charts, getChart } = useChart();
const getChartData = (id) => {
  return getChart(id)?.chart.map((item) => [
    +item.timestamp * 1000,
    +item.value,
  ]);
};
const activeIndex = ref(2);
const amountPopup = computed(() => {
  return indexList.value.find(
    (item) => item.inder.id === popupContent.value.id
  );
});
const choiseIndex = (index) => {
  if (activeIndex.value === index) activeIndex.value = null;
  else {
    activeIndex.value = index;
  }
};

const indexList = computed(() => store.getters["profile/getPorfolioList"]);
const balance = computed(() => store.getters["profile/getBalance"]);
const newTime = async (active, time) => {
  activeChart.value = active;
  const chartItem = await store.dispatch("landing/getChartDerivativeNewTime", {
    id: 1,
    time,
  });
  charts.value[0] = chartItem;
};
onMounted(async () => {
  try {
    $q.loading.show();
    Promise.all([
      await store.dispatch("profile/getBalanceProfile"),
      await store.dispatch("profile/listPortfolioData"),
    ]);
  } catch (e) {
    throw e;
  } finally {
    $q.loading.hide();
  }
});

const activeChart = ref(4);
</script>

<style lang="scss" scoped>
//$
.index-grid {
  display: grid;
  grid-template-columns: 320px 140px 130px 146px 140px;
}

.index-content {
  &__dropicon {
    transition: all 0.6s ease;
    &.active {
      transform: rotate(180deg);
    }
  }
}

.index-dropdown {
  width: 100%;
  overflow-x: inherit;
  overflow-y: unset;
}
.index-dropdown {
  overflow-y: clip;
  max-height: 0vh;
  transition: all 0.5s ease-in;
}
.index-dropdown.active {
  max-height: 100vh;
}
.card-bg {
  background-image: url(~assets/icons/card-lines.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0%;
  width: 100%;
  @include screen-xl {
    width: 420px;
  }
}

.index-list {
  overflow-x: auto;
  min-height: 240px;
}

.btns {
  @apply tw-border tw-border-green tw-overflow-hidden;
  height: 50px;
  border-radius: 10px;
  width: fit-content;
  background: rgba(255, 255, 255, 0.08);
  &_sm {
    height: 41px;
  }
  & .active {
    @apply tw-bg-green tw-rounded-lg2;
  }
}

.field-search {
  position: relative;
  width: 169px;
  & input {
    border: 1.26px solid #575656;
    border-radius: 10px;
    width: 100%;
    height: 50px;
    background: rgba(255, 255, 255, 0.08);
    outline: none;
    padding: 0 36px;
    &::placeholder {
      color: #575656;
    }
  }
  & svg {
    position: absolute;
    top: 50%;
    right: 36px;
    transform: translateY(-50%);
  }
}
.total-card {
  position: relative;
  padding: 35px 38px;
  background: rgba(255, 255, 255, 0.08);
  border: 1.04002px solid #575656;
  box-shadow: 0px 155.373px 62.149px rgba(1, 3, 24, 0.01),
    0px 87.2091px 52.125px rgba(1, 3, 24, 0.05),
    0px 39.0937px 39.0937px rgba(1, 3, 24, 0.09),
    0px 10.024px 21.0505px rgba(1, 3, 24, 0.1), 0px 0px 0px rgba(1, 3, 24, 0.1);
  border-radius: 7.80016px;
  & .filter {
    position: absolute;
    right: 16px;
    top: 15px;
  }
}

.table {
  &-head {
    display: grid;
    grid-template-columns: 1fr 0.4fr 0.4fr 0.4fr 0.2fr;
    padding: 0 27px 0 16px;
    gap: 10px;
    .icon {
      @apply tw-transition-transform tw-duration-300 tw-ease-out;
    }
  }
  &-body {
    display: grid;
    gap: 15px;
    .item {
      padding: 14px 27px 14px 16px;
      border: 1.04002px solid #575656;
      filter: drop-shadow(0px 155.373px 62.149px rgba(1, 3, 24, 0.01))
        drop-shadow(0px 87.2091px 52.125px rgba(1, 3, 24, 0.05))
        drop-shadow(0px 39.0937px 39.0937px rgba(1, 3, 24, 0.09))
        drop-shadow(0px 10.024px 21.0505px rgba(1, 3, 24, 0.1))
        drop-shadow(0px 0px 0px rgba(1, 3, 24, 0.1));
      border-radius: 7.80016px;
      &__head {
        @apply tw-text-xxs;
        display: grid;
        grid-template-columns: 1fr 0.4fr 0.4fr 0.4fr 0.2fr;
        gap: 10px;

      }
      &__body {
        @apply tw-text-xxs;
        padding-left: 52px;
        color: #A5A5A5;
        margin-top: 20px;
      }
      &.active,
      &:hover {
        background: rgba(255, 255, 255, 0.08);
      }
    }
  }
}

.chart-card,
.swap-card {
  border: 1.04002px solid #575656;
  border-radius: 7.80016px;
  padding: 24px 26px;
}

.field-select {
  position: relative;
  width: 100%;
  & input {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.08);
    outline: none;
    padding: 0 16px;
    &::placeholder {
      color: #575656;
    }
  }
  & .select {
    height: 100%;
    padding: 0 18px;
    position: absolute;
    top: 0;
    right: 0px;
    border: 1.26px solid #575656;
    border-radius: 10px;
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    line-height: 12px;
    background: rgba(217, 217, 217, 0.08);
  }
}
</style>
