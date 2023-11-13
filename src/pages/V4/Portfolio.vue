<template>
  <q-page
    class="tw-flex tw-flex-col tw-relative tw-overflow-hidden tw-container tw-pb-20"
  >
    <div class="xl:tw-flex tw-justify-between tw-mb-14">
      <h2 class="tw-mb-3 xl:tw-mb-0">{{ t("title") }}</h2>
      <div class="tw-flex-wrap tw-justify-end tw-flex tw-gap-3 xl:tw-gap-14">
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

            <span> {{ t("monthly_change") }} </span>
          </div>
          <div class="tw-text-xxs tw-flex tw-justify-end tw-gap-2.5">
            <span> $0 </span>
            <span class="tw-text-green"> 0% </span>
          </div>
        </div>
      </div>
    </div>
    <div class="tw-grid xl:tw-flex tw-gap-6.25">
      <div class="xl:tw-w-1/2">
        <div class="total-card tw-mb-8">
          <!-- <button class="filter">
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
          </button> -->
          <h3 class="tw-text-sm tw-mb-4">{{ t("card.title") }}</h3>
          <div class="tw-flex tw-items-center tw-gap-0.5 tw-mb-6">
            <span class="tw-text-md2">
              ${{ (+balance.actual_balance).toFixed(2) }}</span
            >
          </div>
          <div class="tw-flex tw-gap-3">
            <span class="tw-flex tw-gap-0.5 tw-text-xxs tw-text-green">
              <MarkIcon
                :mark="balance.is_profit_positive ? 1 : -1"
                class="tw-w-2"
              />
              ${{
                (
                  (+balance.relative_profit * 100) /
                  +balance.actual_balance
                ).toFixed(2)
              }}
            </span>
            <span
              class="tw-text-xxs"
              :class="[
                balance.is_profit_positive
                  ? 'tw-text-green'
                  : 'tw-text-invalid',
              ]"
              v-if="balance.relative_profit"
              >{{ balance.is_profit_positive ? "+" : "-" }}
              {{ (+balance.relative_profit).toFixed(2) }}%
            </span>
          </div>
        </div>

        <div class="" v-if="indexList?.length > 0">
          <h4 class="tw-mb-5">{{ t("index-title") }}</h4>
        </div>
        <div class="table" v-if="indexList?.length > 0">
          <div class="table-head tw-mb-5">
            <div
              class="tw-text-xxs-1 tw-text-text-gray tw-flex tw-items-center tw-gap-4"
            >
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="tw-hidden xl:tw-block"
              >
                <path
                  d="M8.26737 3.78007L8.26742 3.78007C8.34946 3.79199 8.39494 3.81516 8.4149 3.82929C8.42116 3.83373 8.4248 3.83707 8.42678 3.83921C8.42643 3.84211 8.42546 3.84695 8.423 3.85422C8.41516 3.87739 8.39198 3.92287 8.33262 3.98073L8.33261 3.98074L6.67165 5.59973L6.48341 5.78322L6.52785 6.04231L6.92001 8.32843C6.92001 8.32844 6.92001 8.32845 6.92001 8.32845C6.93476 8.41444 6.92613 8.46047 6.92134 8.47807C6.91872 8.48773 6.91602 8.49336 6.91459 8.49603C6.91406 8.497 6.91359 8.49779 6.91321 8.49839C6.9107 8.49905 6.90571 8.49998 6.89761 8.49998H6.89757C6.87565 8.49998 6.82708 8.49339 6.74924 8.45247L6.74923 8.45247L4.69614 7.37311L4.46347 7.25079L4.2308 7.37311L2.17771 8.45251L2.17761 8.45256C2.09997 8.4934 2.05141 8.5 2.02941 8.5C2.02131 8.5 2.01632 8.49906 2.01382 8.49841C2.01344 8.4978 2.01297 8.49701 2.01244 8.49603C2.011 8.49336 2.00831 8.48773 2.00568 8.47807C2.0009 8.46049 1.99227 8.41446 2.00701 8.32847C2.00701 8.32846 2.00701 8.32845 2.00701 8.32844L2.39912 6.04228L2.44356 5.7832L2.25532 5.59971L0.594359 3.98072C0.594351 3.98072 0.594344 3.98071 0.594336 3.9807C0.53499 3.92284 0.511811 3.87736 0.50397 3.85418C0.501516 3.84693 0.500537 3.84209 0.500182 3.83918C0.502177 3.83704 0.505811 3.8337 0.51206 3.82928C0.532022 3.81514 0.577507 3.79197 0.659544 3.78006L0.659592 3.78005L2.95502 3.44647L3.21516 3.40867L3.33149 3.17294L4.35798 1.09298C4.39467 1.01864 4.43077 0.982533 4.45039 0.967914C4.45653 0.963339 4.46082 0.960915 4.46348 0.959681C4.46613 0.960915 4.47042 0.96334 4.47657 0.967917C4.49619 0.982539 4.53229 1.01865 4.56899 1.09299C4.56899 1.09299 4.56899 1.093 4.569 1.09301L5.59552 3.17297L5.71185 3.40868L5.97198 3.44649L8.26737 3.78007ZM8.42888 3.84199C8.42881 3.84197 8.42851 3.84157 8.42813 3.84077L8.42888 3.84199ZM8.42695 3.83715C8.42678 3.83625 8.4268 3.83574 8.42685 3.83572C8.4269 3.8357 8.42698 3.83615 8.42695 3.83715ZM2.01502 8.50009L2.015 8.50007L2.01502 8.50009ZM0.500111 3.83566C0.500161 3.83569 0.500177 3.83619 0.500009 3.83708C0.499976 3.83607 0.500061 3.83563 0.500111 3.83566ZM0.498807 3.84078C0.498419 3.8416 0.498109 3.842 0.498051 3.842L0.498807 3.84078ZM4.4668 0.958526C4.46679 0.958583 4.46631 0.958754 4.46541 0.95887L4.4668 0.958526ZM4.46154 0.95887C4.46064 0.958754 4.46016 0.958582 4.46015 0.958526L4.46154 0.95887Z"
                  stroke="#9596A3"
                />
              </svg>
              <div class="tw-flex tw-gap-1 tw-items-center">
                <span> {{ t("index-table.header[0]") }} </span>
              </div>
            </div>

            <div
              class="tw-text-xxs-1 tw-text-text-gray tw-flex tw-gap-1 tw-items-center"
            >
              <span> {{ t("index-table.header[1]") }} </span>
            </div>

            <div
              class="tw-text-xxs-1 tw-text-text-gray tw-flex tw-gap-1 tw-items-center"
            >
              <span> {{ t("index-table.header[2]") }} </span>
            </div>

            <div
              class="tw-text-xxs-1 tw-text-text-gray tw-flex tw-gap-1 tw-items-center"
            >
              <span> {{ t("index-table.header[3]") }} </span>
            </div>
            <div></div>
          </div>
          <div class="table-body">
            <div
              class="item"
              v-for="ind in indexList"
              :key="ind.id"
              :class="{ active: activeIndex === ind.inder.id }"
              data-index
            >
              <div class="item__head" @click="choiseIndex(ind.inder.id)">
                <div class="tw-flex tw-items-center tw-gap-2">
                  <svg
                    width="12"
                    height="11"
                    viewBox="0 0 12 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="tw-hidden xl:tw-block tw-flex-shrink-0"
                  >
                    <path
                      d="M10.2722 4.00054L10.2722 4.00053L7.42495 3.58676L7.16482 3.54895L7.04849 3.31324L5.77519 0.733244C5.77519 0.733237 5.77518 0.73323 5.77518 0.733224C5.66761 0.51531 5.56067 0.5 5.53651 0.5C5.51235 0.5 5.40541 0.515311 5.29787 0.73322L4.0246 3.31321L3.90827 3.54893L3.64814 3.58674L0.800874 4.00051L0.800826 4.00052C0.560554 4.03541 0.512821 4.13227 0.50529 4.15538L10.2722 4.00054ZM10.2722 4.00054C10.5127 4.03546 10.5603 4.13242 10.5677 4.15541L10.5677 4.15547C10.5752 4.17844 10.5937 4.28487 10.4197 4.45446L10.4197 4.45447L8.35944 6.46268L8.1712 6.64617L8.21564 6.90526L8.70208 9.74098C8.72303 9.86313 8.71223 9.93805 8.70126 9.97843C8.69028 10.0188 8.67471 10.0409 8.6656 10.0517L8.66556 10.0517C8.64743 10.0732 8.61656 10.0943 8.55582 10.0943H8.55578C8.50491 10.0943 8.42552 10.0792 8.31585 10.0216L8.08318 10.4641L8.31584 10.0215L5.76918 8.68271L5.53651 8.56038L5.30384 8.68271L2.75717 10.0216L2.75708 10.0216C2.64761 10.0792 2.56822 10.0943 2.51729 10.0943C2.45662 10.0943 2.42571 10.0733 2.40754 10.0517L2.40752 10.0517C2.39841 10.0409 2.38284 10.0188 2.37186 9.97844C2.36089 9.93807 2.35009 9.86316 2.37103 9.74103C2.37103 9.74102 2.37103 9.74101 2.37103 9.741L2.85741 6.90523L2.90184 6.64614M10.2722 4.00054L2.90184 6.64614M2.90184 6.64614L2.7136 6.46266M2.90184 6.64614L2.7136 6.46266M2.7136 6.46266L0.653338 4.45445C0.653331 4.45444 0.653323 4.45443 0.653316 4.45443M2.7136 6.46266L0.653316 4.45443M0.653316 4.45443C0.479468 4.28494 0.497788 4.17854 0.505274 4.15542L0.653316 4.45443Z"
                      stroke="#9596A3"
                    />
                  </svg>
                  <q-img
                    :src="ind.inder.image.url"
                    class="tw-w-3 tw-h-3 xl:tw-w-4 xl:tw-h-4 tw-rounded-full"
                  />

                  <span> {{ ind.inder.name }} </span>
                </div>
                <div>{{ $t("days", ind.inder["closing_in_days"]) }}</div>
                <div v-if="ind.total.actual_amount">
                  {{ (+ind.total.actual_amount).toFixed(2) }}
                  <span class="tw-text-text-gray"> {{ ind.total.coin }}</span>
                </div>
                <div class="tw-flex tw-gap-1">
                  <span
                    v-if="ind.total.absolute_profit"
                    :class="[
                      ind.total.is_profit_positive
                        ? 'tw-text-green'
                        : 'tw-text-invalid',
                    ]"
                  >
                    {{ ind.total.is_profit_positive ? "+" : "-" }}
                    {{ (+ind.total.absolute_profit).toFixed(2) }}
                  </span>
                  <span class="tw-text-text-gray"> {{ ind.total.coin }}</span>
                </div>
                <button class="icon tw-place-self-center">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.7002 8L9.5002 11.8L13.3002 8"
                      stroke="#D9D9D9"
                      stroke-linecap="round"
                    />
                    <circle
                      cx="9.5"
                      cy="9.5"
                      r="9.25"
                      stroke="#9596A3"
                      stroke-width="0.5"
                    />
                  </svg>
                </button>
              </div>
              <Transition
                appear
                mode="out-in"
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
              >
                <div class="item__body" v-if="activeIndex === ind.inder.id">
                  <div class="tw-grid tw-gap-2">
                    <div class="tw-flex tw-gap-4 tw-mb-2">
                      <button
                        :disabled="!ind.action_flags.buyable"
                        class="tw-underline tw-cursor-pointer"
                        @click="buy($event, ind.inder.id)"
                      >
                        {{ t("index-table.body.action.buy") }}
                      </button>
                      <button
                        :disabled="!ind.action_flags.withdrawable"
                        class="tw-underline tw-cursor-pointer"
                        @click="widthdrawal($event, ind.inder.id)"
                      >
                        {{ t("index-table.body.action.widthdrawal") }}
                      </button>
                    </div>
                    <div>
                      <div
                        class="index-grid tw-items-center"
                        v-for="contract in ind.orders"
                        :key="contract.id"
                      >
                        <div class="">
                          <p class="tw-text-xxs">
                            {{ contract["created_at"] }}
                          </p>
                        </div>

                        <div></div>
                        <div>
                          {{ (+contract["actual_amount"]).toFixed(2) }}
                          <span class="tw-text-text-gray">
                            {{ contract.coin }}</span
                          >
                        </div>
                        <div>
                          <span
                            :class="
                              contract.is_profit_positive
                                ? 'tw-text-green'
                                : 'tw-text-invalid'
                            "
                          >
                            {{ contract.is_profit_positive ? "+" : "-" }}
                            {{ (+contract.absolute_profit).toFixed(2) }}
                          </span>
                          <span class="tw-text-text-gray"> USDT</span>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
        <div
          v-else
          class="tw-flex tw-flex-col tw-gap-5 xl:tw-items-center xl:tw-flex-row"
        >
          <span class="tw-text-sm xl:tw-text-md2">
            {{ t("index-not") }}
          </span>
          <base-button
            @click="$router.push({ name: 'index-directive' })"
            class="button"
            >{{ t("index-not-btn") }}</base-button
          >
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
        <Swap :derivatives="derivatives" />
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
        class="card card__border-line tw-absolute tw-w-full tw-top-1/2 tw-left-0"
        ref="popup"
      >
        <template v-if="popupContent.popup_name === 'widthdrawal'">
          <div class="tw-text-lg tw-leading-snug xl:tw-text-md2 tw-mb-2.5">
            {{ t("popup.title") }}
          </div>
          <p class="tw-text-purple-dark tw-text-base xl:tw-text-sm tw-mb-5">
            {{ t("popup.text") }}
            {{
              amountPopup
                ? `${(+amountPopup.total.actual_amount).toFixed(2)} ${
                    amountPopup.total.coin
                  }`
                : "0 USDT"
            }}
          </p>
          <Form
            class="tw-flex tw-flex-col xl:tw-flex-row tw-gap-2.5"
            @submit="popupAction"
            v-slot="{ isSubmitting }"
          >
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
import MarkIcon from "src/components/V3/MarkIcon.vue";
import AreaChart from "src/components/V3/AreaChart.vue";
import BtnsAnimate from "src/components/BtnsAnimate.vue";
import useChart from "src/composition/useChart.js";
import Swap from "src/components/SwapCard.vue";
const i18n = {
  messages: {
    "ru-RU": {
      monthly_change: "Ежемесячное изменение",
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
      monthly_change: "Monthly change",
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
const derivatives = computed(() => store.getters["landing/derivatives"]);
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
  grid-template-columns: 64px 60px 70px 85px auto auto;
  gap: 5px;
  @screen xl {
    grid-template-columns: minmax(0, 98px) minmax(0, 86px) minmax(0, 114px) minmax(
        0,
        110px
      );
  }
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
    @apply tw-px-2 xl:tw-px-4;
    display: grid;
    gap: 5px;
    grid-template-columns:
      80px 60px 70px 85px auto
      auto;
    @screen xl {
      grid-template-columns:
        minmax(0, 150px) minmax(0, 85px) minmax(0, 115px) minmax(0, 110px)
        auto;
    }
  }
  &-body {
    display: grid;
    gap: 15px;
    .item {
      @apply tw-px-2 xl:tw-px-4 tw-py-3.5;
      display: grid;
      gap: 20px;
      cursor: pointer;

      border: 1.04002px solid #575656;
      filter: drop-shadow(0px 155.373px 62.149px rgba(1, 3, 24, 0.01))
        drop-shadow(0px 87.2091px 52.125px rgba(1, 3, 24, 0.05))
        drop-shadow(0px 39.0937px 39.0937px rgba(1, 3, 24, 0.09))
        drop-shadow(0px 10.024px 21.0505px rgba(1, 3, 24, 0.1))
        drop-shadow(0px 0px 0px rgba(1, 3, 24, 0.1));
      border-radius: 7.80016px;
      &__head {
        @apply tw-text-xxs-1 xl:tw-text-xxs tw-items-center;
        display: grid;
        gap: 5px;
        grid-template-columns: 80px 60px 70px 85px auto;
        @screen xl {
          grid-template-columns:
            minmax(0, 150px) minmax(0, 85px) minmax(0, 115px)
            minmax(0, 110px) auto;
        }
      }
      &__body {
        @apply tw-text-xxs-1 xl:tw-text-xxs;
        padding-left: 16px;
        @screen xl {
          padding-left: 43px;
        }
        color: #a5a5a5;
        margin-top: 0px;
      }
      .icon {
        @apply tw-transition-transform tw-duration-300 tw-ease-out;
      }
      &.active .icon {
        @apply tw-transform tw-rotate-180;
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
