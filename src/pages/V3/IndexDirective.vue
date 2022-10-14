<template>
  <!-- slider -->
  <div class="tw-flex tw-flex-col">
    <div
      class="item tw-flex tw-justify-between tw-items-center tw-mb-6 xl:tw-mb-10"
    >
      <h2>
        {{ t("indexderivatives.title") }}
      </h2>
      <div class="tw-hidden xl:tw-flex xl:tw-flex-wrap xl:tw-gap-2.5">
        <div
          class="slide-button"
          v-for="derivative in derivatives"
          :key="derivative.id"
          :class="{ active: slide === derivative.id }"
          @click="slide = derivative.id"
        >
          <img :src="derivative.image.url" alt="" />
        </div>
      </div>
    </div>
    <q-carousel
      swipeable
      animated
      v-model="slide"
      ref="carousel"
      class="bg-transparent"
      height="100%"
      padding="false"
    >
      <q-carousel-slide
        v-for="derivative in derivatives"
        :key="derivative.id"
        :name="derivative.id"
      >
        <div
          class="card card__border-line tw-mb-7.5 xl:tw-mb-10 index-directive"
        >
          <div
            class="item xl:tw-flex xl:tw-justify-between xl:tw-items-center tw-mb-5"
          >
            <div class="tw-flex tw-gap-5 tw-items-center">
              <div class="tw-flex tw-gap-10 tw-items-center">
                <img :src="derivative.image.url" alt="" />
                <div class="tw-flex tw-flex-col">
                  <h4>{{ derivative.name }}</h4>
                  <p>
                    {{
                      t("indexderivatives.time", {
                        from: derivative["opening_at"],
                        to: derivative["closing_at"],
                      })
                    }}
                  </p>
                </div>
              </div>
              <base-button
                @click="stage2"
                class="button tw-w-full tw-hidden xl:tw-block xl:tw-w-auto"
                >{{ t("buy") }}</base-button
              >
            </div>
            <div class="tw-hidden xl:tw-flex xl:tw-gap-2.5">
              <button
                @click="$refs.carousel.previous()"
                class="pie pie-arrow button-arrow"
              >
                <q-icon
                  name="r_keyboard_arrow_left"
                  size="35px"
                  class="arrow-icon"
                >
                </q-icon>
              </button>
              <button
                @click="$refs.carousel.next()"
                class="pie pie-arrow button-arrow"
              >
                <q-icon
                  name="r_keyboard_arrow_right"
                  size="35px"
                  class="arrow-icon"
                >
                </q-icon>
              </button>
            </div>
          </div>
          <p class="text">
            {{ derivative.description }}
          </p>
          <base-button
            class="button tw-w-full tw-mt-5 xl:tw-hidden xl:tw-w-auto"
            >{{ t("buy") }}</base-button
          >
        </div>
        <div class="tw-mb-20 tw-flex tw-flex-wrap tw-gap-2.5 xl:tw-hidden">
          <div
            class="slide-button"
            v-for="derivative in derivatives"
            :key="derivative.id"
            :class="{ active: slide === derivative.id }"
            @click="slide = derivative.id"
          >
            <img :src="derivative.image.url" alt="" />
          </div>
        </div>

        <div>
          <h4 class="tw-mb-5">
            {{ t("inside.title") }}
          </h4>
          <div class="inside tw-mb-10">
            <div class="inside-card card card__border-line">
              <RoundDiagram
                class="inside__round"
                :values="roundDiagramData(derivative['currency_shares'])"
                textBefore="%"
                :colors="roundDiagramColors(derivative['currency_shares'])"
              >
                <template #image>
                  <image
                    x="180"
                    y="180"
                    width="140"
                    :xlink:href="derivative.image.url"
                  />
                </template>
              </RoundDiagram>
            </div>
            <div class=" ">
              <ul class="coinlist">
                <li
                  class="item tw-flex tw-justify-between tw-items-center"
                  v-for="currency in derivative['currency_shares']"
                  :key="derivative.id + '_' + currency.id"
                >
                  <div class="tw-flex tw-gap-3-1 tw-items-center">
                    <img
                      :src="currency.image.url"
                      alt="bitcoin"
                      width="30"
                      height="30"
                    />
                    <span>{{ currency.name }}</span>
                  </div>
                  <span>{{ currency["percent_share"] }}%</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="card card__border-line statistics">
            <div class="w statistics__top">
              <div class="tw-flex tw-justify-between">
                <div>{{ t("statistics.title") }}</div>
                <base-select
                  :options="[
                    {
                      label: t('statistics.selectProfit', { numb: '2' }),
                      id: 1,
                    },
                  ]"
                />
              </div>
            </div>
            <div class="statistics__bottom">
              <AreaChart
                :valSeries="getChartData(derivative.id)"
                class="tw-order-2 xl:tw-order-1"
              />
              <div
                class="tw-flex tw-justify-between tw-items-center tw-order-1 xl:tw-block tw-mt-5 xl:tw-order-2"
              >
                <div
                  class="tw-mb-2.5"
                  v-html="t('statistics.profitText', { numb: '2' })"
                ></div>
                <div class="tw-text-md2 tw-flex tw-gap-x-2.5">
                  <MarkIcon :mark="getChart(derivative.id).profitability" />
                  {{ getChart(derivative.id).profitability }}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import RoundDiagram from "src/components/V3/RaoundDiagram.vue";
import AreaChart from "src/components/V3/AreaChart.vue";
import MarkIcon from "src/components/V3/MarkIcon.vue";
import { useQuasar } from "quasar";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import useChartData from "src/composition/V3/useChartData.js";
const i18n = {
  messages: {
    "en-US": {
      buy: "Buy",
      indexderivatives: {
        title: "Index Derivatives",
        time: "from {from} to {to}",
        items: [
          "BTC main is the base index of ALGA INDEX DERIVATIVES PLATFORM. It is an index designed to track the world's largest crypto asset. You will gain access to a crypto asset with the security and convenience of a traditional investment vehicle, while lowering the logistical barriers to entry (access to exchanges, storage, and execution costs).",
          "ETH main - ALGA INDEX DERIVATIVES PLATFORM base index. It is a capitalization-weighted index that tracks the performance of major financial crypto assets built on the Ethereum blockchain. You will gain access to a crypto asset with the security and convenience of a traditional investment vehicle, while lowering the logistical barriers to entry (access to exchanges, storage, and execution costs).",
          "BTC combo - ALGA INDEX DERIVATIVES PLATFORM base index. it is a balanced index composed of the most valuable cryptoassets, weighted by market capitalization, time-tested and monitored for certain risks with monthly rebalancing. The index has a public methodology for its formation, which includes the rules of acceptability, identifying critical risks (storage, liquidity, execution costs, and others).",
          "ETH combo - ALGA INDEX DERIVATIVES PLATFORM base index. It is a balanced index composed of the most valuable cryptoassets, weighted by market capitalization, time-tested and monitored for certain risks with monthly rebalancing. The index has a public methodology for its formation, which includes the rules of acceptability, identifying critical risks (storage, liquidity, execution costs, and others).",
          "Stable index is a stable base index ALGA INDEX DERIVATIVES PLATFORM, consisting of 6 leading stablecoins in the cryptocurrency market, weighted by capitalization. The index is not subject to high volatility in the market, allowing you to keep your cryptocurrency savings for a certain period. Stable index is a smart and secure way to get diversified access to crypto assets with minimal fees.",
        ],
      },
      inside: {
        title: "What's inside",
      },
      statistics: {
        title: "Statistics",
        profitText: "Profitability <br> for {numb} months",
        selectProfit: "Last {numb} months",
      },
    },
    "ru-RU": {
      buy: "Купить",
      indexderivatives: {
        title: "Производные индексы",
        time: "с {from} по {to}",
        items: [
          "BTC main – базовый индекс ALGA INDEX DERIVATIVES PLATFORM. Это индекс, предназначенный для отслеживания крупнейшего в мире криптоактива. Вы получите доступ к криптоактиву с безопасностью и удобством традиционного инвестиционного инструмента, снижая при этом логистические барьеры для входа (доступ к биржам, хранение и затраты на исполнение).",
          "ETH main - базовый индекс ALGA INDEX DERIVATIVES PLATFORM. Это индекс, взвешенный по капитализации, который отслеживает эффективность основных финансовых криптоактивов, построенных на блокчейне Ethereum. Вы получите доступ к криптоактиву с безопасностью и удобством традиционного инвестиционного инструмента, снижая при этом логистические барьеры для входа (доступ к биржам, хранение и затраты на исполнение).",
          "BTC combo - базовый индекс ALGA INDEX DERIVATIVES PLATFORM. это сбалансированный индекс, состоящий из наиболее ценных криптоактивов, взвешенных по рыночной капитализации, проверенных временем и отслеживаемых на наличие определенных рисков с ежемесячной ребалансировкой. Индекс имеет общедоступную методологию своего формирования, которая включает в себя правила приемлемости, выявления критических рисков (хранение, ликвидность, затраты на исполнение и другие).",
          "ETH combo - базовый индекс ALGA INDEX DERIVATIVES PLATFORM. Это сбалансированный индекс, состоящий из наиболее ценных криптоактивов, взвешенных по рыночной капитализации, проверенных временем и отслеживаемых на наличие определенных рисков с ежемесячной ребалансировкой. Индекс имеет общедоступную методологию своего формирования, которая включает в себя правила приемлемости, выявления критических рисков (хранение, ликвидность, затраты на исполнение и другие).",
          "Stable index – устойчивый базовый индекс ALGA INDEX DERIVATIVES PLATFORM, состоящий из 6 ведущих стейблкоинов на криптовалютном рынке, взвешенных по капитализации. Индекс не подвержен высокой волатильности на рынке, позволящий сохранить ваши криптовалютные сбережения на определенный срок. Stable index – умный и безопасный способ получить диверсифицированный доступ к криптоактивам с минимальными комиссионными издержками.",
        ],
      },
      inside: {
        title: "Что внутри",
      },
      statistics: {
        title: "Статистика",
        profitText: "Доходность <br> за {numb} месяца",
        selectProfit: "Последние {numb} месяца",
      },
    },
  },
};
export default {
  components: {
    RoundDiagram,
    AreaChart,
    MarkIcon,
  },
  setup() {
    const store = useStore();
    const {
      btnMainData,
      ethMainData,
      btcComboData,
      ethComboData,
      stableIndexData,
      btnMainTwoMonthPrecent,
      ethMainTwoMonthPrecent,
      btcComboTwoMonthPrecent,
      ethComboTwoMonthPrecent,
      stableIndexTwoMonthPrecent,
    } = useChartData();
    const { t } = useI18n(i18n);
    const $q = useQuasar();
    const derivatives = computed(() => store.getters["landing/derivatives"]);
    const charts = ref(null);
    onMounted(async () => {
      try {
        $q.loading.show();
        await store.dispatch("landing/getDerivatives").then((resolve) => {
          const requests = resolve.map((derivative) =>
            store.dispatch("landing/getChartDerivative", derivative.id)
          );

          Promise.all(requests).then((responses) => {
            charts.value = responses;
          });
        });
      } catch (e) {
        throw e;
      } finally {
        $q.loading.hide();
      }
    });

    const roundDiagramData = (currencys) => {
      return currencys.map((item) => +item["percent_share"]);
    };
    const roundDiagramColors = (currencys) => {
      return currencys.map((item) => item["bg_color"]);
    };
    const getChart = (id) => {
      if (charts.value) {
        return charts.value.find(
          (chart) => chart["index_derivative_id"] === id
        );
      }
    };

    const getChartData = (id) => {
      return getChart(id).chart.map((item) => [
        +item.timestamp * 1000,
        +item.value,
      ]);
    };

    return {
      slide: ref(1),
      t,

      derivatives,
      roundDiagramData,
      roundDiagramColors,
      getChartData,
      getChart,
    };
  },
  methods: {
    stage2() {
      console.log("stage2");
      ym(90160255, "reachGoal", "stage 2");
      //   this.$router.push({ name: 'index-directive' })
    },
  },
};
</script>

<style lang="scss" scoped>
//$
.index-directive {
  .text {
    max-width: 539px;
  }
}
.slide-button {
  cursor: pointer;
  opacity: 0.5;
  width: 60px;
  height: 60px;
  transition: opacity 0.2s ease;
  @include screen-xl {
    width: 40px;
    height: 40px;
  }
  &.active {
    opacity: 1;
  }
}
.inside {
  display: flex;
  flex-direction: column;
  gap: 30px;
  @include screen-xl {
    flex-direction: row;
    gap: 110px;
    align-items: center;
  }
  &-card {
    width: 100%;
    height: 100%;
    @include screen-xl {
      width: 340px;
      height: 340px;
    }
  }
  &__round {
    width: 100%;
    height: 100%;
  }
}

.statistics {
  &__bottom {
    display: flex;
    flex-direction: column;
  }
  &__top,
  &__bottom {
    @include screen-xl {
      display: grid;
      gap: 55px;
      grid-template-columns: 1fr 170px;
    }
  }
}

.coinlist {
  display: flex;
  flex-direction: column;
  gap: 20px;
  .item {
    @include screen-xl {
      width: 318px;
    }
  }
}

.up-icon {
  width: 24px;
}
</style>
