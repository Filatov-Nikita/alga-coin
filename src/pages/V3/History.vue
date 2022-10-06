<template>
  <div class="tw-overflow-hidden">
    <h2 class="tw-mb-10">{{ t("title") }}</h2>

    <div class="switch tw-mb-10">
      <span class="option active" @click="choiceList(1)">
        {{ t("nav.buy") }}

        <div class="option__line">
          <!-- <div class="option__line-active"></div> -->
          <transition
            appear
            mode="out-in"
            :enter-active-class="fadeIn"
            :leave-active-class="fadeOut"
          >
            <div class="option__line-active" v-if="activeNav == 1"></div>
          </transition>
        </div>
      </span>
      <span class="option" @click="choiceList(2)">
        {{ t("nav.widthdrawal") }}
        <div class="option__line">
          <transition
            appear
            mode="out-in"
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
          >
            <div class="option__line-active" v-if="activeNav == 2"></div>
          </transition>
        </div>
      </span>
    </div>
    <transition
      appear
      mode="out-in"
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut"
    >
      <div
        v-if="activeContent == 1"
        class="history-list tw-flex tw-flex-col tw-gap-2.5"
      >
        <div
          class="history-item card card__border-line tw-flex tw-gap-15 tw-items-center"
        >
          <div>
            <div>{{ t("table.completed") }}</div>
            <p>2022-11-11 19:26:24</p>
          </div>
          <div>
            <div>USDT</div>
          </div>
          <div>
            <div>1 256.065</div>
          </div>
          <div>
            <div>1 256.065</div>
          </div>
          <div>
            <div>1 256.065</div>
          </div>
        </div>
      </div>
      <div
        v-else-if="activeContent == 2"
        class="history-list tw-flex tw-flex-col tw-gap-2.5"
      >
        <div
          class="history-item card card__border-line tw-flex tw-gap-15 tw-items-center"
        >
          <div>
            <div>{{ t("table.completed") }}</div>
            <p>2022-11-11 19:26:24</p>
          </div>
          <div>
            <div>USDT</div>
          </div>
          <div>
            <div>1 256.065</div>
          </div>
          <div>
            <div>1 256.065</div>
          </div>
          <div>
            <div>1 256.065</div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const i18n = {
  messages: {
    "ru-RU": {
      title: "История",
      nav: {
        buy: "Купить",
        widthdrawal: "Вывод",
      },
      table: {
        completed: "Завершенный",
      },
    },
    "en-US": {
      title: "History",
      nav: {
        buy: "Buy",
        widthdrawal: "Widthdrawal",
      },
      table: {
        completed: "Completed",
      },
    },
  },
};
const { t } = useI18n(i18n);
const activeNav = ref(1);
const activeContent = ref(1);
const fadeIn = ref("animated fadeInLeft");
const fadeOut = ref("animated fadeOutRight");
const choiceList = (index) => {
  activeContent.value = index;
  if (index < activeNav.value) {
    fadeIn.value = "animated fadeInRight";
    fadeOut.value = "animated fadeOutLeft ";
  } else {
    fadeIn.value = "animated fadeInLeft";
    fadeOut.value = "animated fadeOutRight";
  }
  activeNav.value = index;
};
</script>

<style lang="scss" scoped>
.switch {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  position: relative;
  @include screen-xl {
    grid-template-columns: repeat(2, 100px);
  }
  .option {
    padding-bottom: 20px;
    position: relative;
    cursor: pointer;
    $option: &;
    &__line {
      margin-top: 20px;
      width: 100%;
      height: 1px;
      background: #000320;
      &-active {
        width: 100%;
        height: 1px;
        background: #4ad66d;
      }
    }
    // &::after,
    // &::before {
    //   content: "";
    //   position: absolute;
    //   width: 100%;
    //   height: 4px;
    //   left: 0;
    //   bottom: 0;
    // }
    // &::before {
    //   background: #000320;
    // }
    // &::after {
    //   transition: all 1s ease-in;
    //   background: #4ad66d;
    //   opacity: 0;
    // }

    // &:hover::after {
    //   opacity: 1;
    //   transform-origin: left;
    //   background: #4ad66d;
    // }
  }
}

.card {
  padding: 10px 30px;
  border-radius: 8px;
}

.history-list {
  overflow-x: auto;
}

.history-item {
  min-width: max-content;
  width: 100%;
}
</style>
