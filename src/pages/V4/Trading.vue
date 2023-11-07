<template>
  <q-page
    class="tw-flex tw-flex-col tw-relative tw-overflow-hidden tw-container "
  >
    <div class="tw-flex tw-justify-between tw-mb-14">
      <h2 class="">{{ t("title") }}</h2>
      <div class="tw-flex tw-gap-14">
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
    
    <div>
      <div class="chart-card tw-mb-8" v-if="charts.length > 0">
        <base-select2/>
        <div class=" tw-flex tw-justify-between">
          <div class="btns btns_sm tw-flex">
            

            <button
              class="tw-px-4 tw-h-full"
              :class="{ active: typeChart === 'candlestick' }"
              @click="updateChart('candlestick')"
            >
            <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="3.5" x2="3.5" y2="22" :stroke="typeChart === 'candlestick'?'#fff':'#5F6368'"/>
              <line x1="14.5" y1="1" x2="14.5" y2="23" :stroke="typeChart === 'candlestick'?'#fff':'#5F6368'"/>
              <rect x="0.5" y="3.5" width="6" height="14" rx="3" :fill="typeChart === 'candlestick'?'#4AD66D':'#1F2124'" :stroke="typeChart === 'candlestick'?'#fff':'#5F6368'"/>
              <rect x="11.5" y="8.5" width="6" height="9" rx="3" :fill="typeChart === 'candlestick'?'#4AD66D':'#1F2124'" :stroke="typeChart === 'candlestick'?'#fff':'#5F6368'"/>
              </svg>
            </button>
            <button
              class="tw-px-4 tw-h-full"
              :class="{ active: typeChart === 'line' }"
              @click="updateChart('line')"
            >
                <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11L6.5 2L10.5 11L13.5 7.5L16 13.5L22 4" :stroke="typeChart === 'line'?'#ffff':'#5F6368'"/>
                </svg>
            </button>
          </div>
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
        </div>
          <AreaChart
            :valSeries="getChartData(1)"
            class="tw-order-2 xl:tw-order-1"
          />
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
import useChart from "src/composition/useChart.js";
import AreaChart from "src/components/V3/AreaChart.vue";
const i18n = {
  messages: {
    "ru-RU": {
      title: "Трейдинг",
      

      
    },
    "en-US": {
      title: "Handel",
    },
    de: {
      title: "Mitteilungen",
      

      
    },
    "zh-CN": {
      title: "貿易",
      
      
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

const typeChart = ref('line')
const updateChart = (type)=>{
  typeChart.value = type
}
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
