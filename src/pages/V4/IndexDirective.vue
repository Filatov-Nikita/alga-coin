<template>
  <!-- slider -->
  <div
    class="tw-container tw-px-0 content-page "
  >
    <div class=" tw-hidden xl:tw-grid xl:tw-content-between tw-grid-rows-1_auto tw-pb-5">
      <div class=" tw-overflow-auto">
        
        <h4 class="tw-px-9 tw-py-8" >{{ t("titleSidebar") }}:</h4>
        <div class=" tw-grid tw-gap-6">

          <div v-for="item in typesDirevative" class=" accordion" :class="{active:typeDirevative === item }" @click="selectTypeDirevatives(item)" >
            <button class=" accordion__head">
              <span>
    
                {{item}}
              </span>
              <svg class="icon" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.10638L6 5.89362L11 1.10638" stroke="white" stroke-width="0.967046" stroke-linecap="round"/>
              </svg>
    
            </button>
            
            <div v-if="charts.length > 0" class="accordion__body">
              <div class="child">
    
                <button
                  class="item-chart"
                  v-for="derivative in derivatives"
                  :key="derivative.id"
                  :class="{ active: slide === derivative.id }"
                  @click="slide = derivative.id"
                >
                  <div class="tw-flex tw-flex-col tw-justify-between tw-h-full">
                    <h4 class="tw-text-sm tw-text-left">{{ derivative.name }}</h4>
                    <div class="tw-flex tw-gap-x-2.5">
                      <MarkIcon
                        class="tw-w-4 tw-h-4"
                        :mark="getChart(derivative.id).profitability"
                      />
                      <h4 class="tw-text-base">
                        {{ getChart(derivative.id)?.profitability }}%
                      </h4>
                    </div>
                  </div>
        
                  <div v-if="getChart(derivative.id)" class="tw-justify-self-end">
                    <div>
                      <!-- <MiniAreaChart
                        :values="getChartData(derivative.id)"
                        width="68"
                        height="34"
                      /> -->
        
                      <button
                        @click="stage2"
                        class="tw-mt-2 tw-flex tw-gap-1.5 tw-items-center"
                      >
                        <span class="tw-text-xxs-1">{{ t("buy") }}</span>
                        <img src="~assets/icons/button-arrow.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class=" tw-text-xxs tw-text-title tw-text-center">
        © 2021-2023 ALGA. <br>
        All Rights Reserved
      </div>
    </div>
    <div
      class="tw-flex tw-flex-col tw-relative tw-px-4 xl:tw-px-15 tw-border-l tw-border-gray-border"
    >
      <div
        class="item tw-flex tw-justify-center tw-text-center tw-items-center tw-mb-6 xl:tw-mb-10"
      >
        <h2>
          {{ t("indexderivatives.title") }}
        </h2>
      </div>
      
      <div class=" tw-flex xl:tw-hidden tw-justify-center xl:tw-gap-5 tw-gap-3 tw-mb-5">
          <base-button
                v-for="item in typesDirevative"
                class="button button__dense "
                :design="typeDirevative === item ? 'green': 'border'"
                @click="selectTypeDirevatives(item)"
              >
              {{ item }}
              </base-button>
      </div>
      
      <q-carousel
        swipeable
        animated
        v-model="slide"
        ref="carousel"
        class="bg-transparent"
        height="100%"
        :padding="false"
      >
        <q-carousel-slide
          v-for="derivative in derivatives"
          :key="derivative.id"
          :name="derivative.id"
        >
          <div
            class="tw-mb-7.5 xl:tw-mb-10 index-directive tw-grid xl:tw-flex tw-items-center tw-gap-8"
          >
            <div style="width: 170px" class=" tw-justify-items-center tw-mx-auto">
              <RoundDiagram
                class="inside__round"
                :values="roundDiagramData(derivative['currency_shares'])"
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
            
              
            <div class="tw-flex-grow">
              <div class="item tw-mb-5 tw-flex tw-justify-between">
                <div class="tw-flex tw-gap-10 tw-items-center">
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
                  data-index
                  @click="stage2($event, derivative.id)"
                  class="button  tw-w-full tw-hidden xl:tw-block xl:tw-w-auto"
                  >{{ t("buy") }}</base-button
                >
                
              </div>
              <base-button
                  data-index
                  @click="stage2($event, derivative.id)"
                  class="button tw-mb-4  tw-w-full xl:tw-hidden xl:tw-w-auto"
                  >{{ t("buy") }}</base-button
                >
              <p class="text">
                {{ derivative.description }}
              </p>
            </div>
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
            <div class="inside tw-mb-10">
              <div class="table">
                <div class="table-head tw-mb-5">
                  <h4 class="">
                    {{ t("inside.title") }}
                  </h4>
                  <div class=" head-items">
                    <span></span>
                    <span> cost </span>
                    <span> alteration </span>
                    
                  </div>
                </div>
                <ul class="table-body coinlist">
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
                        class=" tw-rounded-full"
                      />
                      <span>{{ currency.name }}</span>
                    </div>
                    <span>{{ currency["percent_share"] }}%</span>
                    <span>{{ currency["percent_share"] }}%</span>
                    
                  </li>
                </ul>
              </div>
            </div>
            <div class="tw-pb-10 statistics">
              <div class="statistics__top">
                <div class="tw-flex tw-justify-between">
                  <!-- <div>{{ t("statistics.title") }}</div> -->
                  <!-- <base-select
                    :options="[
                      {
                        label: t('statistics.selectProfit', { numb: '1' }),
                        id: 1,
                      },
                    ]"
                  /> -->
                </div>
              </div>

              <div class="statistics__bottom" v-if="charts.length > 0">
                <AreaChart
                  :valSeries="getChartData(derivative.id)"
                  class="tw-order-2 xl:tw-order-1"
                  :key="derivative.id"
                />
                <div
                  class="tw-flex tw-justify-between tw-items-center tw-order-1 xl:tw-block tw-mt-5 xl:tw-order-2"
                >
                  <div
                    class="tw-mb-2.5"
                    v-html="t('statistics.profitText', { numb: '1' })"
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
      
      <Transition
        appear
        mode="out-in"
        enter-active-class="animated zoomIn"
        leave-active-class="animated zoomOut"
      >
        <div
          v-show="isPopup"
          data-popup
          class="card card__border-line tw-absolute tw-w-full tw-top-1/2 tw-left-0"
          ref="popup"
        >
          <div class="tw-text-lg tw-leading-snug xl:tw-text-md2 tw-mb-2.5">
            {{ t("popup.titleBuy") }}
          </div>
          <Form
            class="tw-flex tw-flex-col xl:tw-flex-row tw-gap-2.5"
            @submit="popupAction"
            v-slot="{ isSubmitting }"
          >
            <div class="tw-flex tw-flex-col xl:tw-w-1/3">
              <label
                class="tw-text-purple-dark tw-text-xs tw-leading-4"
                for="amount"
                >{{ t("popup.amount.label") }}</label
              >
              <AppInput
                id="amount"
                type="number"
                name="amount"
                label=""
                inputClass="app-input__field--standart-valute"
              >
                <template #append>
                  <span class="tw-text-purple-light">USDT</span>
                </template>
              </AppInput>
            </div>

            <base-button
              class="xl:tw-self-end xl:tw-w-1/3"
              type="submit"
              :disabled="isSubmitting"
              >{{ t("popup.request") }}</base-button
            >
          </Form>
          <p class="tw-mt-5 tw-text-xxs">
            *{{ t("popup.text") }}
          </p>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed, watch } from "vue";
import RoundDiagram from "src/components/V3/RaoundDiagram.vue";
import AreaChart from "src/components/V3/AreaChart.vue";
import MarkIcon from "src/components/V3/MarkIcon.vue";
import MiniAreaChart from "src/components/V3/MiniAreaChart.vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import useChart from "src/composition/useChart.js";
import useChartData from "src/composition/V3/useChartData.js";
import useBuyWidthdrawalPopup from "src/composition/V3/useBuyWidthdrawalPopup";
const i18n = {
  messages: {
    "en-US": {
      buy: "Buy",
      titleSidebar: 'Derivatives',
      indexderivatives: {
        title: "Index Derivatives",
        time: "from {from} to {to}",
        items: [
          "BTC main is the base index of ALGA INDEX DERIVATIVES PLATFORM. It is an index designed to track the world's largest crypto asset. You will gain access to a crypto asset with the security and convenience of a traditional investment vehicle, while lowering the logistical barriers to entry (access to exchanges, storage, and execution costs)",
          "ETH main - ALGA INDEX DERIVATIVES PLATFORM base index. It is a capitalization-weighted index that tracks the performance of major financial crypto assets built on the Ethereum blockchain. You will gain access to a crypto asset with the security and convenience of a traditional investment vehicle, while lowering the logistical barriers to entry (access to exchanges, storage, and execution costs)",
          "BTC combo - ALGA INDEX DERIVATIVES PLATFORM base index. it is a balanced index composed of the most valuable cryptoassets, weighted by market capitalization, time-tested and monitored for certain risks with monthly rebalancing. The index has a public methodology for its formation, which includes the rules of acceptability, identifying critical risks (storage, liquidity, execution costs, and others)",
          "ETH combo - ALGA INDEX DERIVATIVES PLATFORM base index. It is a balanced index composed of the most valuable cryptoassets, weighted by market capitalization, time-tested and monitored for certain risks with monthly rebalancing. The index has a public methodology for its formation, which includes the rules of acceptability, identifying critical risks (storage, liquidity, execution costs, and others)",
          "Stable index is a stable base index ALGA INDEX DERIVATIVES PLATFORM, consisting of 6 leading stablecoins in the cryptocurrency market, weighted by capitalization. The index is not subject to high volatility in the market, allowing you to keep your cryptocurrency savings for a certain period. Stable index is a smart and secure way to get diversified access to crypto assets with minimal fees",
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
      popup: {
        title: "Withdrawal Request",
        titleBuy: "Deposite request",
        text: "Available for withdrawal:",
        amount: {
          label: "Deposite sum, USDT",
        },
        "wallet-number": {
          label: "Wallet number",
        },
        request: "Leave a request",
        text:`After clicking the button, pay, you will be redirected to the gateway.
             If nothing opens, please check your pop-up blocker.
             browser windows`
      },
    },
    "ru-RU": {
      buy: "Купить",
      titleSidebar: 'Диревативы',
      indexderivatives: {
        title: "Индексные деривативы",
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
      popup: {
        title: "Запрос на вывод средств",
        titleBuy: "Запрос на пополнение",
        text: "Доступно для вывода:",
        amount: {
          label: "Введите сумму, в USDT",
        },
        "wallet-number": {
          label: "Номер счета",
        },
        request: "К оплате",
        text: `После нажатия кнопки, оплатить, вы будете перенаправлены на шлюз.
            Если ничего не открылось, просим проверить блокировку всплывающих
            окон браузера`
      },
    },
    de: {
      buy: "Kaufen",
      indexderivatives: {
        title: "Index Derivates",
        time: "von {from} bis {to}",
        items: [
          "BTC main ist der Basisindex von ALGA INDEX DERIVATIVES PLATFORM. Es handelt sich um einen Index, der das weltweit größte Krypto-Asset abbildet. Sie erhalten Zugang zu Krypto-Vermögenswerten mit der Sicherheit und dem Komfort eines traditionellen Anlageinstruments und reduzieren gleichzeitig die logistischen Zugangsbarrieren (Zugang zu Börsen, Lagerungs- und Ausführungskosten)",
          "ETH main ist der Basisindex der ALGA INDEX DERIVATIVES PLATFORM. Es handelt sich um einen kapitalisierungsgewichteten Index, der die Wertentwicklung der wichtigsten finanziellen Krypto-Assets abbildet, die auf der Ethereum-Blockchain basieren. Sie erhalten Zugang zu Krypto-Assets mit der Sicherheit und Bequemlichkeit eines traditionellen Anlageinstruments und reduzieren gleichzeitig die logistischen Zugangsbarrieren (Zugang zu Börsen, Lagerungs- und Ausführungskosten)",
          "Die BTC-Kombination ist der zugrunde liegende Index ALGA INDEX DERIVATIVES PLATFORM. Es handelt sich um einen ausgewogenen Index, der sich aus den wertvollsten Krypto-Assets zusammensetzt, die nach ihrer Marktkapitalisierung gewichtet sind, sich bewährt haben und auf bestimmte Risiken hin überwacht und monatlich neu gewichtet werden. Der Index verfügt über eine öffentlich zugängliche Methodik für seine Bildung, die Zulassungsregeln, die Identifizierung kritischer Risiken (Lagerung, Liquidität, Ausführungskosten und andere) umfasst",
          "ETH combo ist der zugrunde liegende Index ALGA INDEX DERIVATIVES PLATFORM. Es handelt sich um einen ausgewogenen Index, der sich aus den wertvollsten Krypto-Assets zusammensetzt, die nach ihrer Marktkapitalisierung gewichtet sind, sich bewährt haben und auf bestimmte Risiken hin überwacht und monatlich neu gewichtet werden. Der Index verfügt über eine öffentlich zugängliche Methodik für seine Bildung, die Zulassungsregeln, die Identifizierung kritischer Risiken (Lagerung, Liquidität, Ausführungskosten und andere) umfasst",
          "Stable Index ist ein stabiler Benchmark-Index ALGA INDEX DERIVATIVES PLATFORM, der sich aus den 6 wichtigsten Kryptowährungs-Steiblocoins zusammensetzt, gewichtet nach Kapitalisierung. Der Index unterliegt keiner hohen Marktvolatilität, so dass Sie Ihre Ersparnisse in Kryptowährungen für einen bestimmten Zeitraum behalten können. Ein stabiler Index ist ein intelligenter und sicherer Weg, um einen diversifizierten Zugang zu Krypto-Assets mit minimalen Gebühren zu erhalten",
        ],
      },
      inside: {
        title: "Was gibt es drin",
      },
      statistics: {
        title: "Statistiken",
        profitText: "Rendite <br> für {numb} Monate",
        selectProfit: "Die letzten {numb} Monate",
      },
      popup: {
        title: "Antrag auf Auszahlung",
        titleBuy: "Antrag auf Aufladung",
        text: "Verfügbar zur Auszahlung:",
        amount: {
          label: "Geben Sie den Betrag in USDT ein",
        },
        "wallet-number": {
          label: "Kontonummer",
        },
        request: "Zu zahlen",
      },
    },
    "zh-CN": {
      buy: "买",
      indexderivatives: {
        title: "指数衍生品",
        time: "从 {from} 至 {to}",
        items: [
          "BTC main 是 ALGA INDEX DERIVATIVES PLATFORM 的基础指数。 它是一个旨在追踪世界上最大的加密资产的指数。 您将获得具有传统投资工具的安全性和便利性的加密资产访问权限，同时降低进入的后勤障碍（访问交换、存储和执行成本",
          "ETH main - ALGA INDEX DERIVATIVES PLATFORM 基础指数。 它是一个资本加权指数，用于跟踪建立在以太坊区块链上的主要金融加密资产的表现。 您将获得具有传统投资工具的安全性和便利性的加密资产访问权限，同时降低进入的后勤障碍（访问交换、存储和执行成本",
          "BTC 组合 - ALGA INDEX DERIVATIVES PLATFORM 基础指数。 它是一个平衡指数，由最有价值的加密资产组成，按市值加权，经过时间测试并通过每月重新平衡来监测某些风险。 该指数有一套公开的形成方法，包括可接受性规则、识别关键风险（存储、流动性、执行成本等",
          "ETH 组合 - ALGA INDEX DERIVATIVES PLATFORM 基础指数。 它是一个平衡指数，由最有价值的加密资产组成，按市值加权，经过时间测试并通过每月重新平衡来监控某些风险。 该指数有一套公开的形成方法，包括可接受性规则、识别关键风险（存储、流动性、执行成本等",
          "稳定指数是一个稳定的基础指数 ALGA INDEX DERIVATIVES PLATFORM，由加密货币市场中的 6 个领先的稳定币组成，按市值加权。 该指数不受市场高波动性的影响，让您可以在一定时期内保留您的加密货币储蓄。 稳定的索引是一种智能且安全的方式，以最低的费用获得对加密资产的多样化访问",
        ],
      },
      inside: {
        title: "里面有什么",
      },
      statistics: {
        title: "统计数据",
        profitText: "盈利能力 <br> 为了 {numb} 月",
        selectProfit: "最后的 {numb} 月",
      },
      popup: {
        title: "提款请求",
        titleBuy: "存款申请",
        text: "可提款:",
        amount: {
          label: "存款金额, USDT",
        },
        "wallet-number": {
          label: "钱包号码",
        },
        request: "留下请求",
      },
    },
  },
};
export default {
  components: {
    RoundDiagram,
    AreaChart,
    MarkIcon,
    MiniAreaChart,
  },
  setup() {
    const slide= ref(1)
    const store = useStore();
    const { charts, getChart } = useChart();
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
    const { popup, isPopup, popupContent, buy, popupAction } =
      useBuyWidthdrawalPopup();
    const { t } = useI18n(i18n);

    const derivatives = computed(() => {
      const arr = store.getters["landing/derivatives"]
      if(typeDirevative.value === 'ALGA') {
        const newArr = arr.slice(0,5)
        // slide.value = newArr[0].id;
        return newArr
      }

      if(typeDirevative.value === 'Market'){
        const newArr = arr.slice(5)
        // slide.value = newArr[0].id;
        return newArr
      }
    });
    watch(()=>derivatives.value,(val)=> setTimeout(()=>slide.value = val[0].id,0) )
    const roundDiagramData = (currencys) => {
      return currencys.map((item) => +item["percent_share"]);
    };
    const roundDiagramColors = (currencys) => {
      return currencys.map((item) => item["bg_color"]);
    };

    const getChartData = (id) => {
      return getChart(id)?.chart.map((item) => [
        +item.timestamp * 1000,
        +item.value,
      ]);
    };
    const targetList = ref('')
    const openList = (target)=>{

      if( targetList.value === target) return targetList.value = ''
      targetList.value = target
      
    }
    const selectTypeDirevatives = (type)=>{
      typeDirevative.value= type
    }
    
    const typeDirevative = ref('ALGA')
    const typesDirevative = ['ALGA', 'Market']
    return {
      
      t,
      slide,
      derivatives,
      roundDiagramData,
      roundDiagramColors,
      getChartData,
      getChart,
      popup,
      popupAction,
      buy,
      isPopup,
      charts,

      openList,
      targetList,
      typeDirevative,
      typesDirevative,
      selectTypeDirevatives
    };
  },
  methods: {
    stage2(e, id) {
      ym(90160255, "reachGoal", "stage 2");
      this.buy(e, id);
      //   this.$router.push({ name: 'index-directive' })
    },
  },
};
</script>

<style lang="scss" scoped>
//$
.accordion {
  &__head {
    @apply tw-flex tw-items-center tw-justify-between  tw-px-9 tw-py-3.5 tw-w-full;
    background: #262D34;
  }
  &__body {
    @apply tw-grid  tw-overflow-hidden tw-my-0;
    @apply tw-transition-all tw-duration-300 tw-ease-out;
    grid-template-rows: 0fr;
    .child {
      @apply tw-min-h-0;
    }
  }
  .icon {
    @apply  tw-transition-transform tw-duration-300 tw-ease-out;
  }
  &.active &__head {
    background: #0A8F2D;
  }
  &.active .icon {
    @apply tw-transform tw-rotate-180;
  }
  &.active &__body {
    grid-template-rows: 1fr;
    margin-top: 20px;
    margin-bottom: 40px;
  }
}
.content-page {
  @screen xl {

    display: grid;
    grid-template-columns: 257px 1fr;
  }
  
  .item-chart {
    @apply tw-grid tw-grid-cols-2  tw-px-9 tw-py-3.5 tw-w-full;
    &:hover,
    &.active {
      background: #171d26;
      box-shadow: 0px 99.7167px 39.8867px rgba(1, 3, 24, 0.01),
        0px 55.97px 33.4533px rgba(1, 3, 24, 0.05),
        0px 25.09px 25.09px rgba(1, 3, 24, 0.09),
        0px 6.43333px 13.51px rgba(1, 3, 24, 0.1),
        0px 0px 0px rgba(1, 3, 24, 0.1);
    }
  }
}
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
  width: 100%;
  & .table {
    width: 100%;
    &-head {
      padding: 10px 18px 10px 18px;
      @screen xl {
        padding: 10px 77px 10px 18px;
        display: flex;
        gap: 0;
        align-items:center;
      }
      
      .head-items {
        display: grid;
        grid-template-columns: 1fr 0.5fr 0.5fr ;
        margin-top: 10px;
        @screen xl {
          margin-top: 0px;
          flex-grow:1;
          grid-template-columns: 0.5fr 0.5fr 0.5fr ;
        }
      }
      & *:first-child {
        margin-left: -18px;
      }
      & *:not(:first-child) {
        justify-self: center;
      }
    }
    &-body {
      @apply tw-border tw-border-gray-border;

      .item {
        padding: 10px 18px 10px 18px;
        @screen xl {

          padding: 10px 77px 10px 18px;
        }
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 0.5fr 0.5fr ;
        &:not(:last-child) {
          @apply tw-border-b tw-border-gray-border;
        }
        & *:not(:first-child) {
          justify-self: center;
        }
      }
    }
  }
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
