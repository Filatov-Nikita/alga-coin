<template>
  <q-layout
    style="min-height: 100vh"
    class="app-page-bg app-page-bg--dark"
    view="hhh lpr lFf"
  >
    <!-- <HeaderBase /> -->

    <q-header class="tw-py-3-1">
      <div class="tw-container">
        <div class="tw-flex tw-justify-between tw-items-center">
          <img
            :src="require('assets/images/logo-v3.svg')"
            alt="logo"
            class="tw-cursor-pointer"
            @click="$router.push({ name: 'home' })"
          />
          

            <ul class="nav-links tw-hidden xl:tw-flex tw-gap-8 tw-flex-grow tw-px-24">
              <router-link
                :to="{ name: 'index-directive' }"
                custom
                v-slot="{ isExactActive, navigate }"
              >
                <li
                  class="nav-links__item item tw-flex tw-items-center tw-gap-5"
                  :class="{ active: isExactActive }"
                  @click="navigate"
                >
                  <span class="item__text"> {{ t("nav[0]") }} </span>
                </li>
              </router-link>
              <router-link
                :to="{ name: 'portfolio' }"
                custom
                v-slot="{ isExactActive, navigate }"
              >
                <li
                  class="nav-links__item item tw-flex tw-items-center tw-gap-5"
                  :class="{ active: isExactActive }"
                  @click="navigate"
                >
                  <span class="item__text"> {{ t("nav[1]") }} </span>
                </li>
              </router-link>
              <router-link
                :to="{ name: 'history' }"
                custom
                v-slot="{ isExactActive, navigate }"
              >
                <li
                  class="nav-links__item item tw-flex tw-items-center tw-gap-5"
                  :class="{ active: isExactActive }"
                  @click="navigate"
                >
                  <span class="item__text"> {{ t("nav[2]") }} </span>
                </li>
              </router-link>
  
              
              <!-- <router-link
                :to="{ name: 'history' }"
                custom
                v-slot="{ isExactActive, navigate }"
              >
                <li
                  class="nav-links__item item tw-flex tw-items-center tw-gap-5"
                  :class="{ active: isExactActive }"
                  @click="navigate"
                >
                  <span class="item__text"> {{ t("nav[2]") }} </span>
                </li>
              </router-link>
              <router-link
                :to="{ name: 'support' }"
                custom
                v-slot="{ isExactActive, navigate }"
              >
                <li
                  class="nav-links__item item tw-flex tw-items-center tw-gap-5"
                  :class="{ active: isExactActive }"
                  @click="navigate"
                >
                  <span class="item__text"> {{ t("nav[3]") }} </span>
                </li>
              </router-link> -->
            </ul>
            <div class="mob-n">
              <div
                class="tw-text-xxs tw-text-text-gray tw-mb-5 tw-mt-6 tw-uppercase"
              >
                {{ t("profile") }}
              </div>
              <div class="profile tw-flex tw-flex-col tw-justify-center">
                <div class="tw-flex tw-items-center tw-gap-5 tw-mb-5">
                  <img
                    :src="require('assets/icons/avatar-green.svg')"
                    alt="avatar"
                  />
                  <div class="tw-flex tw-flex-col">
                    <span class="profile__name tw-text-xs">{{
                      $store.getters["profile/fio"]
                    }}</span>
                    <router-link
                      :to="{ name: 'profile' }"
                      class="tw-text-purple-light tw-text-xxs tw-underline"
                    >
                      <span>{{ t("edit") }}</span>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          
          <div class="desk-n tw-flex tw-items-center tw-gap-4">
            <Locale />
            <div>
              <button class="burger" @click="dropDown = !dropDown">
                <span></span><span></span><span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <transition
          appear
          mode="out-in"
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <div class="drop" v-if="dropDown">
            <div class="tw-container">
              <div
                class="drop__wrapper tw-flex tw-justify-between tw-gap-1 tw-py-5"
              >
                <!-- <button class="button-border tw-w-1/2" @click="$router.push({ name: 'profile' })">
                          {{ t("dropdown.buttons.login") }}
                        </button> -->
                <base-button
                  @click="$router.push({ name: 'profile' })"
                  class="button tw-w-full tw-relative tw-z-10"
                >
                  {{ t("profile") }}
                </base-button>
                <base-button
                  @click.prevent="$app.logout"
                  class="button tw-w-full tw-relative tw-z-10"
                >
                  {{ t("log-out") }}
                </base-button>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </q-header>

    <q-page-container class="tw-grid content">
      <router-view class="" />
    </q-page-container>
    <q-footer v-if="!$q.screen.xl" class="tw-pt-5 tw-pb-2.5 app-page-bg">
      <div class="tw-container">
        <ul class="tw-flex tw-justify-around">
          <router-link
            :to="{ name: 'index-directive' }"
            custom
            v-slot="{ isExactActive, navigate }"
          >
            <li
              class="nav-links__item item tw-flex tw-flex-col tw-items-center"
              @click="navigate"
              :class="{ active: isExactActive }"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="item__icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.41952 3.03769C1.93539 3.16674 1.51597 3.48951 1.24315 3.94299C1.02899 4.29898 0.944434 4.88259 1.04412 5.31698C1.29171 6.396 2.38166 7.04425 3.40481 6.72094C4.21971 6.46346 4.79104 5.59861 4.71306 4.74067C4.64497 3.99175 4.15637 3.34351 3.46984 3.09134C3.21384 2.99728 2.6745 2.96973 2.41952 3.03769ZM7.66074 3.63905C6.65004 3.79417 6.23903 5.05306 6.95798 5.79157C7.04764 5.88371 7.2112 6.0025 7.32148 6.0556L7.52192 6.15211H12.8003H18.0786L18.2799 6.0552C18.5007 5.94885 18.7681 5.69032 18.8675 5.48702C19.1958 4.81553 18.8905 3.9877 18.2105 3.70564L18.0082 3.62174L12.9234 3.61675C10.1268 3.614 7.75856 3.62402 7.66074 3.63905ZM2.42944 8.14218C1.7649 8.30767 1.20532 8.88849 1.04736 9.57679C0.816557 10.5824 1.45277 11.6229 2.44556 11.8633C3.48201 12.1144 4.53026 11.3774 4.69491 10.282C4.89267 8.96632 3.68826 7.82867 2.42944 8.14218ZM7.46815 8.78551C7.12685 8.89977 6.85607 9.14912 6.69853 9.49416C6.62245 9.66084 6.607 9.74644 6.607 10.0019C6.607 10.3414 6.69142 10.5879 6.89045 10.8297C7.02132 10.9887 7.30357 11.1709 7.50432 11.2261C7.62516 11.2592 8.89657 11.2671 12.8706 11.2593L18.0786 11.249L18.2764 11.1538C18.5545 11.0198 18.7453 10.8286 18.8788 10.55C18.9812 10.3365 18.9935 10.2774 18.9935 10.0019C18.9935 9.72637 18.9812 9.66731 18.8788 9.45378C18.7453 9.17519 18.5545 8.98403 18.2764 8.85003L18.0786 8.75478L12.8354 8.74936C8.96642 8.74535 7.55974 8.75482 7.46815 8.78551ZM2.55489 13.2206C1.61193 13.3922 0.941231 14.2606 1.00647 15.2253C1.05869 15.9973 1.53163 16.6422 2.24495 16.9139C2.54465 17.0281 3.17228 17.0288 3.46984 16.9153C4.52178 16.5142 5.0102 15.3068 4.5329 14.2874C4.39443 13.9917 4.10078 13.6542 3.82627 13.4752C3.49285 13.2579 2.94873 13.149 2.55489 13.2206ZM7.53015 13.8726C7.03388 13.9938 6.63998 14.473 6.59831 15.006C6.55538 15.5556 6.87891 16.0868 7.38401 16.2958L7.59229 16.3821H12.8003H18.0082L18.2105 16.2982C18.8905 16.0161 19.1958 15.1883 18.8675 14.5168C18.7681 14.3135 18.5007 14.0549 18.2799 13.9486L18.0786 13.8517L12.8706 13.846C9.90481 13.8427 7.60563 13.8542 7.53015 13.8726Z"
                  fill="#BEC3FF"
                />
              </svg>
              <span class="item__text tw-text-xxs-1"> {{ t("nav[0]") }} </span>
            </li>
          </router-link>
          <router-link
            :to="{ name: 'portfolio' }"
            custom
            v-slot="{ isExactActive, navigate }"
          >
            <li
              class="nav-links__item item tw-flex tw-flex-col tw-items-center"
              @click="navigate"
              :class="{ active: isExactActive }"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="item__icon"
              >
                <path
                  d="M17.2 5.57895H14.5V3.78947C14.5 2.80258 13.6927 2 12.7 2H7.3C6.3073 2 5.5 2.80258 5.5 3.78947V5.57895H2.8C1.8073 5.57895 1 6.38153 1 7.36842V10.0526H19V7.36842C19 6.38153 18.1927 5.57895 17.2 5.57895ZM7.3 3.78947H12.7V5.57895H7.3V3.78947ZM11.8 12.7368H8.2V10.9474H1V17.2105C1 18.1974 1.8073 19 2.8 19H17.2C18.1927 19 19 18.1974 19 17.2105V10.9474H11.8V12.7368Z"
                  fill="#BEC3FF"
                />
              </svg>
              <span
                class="item__text tw-text-xxs-1"
                :class="{ active: isExactActive }"
              >
                {{ t("nav[1]") }}
              </span>
            </li>
          </router-link>
          <router-link
            :to="{ name: 'history' }"
            custom
            v-slot="{ isExactActive, navigate }"
          >
            <li
              class="nav-links__item item tw-flex tw-flex-col tw-items-center"
              @click="navigate"
              :class="{ active: isExactActive }"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="item__icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.18507 2.01414C7.60489 2.03709 6.33381 2.16828 5.96705 2.24307C5.00413 2.43947 4.16952 3.05499 3.65642 3.94718C3.26241 4.63224 3.15862 5.14384 3.03982 6.986C2.98673 7.80929 2.98673 12.0165 3.03982 12.8398C3.13517 14.3183 3.21279 14.8523 3.4055 15.3552C3.82682 16.4548 4.75438 17.2994 5.83584 17.5682C6.07411 17.6275 7.12429 17.7598 7.67448 17.7999C8.12307 17.8326 10.9886 17.8464 10.9886 17.8158C10.9886 17.8065 10.9022 17.6926 10.7966 17.5628C10.4253 17.1065 10.1763 16.6369 9.99562 16.0526C9.82633 15.505 9.78066 15.1473 9.7999 14.5195C9.82289 13.7704 9.92221 13.3463 10.2299 12.6833C10.789 11.4787 11.8168 10.6397 13.0912 10.3475C13.5256 10.2479 14.26 10.247 14.6883 10.3457C15.0892 10.4379 15.4392 10.573 15.8048 10.7766C15.9722 10.8697 16.1155 10.9459 16.1232 10.9459C16.147 10.9459 16.1026 7.73729 16.0712 7.18948C16.029 6.45406 15.9565 5.52076 15.9217 5.26429C15.8821 4.97235 15.7144 4.44172 15.5724 4.15921C15.0587 3.13717 14.1531 2.43305 13.0912 2.22989C12.7206 2.15895 11.8279 2.0606 11.2352 2.02538C10.7731 1.99793 8.78097 1.99057 8.18507 2.01414ZM13.0502 6.24069C13.3262 6.39896 13.4794 6.74024 13.4144 7.05168C13.3702 7.26339 13.2467 7.4442 13.0706 7.5552L12.9306 7.64338L9.64524 7.65312C7.30716 7.66007 6.31632 7.65281 6.20888 7.62795C6.02583 7.58566 5.80827 7.39471 5.72843 7.20635C5.63057 6.97536 5.67428 6.62804 5.82529 6.4369C5.89819 6.34465 6.06847 6.22416 6.17004 6.19295C6.23616 6.17267 7.44757 6.16343 9.60144 6.16684L12.9306 6.1721L13.0502 6.24069ZM10.2367 9.39411C10.5185 9.50192 10.6966 9.77267 10.6966 10.0935C10.6966 10.4382 10.4937 10.7252 10.1849 10.8171C10.1057 10.8407 9.47344 10.8517 8.19702 10.8518C6.16984 10.852 6.15792 10.8511 5.95034 10.6814C5.89521 10.6363 5.81426 10.5339 5.77042 10.4537C5.70527 10.3346 5.69087 10.2706 5.69143 10.1026C5.69257 9.74753 5.87771 9.48345 6.19907 9.37868C6.23931 9.36556 7.13959 9.35423 8.19968 9.35351C9.73834 9.35245 10.1492 9.36065 10.2367 9.39411ZM13.3346 11.3679C12.3552 11.5584 11.4725 12.287 11.0591 13.2461C10.5047 14.5323 10.7527 16.0428 11.6799 17.0267C12.0385 17.4074 12.3643 17.6332 12.8013 17.8042C13.2113 17.9646 13.4123 18.0001 13.9089 18C14.3024 17.9999 14.398 17.9895 14.6405 17.9197C15.6816 17.6204 16.4698 16.8588 16.8284 15.8056C16.9713 15.3859 17.0134 15.0663 16.9965 14.5302C16.9795 13.994 16.9125 13.6894 16.7123 13.2377C16.5494 12.8703 16.4127 12.6603 16.1341 12.3493C15.6638 11.8243 15.0842 11.4881 14.4428 11.3682C14.1428 11.3122 13.6222 11.312 13.3346 11.3679ZM14.0773 12.3365L14.1864 12.4436L14.1949 13.3989L14.2034 14.3542L14.7406 14.364L15.2778 14.3737L15.368 14.4664C15.5328 14.6357 15.5349 14.8964 15.3728 15.052C15.2564 15.1639 15.1134 15.1799 14.3445 15.1669C13.4005 15.151 13.4595 15.2391 13.4468 13.8273C13.4353 12.5456 13.442 12.4695 13.5781 12.3319C13.6644 12.2446 13.7009 12.2294 13.8238 12.2294C13.9475 12.2294 13.9839 12.2448 14.0773 12.3365Z"
                  fill="#363B72"
                />
              </svg>

              <span class="item__text tw-text-xxs-1" @click="navigate">
                {{ t("nav[2]") }}
              </span>
            </li>
          </router-link>
        </ul>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import TheBottomMenu from "src/components/TheBottomMenu.vue";

import HeaderBase from "../HeaderBase.vue";
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import Locale from "src/components/V3/LocaleButtons.vue";
const i18n = {
  messages: {
    "ru-RU": {
      nav: ["Деривативы", "Портфолио",
      'История'
      //  "История", "Поддержка", "Рефералы"
      ],
      "log-out": "Выйти",
      profile: "Профиль",
      edit: "Редактировать",
    },
    "en-US": {
      nav: [
        "Index Derivatives",
        "My Portfolio",
        "History"
        // "History",
        // "Support",
        // "Referrals",
      ],

      "log-out": "Log out",
      profile: "Profile",
      edit: " Edit",
    },

    de: {
      nav: [
        "Indexderivate",
        "Mein Portfolio",
        "Mitteilungen"
        // "Verlauf",
        // "Support",
        // "Empfehlungen",
      ],
      "log-out": "Ausloggen",
      profile: "Profil",
      edit: " Bearbeiten",
    },
    "zh-CN": {
      nav: ["指数衍生品", "我的投资组合", 
      '留言'
      // "历史", "支持", "轉介"
      ],
      "log-out": "登出",
      profile: "轮廓",
      edit: " 编辑",
    },
  },
};
export default {
  components: {
    TheBottomMenu,
    HeaderBase,

    Locale,
  },
  setup() {
    const dropDown = ref(false);
    const { t } = useI18n(i18n);
    return {
      t,
      dropDown,
    };
  },
};
</script>

<style scoped lang="scss">
//$

.header-desktop {
  @apply tw-py-5;
  @include row();
  @include space-x(68px);
}

.sidebar {
  display: none;
  @include screen-xl {
    display: block;
  }
}

.nav-links {
  &__item.item {
    cursor: pointer;
    .item__icon > path {
      transition: all 0.3s ease;
      fill: #363b72;
    }
    .item__text {
      transition: all 0.3s ease;
      opacity: 0.5;
    }

    &.active > .item__text {
      opacity: 1;
    }
    // .item__text {
    //   color: #8285ac;
    // }
  }
}
</style>
