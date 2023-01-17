<!-- <template src="./index.html"></template> -->
<template>
  <div>
    <header class="">
      <div class="tw-container tw-h-full tw-flex tw-flex-col">
        <div class="header__top">
          <img
            :src="require('assets/images/logo-v3.svg')"
            alt="logo"
            class="tw-cursor-pointer"
            @click="$router.push({ name: 'home' })"
          />
          <div class="tw-flex tw-gap-10">
            <button>Index Derivatives</button>
            <button>My portfolio</button>
            <button>History</button>
            <button>Support</button>
          </div>
          <div>
            <button class="button button_xs button_border-white button__login">
              Login
            </button>
          </div>
        </div>
        <div class="header-content">
          <div class="header-content__top">
            <h2 class="header-content__top-title">About us</h2>
            <p class="header-content__top-text">
              ALGA is a brand new CeFi platform for the implementation of
              different investment strategies based on index derivatives.
            </p>
          </div>
          <div class="header-content__bottom">
            <h2 class="title">{{ t("team.title") }}</h2>
            <div class="xl:tw-mt-10 tw-relative">
              <q-carousel
                v-model="slideTeam"
                transition-prev="scale"
                transition-next="scale"
                swipeable
                animated
                padding
                class="bg-transparent tw-mb-7.5 test"
                height="100%"
                ref="carousel_star"
              >
                <!-- control-type="regular"
                  arrows
                control-color="arrow-brand"
                control-text-color="arrow-brand" -->
                <q-carousel-slide name="1" class="tw-flex tw-gap-5">
                  <div class="star">
                    <div class="star__avatar">
                      <div class="star-avatar__wrapper">
                        <img
                          class="star-avatar__img"
                          src="./img/karazbaev.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="star__content">
                      <h4 class="star__content-title">
                        {{ t("team.peoples.1.name") }} <br />
                        {{ t("team.peoples.1.lastName") }}
                      </h4>
                      <p class="star__content-text">
                        {{ t("team.peoples.1.bio") }}
                      </p>
                    </div>
                  </div>

                  <div class="star">
                    <div class="star__avatar">
                      <div class="star-avatar__wrapper">
                        <img
                          class="star-avatar__img"
                          src="./img/karazbaev.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="star__content">
                      <h4 class="star__content-title">
                        {{ t("team.peoples.1.name") }} <br />
                        {{ t("team.peoples.1.lastName") }}
                      </h4>
                      <p class="star__content-text">
                        {{ t("team.peoples.1.bio") }}
                      </p>
                    </div>
                  </div>

                  <div class="star">
                    <div class="star__avatar">
                      <div class="star-avatar__wrapper">
                        <img
                          class="star-avatar__img"
                          src="./img/karazbaev.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="star__content">
                      <h4 class="star__content-title">
                        {{ t("team.peoples.1.name") }} <br />
                        {{ t("team.peoples.1.lastName") }}
                      </h4>
                      <p class="star__content-text">
                        {{ t("team.peoples.1.bio") }}
                      </p>
                    </div>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide name="2" class="tw-flex tw-gap-5">
                  <div class="star">
                    <div class="star__avatar">
                      <div class="star-avatar__wrapper">
                        <img
                          class="star-avatar__img"
                          src="./img/karazbaev.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="star__content">
                      <h4 class="star__content-title">
                        {{ t("team.peoples.1.name") }} <br />
                        {{ t("team.peoples.1.lastName") }}
                      </h4>
                      <p class="star__content-text">
                        {{ t("team.peoples.1.bio") }}
                      </p>
                    </div>
                  </div>

                  <div class="star">
                    <div class="star__avatar">
                      <div class="star-avatar__wrapper">
                        <img
                          class="star-avatar__img"
                          src="./img/karazbaev.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="star__content">
                      <h4 class="star__content-title">
                        {{ t("team.peoples.1.name") }} <br />
                        {{ t("team.peoples.1.lastName") }}
                      </h4>
                      <p class="star__content-text">
                        {{ t("team.peoples.1.bio") }}
                      </p>
                    </div>
                  </div>

                  <div class="star">
                    <div class="star__avatar">
                      <div class="star-avatar__wrapper">
                        <img
                          class="star-avatar__img"
                          src="./img/karazbaev.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="star__content">
                      <h4 class="star__content-title">
                        {{ t("team.peoples.1.name") }} <br />
                        {{ t("team.peoples.1.lastName") }}
                      </h4>
                      <p class="star__content-text">
                        {{ t("team.peoples.1.bio") }}
                      </p>
                    </div>
                  </div>
                </q-carousel-slide>
              </q-carousel>

              <button
                class="arrow tw-absolute tw--left-15 tw-transform tw--translate-y-1/2 tw-top-1/2"
                @click="$refs.carousel_star.previous()"
              >
                <q-icon name="chevron_left" size="30px" color="arrow-brand" />
              </button>
              <button
                class="arrow tw-absolute tw--right-15 tw-transform tw--translate-y-1/2 tw-top-1/2"
                @click="$refs.carousel_star.next()"
              >
                <q-icon name="chevron_right" size="30px" color="arrow-brand" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section class="section roadmap">
      <div class="tw-container">
        <h2 class="title tw-mb-14">{{ t("roadmap.title") }}</h2>
        <div class="roadmap__list">
          <div class="roadmap__item item">
            <div class="tw-flex">
              <img src="./icons/stage-1.png" alt="" class="item__icon" />
              <div>
                <h2 class="item__title">
                  {{ t("roadmap.stages.1.title") }}
                </h2>
                <h5 class="item__subtitle">
                  {{ t("roadmap.stages.1.subtitle") }}
                </h5>
              </div>
            </div>
            <ul
              class="roadmap__item-list"
              :class="roadmap == '1' ? 'active' : ''"
              id="roadmap-1"
            >
              <li>
                {{ t("roadmap.stages.1.items.0") }}
              </li>
              <li>
                {{ t("roadmap.stages.1.items.1") }}
              </li>
              <li>
                {{ t("roadmap.stages.1.items.2") }}
              </li>
            </ul>
          </div>
          <div class="roadmap__item item">
            <div class="tw-flex">
              <img src="./icons/stage-1.png" alt="" class="item__icon" />
              <div>
                <h2 class="item__title">
                  {{ t("roadmap.stages.1.title") }}
                </h2>
                <h5 class="item__subtitle">
                  {{ t("roadmap.stages.1.subtitle") }}
                </h5>
              </div>
            </div>
            <ul
              class="roadmap__item-list"
              :class="roadmap == '1' ? 'active' : ''"
              id="roadmap-1"
            >
              <li>
                {{ t("roadmap.stages.1.items.0") }}
              </li>
              <li>
                {{ t("roadmap.stages.1.items.1") }}
              </li>
              <li>
                {{ t("roadmap.stages.1.items.2") }}
              </li>
            </ul>
          </div>
          <div class="roadmap__item item">
            <div class="tw-flex">
              <img src="./icons/stage-1.png" alt="" class="item__icon" />
              <div>
                <h2 class="item__title">
                  {{ t("roadmap.stages.1.title") }}
                </h2>
                <h5 class="item__subtitle">
                  {{ t("roadmap.stages.1.subtitle") }}
                </h5>
              </div>
            </div>
            <ul
              class="roadmap__item-list"
              :class="roadmap == '1' ? 'active' : ''"
              id="roadmap-1"
            >
              <li>
                {{ t("roadmap.stages.1.items.0") }}
              </li>
              <li>
                {{ t("roadmap.stages.1.items.1") }}
              </li>
              <li>
                {{ t("roadmap.stages.1.items.2") }}
              </li>
            </ul>
          </div>
          <!-- <div
            class="card card__border-line roadmap__item roadmap__item_1"
            :class="roadmap == '1' ? 'active' : ''"
            @click="toggleRoadmap('1')"
          >
            <div class="roadmap__item-wrapper">
              <div
                class="roadmap__item-header"
                :class="roadmap == '1' ? 'active' : ''"
              >
                <img src="./icons/icon-1.svg" alt="" />
                <h2>
                  {{ t("roadmap.stages.1.title") }}
                </h2>
                <h5>{{ t("roadmap.stages.1.subtitle") }}</h5>
              </div>
              <ul
                class="roadmap__item-list"
                :class="roadmap == '1' ? 'active' : ''"
                id="roadmap-1"
              >
                <li>
                  {{ t("roadmap.stages.1.items.0") }}
                </li>
                <li>
                  {{ t("roadmap.stages.1.items.1") }}
                </li>
                <li>
                  {{ t("roadmap.stages.1.items.2") }}
                </li>
              </ul>
              <button
                class="pie pie-arrow button-arrow"
                :class="roadmap == '1' ? 'active' : ''"
              >
                <q-icon
                  name="r_keyboard_arrow_down"
                  size="35px"
                  class="arrow-icon"
                >
                </q-icon>
              </button>
            </div>
          </div>
          <div
            class="card card__border-line roadmap__item roadmap__item_2"
            :class="roadmap == '2' ? 'active' : ''"
            @click="toggleRoadmap('2')"
          >
            <div class="roadmap__item-wrapper">
              <div
                class="roadmap__item-header"
                :class="roadmap == '2' ? 'active' : ''"
              >
                <img src="./icons/icon-2.svg" alt="" />
                <h2>
                  {{ t("roadmap.stages.2.title") }}
                </h2>
                <h5>{{ t("roadmap.stages.2.subtitle") }}</h5>
              </div>
              <ul
                class="roadmap__item-list"
                :class="roadmap == '2' ? 'active' : ''"
                id="roadmap-2"
              >
                <li>
                  {{ t("roadmap.stages.2.items.0") }}
                </li>
                <li>
                  {{ t("roadmap.stages.2.items.1") }}
                </li>
                <li>
                  {{ t("roadmap.stages.2.items.2") }}
                </li>
                <li>
                  {{ t("roadmap.stages.2.items.3") }}
                </li>
              </ul>
              <button
                class="pie pie-arrow button-arrow"
                :class="roadmap == '2' ? 'active' : ''"
              >
                <q-icon
                  name="r_keyboard_arrow_down"
                  size="35px"
                  class="arrow-icon"
                >
                </q-icon>
              </button>
            </div>
          </div>
          <div
            class="card card__border-line roadmap__item roadmap__item_3"
            :class="roadmap == '3' ? 'active' : ''"
            @click="toggleRoadmap('3')"
          >
            <div class="roadmap__item-wrapper">
              <div
                class="roadmap__item-header"
                :class="roadmap == '3' ? 'active' : ''"
              >
                <img src="./icons/icon-3.svg" alt="" />
                <h2>
                  {{ t("roadmap.stages.3.title") }}
                </h2>
                <h5>{{ t("roadmap.stages.3.subtitle") }}</h5>
              </div>
              <ul
                class="roadmap__item-list"
                :class="roadmap == '3' ? 'active' : ''"
                id="roadmap-3"
              >
                <li>
                  {{ t("roadmap.stages.3.items.0") }}
                </li>
                <li>
                  {{ t("roadmap.stages.3.items.1") }}
                </li>
                <li>
                  {{ t("roadmap.stages.3.items.2") }}
                </li>
                <li>
                  {{ t("roadmap.stages.3.items.3") }}
                </li>
                <li>
                  {{ t("roadmap.stages.3.items.4") }}
                </li>
              </ul>
              <button
                class="pie pie-arrow button-arrow"
                :class="roadmap == '3' ? 'active' : ''"
              >
                <q-icon
                  name="r_keyboard_arrow_down"
                  size="35px"
                  class="arrow-icon"
                >
                </q-icon>
              </button>
            </div>
          </div>
          <div
            class="card card__border-line roadmap__item roadmap__item_4"
            :class="roadmap == '4' ? 'active' : ''"
            @click="toggleRoadmap('4')"
          >
            <div class="roadmap__item-wrapper">
              <div
                class="roadmap__item-header"
                :class="roadmap == '4' ? 'active' : ''"
              >
                <img src="./icons/icon-4.svg" alt="" />
                <h2>
                  {{ t("roadmap.stages.4.title") }}
                </h2>
                <h5>{{ t("roadmap.stages.4.subtitle") }}</h5>
              </div>
              <ul
                class="roadmap__item-list"
                :class="roadmap == '4' ? 'active' : ''"
                id="roadmap-4"
              >
                <li>
                  {{ t("roadmap.stages.4.items.0") }}
                </li>
                <li>
                  {{ t("roadmap.stages.4.items.1") }}
                </li>
                <li>
                  {{ t("roadmap.stages.4.items.2") }}
                </li>
                <li>
                  {{ t("roadmap.stages.4.items.3") }}
                </li>
              </ul>
              <button
                class="pie pie-arrow button-arrow"
                :class="roadmap == '4' ? 'active' : ''"
              >
                <q-icon
                  name="r_keyboard_arrow_down"
                  size="35px"
                  class="arrow-icon"
                >
                </q-icon>
              </button>
            </div>
          </div>
          <div
            class="card card__border-line roadmap__item roadmap__item_5"
            :class="roadmap == '5' ? 'active' : ''"
            @click="toggleRoadmap('5')"
          >
            <div class="roadmap__item-wrapper">
              <div
                class="roadmap__item-header"
                :class="roadmap == '5' ? 'active' : ''"
              >
                <img src="./icons/icon-5.svg" alt="" />
                <h2>
                  {{ t("roadmap.stages.5.title") }}
                </h2>
                <h5>{{ t("roadmap.stages.5.subtitle") }}</h5>
              </div>
              <ul
                class="roadmap__item-list"
                :class="roadmap == '5' ? 'active' : ''"
                id="roadmap-5"
              >
                <li>
                  {{ t("roadmap.stages.5.items.0") }}
                </li>
                <li>
                  {{ t("roadmap.stages.5.items.1") }}
                </li>
                <li>
                  {{ t("roadmap.stages.5.items.2") }}
                </li>
              </ul>
              <button
                class="pie pie-arrow button-arrow"
                :class="roadmap == '5' ? 'active' : ''"
              >
                <q-icon
                  name="r_keyboard_arrow_down"
                  size="35px"
                  class="arrow-icon"
                >
                </q-icon>
              </button>
            </div>
          </div>
          <div
            class="card card__border-line roadmap__item roadmap__item_6"
            :class="roadmap == '6' ? 'active' : ''"
            @click="toggleRoadmap('6')"
          >
            <div class="roadmap__item-wrapper">
              <div
                class="roadmap__item-header"
                :class="roadmap == '6' ? 'active' : ''"
              >
                <img src="./icons/icon-6.svg" alt="" />
                <h2>
                  {{ t("roadmap.stages.6.title") }}
                </h2>
                <h5>{{ t("roadmap.stages.6.subtitle") }}</h5>
              </div>
              <ul
                class="roadmap__item-list"
                :class="roadmap == '6' ? 'active' : ''"
                id="roadmap-6"
              >
                <li>
                  {{ t("roadmap.stages.6.items.0") }}
                </li>
                <li>
                  {{ t("roadmap.stages.6.items.1") }}
                </li>
                <li>
                  {{ t("roadmap.stages.6.items.2") }}
                </li>
                <li>
                  {{ t("roadmap.stages.6.items.3") }}
                </li>
              </ul>
              <button
                class="pie pie-arrow button-arrow"
                :class="roadmap == '6' ? 'active' : ''"
              >
                <q-icon
                  name="r_keyboard_arrow_down"
                  size="35px"
                  class="arrow-icon"
                >
                </q-icon>
              </button>
            </div>
          </div> -->
        </div>
        <div class="roadmap__list">
          <div class="roadmap__item item">
            <div class="tw-flex">
              <img src="./icons/stage-1.png" alt="" class="item__icon" />
              <div>
                <h2 class="item__title">
                  {{ t("roadmap.stages.1.title") }}
                </h2>
                <h5 class="item__subtitle">
                  {{ t("roadmap.stages.1.subtitle") }}
                </h5>
              </div>
            </div>
            <ul
              class="roadmap__item-list"
              :class="roadmap == '1' ? 'active' : ''"
              id="roadmap-1"
            >
              <li>
                {{ t("roadmap.stages.1.items.0") }}
              </li>
              <li>
                {{ t("roadmap.stages.1.items.1") }}
              </li>
              <li>
                {{ t("roadmap.stages.1.items.2") }}
              </li>
            </ul>
          </div>
          <div class="roadmap__item item">
            <div class="tw-flex">
              <img src="./icons/stage-1.png" alt="" class="item__icon" />
              <div>
                <h2 class="item__title">
                  {{ t("roadmap.stages.1.title") }}
                </h2>
                <h5 class="item__subtitle">
                  {{ t("roadmap.stages.1.subtitle") }}
                </h5>
              </div>
            </div>
            <ul
              class="roadmap__item-list"
              :class="roadmap == '1' ? 'active' : ''"
              id="roadmap-1"
            >
              <li>
                {{ t("roadmap.stages.1.items.0") }}
              </li>
              <li>
                {{ t("roadmap.stages.1.items.1") }}
              </li>
              <li>
                {{ t("roadmap.stages.1.items.2") }}
              </li>
            </ul>
          </div>
          <div class="roadmap__item item">
            <div class="tw-flex">
              <img src="./icons/stage-1.png" alt="" class="item__icon" />
              <div>
                <h2 class="item__title">
                  {{ t("roadmap.stages.1.title") }}
                </h2>
                <h5 class="item__subtitle">
                  {{ t("roadmap.stages.1.subtitle") }}
                </h5>
              </div>
            </div>
            <ul
              class="roadmap__item-list"
              :class="roadmap == '1' ? 'active' : ''"
              id="roadmap-1"
            >
              <li>
                {{ t("roadmap.stages.1.items.0") }}
              </li>
              <li>
                {{ t("roadmap.stages.1.items.1") }}
              </li>
              <li>
                {{ t("roadmap.stages.1.items.2") }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";

import MiniAreaChart from "src/components/V3/MiniAreaChart.vue";
import MarkIcon from "src/components/V3/MarkIcon.vue";
const i18n = {
  messages: {
    "ru-RU": {
      dropdown: {
        buttons: {
          register: "Регистрация",
          login: "Авторизация",
          profile: "Профиль",
        },
      },
      header: {
        title: "Алга",
        subtitle: "Платформа <br> Индексных <br> Деривативов",
      },
      about: {
        title: "О нас",
        text: "ALGA — это совершенно новая платформа CeFi для реализации различных инвестиционных стратегий на основе индексных деривативов. <br> Лежащая в основе передовая технология, наряду с огромным опытом основной команды в области торговли, делает ALGA универсальным сервисом для инвестиций в проверенные и эффективные стратегии, облегчающие вход в криптовалюту для всех. Эти стратегии, основанные на индексных деривативах, состоящих из множества активов, подобранных в наиболее эффективном соотношении, позволяют получать солидный доход на вложенный капитал при минимизации рисков. <br> Платформа создана людьми для людей с единственной целью - обеспечить комфортное отслеживание активов и прозрачность транзакций, чтобы вывести опыт управления активами на совершенно новый уровень",
      },
      indexD: {
        title: "Деривативы",
        card: {
          profitability: {
            1: "Прибыльность <br/> за {numb} месяцa",
            2: "Прибыльность <br/> за {numb} месяцa",
            3: "Прибыльность <br/> за {numb} месяцa",
            4: "Прибыльность <br/> за {numb} месяцa",
            5: "Прибыльность <br/> за {numb} месяцa",
            6: "Прибыльность <br/> за {numb} месяцa",
            7: "Прибыльность <br/> за {numb} месяцa",
            8: "Прибыльность <br/> за {numb} месяцa",
            9: "Прибыльность <br/> за {numb} месяцa",
            10: "Прибыльность <br/> за {numb} месяцa",
          },
        },
      },
      roadmap: {
        title: "Дорожная карта",
        stages: {
          1: {
            title: "Этап 1",
            subtitle: "январь - март 2022",
            items: [
              "Разработка концепции и брендбука проекта",
              "Разработка архитектуры платформы",
              "Создание и наполнение сайта (дизайн, верстка, мобильная адаптация, разработка ядра учетной записи пользователя)",
            ],
          },
          2: {
            title: "Этап 2",
            subtitle: "март - сентябрь 2022",
            items: [
              "Разработка платформы MVP",
              "Разработка маркетингового плана",
              "Создание и наполнение соцсетей (Facebook, Instagram, Telegram, Reddit)",
              "Старт предварительной маркетинговой кампании",
            ],
          },
          3: {
            title: "Этап 3",
            subtitle: "сентябрь - ноябрь 2022",
            items: [
              "Создание компании и получение юридических документов",
              "Начало сбора средств",
              "Открытие офисов: Дубай, Москва, Уфа, Казань",
              "Тестирование MVP и QA",
              "Завершение аудита безопасности платформы",
            ],
          },
          4: {
            title: "Этап 4",
            subtitle: "ноябрь 2022 - январь 2023",
            items: [
              "Старт глобальной маркетинговой кампании",
              "Проведение IEO на CEX",
              "Листинг CEX",
              "Запуск платформы MVP",
            ],
          },
          5: {
            title: "Этап 5",
            subtitle: "декабрь 2022 - февраль 2023",
            items: [
              "Обновление функционала платформы",
              "Запуск программы индексов Alga Advisors",
              "Разработка мобильных приложений",
            ],
          },
          6: {
            title: "Этап 6",
            subtitle: "ноябрь 2022 - февраль 2023",
            items: [
              "Листинг на других централизованных биржах",
              "Разработка собственной индексной биржи",
              "Увеличение количества индексов до 15",
              "Партнерские соглашения с солидными хедж-фондами",
            ],
          },
        },
      },
      team: {
        title: "Команда",
        peoples: {
          1: {
            name: "Урал",
            lastName: "Каразбаев",
            bio: "Основатель ALGA Ecosystem, предприниматель, основатель инвестиционного клуба «Музей финансов», соучредитель ТЦ «Город», «Форестпром», Д.С.Р. Уфа",
          },
          2: {
            name: "Данат",
            lastName: "Латыпов",
            bio: "Разработчик, кандидат экономических наук, математик. Руководитель группы разработки. Специализируется на разработке высоконагруженных систем и коммерческих блокчейн-проектов с 2017 года",
          },
          3: {
            name: "Раст",
            lastName: "Пентагон",
            bio: "Основатель ALGA Ecosystem и торговый директор криптовалютного фонда Fakel в СНГ, основатель консалтинговой компании Take Profit, международный спикер, квалифицированный трейдер с опытом работы более 8 лет",
          },
          4: {
            name: "Иван",
            lastName: "Белый",
            bio: "Основатель и генеральный директор криптовалютного фонда Fakel в СНГ, руководитель образовательной программы, квалифицированный трейдер и маркетолог с опытом работы более 10 лет",
          },
          5: {
            name: "Елена",
            lastName: "Шаханова",
            bio: "Бизнесвумен, основатель и генеральный директор агентства цифрового брендинга YES IDEA, арт-директор российских и международных проектов",
          },
        },
      },
      backers: {
        title: "Спонсоры & Партнеры",
      },
      faq: {
        title: "FAQ",
        items: {
          1: {
            title: "Что такое Alga Ecosystem?",
            text: `
              Alga Ecosystem — это совершенно новый инструмент для удобного входа в мир криптовалюты и разумных инвестиций. На начальном этапе экосистема будет состоять из трех основных продуктов:
              <br>
              - Платформа индексных деривативов Alga (AID)
              <br>
              - Образовательная платформа Alga (AE)
              <br>
              - Социальная сеть Alga Indexview (AI)
            `,
          },
          2: {
            title: "Что такое Платформа индексных деривативов Alga?",
            text: `
              Это CeFi платформа, которая позволяет вам инвестировать в криптовалюты через индексные деривативы. Команда объединила передовые технологии и личный торговый опыт, чтобы создать среду безопасного инвестирования средств пользователей и получения сбалансированной доходности на аллокированный капитал с помощью индексов. AID дает возможность отдельным лицам или учреждениям создавать, управлять и вкладывать в инновационные инвестиционные инструменты
            `,
          },
          3: {
            title: "Что такое индекс?",
            text: `
              Индекс — это дериватив, который представляет собой полностью обеспеченный портфель активов, который может позволить людям или организациям управлять своим капиталом и капиталом других в безопасной среде
            `,
          },
          4: {
            title: "Какие виды индексов есть на платформе?",
            text: `
              В настоящий момент на платформе AID представлено 5 индексов:
              <br>
              - BTC MAIN ALGA INDEX;
              <br>
              - ETH MAIN ALGA INDEX;
              <br>
              - BTC COMBO ALGA INDEX;
              <br>
              - ETH COMBO ALGA INDEX;
              <br>
              - STABLE ALGA INDEX.
              <br>
              С развитием платформы будут добавляться новые индексы
            `,
          },
          5: {
            title: "Что такое Alga Token и для чего он нужен?",
            text: `
              Токен Alga является нативным токеном экосистемы. Владельцы Alga получат ряд преимуществ, таких как возможность стейкинга и участия в DAO, создания собственных индексов. Кроме того, за токены Alga можно будет получить скидку на образовательные программы и различные функции кастомизации в Alga Indexview
            `,
          },
          6: {
            title: "Законна ли деятельность вашей платформы?",
            text: `
            Да, интеллектуальная собственность Alga Ecosystem принадлежит юридическому лицу, официально оформленному в г. Дубай (ОАЭ), которое имеет лицензию на работу с цифровыми активами
            `,
          },
        },
      },
      "card-big": {
        signin: {
          titleReg: "Регистрация",
          titleSign: "Личный кабинет",
          text: "По всем вопросам пишите нам, оператор свяжется с вами в ближайшее время",
          createButtonReg: "Регистрация",
          createButtonSign: "Личный кабинет",
        },
        anyquestion: {
          title: "Остались вопросы?",
          text: "По всем вопросам пишите нам, оператор свяжется с вами в ближайшее время",
          contacrusButton: "Напишите нам",
          joinButton: "Вступайте в сообщество",
        },
      },
      other: {
        button: {
          buy: "Купить",
        },
      },
    },

    "en-US": {
      dropdown: {
        buttons: {
          register: "Registration",
          login: "Authorization",
          profile: "profile",
        },
      },
      header: {
        title: "Alga",
        subtitle: "Index <br> Derivatives <br> Platform",
      },
      about: {
        title: "About",
        text: "ALGA is a brand new CeFi platform for the implementation of different investment strategies based on index derivatives. <br> The underlying cutting edge technology along with a huge background of the core team in  trading makes ALGA the one-stop shop for investments into proven and efficient strategies facilitating entry to the crypto for everyone. These strategies based on index derivatives consisting of many assets selected with the most efficient ratio allow to receive solid return on the allocated capital while minimizing risks. <br> The platform is designed by the people for the people with only one goal - to ensure comfortable tracking of assets and transparent transactions in order to bring asset management experience to a completely new level",
      },
      indexD: {
        title: "Index Derivatives",
        card: {
          profitability: {
            1: "Profitability <br/> for {numb} months",
            2: "Profitability <br/> for {numb} months",
            3: "Profitability <br/> for {numb} months",
            4: "Profitability <br/> for {numb} months",
            5: "Profitability <br/> for {numb} months",
            6: "Profitability <br/> for {numb} months",
            7: "Profitability <br/> for {numb} months",
            8: "Profitability <br/> for {numb} months",
            9: "Profitability <br/> for {numb} months",
            10: "Profitability <br/> for {numb} months",
          },
        },
      },
      roadmap: {
        title: "Roadmap",
        stages: {
          1: {
            title: "Stage 1",
            subtitle: "January-March, 2022",
            items: [
              "Development of the concept and brand book of the project",
              "Platform architecture development",
              "Website creation and content (design, layout, mobile adaptation, development of the user account core)",
            ],
          },
          2: {
            title: "Stage 2",
            subtitle: "March-September, 2022",
            items: [
              "Development of platform MVP",
              "Development of the marketing plan",
              "Creation and content of socials (Facebook, Instagram, Telegram, Reddit)",
              "Launch the preliminary marketing campaign",
            ],
          },
          3: {
            title: "Stage 3",
            subtitle: "September-November, 2022",
            items: [
              "Company establishment and obtaining of legal documents",
              "Launch the fundraising campaign",
              "Offices establishment: Dubai, Moscow, Ufa, Kazan",
              "MVP testing and QA",
              "Platform security audit completion",
            ],
          },
          4: {
            title: "Stage 4",
            subtitle: "November 2022-January 2023",
            items: [
              "Start of the global marketing campaign",
              "Perform IEO on CEX",
              "CEX listing",
              "Platform MVP launch",
            ],
          },
          5: {
            title: "Stage 5",
            subtitle: "December 2022 - February 2023",
            items: [
              "Platform functionality update",
              "Launch of the Alga Advisors indexes program",
              "Mobile app development",
            ],
          },
          6: {
            title: "Stage 6",
            subtitle: "November 2022 - February 2023",
            items: [
              "Listing on other Centralized exchanges",
              "Development of the own index exchange",
              "Increasing number of indexes to 15",
              "Partnership agreements with solid hedge-funds",
            ],
          },
        },
      },
      team: {
        title: "Team",
        peoples: {
          1: {
            name: "Ural",
            lastName: "Karazbaev",
            bio: "Founder of ALGA Ecosystem, entrepreneur, founder of Museum of Finance investment club, co-founder of TC Gorod, Forestprom, D.S.R. Ufa",
          },
          2: {
            name: "Danat",
            lastName: "Latypov",
            bio: "Developer, PhD in economics, mathematician. Head of development team. Specialized in development of high-load systems and commercial blockchain projects from 2017",
          },
          3: {
            name: "Rustem",
            lastName: "Sadreev",
            bio: "Founder and trading director of Fakel cryptocurrency fund in CIS, head of educational program, qualified trader with more than 8 years experience",
          },
          4: {
            name: "Ivan",
            lastName: "Beliy",
            bio: "Founder and CEO of Fakel cryptocurrency fund in CIS, head of educational program, qualified trader and marketer with more than 10 years experience",
          },
          5: {
            name: "Elena",
            lastName: "Shakhanova",
            bio: "Businessman, founder and CEO of YES IDEA digital branding agency, art director of Russian and international projects",
          },
        },
      },
      backers: {
        title: "Backers & Partners",
      },
      faq: {
        title: "FAQ",
        items: {
          1: {
            title: "What is the Alga Ecosystem?",
            text: `
              Alga Ecosystem is the brand new tool for both comfortable entrance to the crypto world and smart investments. At the early stage the Ecosystem contains three main products:
              <br>
              -Alga Index Derivatives platform (AID)
              <br>
              -Alga Education platform (AE)
              <br>
              -Alga Indexview social network (AI)
            `,
          },
          2: {
            title: "What is the Alga Index Derivatives platform?",
            text: `
              It is a CeFi platform that allows you to invest in cryptocurrencies through index derivatives.
              <br>
              Founders combine advanced technology and personal trading experience to create an environment for safe investment of users’ funds and balanced returns on allocated capital with the help of indexes. AID empowers individuals or institutions to create, manage and invest in innovative on-chain investment tools
            `,
          },
          3: {
            title: "What is index?",
            text: `
              Index is a derivative that represents a fully collateralized portfolio of assets that can enable people or entities to manage their wealth & the wealth of others within a safe environment
            `,
          },
          4: {
            title: "What kind of indexes are represented at AIDT?",
            text: `
              Currently we have 5 indexes:
              <br>
              - BTC MAIN ALGA INDEX;
              <br>
              - ETH MAIN ALGA INDEX;
              <br>
              - BTC COMBO ALGA INDEX;
              <br>
              - ETH COMBO ALGA INDEX;
              <br>
              - STABLE ALGA INDEX.
              <br>
              With the development of the platform it will be more
            `,
          },
          5: {
            title: "What is an Alga token and what are its use cases?",
            text: `
              Alga token is native token of the Alga Ecosystem. Holders of Alga will have several benefits, such as: possibility of staking and DAO participation, creation of own indexes. Discounts for Educational programs and different customization features at Alga Indexview
            `,
          },
          6: {
            title: "Is the operation of Alga Ecosystem legal?",
            text: `Yes, Alga Ecosystem works under the registered legal entity in Dubai (UAE). Entity is licensed to work with digital assets`,
          },
        },
      },
      "card-big": {
        signin: {
          titleReg: "Registration",
          titleSign: "Personal",
          text: "If you have any questions, please contact us at , and an operator will get back with you as soon as possible",
          createButtonReg: "Registration",
          createButtonSign: "Personal",
        },
        anyquestion: {
          title: "Any questions?",
          text: "If you have any questions, please contact us at , and an operator will get back with you as soon as possible",
          contacrusButton: "Contast us",
          joinButton: "Join our community",
        },
      },
      other: {
        button: {
          buy: "Buy",
        },
      },
    },
    de: {
      dropdown: {
        buttons: {
          register: "Registrieren",
          login: "Anmelden",
          profile: "Profil",
        },
      },
      header: {
        title: "Alga",
        subtitle: "Index- <br> Derivate- <br> Plattform",
      },
      about: {
        title: "Über uns",
        text: "ALGA ist eine brandneue CeFi-Platform für die Umsetzung verschiedener Anlagestrategien auf Basis von Indexderivaten. <br> Die zugrundeliegende Spitzentechnologie zusammen mit dem umfangreichen Hintergrund des Kernteams im Handel macht ALGA zum One-Stop-Shop für Investitionen in bewährte und effiziente Strategien, die den Einstieg in die Kryptowährung für jedermann erleichtern. Diese auf Indexderivaten basierenden Strategien, die aus vielen, im effektivsten Verhältnis ausgewählten Vermögenswerten bestehen, ermöglichen es, eine solide Rendite auf das zugewiesene Kapital zu erzielen und gleichzeitig die Risiken zu minimieren. <br> Die Plattform wurde von Menschen für Menschen mit dem einzigen Ziel entwickelt, eine bequeme Verfolgung von Vermögenswerten und transparente Transaktionen zu gewährleisten, um die Erfahrung der Vermögensverwaltung auf ein völlig neues Niveau zu bringen.",
      },
      indexD: {
        title: "Derivates",
        card: {
          profitability: {
            1: "Rentabilität <br/> für {numb} Monate",
            2: "Rentabilität <br/> für {numb} Monate",
            3: "Rentabilität <br/> für {numb} Monate",
            4: "Rentabilität <br/> für {numb} Monate",
            5: "Rentabilität <br/> für {numb} Monate",
            6: "Rentabilität <br/> für {numb} Monate",
            7: "Rentabilität <br/> für {numb} Monate",
            8: "Rentabilität <br/> für {numb} Monate",
            9: "Rentabilität <br/> für {numb} Monate",
            10: "Rentabilität <br/> für {numb} Monate",
          },
        },
      },
      roadmap: {
        title: "Straßenkarte",
        stages: {
          1: {
            title: "Phase 1",
            subtitle: "Januar - März 2022",
            items: [
              "Entwicklung des Konzepts und des Markenbuchs des Projekts",
              "Entwicklung der Plattformarchitektur",
              "Erstellung der Webseite und Inhalte (Design, Layout, mobile Anpassung, Entwicklung des Kerns des Benutzerkontos)",
            ],
          },
          2: {
            title: "Phase 2",
            subtitle: "März - September 2022",
            items: [
              "Entwicklung der Plattform MVP",
              "Entwicklung des Marketingplans",
              "Erstellung und Inhalt der sozialen Netzwerke (Facebook, Instagram, Telegram, Reddit)",
              "Start der ersten Marketingkampagne",
            ],
          },
          3: {
            title: "Phase 3",
            subtitle: "September - November 2022",
            items: [
              "Gründung des Unternehmens und Beschaffung der rechtlichen Dokumente",
              "Beginn der Mittelbeschaffung",
              "Einrichtung von Büros: Dubai, Moskau, Ufa, Kasan",
              "MVP-Tests und QA",
              "Abschluss des Sicherheitsaudits der Plattform",
            ],
          },
          4: {
            title: "Phase 4",
            subtitle: "November 2022 - Januar 2023",
            items: [
              "Start der globalen Marketingkampagne",
              "Durchführung des IEO an der CEX",
              "CEX-Notierung",
              "Einführung der Plattform MVP",
            ],
          },
          5: {
            title: "Phase 5",
            subtitle: "Dezember 2022 - November 2023",
            items: [
              "Aktualisierung der Plattformfunktionalität",
              "Start des Alga-Advisors-Indexprogramms",
              "Entwicklung einer mobilen App",
            ],
          },
          6: {
            title: "Phase 6",
            subtitle: "November 2022 - Februar 2023",
            items: [
              "Notierung an anderen zentralisierten Börsen",
              "Entwicklung einer eigenen Indexbörse",
              "Erhöhung der Anzahl der Indizes auf 15",
              "Partnerschaftsvereinbarungen mit soliden Hedge-Fonds",
            ],
          },
        },
      },
      team: {
        title: "Das Team",
        peoples: {
          1: {
            name: "Ural",
            lastName: "Karazbaev",
            bio: "Gründer von ALGA Ecosystem, Unternehmer, Gründer des Investmentclubs Museum of Finance, Mitbegründer von TC Gorod, Forestprom, D.S.R. Ufa.",
          },
          2: {
            name: "Danat",
            lastName: "Latypov",
            bio: "Entwickler, PhD in Wirtschaftswissenschaften, Mathematiker. Leiter des Entwicklungsteams. Spezialisiert auf die Entwicklung von Hochlastsystemen und kommerziellen Blockchain-Projekten seit 2017",
          },
          3: {
            name: "Rast",
            lastName: "Pentagon",
            bio: "Gründer und Handelsdirektor von Fakel Cryptocurrency Fund in der GUS, Leiter des Bildungsprogramms, qualifizierter Händler mit mehr als 8 Jahren Erfahrung.",
          },
          4: {
            name: "Ivan",
            lastName: "Beliy",
            bio: "Gründer und CEO von Fakel Cryptocurrency Fund in der GUS, Leiter des Bildungsprogramms, qualifizierter Händler und Vermarkter mit mehr als 10 Jahren Erfahrung.",
          },
          5: {
            name: "Elena",
            lastName: "Shakhanova",
            bio: "Geschäftsfrau, Gründerin und CEO der digitalen Branding-Agentur YES IDEA, Art Direktorin von russischen und internationalen Projekten",
          },
        },
      },
      backers: {
        title: "Förderer & Partner",
      },
      faq: {
        title: "Häufig gestellte Fragen",
        items: {
          1: {
            title: "Was ist Alga Ecosystem?",
            text: `
              Alga Ecosystem ist ein brandneues Tool für den einfachen Einstieg in die Welt der Kryptowährungen und smarten Investitionen. Das Ökosystem wird zunächst aus drei Hauptprodukten bestehen:
              <br>
              - Indexderivate-Plattform Alga (AID)
              <br>
              - Bildungsplattform Alga (AE)
              <br>
              - Das soziale Netzwerk Alga Indexview (AI)
            `,
          },
          2: {
            title: "Was ist die Indexderivate-Plattform Alga?",
            text: `
              Es handelt sich um eine CeFi-Plattform, die es Ihnen ermöglicht, über Index-Derivate in Kryptowährungen zu investieren. Das Team hat modernste Technologie und persönliches Handels-Know-how kombiniert, um ein Umfeld zu schaffen, in dem die Gelder der Nutzer sicher angelegt werden können und eine ausgewogene Rendite auf das zugewiesene Kapital durch Indizes erzielt wird. AID ermöglicht Einzelpersonen oder Institutionen die Schaffung, Verwaltung und Investition in innovative Anlageinstrumente
            `,
          },
          3: {
            title: "Was ist ein Index?",
            text: `
              Ein Index ist ein Derivat, bei dem es sich um ein vollständig besichertes Portfolio von Vermögenswerten handelt, das es Personen oder Organisationen ermöglichen kann, ihr eigenes Kapital und das anderer in einem sicheren Umfeld zu verwalten.
            `,
          },
          4: {
            title:
              "Welche Arten von Indexes sind auf der Plattform verfügbar??",
            text: `
              Derzeit gibt es 5 Indizes auf der AID-Plattform:
              <br>
              - BTC MAIN ALGA INDEX;
              <br>
              - ETH MAIN ALGA INDEX;
              <br>
              - BTC COMBO ALGA INDEX;
              <br>
              - ETH COMBO ALGA INDEX;
              <br>
              - STABLE ALGA INDEX.
              <br>
              Neue Indizes werden mit der Entwicklung der Plattform hinzugefügt
            `,
          },
          5: {
            title: "Was ist ein Alga-Token und wozu dient er?",
            text: `
              Der Alga-Token ist ein nativer Ökosystem-Token. Alga-Besitzer erhalten eine Reihe von Vorteilen, wie z.B. die Möglichkeit, DAOs zu stapeln und sich an ihnen zu beteiligen sowie eigene Indizes zu erstellen. Darüber hinaus bieten Alga-Tokens einen Rabatt auf Bildungsprogramme und verschiedene Anpassungsfunktionen in Alga Indexview
            `,
          },
          6: {
            title: "Ist die Tätigkeit Ihrer Plattform legal?",
            text: `
            Ja, das geistige Eigentum von Alga Ecosystem ist Eigentum einer in Dubai, VAE, eingetragenen juristischen Person, die eine Lizenz für den Handel mit digitalen Vermögenswerten besitzt.
            `,
          },
        },
      },
      "card-big": {
        signin: {
          titleReg: "Registrieren",
          titleSign: "Mein Konto",
          text: "Senden Sie uns eine Nachricht, wenn Sie Fragen haben. Ein Mitarbeiter wird sich so schnell wie möglich mit Ihnen in Verbindung setzen.",
          createButtonReg: "Registrieren",
          createButtonSign: "Mein Konto",
        },
        anyquestion: {
          title: "Noch Fragen?",
          text: "Senden Sie uns eine Nachricht, wenn Sie Fragen haben. Ein Mitarbeiter wird sich so schnell wie möglich mit Ihnen in Verbindung setzen.",
          contacrusButton: "Kontaktieren Sie uns",
          joinButton: "Werden Sie Mitglied der Community",
        },
      },
      other: {
        button: {
          buy: "Kaufen",
        },
      },
    },
    "zh-CN": {
      dropdown: {
        buttons: {
          register: "登记",
          login: "登录",
          profile: "个人资料",
        },
      },
      header: {
        title: "Alga",
        subtitle: "指数 <br> 衍生品 <br> 平台",
      },
      about: {
        title: "关于我们",
        text: "ALGA是一个全新的CeFi平台，用于实施基于指数衍生品的不同投资策略。底层的尖端技术以及交易核心团队的巨大背景使ALGA成为投资成熟有效策略的一站式商店，方便每个人进入加密。这些基于由以最有效比率选择的许多资产组成的指数衍生品的策略允许在最大限度地降低风险的同时获得稳定的分配资本回报。该平台是由人们为只有一个目标的人设计的-确保资产的舒适跟踪和透明的交易，以便将资产管理经验提升到全新的水平",
      },
      indexD: {
        title: "指数衍生品",
        card: {
          profitability: {
            1: "{numb} 个月 <br/> 盈利",
            2: "{numb} 个月 <br/> 盈利",
            3: "{numb} 个月 <br/> 盈利",
            4: "{numb} 个月 <br/> 盈利",
            5: "{numb} 个月 <br/> 盈利",
            6: "{numb} 个月 <br/> 盈利",
            7: "{numb} 个月 <br/> 盈利",
            8: "{numb} 个月 <br/> 盈利",
            9: "{numb} 个月 <br/> 盈利",
            10: "{numb} 个月 <br/> 盈利",
          },
        },
      },
      roadmap: {
        title: "路线图",
        stages: {
          1: {
            title: "第一阶段",
            subtitle: "2022年1月-3月",
            items: [
              "项目的概念和品牌书的发展",
              "平台架构开发",
              "网站创建和内容（设计，布局，移动适应，用户帐户核心的开发）",
            ],
          },
          2: {
            title: "第二阶段",
            subtitle: "2022年3月-5月",
            items: [
              "平台MVP的开发",
              "制定营销计划 ",
              "社交活动的创建和内容（Facebook、Instagram、Telegram、Reddit）",
              "开始初步的市场推广活动 ",
            ],
          },
          3: {
            title: "第三阶段",
            subtitle: "2022年5月-7月",
            items: [
              "公司设立及取得法律文件 ",
              "资金筹措开始",
              "办事处设立：迪拜、莫斯科、乌法、喀山",
              "MVP测试和QA",
              "平台安全审计完成",
            ],
          },
          4: {
            title: "第四阶段",
            subtitle: "2022年7月-9月",
            items: [
              "全球营销活动开始",
              "IEO在CEX上的传导",
              "CEX上市",
              "平台MVP启动",
            ],
          },
          5: {
            title: "第五阶段",
            subtitle: "2022年9月-11月",
            items: ["平台功能更新", "推出Alga顾问指数计划", "移动应用开发"],
          },
          6: {
            title: "第六阶段",
            subtitle: "2022年11月-2023年2月",
            items: [
              "在其他集中交易所上市",
              "发展自己的指数交易所",
              "索引数目增加至15个",
              "П与可靠对冲基金的合作协议",
            ],
          },
        },
      },
      team: {
        title: "专责小组 ",
        peoples: {
          1: {
            name: "Ural",
            lastName: "Karazbaev",
            bio: "ALGA生态系统创始人，企业家，金融投资俱乐部博物馆创始人，TC Gorod，Forestprom，D.S.R.Ufa的联合创始人",
          },
          2: {
            name: "Danat",
            lastName: "Latypov",
            bio: "开发人员，经济学博士，数学家。开发团队负责人。从2017年开始专门从事高负载系统和商业区块链项目的开发",
          },
          3: {
            name: "Rast",
            lastName: "Pentagon",
            bio: "ALGA生态系统的创始人和独联体Fakel加密货币基金的交易总监，Take Profit咨询公司的创始人，国际演讲者，拥有超过8年经验的合格交易者",
          },
          4: {
            name: "Ivan",
            lastName: "Beliy",
            bio: "独联体Fakel加密货币基金的创始人兼首席执行官，教育项目负责人，拥有超过10年经验的合格交易者和营销人员",
          },
          5: {
            name: "Elena",
            lastName: "Shakhanova",
            bio: "企业家，YES IDEA数字品牌代理公司创始人兼首席执行官，俄罗斯和国际项目艺术总监",
          },
        },
      },
      backers: {
        title: "支持者和合作伙伴",
      },
      faq: {
        title: "FAQ",
        items: {
          1: {
            title: "什么是Alga生态系统?",
            text: `
              AAlga生态系统是进入加密世界和智能投资的全新工具。 Н在早期阶段，生态系统包含三种主要产品:
              <br>
              - Alga指数衍生品平台(AID)
              <br>
              - Alga教育平台(AE)
              <br>
              - Alga Indexview社交网络(AI)
            `,
          },
          2: {
            title: "什么是Alga指数衍生品平台?",
            text: `
              这是一个CeFi平台，允许您通过指数衍生品投资加密货币。 创始人结合先进的技术和个人交易经验，在指数的帮助下，为用户资金的安全投资和分配资本的平衡回报创造了一个环境。 AID使个人或机构能够创造、管理和投资创新的链上投资工具
            `,
          },
          3: {
            title: "什么是索引？",
            text: `
              指数是一种衍生品，代表了一个完全抵押的资产组合，可以使人们或实体在安全的环境中管理他们的财富和他人的财富
            `,
          },
          4: {
            title: "在AIDT中表示什么样的索引？",
            text: `
              目前我们有5个索引:
              <br>
              - BTC MAIN ALGA INDEX;
              <br>
              - ETH MAIN ALGA INDEX;
              <br>
              - BTC COMBO ALGA INDEX;
              <br>
              - ETH COMBO ALGA INDEX;
              <br>
              - STABLE ALGA INDEX.
              <br>
              随着平台的发展，将会有更多
            `,
          },
          5: {
            title: "什么是Alga令牌，它用于什么？",
            text: `
              Alga令牌是Alga生态系统的原生令牌。 Alga的持有者将有几个好处，例如：staking和DAO参与的可能性，创建自己的索引。 КAlga Indexview的教育计划和不同定制功能的折扣
            `,
          },
          6: {
            title: "Alga生态系统的运作是否合法？",
            text: `
            是的，Alga Ecosystem在迪拜（阿联酋）的注册法律实体下工作。 实体被授权使用数字资产
            `,
          },
        },
      },
      "card-big": {
        signin: {
          titleReg: "登记注册",
          titleSign: "个人专区",
          text: "如有任何问题，请写信给我们，接线员会尽快与您联系",
          createButtonReg: "登记注册",
          createButtonSign: "个人专区",
        },
        anyquestion: {
          title: "有什么问题吗",
          text: "如有任何问题，请写信给我们，接线员会尽快与您联系",
          contacrusButton: "联系我们",
          joinButton: "加入社区",
        },
      },
      other: {
        button: {
          buy: "购买",
        },
      },
    },
  },
};
export default {
  components: {
    MiniAreaChart,
    MarkIcon,
  },
  setup() {
    const $i18n = useI18n();
    const store = useStore();
    const locale = computed(() => {
      if ($i18n.locale.value === "en-US" || $i18n.locale.value === "en")
        return "English";
      if ($i18n.locale.value === "ru-RU" || $i18n.locale.value === "ru")
        return "Русский";
      return null;
    });
    const { t } = useI18n(i18n);
    const newLocale = (lang) => {
      window.app.setLocale(lang, true);
    };
    const accardion = ref("");
    const roadmap = ref("");
    const dropDown = ref(false);
    const test = ref(null);
    const toggle = (elName) => {
      const element = document.querySelector(`#accordion-${elName}`);
      const elements = document.querySelectorAll(".accardion-item__text");
      const oldEl = accardion.value;
      // accardion.value + ":" + elName
      if (element) {
        if (element.style.maxHeight) element.style.maxHeight = null;
        else {
          element.style.maxHeight = element.scrollHeight + "px";
        }
        if (accardion.value === elName) accardion.value = "";
        else {
          accardion.value = elName;
        }
      }
      if (oldEl && oldEl !== elName) {
        document.querySelector(`#accordion-${oldEl}`).style.maxHeight = null;
      }
    };
    const toggleRoadmap = (elName) => {
      const element = document.querySelector(`#roadmap-${elName}`);

      if (element) {
        if (element.style.maxHeight) element.style.maxHeight = null;
        else {
          element.style.maxHeight = element.scrollHeight + "px";
        }
        if (roadmap.value === elName) roadmap.value = "";
        else {
          roadmap.value = elName;
        }
      }
    };
    const toggleDrop = () => {
      const element = document.querySelector("#dropdown");
      if (element) {
        if (element.style.maxHeight) {
          element.style.maxHeight = null;
          dropDown.value = false;
        } else {
          dropDown.value = true;
          element.style.maxHeight = element.scrollHeight + "px";
        }
      }
    };
    const whitePaper = store.getters["landing/footer"](t)[0].to;
    const roadMap = store.getters["landing/footer"](t)[1].to;

    const derivatives = computed(() => store.getters["landing/derivatives"]);
    const charts = ref(null);
    onMounted(async () => {
      await store.dispatch("landing/getDerivatives").then((resolve) => {
        const requests = resolve.map((derivative) =>
          store.dispatch("landing/getChartDerivative", derivative.id)
        );

        Promise.all(requests).then((responses) => {
          charts.value = responses;
        });
      });
    });

    const getChart = (id) => {
      if (charts.value) {
        return charts.value.find(
          (chart) => chart["index_derivative_id"] === id
        );
      }
    };

    const getChartData = (id) => {
      return getChart(id)?.chart.map((item) => [
        +item.timestamp * 1000,
        +item.value,
      ]);
    };
    return {
      locale,
      newLocale,
      t,
      whitePaper,
      roadMap,
      toggleDrop,
      dropDown,
      roadmap,
      toggleRoadmap,
      test,
      accardion,
      toggle,
      slideIndex: ref(1),
      slideRoud: ref("1"),
      slideTeam: ref("1"),
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",

      derivatives,
      charts,
      getChart,
      getChartData,
      isAuth: computed(() => store.getters["auth/isAuth"]),
    };
  },
  methods: {
    stage1() {
      ym(90160255, "reachGoal", "stage1");
      this.$router.push({ name: "auth.registr" });
    },
    stage2() {
      ym(90160255, "reachGoal", "stage 2");
      this.$router.push({ name: "index-directive" });
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
