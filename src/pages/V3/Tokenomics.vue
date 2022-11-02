<template>
  <section class="tw-pt-7.5">
    <div class="tw-container">
      <div class="tw-flex tw-gap-1 tw-mb-7.5">
        <span
          @click="$router.push({ name: 'home' })"
          class="tw-cursor-pointer tw-underline"
        >
          {{ t("main") }}
        </span>
        <span> → </span>
        <span class="tw-text-dark-blue-2"> {{ t("tokenomics") }} </span>
      </div>
      <div class="tw-flex tw-justify-between tw-mb-10">
        <h2>{{ t("tokenomics") }}</h2>
        <div class="tw-flex tw-flex-col" v-if="$q.screen.xl">
          <span>{{ t("total") }}</span>
          <span class="tw-text-purple-light"> 1 000 000 000 ALG </span>
        </div>
      </div>
      <div
        class="tw-flex tw-items-center tw-justify-center xl:tw-justify-between"
      >
        <ul class="tw-flex tw-flex-col tw-gap-2.5" v-if="$q.screen.xl">
          <li
            v-for="(item, index) in listLeft"
            :key="index"
            class="tokenomic tw-flex tw-items-center tw-gap-5"
          >
            <HexahedronIcon
              :fill="item.color"
              :text="item.text"
              textAfter="%"
            />
            <span>
              {{ item.name }}
            </span>
          </li>
        </ul>
        <div class="round">
          <RoundDiagram
            class="inside__round"
            @clickCircle="clickCircle"
            :values="allValue"
            :colors="allColor"
            :isText="false"
            :activeCircleIndex="activeIndex"
            :clickable="true"
          >
            <template #image>
              <image
                x="160"
                y="160"
                width="180"
                :xlink:href="require('assets/images/tokenomics-icon.png')"
              />
            </template>
          </RoundDiagram>
          <div class="round__card">
            <transition name="bounce">
              <div
                v-show="show"
                v-if="cardData"
                ref="card"
                class="card card__border-line"
              >
                <div class="tw-flex">
                  <div>
                    <h4 class="tw-mb-2.5">{{ cardData?.name }}</h4>
                    <p class="tw-text-purple-light">
                      {{ cardData?.description }}
                    </p>
                    <p v-if="cardData?.price" class="tw-text-white tw-text-xxs">
                      {{ cardData.price }}
                    </p>
                  </div>
                  <div class="round__card-right tw-relative">
                    <HexahedronIcon
                      class="round__card-icon"
                      :fill="cardData.color"
                      :text="cardData.text"
                      textAfter="%"
                    />
                    <img
                      v-if="!$q.screen.xl"
                      @click="unHovered"
                      :src="require('assets/icons/close.svg')"
                      alt="icon-close"
                      class="round__card-close"
                    />
                  </div>
                </div>
              </div>
            </transition>
          </div>
          <div v-show="show" class="round__wrapper"></div>
        </div>
        <ul class="tw-flex tw-flex-col tw-gap-2.5" v-if="$q.screen.xl">
          <li
            v-for="(item, index) in listRight"
            :key="index"
            class="tokenomic tw-flex tw-items-center tw-gap-5"
          >
            <HexahedronIcon
              :fill="item.color"
              :text="item.text"
              textAfter="%"
            />
            <span>
              {{ item.name }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import RoundDiagram from "src/components/V3/RaoundDiagram.vue";
import HexahedronIcon from "src/components/V3/HexahedronIcon.vue";
import { useI18n } from "vue-i18n";
const i18n = {
  messages: {
    "ru-RU": {
      main: "Главная",
      tokenomics: "Токеномика",
      total: "Общее количество",
      price: "Цена токена",
    },
    "en-US": {
      main: "Main",
      tokenomics: "Tokenomics",
      total: "Total supply",
      price: "Token price",
    },
  },
};
export default {
  components: {
    RoundDiagram,
    HexahedronIcon,
  },
  setup() {
    const { t } = useI18n(i18n);
    const show = ref(false);
    const card = ref(null);
    const cardData = ref(null);
    const activeIndex = ref(null);

    const clickAnotherWindow = (e) => {
      if (
        show.value &&
        !e.target.closest("circle") &&
        !e.composedPath().includes(card.value)
      ) {
        show.value = false;
        activeIndex.value = null;
      }
    };
    const hovered = (index) => {
      show.value = true;
      activeIndex.value = null;
      clickCircle(index);
      // if(!show.value)show.value = true;
      // cardData.value = allData.value.find((item,index)=>index === numb)
    };
    const unHovered = () => {
      show.value = false;
      activeIndex.value = null;
    };
    onMounted(() => {
      const tokenomics = document.querySelectorAll(".tokenomic");
      tokenomics.forEach((tokenomic, index) => {
        tokenomic.addEventListener("mouseenter", () => hovered(index));
        tokenomic.addEventListener("mouseleave", unHovered);
      });

      window.addEventListener("click", clickAnotherWindow);
    });

    onUnmounted(() => {
      const tokenomics = document.querySelectorAll(".tokenomic");
      tokenomics.forEach((tokenomic, index) => {
        tokenomic.removeEventListener("mouseenter", () => hovered(index));
        tokenomic.removeEventListener("mouseleave", unHovered);
      });
      window.removeEventListener("click", clickAnotherWindow);
    });
    const listLeft = [
      {
        text: 4,
        color: "#2CCCFF",
        name: "Seed",
        description: "10% TGE, 2 months cliff, then 22,5% per month",
        price: `${t("price")}: $0,1`,
      },
      {
        text: 8,
        color: "#F26437",
        name: "Private",
        description: "5% TGE, cliff 9 months, then 5% per month",
        price: `${t("price")}: $0,13`,
      },
      {
        text: 1,
        color: "#3362D2",
        name: "Public",
        description: "10% TGE, 2 months cliff, then 22,5% per month",
        price: `${t("price")}: $0,15`,
      },
      {
        text: 15,
        color: "#92D441",
        name: "Team",
        description: "12 months lockup, linear vesting for 15 months",
        price: null,
      },
      {
        text: 5,
        color: "#EC249B",
        name: "Advisors",
        description: "15 months lockup, linear vesting for 18 months",
        price: null,
      },
    ];
    const listRight = [
      {
        text: 25,
        color: "#E100FF",
        name: "Treasury",
        description: "6 months lockup, then 5% per month",
        price: null,
      },
      {
        text: 15,
        color: "#5077BD",
        name: "Liquidity",
        description: "10% TGE, 3 months cliff, then 5% per month",
        price: null,
      },
      {
        text: 10,
        color: "#F16B79",
        name: "Rewards",
        description: "15% 2 weeks after TGE, 1 month cliff, then 5% per month",
        price: null,
      },
      {
        text: 10,
        color: "#109CFF",
        name: "Marketing",
        description: "5% TGE, 3 month cliff, then 5% per month",
        price: null,
      },
      {
        text: 7,
        color: "#5983FF",
        name: "Ecosystem",
        description: "E5% TGE, 1 month cliff, then 5% per month",
        price: null,
      },
    ];

    const allData = computed(() => {
      return [...listLeft, ...listRight];
    });
    const getValue = (val) => {
      return allData.value.map((item) => item[val]);
    };
    const allColor = computed(() => {
      return getValue("color");
    });
    const allValue = computed(() => {
      return getValue("text");
    });
    const clickCircle = (numb) => {
      if (!show.value) show.value = true;
      cardData.value = allData.value.find((item, index) => index === numb);
      activeIndex.value = numb;
    };
    watch(show, (val, oldVal) => {
      if (val) {
      }
    });

    return {
      listRight,
      listLeft,
      allColor,
      allValue,

      activeIndex,
      show,
      card,
      cardData,
      clickCircle,

      unHovered,
      t,
    };
  },
};
</script>

<style lang="scss" scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.round {
  width: 340px;
  height: 340px;
  position: relative;
  &__card {
    $card: &;
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 2;
    &-right {
      transform: translateY(-44px);
      margin-bottom: -44px;
    }
    &-icon {
      cursor: pointer;
      width: 105px;
      height: 120px;
    }
    &-close {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(20px, -15px);
    }
  }
  &__wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 1;
  }
}
</style>
