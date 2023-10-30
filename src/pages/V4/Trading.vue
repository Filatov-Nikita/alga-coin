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
            <span> $97.500 </span>
            <span class="tw-text-green"> +3.5% </span>
          </div>
        </div>

        <div>
          <div
            class="tw-text-xxs-1 tw-text-gray tw-flex tw-items-center tw-justify-end tw-gap-1.5 tw-mb-4"
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.62115 2.6333L8.6212 6.6732C8.6212 6.78852 8.576 6.89702 8.49406 6.97897C8.41202 7.061 8.30352 7.10611 8.18825 7.10615L7.82141 7.10611C7.70623 7.10616 7.59759 7.061 7.5156 6.97901C7.43366 6.89707 7.38591 6.78584 7.38596 6.67066L7.38337 4.31127L3.63954 8.05509C3.47074 8.22389 3.20522 8.22512 3.03638 8.05628L2.77704 7.79694C2.6082 7.6281 2.59611 7.34926 2.7649 7.18046L6.5221 3.42326L4.14279 3.4274C4.02752 3.42735 3.92097 3.38429 3.83899 3.3023C3.75709 3.2204 3.71293 3.11277 3.71293 2.99754L3.71348 2.6313C3.71348 2.51598 3.75886 2.40775 3.8409 2.32571C3.92284 2.24377 4.03152 2.19875 4.14684 2.19875L8.1867 2.19875C8.30234 2.1988 8.41134 2.24423 8.49319 2.32653C8.57573 2.4087 8.62125 2.5177 8.62115 2.6333Z"
                fill="#9596A3"
              />
            </svg>

            <span> Top monthly profit </span>
          </div>
          <div class="tw-text-xxs tw-flex tw-justify-end tw-gap-2.5">
            <span> ZEFU </span>
            <span> $97.500 </span>
            <span class="tw-text-green"> +3.5% </span>
          </div>
        </div>

        <div>
          <div
            class="tw-text-xxs-1 tw-text-gray tw-flex tw-items-center tw-justify-end tw-gap-1.5 tw-mb-4"
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.04791 7.61316L8.04796 3.57326C8.04796 3.45794 8.00276 3.34944 7.92081 3.26749C7.83878 3.18546 7.73028 3.14035 7.61501 3.1403L7.24817 3.14035C7.13299 3.1403 7.02435 3.18546 6.94236 3.26745C6.86042 3.34939 6.81267 3.46062 6.81272 3.5758L6.81013 5.93519L3.0663 2.19137C2.8975 2.02257 2.63198 2.02134 2.46314 2.19018L2.2038 2.44952C2.03496 2.61836 2.02286 2.8972 2.19166 3.066L5.94886 6.8232L3.56955 6.81906C3.45428 6.81911 3.34773 6.86217 3.26574 6.94416C3.18385 7.02606 3.13969 7.13369 3.13969 7.24892L3.14024 7.61516C3.14024 7.73048 3.18562 7.83871 3.26765 7.92075C3.3496 8.00269 3.45828 8.04771 3.5736 8.04771L7.61346 8.04771C7.7291 8.04766 7.8381 8.00223 7.91995 7.91993C8.00248 7.83776 8.048 7.72876 8.04791 7.61316Z"
                fill="#9596A3"
              />
            </svg>

            <span> Top monthly loss </span>
          </div>
          <div class="tw-text-xxs tw-flex tw-justify-end tw-gap-2.5">
            <span> BTC </span>
            <span> $97.500 </span>
            <span class="tw-text-green"> +3.5% </span>
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
