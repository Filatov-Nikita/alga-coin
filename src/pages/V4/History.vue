<template>
  <div class="tw-overflow-hidden tw-container">
    <!-- <Pagination/> -->
    <h2 class="tw-mb-10">{{ t("title") }}</h2>
    <div class="switch tw-mb-10">
      <span
        class="option active"
        @click="choiceList(1, buyList?.length > 0 ? true : false)"
      >
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
      <span
        class="option"
        @click="choiceList(2, widthdrawalList?.length > 0 ? true : false)"
      >
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
      <div v-if="activeContent == 1" class="history-list tw-grid tw-gap-4">
        <div
          class="tw-gap-7"
          style="
            display: grid;
            grid-template-columns: 189px 110px 100px 125px 1fr;
            padding: 10px 30px;
          "
        >
          <p>{{ t("table.head.buy[0]") }}</p>
          <p>{{ t("table.head.buy[1]") }}</p>
          <p>{{ t("table.head.buy[2]") }}</p>
          <p>{{ t("table.head.buy[3]") }}</p>
          <p>{{ t("table.head.buy[4]") }}</p>
        </div>
        <div class="tw-flex tw-flex-col tw-gap-2.5" ref="content">
          <div
            class="history-item card card__border-line tw-items-center tw-gap-7"
            v-for="list in buyList"
            :key="list.id"
          >
            <div>
              <div>{{ list.status.title }}</div>
              <div>{{ list.created_at }}</div>
            </div>
            <div>
              <div>{{ list["index_derivative"].name }}</div>
            </div>
            <div>
              <div v-if="list.invoice">{{ list.invoice.coin.value }}</div>
            </div>
            <!-- <div v-if="list.invoice">
            <div>{{ (+list.invoice.declared_amount).toFixed(2) }}</div>
          </div> -->
            <div>
              <div>
                {{
                  list.status.is_deposited
                    ? (+list.deposited_amount).toFixed(2)
                    : (+list.declared_amount).toFixed(2)
                }}
              </div>
            </div>
            <div>
              <div v-if="list.invoice">{{ list.invoice.status.title }}</div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-else-if="activeContent == 2 && widthdrawalList?.length > 0"
        class="history-list tw-grid tw-gap-4"
      >
        <div
          class="tw-gap-7"
          style="
            display: grid;
            grid-template-columns: 189px 110px 100px 125px;
            padding: 10px 30px;
          "
        >
          <p>{{ t("table.head.widthdrawal[0]") }}</p>
          <p>{{ t("table.head.widthdrawal[1]") }}</p>
          <p>{{ t("table.head.widthdrawal[2]") }}</p>
          <p>{{ t("table.head.widthdrawal[3]") }}</p>
        </div>
        <div class="tw-flex tw-flex-col tw-gap-2.5" ref="content">
          <div
            class="history-item history-item__widthdrawal card card__border-line tw-flex tw-gap-7 tw-items-center"
            v-for="list in widthdrawalList"
            :key="list.id"
          >
            <div>
              <div>{{ list.status.title }}</div>
            </div>
            <div>
              <div>{{ list.coin }}</div>
            </div>
            <div v-if="list.amount">
              <div>{{ (+list.amount).toFixed(2) }}</div>
            </div>

            <div>
              <div>{{ list.address }}</div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import Pagination from "src/components/V3/Pagination.vue";
import { useQuasar } from "quasar";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
const i18n = {
  messages: {
    "ru-RU": {
      title: "История",
      nav: {
        buy: "Заказы на покупку",
        widthdrawal: "Заявки на вывод",
      },
      table: {
        completed: "Завершенный",
        head: {
          buy: ["Статус заказа", "Индекс", "Валюта", "Сумма", "Статус платежа"],
          widthdrawal: ["Статус заказа", "Валюта", "Сумма", "Адрес"],
        },
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
        head: {
          buy: [
            "Status order",
            "Index",
            "Valute",
            "Balance",
            "Status",
            "Payment status",
          ],
          widthdrawal: ["Status order", "Valute", "Balance", "Address"],
        },
      },
    },
    de: {
      title: "Verlauf",
      nav: {
        buy: "Bestellungen",
        widthdrawal: "Anträge auf Rückzug",
      },
      table: {
        completed: "Fertig",
        head: {
          buy: [
            "Status der Bestellung",
            "Index",
            "Währung",
            "Betrag",
            "Zahlungsstatus",
          ],
          widthdrawal: [
            "Status der Bestellung",
            "Währung",
            "Betrag",
            "Adresse",
          ],
        },
      },
    },
    "zh-CN": {
      title: "历史",
      nav: {
        buy: "买",
        widthdrawal: "退出",
      },
      table: {
        completed: "完全的",
        head: {
          buy: ["状态顺序", "指数", "价值", "平衡", "地位", "支付状态"],
          widthdrawal: ["状态顺序", "价值", "平衡", "地址"],
        },
      },
    },
  },
};
const { t } = useI18n(i18n);
const $q = useQuasar();
const store = useStore();

const content = ref();
const pos = ref({
  top: 0,
  left: 0,
  x: 0,
  y: 0,
});

const mouseDownHandler = function (e) {
  content.value.style.cursor = "grabbing";
  content.value.style.userSelect = "none";
  pos.value = {
    // The current scroll
    left: content.value.scrollLeft,
    top: content.value.scrollTop,
    // Get the current mouse position
    x: e.clientX,
    y: e.clientY,
  };

  document.addEventListener("mousemove", mouseMoveHandler);
  document.addEventListener("mouseup", mouseUpHandler);
};

const mouseMoveHandler = function (e) {
  // How far the mouse has been moved
  const dx = e.clientX - pos.value.x;
  const dy = e.clientY - pos.value.y;

  // Scroll the element
  content.value.scrollTop = pos.value.top - dy;
  content.value.scrollLeft = pos.value.left - dx;
};

const mouseUpHandler = function () {
  document.removeEventListener("mousemove", mouseMoveHandler);
  document.removeEventListener("mouseup", mouseUpHandler);

  content.value.style.cursor = "grab";
  content.value.style.removeProperty("user-select");
};

onMounted(async () => {
  content.value.addEventListener("mousedown", mouseDownHandler);
  try {
    $q.loading.show();
    await Promise.all([
      store.dispatch("profile/listHistoryBuy"),
      store.dispatch("profile/listHistoryWidthdrawal"),
    ]);
  } catch (e) {
    throw e;
  } finally {
    $q.loading.hide();
  }
});
const buyList = computed(() => store.getters["profile/getBuyList"]);
const widthdrawalList = computed(
  () => store.getters["profile/getWidthdrawalList"]
);
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
  cursor: grab;
}

.history-item {
  min-width: max-content;
  width: 100%;
  display: grid;
  grid-template-columns: 189px 110px 100px 125px 140px;
}

.history-item__widthdrawal {
  grid-template-columns: 189px 110px 100px 1fr;
}
</style>
