<template>
  <q-page
    class="tw-flex tw-flex-col tw-relative tw-overflow-hidden tw-container "
  >
    <div class="xl:tw-flex tw-justify-between tw-mb-14">
      <h2 class="tw-mb-3 xl:tw-mb-0">{{ t("title") }}</h2>
      <div class=" tw-flex-wrap tw-justify-center tw-flex tw-gap-3 xl:tw-gap-14">
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
    <div class=" messages">
      <div class="messages__item" v-for="n in 14">
        <div class="messages__item-title">Успешная сделка</div>
        <div class="messages__item-text">
          Обмен ETH-LTC исполнен. Ваш баланс 0.000052 LTC. 
        </div>
        <div class=" messages__item-date">
          <span>
            01.10.2023
          </span>
          <span>
            20:37
          </span>
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
      title: "Сообщения",
      
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

      
    },
    "en-US": {
      title: "Messages",
      
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

      
    },
    de: {
      title: "Mitteilungen",
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

      
    },
    "zh-CN": {
      title: "留言",
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

const activeChart = ref(5);
</script>

<style lang="scss" scoped>
//$

.messages {
  @apply tw-grid tw-pb-5;
  gap: 15px;
  &__item {
    @apply tw-py-5 tw-px-9;
    border-radius: 7.8px;
    border: 1.04px solid #575656;
    box-shadow: 0px 0px 0px 0px rgba(1, 3, 24, 0.10), 0px 10.02404px 21.05048px 0px rgba(1, 3, 24, 0.10), 0px 39.09375px 39.09375px 0px rgba(1, 3, 24, 0.09), 0px 87.20912px 52.12499px 0px rgba(1, 3, 24, 0.05), 0px 155.37257px 62.14903px 0px rgba(1, 3, 24, 0.01), 0px 243.58411px 68.16345px 0px rgba(1, 3, 24, 0.00);
    &-title {
      @apply tw-text-base tw-mb-2.5;
      line-height: 140%;
    }
    &-text {
      @apply tw-text-xs tw-mb-3.5;
      line-height: 130%;
    }
    &-date {
      @apply tw-text-xxs tw-flex tw-gap-3;
      line-height: 140%;
      color: #9596A3;
    }
  }
}
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
  }
  &-body {
    display: grid;
    gap: 15px;
    .item {
      @apply tw-text-xxs;
      display: grid;
      grid-template-columns: 1fr 0.4fr 0.4fr 0.4fr 0.2fr;
      padding: 14px 27px 14px 16px;
      gap: 10px;
      border: 1.04002px solid #575656;
      filter: drop-shadow(0px 155.373px 62.149px rgba(1, 3, 24, 0.01))
        drop-shadow(0px 87.2091px 52.125px rgba(1, 3, 24, 0.05))
        drop-shadow(0px 39.0937px 39.0937px rgba(1, 3, 24, 0.09))
        drop-shadow(0px 10.024px 21.0505px rgba(1, 3, 24, 0.1))
        drop-shadow(0px 0px 0px rgba(1, 3, 24, 0.1));
      border-radius: 7.80016px;
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
