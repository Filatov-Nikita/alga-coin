<template>
  <q-page class="tw-flex tw-flex-col tw-relative tw-overflow-hidden">
    <div class="tw-flex tw-flex-col">
      <h2 class="tw-mb-15">{{ t("title") }}</h2>
    </div>
    <div class="card card-bg card__border-line tw-mb-10">
      <h6 class="tw-text-xxs tw-text-text-gray tw-mb-2.5">
        {{ t("card.title") }}
      </h6>
      <div class="tw-text-md1 tw-flex tw-gap-2.5 tw-mb-7.5">
        <span>12.302</span>

        <div class="tw-relative">
          <span class="tw-text-text-gray-dark-50">USDT</span>
          <span class="tw-text-base tw-text-green tw-relative tw-bottom-full"
            >+ 18%</span
          >
        </div>
      </div>
      <div>
        <p class="tw-text-white tw-text-md2 tw-leading-7">
          {{ $store.getters["profile/name"] }}
        </p>
        <!-- <p class="tw-text-white tw-text-md2 tw-leading-7">Constantinople</p> -->
      </div>
    </div>
    <div class="">
      <h4 class="tw-mb-5">{{ t("index-title") }}</h4>
      <div class="index-list">
        <div class="index-grid tw-mb-7.5">
          <p>{{ t("index-table.header[0]") }}</p>
          <p>{{ t("index-table.header[1]") }}</p>
          <p>{{ t("index-table.header[2]") }}</p>
          <p>{{ t("index-table.header[3]") }}</p>
          <p>{{ t("index-table.header[4]") }}</p>
        </div>
        <div class="tw-flex tw-flex-col tw-gap-y-7.5">
          <div v-for="ind in indexList" :key="ind.id" data-index>
            <div class="index-content index-grid tw-items-center">
              <div class="tw-flex tw-items-center tw-gap-5 tw-mr-15">
                <q-img :src="ind.image.url" width="50px" height="50px" />
                <div class="tw-flex-grow">
                  <div class="tw-flex tw-justify-between tw-items-center">
                    <span class="">{{ ind.name }}</span>
                    <div
                      @click="choiseIndex(ind.id)"
                      class="index-content__dropicon tw-cursor-pointer"
                      :class="{ active: activeIndex == ind.id }"
                    >
                      <svg
                        width="14"
                        height="9"
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L7 7L13 1"
                          stroke="#BEC3FF"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <p class="tw-text-xxs">
                    {{ ind["opening_at"] }}-{{ ind["closing_at"] }}
                  </p>
                </div>
              </div>
              <div>{{ ind["closing_in_days"] }}</div>
              <div>
                {{ ind["balance_amount"] }}
                <span class="tw-text-text-gray tw-ml-2.5"> USDT</span>
              </div>
              <div>
                <span class="tw-text-green"> + 0.215 </span>
                <span class="tw-text-text-gray tw-ml-2.5"> USDT</span>
              </div>
              <div class="tw-flex tw-justify-between">
                <span
                  class="tw-underline tw-cursor-pointer"
                  @click="buy($event, ind.id)"
                  >{{ t("index-table.body.action.buy") }}</span
                >
                <span
                  class="tw-underline tw-cursor-pointer"
                  @click="widthdrawal($event, ind.id)"
                  >{{ t("index-table.body.action.widthdrawal") }}</span
                >
              </div>
            </div>
            <div>
              <div
                class="index-dropdown tw-flex tw-flex-col tw-gap-7.5 tw-mt-7.5"
                :class="{ active: activeIndex === ind.id }"
              >
                <div
                  class="index-grid tw-items-center"
                  v-for="contract in ind.contracts"
                  :key="contract.id"
                >
                  <div class="tw-flex tw-items-center tw-mr-15">
                    <div class="tw-ml-15.5">
                      <p class="tw-text-xxs">
                        {{ contract["created_at"] }}
                      </p>
                    </div>
                  </div>
                  <div></div>
                  <div>
                    {{ contract["balance_amount"] }}
                    <span class="tw-text-text-gray tw-ml-2.5"> USDT</span>
                  </div>
                  <div>
                    <span class="tw-text-green"> + 0.215 </span>
                    <span class="tw-text-text-gray tw-ml-2.5"> USDT</span>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- popup -->
    <Transition
      appear
      mode="out-in"
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut"
    >
      <div
        v-show="isPopup"
        data-popup
        class="card card__border-line tw-absolute tw-w-full tw-top-1/2"
        ref="popup"
      >
        <template v-if="popupContent.popup_name === 'widthdrawal'">
          <div class="tw-text-lg tw-leading-snug xl:tw-text-md2 tw-mb-2.5">
            {{ t("popup.title") }}
          </div>
          <p class="tw-text-purple-dark tw-text-base xl:tw-text-sm tw-mb-5">
            {{ t("popup.text") }} 12.302 USDT
          </p>
          <Form
            class="tw-flex tw-flex-col xl:tw-flex-row tw-gap-2.5"
            @submit="popupAction"
            v-slot="{ isSubmitting }"
          >
            <!-- <div class="tw-flex tw-flex-col xl:tw-w-1/3">
              <label
                class="tw-text-purple-dark tw-text-xs tw-leading-4"
                for="amount"
                >{{ t("popup.amount.label") }}</label
              >
              <AppInput id="amount" rules="" name="amount" />
            </div> -->
            <div class="tw-flex tw-flex-col tw-flex-grow">
              <label
                class="tw-text-purple-dark tw-text-xs tw-leading-4"
                for="wallet"
                >{{ t("popup.wallet-number.label") }}</label
              >
              <AppInput id="wallet" rules="" name="address" />
            </div>
            <base-button
              class="xl:tw-self-end xl:tw-w-1/3"
              type="submit"
              :disabled="isSubmitting"
              >{{ t("popup.request") }}</base-button
            >
          </Form>
        </template>
        <template v-else-if="popupContent.popup_name === 'buy'">
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
              <AppInput id="amount" rules="" name="amount" />
            </div>

            <base-button
              class="xl:tw-self-end xl:tw-w-1/3"
              type="submit"
              :disabled="isSubmitting"
              >{{ t("popup.request") }}</base-button
            >
          </Form>
        </template>
      </div>
    </Transition>
  </q-page>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useStore } from "vuex";
import { useQuasar } from "quasar";
import { useI18n } from "vue-i18n";
import useBuyWidthdrawalPopup from "src/composition/V3/useBuyWidthdrawalPopup";
const i18n = {
  messages: {
    "ru-RU": {
      title: "Моё Портфолио",
      card: {
        title: "Баланс",
      },
      "index-title": "Мои Индексы",
      "index-table": {
        header: [
          "Индекс",
          "Дата закрытия",
          "Балансе",
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
            widthdrawal: "Widthdawal",
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
  },
};
const { t } = useI18n(i18n);
const $q = useQuasar();
const store = useStore();
const { popup, isPopup, popupContent, buy, widthdrawal, popupAction } =
  useBuyWidthdrawalPopup();

const activeIndex = ref(null);

const choiseIndex = (index) => {
  if (activeIndex.value === index) activeIndex.value = null;
  else {
    activeIndex.value = index;
  }
};

const indexList = computed(() => store.getters["profile/getPorfolioList"]);

onMounted(async () => {
  try {
    $q.loading.show();
    await store.dispatch("profile/listPortfolioData");
  } catch (e) {
    throw e;
  } finally {
    $q.loading.hide();
  }
});
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
</style>
