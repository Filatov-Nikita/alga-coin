<template>
  <section class="dropdown" :class="{ dropdown__active: dropdown }">
    <div class="tw-container">
      <div class="dropdown__header">
        <img
          class=""
          src="~assets/images/app-logo-3.svg"
          alt="логотип"
          width="120"
          height="48"
        />
        <img @click="dropdown = false" src="./icons/square-active.svg" alt="" />
      </div>
      <div class="dropdown__buttons">
        <router-link class="button dropdown__button" :to="{ name: 'profile' }">
          <span class="button__text text__gradient"
            >{{ t("dropdown.buttons.login") }}
          </span>
          <img src="./icons/button-rect-grad.svg" alt="" class="button__svg" />
        </router-link>
        <router-link
          class="button dropdown__button"
          :to="{ name: 'auth.registr' }"
        >
          <span class="button__text text__gradient"
            >{{ t("dropdown.buttons.register") }}
          </span>
          <img
            src="./icons/button-trapezoid-grad.svg"
            alt=""
            class="button__svg"
          />
        </router-link>
      </div>
    </div>
  </section>
  <header>
    <div class="tw-container">
      <div class="header">
        <img
          class=""
          src="~assets/images/app-logo-3.svg"
          alt="логотип"
          width="120"
          height="48"
        />
        <nav class="nav">
          <span @click="scrollMeTo('advantages')" class="nav__item">{{
            t("nav.advantages")
          }}</span>
          <span @click="scrollMeTo('token')" class="nav__item">{{
            t("nav.tokenomics")
          }}</span>
          <span @click="scrollMeTo('roadmap')" class="nav__item">{{
            t("nav.roadmap")
          }}</span>
          <!-- <a href="#team" class="nav__item">{{ t("nav.team") }}</a> -->
          <span @click="scrollMeTo('contacts')" class="nav__item">{{
            t("nav.contacts")
          }}</span>
          <div
            class="lang"
            :class="{ lang_active: langDrop }"
            @click="toggleLangDrop"
            ref="lang"
          >
            <span>{{ locale }}</span>
            <div class="lang__drop">
              <span @click="newLocale('ru-RU')"> Русский</span>
              <span @click="newLocale('en-US')"> English</span>
            </div>
          </div>
        </nav>
        <div class="header__buttons" v-if="isAuth">
          <router-link class="button dropdown__button" :to="{ name: 'wallet' }">
            <span class="button__text text__gradient"
              >{{ t("dropdown.buttons.profile") }}
            </span>
            <img
              src="./icons/button-trapezoid-grad.svg"
              alt=""
              class="button__svg"
            />
          </router-link>
        </div>
        <div class="header__buttons" v-else>
          <router-link
            class="button dropdown__button button__gradient"
            :to="{ name: 'profile' }"
          >
            <span class="button__text text__gradient"
              >{{ t("dropdown.buttons.login") }}
            </span>
            <!-- <img
              src="./icons/button-rect-grad.svg"
              alt=""
              class="button__svg"
            /> -->
          </router-link>
          <router-link
            class="button dropdown__button"
            :to="{ name: 'auth.registr' }"
          >
            <span class="button__text text__gradient"
              >{{ t("dropdown.buttons.register") }}
            </span>
            <img
              src="./icons/button-trapezoid-grad.svg"
              alt=""
              class="button__svg"
            />
          </router-link>
        </div>
        <img
          @click="dropdown = true"
          class="header__dropdown-button"
          src="./square.png"
          alt=""
        />
      </div>
    </div>
  </header>
  <section class="more">
    <div class="tw-container">
      <div class="more__wrapper">
        <div class="more__top">
          <div class="more__left">
            <h1 class="text__gradient more__title">Alga Coin</h1>
            <p class="more__subtitle">
              {{ t("more.subtitle") }}
            </p>
          </div>
          <div class="more__right">
            <img class="more__img" src="./img/monet.png" alt="" />
          </div>
        </div>

        <div class="button more__button">
          <span @click="scrollMeTo('token')" class="button__text">
            {{ t("more.button") }}
          </span>
          <img src="./img/button.png" alt="" class="button__svg" />
        </div>

        <img src="./icons/horisont-line.svg" alt="" />
      </div>
    </div>
  </section>
  <section class="advantages" ref="advantages">
    <div class="tw-container">
      <div class="advantages__wrapper">
        <div class="advantages__top">
          <h2 class="advantages__title">{{ t("advantages.title") }}</h2>
        </div>
        <div class="advantages__cards">
          <div class="advantages__card card__round card__round_gradient">
            <div class="card__mini advantages__card-mini">
              <img
                src="./img/instantly.png"
                alt=""
                class="advantages__card-icon"
              />
            </div>
            <p class="advantages__card-text">
              {{ t("advantages.instantly") }}
            </p>
          </div>
          <div class="advantages__card card__round card__round_gradient">
            <div class="card__mini advantages__card-mini">
              <img src="./img/speed.png" alt="" class="advantages__card-icon" />
            </div>
            <p class="advantages__card-text">
              {{ t("advantages.speed") }}
            </p>
          </div>
          <div class="advantages__card card__round card__round_gradient">
            <div class="card__mini advantages__card-mini">
              <img src="./img/learn.png" alt="" class="advantages__card-icon" />
            </div>
            <p class="advantages__card-text">
              {{ t("advantages.learn") }}
            </p>
          </div>
          <div class="advantages__card card__round card__round_gradient">
            <div class="card__mini advantages__card-mini">
              <img
                src="./img/corona.png"
                alt=""
                class="advantages__card-icon"
              />
            </div>
            <p class="advantages__card-text">
              {{ t("advantages.corona") }}
            </p>
          </div>
          <div class="advantages__card card__round card__round_gradient">
            <div class="card__mini advantages__card-mini">
              <img src="./img/dao.png" alt="" class="advantages__card-icon" />
            </div>
            <p class="advantages__card-text">
              {{ t("advantages.dao") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="alga" ref="alga">
    <div class="tw-container">
      <div class="alga__wrapper">
        <div class="alga__top">
          <h2 class="alga__title">ALga</h2>
          <div class="alga__text">
            {{ t("alga.text") }}
          </div>
        </div>
        <div class="alga__cards">
          <div class="alga__card alga__card_trading card__round">
            <h3 class="alga__card-title">{{ t("alga.trading.title") }}</h3>
            <p class="alga__card-text">{{ t("alga.trading.text") }}</p>
            <a class="alga__link" href="https://www.lbank.info/">
              <span class="alga__card-link alga__card-link_trading">
                {{ t("alga.trading.link") }}
              </span>
              <svg
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8082 4.5571C11.6841 4.43437 7.47456 0.264263 7.47456 0.264263C7.35085 0.141724 7.18598 0.0744629 7.01017 0.0744629C6.83418 0.0744629 6.6694 0.141821 6.54569 0.264263L6.15223 0.654108C6.02862 0.776454 5.96053 0.939872 5.96053 1.11411C5.96053 1.28826 6.02862 1.45719 6.15223 1.57953L8.6804 4.08936H0.648286C0.286144 4.08936 0 4.3702 0 4.72902V5.28016C0 5.63898 0.286144 5.94813 0.648286 5.94813H8.70908L6.15233 8.47198C6.02872 8.59452 5.96062 8.75349 5.96062 8.92773C5.96062 9.10178 6.02872 9.26307 6.15233 9.38551L6.54579 9.7741C6.66949 9.89664 6.83427 9.96342 7.01027 9.96342C7.18608 9.96342 7.35095 9.89577 7.47466 9.77323L11.8083 5.48049C11.9323 5.35757 12.0005 5.19347 12 5.01904C12.0004 4.84402 11.9323 4.67983 11.8082 4.5571Z"
                  fill="url(#paint0_linear_16_1208)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_16_1208"
                    x1="7.4678"
                    y1="8.37412"
                    x2="8.49011"
                    y2="5.43841"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#58A1EA" />
                    <stop offset="1" stop-color="#A280EC" />
                  </linearGradient>
                </defs>
              </svg>
            </a>

            <img
              class="alga__card-img alga__card-img_trading"
              src="./icons/trade.svg"
              alt=""
            />
            <!-- <img src="./icons/waves.svg" alt="" /> -->
          </div>
          <div class="alga__card alga__card_learn card__round">
            <h3 class="alga__card-title">{{ t("alga.learn.title") }}</h3>
            <p class="alga__card-text">
              {{ t("alga.learn.text") }}
            </p>
            <a href="https://pentagonchannel.ru/" class="alga__link">
              <span class="alga__card-link alga__card-link_learn">
                {{ t("alga.learn.link") }}
              </span>
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8082 4.92914L7.47456 0.595417C7.35085 0.47171 7.18598 0.403809 7.01017 0.403809C6.83418 0.403809 6.6694 0.471808 6.54569 0.595417L6.15223 0.988974C6.02862 1.11249 5.96053 1.27746 5.96053 1.45336C5.96053 1.62916 6.02862 1.7997 6.15223 1.92321L8.6804 4.45695H0.648286C0.286144 4.45695 0 4.74046 0 5.1027V5.65908C0 6.02132 0.286144 6.33342 0.648286 6.33342H8.70908L6.15233 8.8813C6.02872 9.00501 5.96062 9.16549 5.96062 9.34139C5.96062 9.5171 6.02872 9.67993 6.15233 9.80354L6.54579 10.1958C6.66949 10.3195 6.83427 10.3869 7.01027 10.3869C7.18608 10.3869 7.35095 10.3187 7.47466 10.1949L11.8083 5.86132C11.9323 5.73723 12.0005 5.57157 12 5.39547C12.0004 5.21879 11.9323 5.05304 11.8082 4.92914Z"
                  fill="url(#paint0_linear_16_1232)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_16_1232"
                    x1="7.4678"
                    y1="8.78251"
                    x2="8.50753"
                    y2="5.82496"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00DD69" />
                    <stop offset="1" stop-color="#01606A" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
            <img
              class="alga__card-img alga__card-img_learn"
              src="./icons/education.svg"
              alt=""
            />
            <!-- <img src="./icons/waves.svg" alt="" /> -->
          </div>
          <div class="alga__card alga__card_waves card__round">
            <h3 class="alga__card-title">{{ t("alga.waves.title") }}</h3>
            <p class="alga__card-text">
              {{ t("alga.waves.text") }}
            </p>
            <span
              class="alga__link"
              @click="scrollMeTo('token')"
              style="margin-bottom: 30px"
            >
              <span href="#" class="alga__card-link alga__card-link_waves">
                {{ t("alga.waves.link") }}
              </span>
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8082 4.92059L7.47456 0.586872C7.35085 0.463166 7.18598 0.395264 7.01017 0.395264C6.83418 0.395264 6.6694 0.463263 6.54569 0.586872L6.15223 0.98043C6.02862 1.10394 5.96053 1.26891 5.96053 1.44482C5.96053 1.62062 6.02862 1.79115 6.15223 1.91467L8.6804 4.4484H0.648286C0.286144 4.4484 0 4.73191 0 5.09415V5.65054C0 6.01278 0.286144 6.32487 0.648286 6.32487H8.70908L6.15233 8.87276C6.02872 8.99646 5.96062 9.15695 5.96062 9.33285C5.96062 9.50855 6.02872 9.67138 6.15233 9.79499L6.54579 10.1873C6.66949 10.311 6.83427 10.3784 7.01027 10.3784C7.18608 10.3784 7.35095 10.3101 7.47466 10.1864L11.8083 5.85278C11.9323 5.72868 12.0005 5.56303 12 5.38693C12.0004 5.21025 11.9323 5.04449 11.8082 4.92059Z"
                  fill="url(#paint0_linear_16_1268)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_16_1268"
                    x1="9.65078"
                    y1="1.39358"
                    x2="12.6045"
                    y2="3.06339"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#EB694B" />
                    <stop offset="1" stop-color="#EB694B" stop-opacity="0.26" />
                  </linearGradient>
                </defs>
              </svg>
            </span>

            <img
              style="z-index: -1"
              class="alga__card-img alga__card-img_waves"
              src="./icons/waves.svg"
              alt=""
            />
            <!-- <img src="./icons/waves.svg" alt="" /> -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="steps" ref="steps">
    <div class="tw-container">
      <div class="steps__wrapper">
        <div class="steps__top">
          <h2 class="steps__title">{{ t("steps.title") }}</h2>
        </div>
        <div class="steps__cards">
          <div class="steps__card card__round card__round_gradient">
            <img class="steps__card-icon" src="./register.png" alt="" />
            <div class="steps__card-blur steps__card-blur_register"></div>
            <h3 class="steps__card-title">{{ t("steps.register.title") }}</h3>
            <p class="steps__card-text">{{ t("steps.register.text") }}</p>
            <router-link
              class="steps__card-link text__gradient-purple"
              :to="{ name: 'auth.registr' }"
            >
              {{ t("steps.register.link") }}
            </router-link>
          </div>
          <img class="steps__card-arrows" src="./icons/two-arrows.svg" alt="" />
          <div class="steps__card card__round card__round_gradient">
            <img class="steps__card-icon" src="./monets.png" alt="" />
            <div class="steps__card-blur steps__card-blur_monets"></div>
            <h3 class="steps__card-title">{{ t("steps.fund.title") }}</h3>
            <p class="steps__card-text">
              {{ t("steps.fund.text") }}
            </p>
          </div>
          <img class="steps__card-arrows" src="./icons/two-arrows.svg" alt="" />
          <div class="steps__card card__round card__round_gradient">
            <img class="steps__card-icon" src="./trading.png" alt="" />
            <div class="steps__card-blur steps__card-blur_trading"></div>
            <h3 class="steps__card-title">{{ t("steps.trade.title") }}</h3>
            <p class="steps__card-text">
              {{ t("steps.trade.text") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="token" ref="token">
    <div class="tw-container">
      <div class="token__wrapper">
        <div class="token__top">
          <h3 class="token__name text__gradient-purple">
            {{ t("about.name") }}
          </h3>
          <h2 class="token__title">{{ t("about.title") }}</h2>
        </div>
        <img class="more__img token__img" src="./img/monet.png" alt="" />
        <span class="token__count text__gradient">1 000 000 000</span>
        <p class="token__count-text">{{ t("about.text") }}</p>
      </div>
      <div class="token__wrapper-desktop">
        <div class="token__left">
          <img class="more__img token__img" src="./img/monet.png" alt="" />
        </div>
        <div class="token__right">
          <h3 class="token__name text__gradient-purple">
            {{ t("about.name") }}
          </h3>
          <h2 class="token__title">{{ t("about.title") }}</h2>
          <p class="token__text text__gradient" v-html="t('about.bigtext')"></p>
          <div>
            <a :href="whitePaper" class="token__link">{{
              t("about.button")
            }}</a>
          </div>
          <span class="token__count text__gradient">1 000 000 000</span>
          <p class="token__count-text">{{ t("about.text") }}</p>
        </div>
      </div>
    </div>
  </section>
  <section class="road-map" ref="roadmap">
    <div class="tw-container">
      <div class="road-map__wrapper">
        <div class="road-map__top">
          <div class="road-map__title">{{ t("road_map.title") }}</div>
        </div>
        <div class="road-map__content">
          <img class="road-map__line" src="./icons/line.svg" alt="" />
          <img
            class="road-map__line-horisont"
            src="./icons/horisont-line.svg"
            alt=""
          />
          <div class="road-map__years">
            <div class="road-map__year year" style="min-height: 350px">
              <div class="year__top">
                <img
                  class="year__dot year__dot_2021"
                  src="./icons/dot.svg"
                  alt=""
                />
                <span class="year__title text__gradient"> 2021 </span>
                <span class="year__text text__gradient">{{
                  t("road_map.year")
                }}</span>
              </div>
              <div class="year__bottom">
                <div class="year__item">
                  <h4 class="year__item-title text__gradient" @click="open(1)">
                    {{ t("road_map.stage") }} 1
                  </h4>

                  <p class="year__item-month year__item-month_dis">
                    {{ t("road_map.months[8]") }}-{{
                      t("road_map.months[11]")
                    }},
                  </p>
                  <p class="year__item-year year__item-year_dis">2021</p>
                </div>
              </div>
            </div>
            <div class="road-map__year year" style="min-height: 550px">
              <div class="year__top text__gradient">
                <img
                  class="year__dot year__dot_2022"
                  src="./icons/dot.svg"
                  alt=""
                />
                <span class="year__title text__gradient"> 2022 </span>
                <span class="year__text text__gradient">{{
                  t("road_map.year")
                }}</span>
              </div>
              <div class="year__bottom">
                <div class="year__item">
                  <h4 class="year__item-title text__gradient" @click="open(2)">
                    {{ t("road_map.stage") }} 2
                  </h4>
                  <p class="year__item-month year__item-month_line">
                    {{ t("road_map.months[0]") }}-{{ t("road_map.months[1]") }},
                  </p>
                  <p class="year__item-year year__item-year_line">2022</p>
                </div>
                <div class="year__item">
                  <h4 class="year__item-title text__gradient" @click="open(3)">
                    {{ t("road_map.stage") }} 3
                  </h4>
                  <p class="year__item-month year__item-month_line">
                    {{ t("road_map.months[2]") }}-{{ t("road_map.months[4]") }},
                  </p>
                  <p class="year__item-year year__item-year_line">2022</p>
                </div>
                <div class="year__item">
                  <h4 class="year__item-title text__gradient" @click="open(4)">
                    {{ t("road_map.stage") }} 4
                  </h4>
                  <p class="year__item-month year__item-month_line">
                    {{ t("road_map.months[3]") }}-{{ t("road_map.months[5]") }},
                  </p>
                  <p class="year__item-year year__item-year_line">2022</p>
                </div>
              </div>
            </div>
            <div class="road-map__year year year_dis">
              <div class="year__top">
                <img
                  class="year__dot year__dot_2023"
                  src="./icons/dot.svg"
                  alt=""
                />
                <span class="year__title year__title_dis"> 2023 </span>
                <span class="year__text year__text_dis">{{
                  t("road_map.year")
                }}</span>
              </div>
              <div class="year__bottom">
                <div class="year__item">
                  <h4 class="year__item-title text__gradient" @click="open(5)">
                    {{ t("road_map.stage") }} 5
                  </h4>
                  <p class="year__item-month year__item-month">
                    {{ t("road_map.months[5]") }}-{{ t("road_map.months[7]") }},
                  </p>
                  <p class="year__item-year year__item-year">2023</p>
                </div>
                <div class="year__item">
                  <h4 class="year__item-title text__gradient" @click="open(6)">
                    {{ t("road_map.stage") }} 6
                  </h4>
                  <p class="year__item-month year__item-month">
                    {{ t("road_map.months[10]") }},
                  </p>
                  <p class="year__item-year year__item-year">2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="buy" ref="buy">
    <div class="tw-container">
      <div class="buy__wrapper">
        <div class="buy__top">
          <h2 class="buy__title">{{ t("buy.title") }}</h2>
          <p class="buy__text">
            {{ t("buy.text") }}
          </p>
        </div>
        <div class="card__round buy__card">
          <div class="buy__card-top">
            <img
              class="buy__card-top_left"
              src="~assets/images/app-logo-3.svg"
              alt="логотип"
              width="120"
              height="48"
            />
            <div class="buy__card-top_right">
              <p class="buy__card-price">$0.114099</p>
              <p class="buy__card-indicator">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.01015 6.01015L4.49492 7.52538C3.93703 8.08327 3.03251 8.08327 2.47462 7.52538C1.91673 6.96749 1.91673 6.06297 2.47462 5.50508L3.98985 3.98985L0 0H10V10L6.01015 6.01015Z"
                    fill="#50E3C2"
                  />
                </svg>

                +5%
              </p>
            </div>
          </div>
          <div class="buy__card-bottom">
            <div class="buy__card-button buy__card-button_green">
              <span>
                {{ t("buy.buttons.buy") }}
              </span>
            </div>
            <div class="buy__card-button buy__card-button_red">
              <span>
                {{ t("buy.buttons.sell") }}
              </span>
            </div>
          </div>
        </div>
        <router-link class="button buy__button" :to="{ name: 'auth.registr' }">
          <span class="button__text"> {{ t("buy.button") }} </span>
          <svg
            class="button__icon"
            width="17"
            height="15"
            viewBox="0 0 17 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.02179 6.30688C1.09135 6.29559 1.16175 6.29038 1.23218 6.29129H13.2253L12.9638 6.16966C12.7082 6.04867 12.4757 5.88401 12.2766 5.68312L8.91341 2.31994C8.47048 1.89711 8.39605 1.21691 8.73704 0.708289C9.13391 0.166295 9.895 0.0486144 10.437 0.445484C10.4808 0.477565 10.5224 0.512534 10.5616 0.550165L16.6433 6.63187C17.1185 7.10662 17.119 7.87676 16.6442 8.35204C16.6439 8.35235 16.6436 8.35269 16.6433 8.35299L10.5616 14.4347C10.0859 14.909 9.31576 14.908 8.84138 14.4323C8.80406 14.3949 8.7692 14.355 8.73704 14.3131C8.39605 13.8044 8.47048 13.1242 8.91341 12.7014L12.2705 9.33215C12.449 9.1535 12.6542 9.0037 12.8787 8.88818L13.2436 8.72398H1.29912C0.677759 8.74705 0.132608 8.31301 0.0158787 7.70225C-0.0916538 7.03915 0.358698 6.41445 1.02179 6.30688Z"
              fill="white"
            />
          </svg>
          <img src="./img/button.png" alt="" class="button__svg" />
        </router-link>
      </div>
    </div>
  </section>
  <!-- <section class="comands">
    <div class="tw-container">
      <div class="comands__wrapper">
        <div class="comands__top">
          <h2 class="comands__title">{{t("team.title")}}</h2>
        </div>
        <div class="comands__list">
          <div class="user">
            <div class="user__img">
              <img src="./user.jpg" alt="" />
            </div>
            <h3 class="user__name">Keanu Reeves</h3>
            <p class="user__position">Senior Java Engineer</p>
          </div>
        </div>
      </div>
    </div>
  </section> -->
  <section class="question" ref="question">
    <div class="tw-container">
      <div class="question__wrapper">
        <div class="question__card">
          <a href="https://t.me/Algacoin" class="question__pie">
            <img src="./icons/telegram.svg" alt="" />
          </a>
          <h2 class="question__title">{{ t("question.title") }}</h2>
          <p class="question__text">
            {{ t("question.text") }}
          </p>
          <a href="#" class="question__link"> {{ t("question.button") }} </a>
        </div>

        <img class="question__plus" src="./icons/mobile-plus.svg" alt="" />
      </div>
    </div>
  </section>
  <footer class="footer">
    <div class="tw-container">
      <div class="footer__wrapper">
        <div class="footer__top">
          <img
            class="footer__logo"
            src="~assets/images/app-logo-3.svg"
            alt="логотип"
            width="120"
            height="48"
          />
          <div class="footer__paper">
            <span>© 2021-2023 ALGA</span>
            <a href="/whitePaperEng.pdf">White paper</a>
          </div>
          <div class="footer__socals">
            <div class="footer__pie">
              <a href="https://t.me/Algacoin">
                <img src="./icons/footer-telegram.svg" alt="" />
              </a>
            </div>
            <div class="footer__pie">
              <a href="#">
                <img src="./icons/insta.svg" alt="" />
              </a>
            </div>
            <div class="footer__pie">
              <a href="#">
                <img src="./icons/discord.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div class="footer__bottom">
          <span>© 2021-2023 ALGA</span>
          <a href="/whitePaperEng.pdf">White paper</a>
        </div>
      </div>
    </div>
  </footer>
  <AppModalNew
    v-model="modal"
    contentClass="tw-w-full xl:tw-w-1/2 tw-mx-auto tw-flex tw-flex-col"
  >
    <div class="popup__top">
      <div class="popup__top-left">
        <div class="popup__line-vertical"></div>
        <div class="popup__title" @click="close">
          {{ t(`stages.${openPopup}.title`) }}
        </div>
      </div>
      <div class="popup__top-right">
        <div class="popup__close" @click="modal = false"></div>
      </div>
    </div>
    <div class="popup__line"></div>
    <div class="popup__bottom">
      <ul class="popup__list">
        <li
          class="popup__item"
          v-for="(item, index) in +t(`stages.${openPopup}.itemslength`)"
          :key="item"
        >
          {{ t(`stages.${openPopup}.items[${index}]`) }}
        </li>
        <!-- <li class="popup__item">разработка логотипа</li>
        <li class="popup__item">разработка руководства</li>
        <li class="popup__item">
          создание сайта (дизайн, верстка, мобильная адаптация, разработка ядра
          личного кабинета)
        </li>
        <li class="popup__item">выпуск токенов</li>
        <li class="popup__item">подключение способов приема средств</li> -->
      </ul>
    </div>
  </AppModalNew>
</template>
<script>
import { ref, onUnmounted, onMounted, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
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
      nav: {
        advantages: "Преимущества",
        tokenomics: "Токеномика",
        roadmap: "Дорожная карта",
        team: "Команда",
        contacts: "Контакты",
      },
      more: {
        subtitle: "Первый в мире токен основанный на криптовалютных индексах",
        button: "Узнать больше",
      },
      advantages: {
        title: "Преимущества",
        instantly: "Мгновенная конвертация объема в составные части индекса",
        speed:
          "Быстрый рост капитализации дополнительно увеличивает стоимость токена",
        learn: "Ознакомиться с математическими расчетами индекса и токена",
        corona:
          "Alga — это экосистема, позволяющая заменить предложение ETF и централизованных фондов",
        dao: "DAO — возможность влиять на составные части индекса внутри экосистемы по принципу децентрализованного голосования ",
      },
      alga: {
        text: "Ваш надежный крипто-партнер для заработка",
        trading: {
          title: "Торгуй и зарабатывай",
          text: "Листинг на LBANK ex состоится в июне",
          link: "Торговать",
        },
        learn: {
          title: "Образование",
          text: "Улучшите свои торговые навыки с нашими партнерами Pentagon Trading Academy!",
          link: "Обучиться",
        },
        waves: {
          title: "Безопасность",
          text: "Токен обеспечен математической моделью и маркет-мейкинг алгоритмами, которые позволяют цене показывать отличный перфоманс",
          link: "Узнать больше",
        },
      },
      steps: {
        title: "Начните зарабатывать в 3 шага",
        register: {
          title: "Регистрируйтесь",
          text: "Переходи и регистрируйся",
          link: "Создать личный кабинет",
        },
        fund: {
          title: "Приобретайте",
          text: "Внесите депозит любы способом пополнения из нашего списка",
        },
        trade: {
          title: "Торгуйте",
          text: "Торги токеном откроются в июне на платформе LBank",
        },
      },
      about: {
        name: "О токене",
        title: "Токеномика",
        text: "Количество монет",
        bigtext:
          "Подробнее ознакомиться с механикой формирования <br /> индексаи работы токена вы можете в документе",
        button: "Ознакомиться",
      },
      road_map: {
        title: "Дорожная карта",
        year: "год",
        stage: "Этап",
        months: [
          "Январь",
          "Февраль",
          "Март",
          "Апрель",
          "Май",
          "Июнь",
          "Июль",
          "Август",
          "Сентябрь",
          "Октябрь",
          "Ноябрь",
          "Декабрь",
        ],
      },
      stages: {
        1: {
          title: "Этап 1: Сентрябрь-декабрь, 2021",
          itemslength: "6",
          items: [
            "разработка концепции, философии проекта и дорожной карты",
            "разработка логотипа",
            "разработка руководства",
            "создание сайта (дизайн, верстка, мобильная адаптация, разработка ядра личного кабинета)",
            "выпуск токенов",
            "подключение способов приема средств",
          ],
        },
        2: {
          title: "Этап 2: Январь-февраль, 2022",
          itemslength: "3",
          items: [
            "разработка маркетингового плана, SMM плана, контент плана",
            "продвижение аккаунтов в социальных сетях",
            "анонс предпродажного тура",
          ],
        },
        3: {
          title: "Этап 3: Март-май, 2022",
          itemslength: "3",
          items: [
            "организация предпродажного раунда (5% от общего количества токенов — 50 млн ALGA за 0,1$)",
            "анонс в социальных сетях и криптосообществах",
            "многоканальное продвижение ALGA",
          ],
        },
        4: {
          title: "Этап 4: Апрель-июнь, 2022",
          itemslength: "5",
          items: [
            "многоканальное продвижение и анонс Seed-раунда",
            "решение вопросов глобального партнерства с фондами и крупными инвесторами ",
            "решение вопроса получения правоустанавливающих документов ",
            "решение вопросов, связанных с организацией и партнерством с децентрализованными криптобиржами в рамках листинга IDO и ALGA",
            "проведение Seed-раунда (5% от общего количества токенов – 50 миллионов ALGA по 0,165 доллара США)",
          ],
        },
        5: {
          title: "Этап 5: Июнь-август, 2022",
          itemslength: "4",
          items: [
            "глобальная маркетинговая компания по физическому продвижению ALGA ECOSYSTEM в мире",
            "заключение партнерских соглашений с децентрализованными биржами на листинг ALGA после IDO",
            "анонс IDO",
            "проведение раунда IDO (1,5% от общего количества токенов – 15 миллионов ALGA за 0,3 доллара США)",
          ],
        },
        6: {
          title: "Этап 6: Ноябрь, 2022",
          itemslength: "4",
          items: [
            "листинг на децентрализованных биржах",
            "поддержание пула ликвидности за счет биржевого резерва (20% от общего количества токенов — 200 млн ALGA со стартовой ценой $1)",
            "решение вопроса создания собственной технологии блокчейн или стратегическое партнерство с существующими технологиями блокчейна",
            "переход на собственные Ноды",
          ],
        },
      },
      buy: {
        title: "Купить ALGA",
        text: "Приобретайте ALGA и присоединяйтесь к новейшим инструментам инвестирования!",
        buttons: {
          buy: "Купить",
          sell: "Продать",
        },
        button: "Создать аккаунт",
      },
      team: {
        title: "Команда",
      },
      question: {
        title: "Остались вопросы?",
        text: "По всем вопросам напишите нам и оператор свяжется с вами в кратчайшее время",
        button: "Написать",
      },
    },

    "en-US": {
      dropdown: {
        buttons: {
          register: "registration",
          login: "login",
          profile: "profile",
        },
      },
      nav: {
        advantages: "Advantages",
        tokenomics: "Tokenomics",
        roadmap: "Road map",
        team: "Team",
        contacts: "Contacts",
      },
      more: {
        subtitle: "First index-based crypto token",
        button: "learn more ",
      },
      advantages: {
        title: "Advantages",
        instantly: "Instant conversion of volume into index constituents",
        speed:
          "The rapid growth of capitalization additionally increases the cost of the token",
        learn:
          "Know more with the mathematical calculations of the index and token",
        corona:
          "Alga is an ecosystem to replace the offering of ETFs and centralized funds",
        dao: "DAO — the ability to influence the constituent parts of the index within the ecosystem on the principle of decentralized voting",
      },
      alga: {
        text: "Your trustful crypto partner for earnings ",
        trading: {
          title: "Trade and earn ",
          text: "Listing on LBANK ex will be in june",
          link: "Trade",
        },
        learn: {
          title: "Education",
          text: "Power up your trading skills with our partner Pentagon Trading Academy! ",
          link: "Start",
        },
        waves: {
          title: "Safety",
          text: "The token is provided with a mathematical model and market-making algorithms that allow the price of the token to show excellent performance",
          link: "Learn more",
        },
      },
      steps: {
        title: "Start earning in 3 Steps",
        register: {
          title: "Register",
          text: "Go and register",
          link: "Сreate an account",
        },
        fund: {
          title: "Fund",
          text: "Make a deposit via any funding method from our list",
        },
        trade: {
          title: "Trade",
          text: "Trading on LBANK ex will be in june",
        },
      },
      about: {
        name: "about",
        title: "Tokenomics",
        text: "Total supply",
        bigtext:
          "You can learn more about the mechanics of generating  <br /> the index of the token's operation in the document",
        button: "learn",
      },
      road_map: {
        title: "Road map",
        year: "year",
        stage: "Stage",
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
      },
      stages: {
        1: {
          title: "Stage 1: September-December, 2021",
          itemslength: "6",
          items: [
            "development of the concept, philosophy of the project and the roadmap",
            "logo development",
            "development of the guideline",
            "website creation (design, layout, mobile adaptation, development of the core of the personal account)",
            "issue of tokens",
            "connection of fund acceptance methods",
          ],
        },
        2: {
          title: "Stage 2: January-February, 2022",
          itemslength: "3",
          items: [
            "development of a marketing plan, SMM plan, content plan",
            "promotion of accounts in social networks",
            "announcement of the pre-sale round",
          ],
        },
        3: {
          title: "Stage 3: March-May, 2022",
          itemslength: "3",
          items: [
            "organization of a pre-sale round (5% of the total number of tokens – 50 million ALGA for $ 0.1)",
            "announcement in the social networks and crypto communities",
            "multi-channel promotion of ALGA",
          ],
        },
        4: {
          title: "Stage 4: April-June, 2022",
          itemslength: "5",
          items: [
            "multi-channel promotion and announcement of the Seed round",
            "solving issues of global partnership with funds and large investors (announcement)",
            "solving the issue of obtaining legal documents (announcement)",
            "solving issues related to the organization and partnership with decentralized crypto exchanges within the framework of IDO and ALGA listing (announcement)",
            "conductingSeed round (5% of the total number of tokens – 50 million ALGA at $0.165)",
          ],
        },
        5: {
          title: "Stage 5: June-August, 2022",
          itemslength: "4",
          items: [
            "global marketing company for the physical promotion of ALGA ECOSYSTEM in the world",
            "onclusion of partnership agreements with decentralized exchanges on the ALGA listing after the IDO round",
            "announcement of the IDO round",
            "conduction of the IDO round (1.5% of the total number of tokens – 15 million ALGA for $0.3)",
          ],
        },
        6: {
          title: "Stage 6: November, 2022",
          itemslength: "4",
          items: [
            "listing on decentralized exchanges (announcement)",
            "maintaining the liquidity pool at the expense of the exchange reserve (20% of the total number of tokens – 200 million ALGA with the starting price of $1)",
            "solving the issue of creating our own blockchain technology or strategic partnership with existing blockchain technologies ",
            "switching to our own nodes",
          ],
        },
      },
      buy: {
        title: "Buy Alga",
        text: "Get Alga and join the investing revolution!",
        buttons: {
          buy: "Buy",
          sell: "Sell",
        },
        button: "Create an account",
      },
      team: {
        title: "Team",
      },
      question: {
        title: "Any questions?",
        text: "If you have any questions, please contact us at , and an operator will get back with you as soon as possible",
        button: "GET INFO",
      },
    },
  },
};
export default {
  setup() {
    const modal = ref(false);
    const store = useStore();
    const langDrop = ref(false);
    const $i18n = useI18n();
    const locale = computed(() => {
      
      if ($i18n.locale.value === "en-US" || $i18n.locale.value === "en")
        return "English";
      if ($i18n.locale.value === "ru-RU" || $i18n.locale.value === "ru")
        return "Русский";
      return null;
    });
    const newLocale = (lang) => {
      window.app.setLocale(lang, true);
    };
    const lang = ref(null);
    const toggleLangDrop = () => {
      langDrop.value = !langDrop.value;
    };

    onMounted(() => {
      window.addEventListener("click", (e) => {
        if (langDrop.value && !e.composedPath().includes(lang.value)) {
          langDrop.value = false;
          lang.value.classList.remove("lang_active");
        }
      });
    });
    onUnmounted(() => {
      window.removeEventListener("click");
    });
    const dropdown = ref(false);
    const { t } = useI18n(i18n);
    const openPopup = ref(null);
    const open = (a) => {
      modal.value = true;
      openPopup.value = a;
    };
    const whitePaper = store.getters["landing/footer"](t)[0].to;
    const isAuth = computed(() => store.state.auth.isAuth);
    return {
      open,
      openPopup,
      modal,
      isAuth,
      whitePaper,
      langDrop,
      lang,
      locale,
      newLocale,
      toggleLangDrop,
      dropdown,
      t,
    };
  },
  methods: {
    scrollMeTo(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
  },
};
</script>

<style scoped lang="scss">
.popup {
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 27px;
  }
  &__line {
    border: 1px solid rgba(102, 116, 192, 0.3);
  }
  &__title {
    font-weight: 500;
    font-size: 32px;
    line-height: 26px;
    padding-left: 17px;
    position: relative;
    &:after {
      position: absolute;
      content: "";
      height: 100%;
      width: 7px;
      background: linear-gradient(
        315.39deg,
        #f64f59 2.16%,
        #c471ed 49.55%,
        #12c2e9 100%
      );
      border-radius: 10px;
      left: 0;
      bottom: -2px;
    }
  }
  &__bottom {
    padding-top: 55px;
  }
  &__list {
    font-weight: 300;
    font-size: 24px;
    line-height: 50px;
  }
  &__item {
    padding-left: 30px;
    position: relative;
    &:after {
      position: absolute;
      content: "";
      background: url(~assets/images/check.svg);
      width: 14px;
      height: 14px;
      left: 0;
      top: 20px;
    }
  }
  &__close {
    background: url(~assets/images/close.svg);
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
}
.popupmode {
  display: none;
  position: absolute;
}
.dropdown {
  background: #23133d;
  position: absolute;
  width: 100%;
  transform: translateY(-100%);
  transition: all 0.3s ease;
  &__active {
    transform: translateY(0);
  }
  &__header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 40px;
  }
  &__buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 73px;
  }
  &__button {
    &:first-child {
      margin-right: 10px;
    }
    max-height: 52px !important;
    max-width: 170px !important;
    height: 100%;
  }
}
.header {
  //   padding-top: 16px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  &__buttons {
    display: none;
  }
}
.nav {
  display: none;
}
.advantages,
.alga,
.steps,
.token,
.road-map,
.buy,
.comands,
.question,
.footer {
  padding-top: 90px;
}

.advantages__title {
  font-weight: 400;
  font-size: 24px;
  line-height: 120%;
  text-align: center;
}

.advantages,
.more,
.alga,
.steps,
.token,
.buy,
.comands {
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.more {
  &__title {
    text-align: center;
    font-weight: 500;
    font-size: 120px;
    line-height: 100%;
    margin-bottom: 10px;
  }
  &__subtitle {
    font-size: 15px;
    line-height: 140%;
    text-align: center;

    color: #edf1ff;
    margin-bottom: 23px;
  }
  &__img {
    mix-blend-mode: exclusion;
    margin: 0 auto;
    margin-bottom: 22px;
  }
  &__button {
    margin-bottom: 60px;
  }
}

.advantages,
.alga,
.steps,
.token,
.road-map,
.buy,
.comands {
  &__top {
    text-align: center;
    margin-bottom: 40px;
  }
  &__title {
    font-weight: 400;
    font-size: 24px;
    line-height: 120%;
    padding: 0 40px;
  }
  &__text {
    margin-top: 9.6px;
    font-weight: 400;
    font-size: 15px;
    line-height: 140%;
  }
}
.advantages {
  &__card {
    &:not(:last-child) {
      margin-bottom: 36px;
    }
    &-icon {
      max-width: 70%;
      width: 100%;
    }
    &-mini {
      margin-bottom: 18px;
    }
    &-text {
      font-weight: 400;
      font-size: 15px;
      line-height: 140%;
    }
  }
}
.alga {
  &__link {
    display: flex;
    align-items: center;
  }
  &__card {
    position: relative;
    overflow: hidden;
    &:not(:last-child) {
      margin-bottom: 36.6px;
    }
    &-title {
      font-weight: 700;
      font-size: 18px;
      line-height: 40px;
      padding-top: 10px;
      margin-bottom: 6px;
    }
    &-text {
      font-weight: 400;
      font-size: 15px;
      line-height: 140%;
      margin-bottom: 10px;
    }
    &-link {
      font-weight: 500;
      font-size: 16px;
      line-height: 40px;
      margin-right: 8px;
      display: inline-block;
      &_trading {
        background: linear-gradient(22.91deg, #58a1ea 29.78%, #a280ec 53.18%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: #58a1ea;
      }
      &_learn {
        background: linear-gradient(22.91deg, #00dd69 29.78%, #01606a 53.18%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: #00dd69;
      }
      &_waves {
        background: linear-gradient(
          115.19deg,
          #eb694b 57.9%,
          rgba(235, 105, 75, 0.26) 79.99%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: #eb694b;
      }
    }
    &_trading {
      background: linear-gradient(104.54deg, #161d40 5.91%, #201346 85.27%);
      border: 2px solid rgba(32, 40, 77, 0.7);
      box-sizing: border-box;
      border-radius: 16px;
    }
    &_learn {
      background: linear-gradient(
        104.54deg,
        rgba(39, 17, 50, 0.75) 5.91%,
        #0c1438 85.27%
      );
      border: 2px solid rgba(32, 40, 77, 0.7);
    }
    &_waves {
      background: linear-gradient(
        104.54deg,
        rgba(64, 22, 22, 0.63) 5.91%,
        rgba(19, 27, 70, 0.57) 85.27%
      );
      border: 2px solid rgba(32, 40, 77, 0.7);
    }
    &-img {
      position: absolute;
      &_trading {
        bottom: 0;
        right: 0;
      }
      &_learn {
        top: 0;
        right: 0;
      }
      &_waves {
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
      }
    }
  }
}
.steps {
  &__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-top: 110px;
    &-title {
      padding-top: 57px;
      font-weight: 700;
      font-size: 18px;
      line-height: 40px;

      text-align: center;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    &-text {
      font-weight: 400;
      font-size: 15px;
      line-height: 140%;
      text-align: center;
      color: #ded6e8;
      margin-bottom: 16px;
    }
    &-icon {
      z-index: 100;
      position: absolute;
      top: -70px;
      height: 110px;

      //   background: #3f3c8d;
      //   opacity: 0.7;
      //   filter: blur(74px);
    }
    &-blur {
      position: absolute;
      width: 70px;
      height: 70px;
      //   top: -50%;
      right: 50%;
      transform: translate(50%, -50%);
      filter: blur(74px);
      opacity: 0.7;
      &_register {
        background: #3f3c8d;
      }
      &_monets {
        background: #ff8e3e;
      }
      &_trading {
        background: #ff303a;
      }
    }
    &-arrows {
      margin-top: 40px;
      margin-right: auto;
      margin-left: auto;
    }
  }
}
.token {
  &__name {
    text-transform: uppercase;
  }
  &__img {
    margin-bottom: 20px;
    transform: matrix(-0.99, -0.12, -0.12, 0.99, 0, 0);
  }
  &__count {
    font-weight: 500;
    font-size: 36px;
    line-height: 40px;
    letter-spacing: -0.02em;
    margin-bottom: 6px;
  }
  &__count-text {
    font-size: 16px;
    line-height: 26px;
    color: #ded6e8;
  }
  &__wrapper-desktop {
    display: none;
  }
}
.road-map {
  &__content {
    display: flex;

    position: relative;
  }
  &__line {
    height: 100%;
    padding-top: 25px;
    padding-bottom: 25px;
    &-horisont {
      display: none;
    }
  }

  &__years {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 26px;
  }
  .year {
    &__top {
      font-weight: 500;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 24px;
    }

    &__dot {
      position: absolute;
      &_2021 {
        left: 8px;
        top: 6px;
      }
      &_2022 {
        left: 16px;
      }
      &_2023 {
        left: 8px;
        top: 910px;
      }
    }
    &__title {
      font-size: 64px;
      line-height: 55px;
    }
    &__title,
    &__text {
      &_dis {
        background-color: rgba(198, 208, 255, 13%);
        color: transparent;
        text-shadow: 0px -3px 10px rgb(255 255 255 / 15%);
        backdrop-filter: blur(16px);
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
      }
    }
    &__item {
      padding-bottom: 20px;
      position: relative;
      &:not(:first-child) {
        padding-top: 10px;
      }
      &:not(:first-child):after {
        position: absolute;
        content: "";
        top: 0;
        width: 50px;
        border: 1px solid #484f77;
      }
      &-title {
        cursor: pointer;
        font-weight: 700;
        font-size: 14px;
        line-height: 36px;
        margin-bottom: 10px;
        // background-color: #565656;
        color: transparent;
        background-clip: text;
        // backdrop-filter: blur(4px);
        // text-shadow: 0px 2px 3px rgba(255, 255, 255, 0.5);
      }
      &-month,
      &-year {
        font-size: 15px;
        line-height: 140%;
        color: #fff;
        &_dis {
          color: gray;
        }
        &_line {
          text-decoration: underline;
        }
      }
      &-year {
      }
    }

    letter-spacing: -0.02em;
  }
}
.buy {
  position: relative;

  &::after {
    position: absolute;
    background: url("~assets/images/bg-line.png") center no-repeat;
    content: "";
    top: 0;
    z-index: -1;
    right: 0;
    left: 0;
    bottom: 0;
    mix-blend-mode: color-dodge;
    // opacity: 0.2;
    //   z-index: 1;
  }
  &::before {
    position: absolute;
    mix-blend-mode: darken;
    width: 50%;
    height: 60%;
    left: 0;
    z-index: 1;
    /* top: -31px; */
    top: -9px;
    left: 0;
    background: url("~assets/images/test.png") center no-repeat;
    background-size: cover;
    content: "";
  }
  &__wrapper {
    z-index: 2;
  }
  &__card {
    background: linear-gradient(
      69.24deg,
      #111838 -17.95%,
      rgba(11, 17, 44, 0) 160.27%
    );
    mix-blend-mode: normal;
    border: 1px solid #312f62;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 30px;
    &-top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
      &_left {
      }
      &_right {
      }
    }

    &-price {
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 6px;
    }
    &-indicator {
      display: flex;
      justify-content: space-between;
      align-items: center;
      justify-content: flex-start;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      display: flex;
      align-items: center;

      color: #50e2c2;
      *:first-child {
        margin-right: 5px;
      }
    }
    &-bottom {
      display: flex;
      justify-content: space-between;
    }
    &-button {
      padding: 11px 20px;
      border-width: 1px;
      border-style: solid;
      border-radius: 8px;
      text-align: center;
      width: 50%;
      font-size: 14px;
      line-height: 17px;
      &:first-child {
        margin-right: 10px;
      }
      &_green {
        border-color: #03b962;
        color: #03b962;
      }
      &_red {
        border-color: #e24949;
        color: #e24949;
      }
    }
  }
  &__button {
    margin-bottom: 60px;
  }
}
.button {
  display: flex;
  max-width: 264px;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 73px;
  height: 100%;
  color: #fff;
  cursor: pointer;
  &__text {
    z-index: 1;
    letter-spacing: 0.04em;
    font-weight: 700;
    text-transform: uppercase;
    // margin-right: 8px;
  }
  &__icon {
    width: 17px;
    height: 14px;
    z-index: 1;
  }
  &__svg {
    width: 100%;
    position: absolute;
    height: 100%;
  }
}
.comands {
  &__list {
    display: flex;
    flex-direction: column;
  }
}
.user {
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 48px;
  }
  &__img {
    flex-shrink: 0;
    width: 200px;
    height: 200px;
    border-radius: 99999px;
    margin-bottom: 15px;
    overflow: hidden;
    backdrop-filter: blur(8px);
    position: relative;
    &:before {
      position: absolute;
      content: "";

      box-shadow: inset 2px 2px 2px #7287ff;
    }
  }
  &__name {
    font-weight: 500;
    font-size: 20px;
    line-height: 175%;
    /* or 35px */

    display: flex;
    align-items: center;
    text-align: center;
    margin-bottom: 9px;

    /* Grey / Grey 0 */

    color: #f7f7fa;
  }
  &__position {
    font-size: 15px;
    line-height: 175%;
    /* or 26px */

    display: flex;
    align-items: center;
    text-align: center;

    color: #c7c7e6;
  }
}

.question {
  &__card {
    background: rgba(255, 255, 255, 0.03);
    box-shadow: inset 0px 2px 4px rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(86px);

    border-radius: 80px 20px 20px 20px;
    padding: 68px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
  }
  &__wrapper {
    position: relative;
  }
  &__plus {
    position: absolute;
    bottom: -40px;
    right: -5px;
  }
  &__pie {
    margin-bottom: 30px;
    // width: 70px;
    // height: 70px;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // border-radius: 9999px;
    // background: linear-gradient(
    //   315.39deg,
    //   #f64f59 2.16%,
    //   #c471ed 49.55%,
    //   #12c2e9 100%
    // );
  }
  &__title {
    font-size: 24px;
    line-height: 120%;
    margin-bottom: 20px;
  }
  &__text {
    margin-bottom: 30px;
    font-size: 15px;
    line-height: 140%;
    text-align: center;
  }
  &__link {
    background: linear-gradient(
      315.39deg,
      #f64f59 2.16%,
      #c471ed 49.55%,
      #12c2e9 100%
    );
    border-radius: 10px;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    letter-spacing: 0.04em;
    color: #fff;
    text-transform: uppercase;
    width: 100%;
    padding: 20.5px;
    text-align: center;
  }
}
.footer {
  padding-bottom: 16px;
  &__wrapper {
  }
  &__top {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__logo {
    margin-bottom: 41px;
    width: 176px;
  }
  &__socals {
    display: flex;
    justify-content: center;
    margin-bottom: 41px;
  }
  &__pie {
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
  &__pie {
    width: 46px;
    height: 46px;
  }
  &__paper {
    display: none;
  }
  &__bottom {
    display: flex;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    background: linear-gradient(
      91.5deg,
      #556194 23.31%,
      rgba(38, 52, 114, 0.62) 104.59%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #0b2349;
    & > span:first-child {
      margin-right: 10px;
    }
    & > * {
      width: 50%;
      text-align: center;
    }
  }
}

@media screen and (min-width: 1100px) {
  .lang {
    position: relative;
    color: #fff !important;
    font-size: 16px;
    line-height: 36px;
    margin: 0 25px;
    cursor: pointer;
    padding-right: 20px;
    &::before {
      width: 10px;
      height: 5.7px;
      position: absolute;
      content: "";
      background: url("~assets/images/arrow.svg") center no-repeat;
      right: 0;
      top: 50%;
      transform: translateY(-50%) rotate(0deg);
      transition: transform 0.5s ease;
    }
    &__drop {
      position: absolute;
      max-height: 0vh;
      overflow: hidden;
      transition: max-height 0.5s ease;
    }
    &_active {
      &::before {
        transform: translateY(-50%) rotate(180deg);
      }
    }
    &_active &__drop {
      max-height: 100vh;
      transition: max-height 1s ease;
    }
  }
  body {
  }
  .advantages,
  .alga,
  .steps,
  .token,
  .road-map,
  .buy,
  .comands,
  .question,
  .footer {
    padding-top: 190px;
  }

  .advantages,
  .alga,
  .steps,
  .token,
  .road-map,
  .buy,
  .comands {
    &__top {
      text-align: center;
      margin-bottom: 80px;
    }
    &__title {
      font-size: 66px;
      line-height: 76px;
      padding: 0 40px;
    }
    &__text {
      margin-top: 40px;
      font-weight: 500;
      font-size: 24px;
      line-height: 40px;
      color: #edf1ff;
    }
  }

  .header {
    padding-top: 90px;
    padding-bottom: 56px;
    &__dropdown-button {
      display: none;
    }
    &__buttons {
      display: flex;
    }
    .dropdown {
      &__button {
        padding: 26px 20px;
        min-height: 52px;
      }
    }
  }

  .nav {
    display: flex;
    align-items: center;
    &__item {
      color: #fff !important;
      font-size: 16px;
      line-height: 36px;
      margin: 0 25px;
      position: relative;
      cursor: pointer;
      &::before {
        position: absolute;
        content: "";
        width: 0px;
        height: 2px;
        bottom: 0px;
        background: linear-gradient(
          296.42deg,
          rgba(246, 79, 89, 0) 17.18%,
          #c471ed 49.1%,
          rgba(18, 194, 233, 0) 83.07%
        );
        transition: width 0.3s ease-in;
      }
      &:hover {
        &::before {
          width: 100%;
          background: linear-gradient(
            296.42deg,
            rgba(246, 79, 89, 0) 17.18%,
            #c471ed 49.1%,
            rgba(18, 194, 233, 0) 83.07%
          );
          transition: width 0.7s ease-in-out;
          border-radius: 1px;
        }
      }
    }
  }

  .more {
    &__top {
      display: flex;
    }
    &__title {
      text-align: left;
      font-size: 120px;
      line-height: 160px;
      margin-bottom: 80px;
    }
    &__subtitle {
      text-align: left;
      font-size: 66px;
      line-height: 75px;
    }
    &__left {
    }
    &__right {
      flex-shrink: 0;
      & > img {
        width: 479px;
      }
    }
  }
  .advantages {
    &__cards {
      display: grid;
      grid-template-columns: repeat(6, minmax(0, 1fr));
      gap: 30px;
    }
    &__card {
      display: flex;
      align-items: center;
      grid-column: span 2 / span 2;
      padding: 53px 17px;
      &:not(:last-child) {
        margin-bottom: 0;
      }
      &:nth-last-child(2) {
        grid-column: 2/4;
      }

      &-mini {
        flex-shrink: 0;
        margin-bottom: 0;
        margin-right: 25px;
      }
    }
  }
  .alga {
    &__cards {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 50px;
    }
    &__card {
      &:not(:last-child) {
        margin-bottom: 0;
      }
    }
  }
  .steps {
    &__cards {
      display: flex;
      justify-content: center;
    }
    &__card {
      flex-basis: 334px;
      &-arrows {
        margin-top: 110px;
        margin-right: 12px;
        margin-left: 12px;
        transform: rotate(270deg);
      }
    }
  }
  .token {
    &__wrapper {
      display: none;
      &-desktop {
        display: flex;
        // justify-content: center;
      }
    }
    &__left {
      margin-right: 24px;
      & > img {
        width: 514px;
      }
    }
    &__right {
      display: flex;
      flex-direction: column;
    }
    &__name {
      font-size: 16px;
      line-height: 40px;
      /* or 250% */

      display: flex;
      align-items: center;
      letter-spacing: 0.03em;
      margin-bottom: 20px;
    }
    &__title {
      padding: 0;
      font-size: 66px;
      line-height: 100%;
      margin-bottom: 12px;
    }
    &__text {
      margin-bottom: 27px;
      font-weight: 500;
    }
    &__count {
      font-size: 80px;
      line-height: 100%;
    }
    &__link {
      display: inline-block;
      background: linear-gradient(269.98deg, #499ee0 -1.41%, #9c58b1 102.1%);
      border-radius: 10px;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.04em;
      color: #fff;
      text-transform: uppercase;
      padding: 20.5px 30px;
      text-align: center;
      margin-bottom: 98px;

      margin-left: 100px;
    }
  }
  .road-map {
    &__line {
      display: none;
      &-horisont {
        display: block;
        position: absolute;
        height: auto;
        width: 80%;
        left: 50%;
        transform: translateX(-50%);
        top: 110px;
      }
    }
    &__years {
      margin-left: 0;
      flex-direction: row;
      margin: 0 auto;
      width: 90%;
    }

    .year {
      display: flex;
      flex-direction: column;
      align-items: center;
      &__top {
        align-items: center;
        margin-bottom: 182px;
        flex-direction: column;
        position: relative;
      }
      &__title {
        margin-bottom: 10px;
      }
      &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      &__dot {
        left: 50%;
        top: 118px;
        transform: translateX(-50%);
      }
    }
  }
  .buy {
    &::after {
      position: absolute;
      background: url("~assets/images/bg-line.png") center no-repeat;
      content: "";
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      mix-blend-mode: color-dodge;
      z-index: -1;
      // opacity: 0.2;
      //   z-index: 1;
    }
    &::before {
      position: absolute;
      mix-blend-mode: darken;
      width: 50%;
      height: 60%;
      left: 0;
      z-index: 1;
      /* top: -31px; */
      top: -9px;
      left: 0;
      background: url("~assets/images/test.png") center no-repeat;
      background-size: cover;
      content: "";
    }
    &__wrapper {
      z-index: 2;
    }
    &__card {
      display: flex;
      padding: 23px 14px;
      width: auto;
      margin-bottom: 50px;
      &-top {
        margin-bottom: 0;
        &_left {
          margin-right: 27px;
        }
        &_right {
          margin-right: 36px;
        }
      }
      &-button {
        padding: 6px 18px;
        display: flex;
        align-items: center;
        height: 41px;
      }
    }
    &__button {
      margin-bottom: 0;
    }
  }
  .question {
    &__card {
      background: rgba(6, 9, 23, 0.2);
      box-shadow: 0px 14px 44px #02040f, inset 0px 10px 62px #30385f;
      width: 80%;
      margin: 0 auto;
      padding: 80px 20px;
      position: relative;
      // overflow: hidden;
      &::after,
      &::before {
        position: absolute;
        content: "";
      }
      &::after {
        background: url("~assets/images/circles-left.png") center bottom
          no-repeat;

        width: 480px;
        height: 480px;
        left: -95px;
        bottom: 0px;
      }
      &::before {
        background: url("~assets/images/circles-right.png") center no-repeat;

        width: 263px;
        height: 480px;
        right: 0;
      }
    }
    &__plus {
      bottom: -50px;
      right: 67px;
    }
    &__title {
      font-size: 46px;
      line-height: 36px;
    }
    &__text {
      color: #b1bbe4;
      font-size: 18px;
      line-height: 26px;
      margin-bottom: 56px;
    }
    &__link {
      width: auto;
    }
    &__pie {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(25%, -25%);
    }
  }
  .footer {
    &__top {
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
    }
    &__paper {
      white-space: nowrap;
      display: flex;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      background: linear-gradient(
        91.5deg,
        #556194 23.31%,
        rgba(38, 52, 114, 0.62) 104.59%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: #0b2349;
      & > span:first-child {
        margin-right: 70px;
      }
    }
    &__bottom {
      display: none;
    }
  }
}
</style>
