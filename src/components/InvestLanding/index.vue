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
  <div class="tw-container">
    <div class="header">
      <img
        class=""
        src="~assets/images/app-logo-3.svg"
        alt="логотип"
        width="120"
        height="48"
      />
      <img @click="dropdown = true" src="./square.png" alt="" />
    </div>
  </div>
  <section class="more">
    <div class="tw-container">
      <div class="more__wrapper">
        <h1 class="text__gradient more__title">Alga Coin</h1>
        <p class="more__subtitle">
          {{ t("more.subtitle") }}
        </p>
        <img class="more__img" src="./img/monet.png" alt="" />

        <div class="button more__button">
          <span @click="scrollMeTo('token')" class="button__text">
            {{ t("more.button") }}
          </span>
          <img src="./img/button.png" alt="" class="button__svg" />
        </div>

        <img src="./icons/horisont-line.svg" alt="" style="width: 100%" />
      </div>
    </div>
  </section>
  <section class="advantages">
    <div class="tw-container">
      <div class="advantages__wrapper">
        <div class="advantages__top">
          <h2 class="advantages__title">{{ t("advantages.title") }}</h2>
        </div>
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
            <img src="./img/corona.png" alt="" class="advantages__card-icon" />
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
  </section>
  <section class="alga">
    <div class="tw-container">
      <div class="alga__wrapper">
        <div class="alga__top">
          <h2 class="alga__title">ALga</h2>
          <div class="alga__text">
            {{ t("alga.text") }}
          </div>
        </div>

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
  </section>
  <section class="steps">
    <div class="tw-container">
      <div class="steps__wrapper">
        <div class="steps__top">
          <h2 class="steps__title">{{ t("steps.title") }}</h2>
        </div>
        <img class="steps__card-icon" src="./register.png" alt="" />
        <div class="steps__card card__round card__round_gradient">
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
        <img class="steps__card-icon" src="./monets.png" alt="" />
        <div class="steps__card card__round card__round_gradient">
          <div class="steps__card-blur steps__card-blur_monets"></div>
          <h3 class="steps__card-title">{{ t("steps.fund.title") }}</h3>
          <p class="steps__card-text">
            {{ t("steps.fund.text") }}
          </p>
        </div>
        <img class="steps__card-arrows" src="./icons/two-arrows.svg" alt="" />
        <img class="steps__card-icon" src="./trading.png" alt="" />
        <div class="steps__card card__round card__round_gradient">
          <div class="steps__card-blur steps__card-blur_trading"></div>
          <h3 class="steps__card-title">{{ t("steps.trade.title") }}</h3>
          <p class="steps__card-text">
            {{ t("steps.trade.text") }}
          </p>
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
    </div>
  </section>
  <section class="road-map">
    <div class="tw-container">
      <div class="road-map__wrapper">
        <div class="road-map__top">
          <div class="road-map__title">{{ t("road_map.title") }}</div>
        </div>
        <div class="road-map__content">
          <img class="road-map__line" src="./icons/line.svg" alt="" />
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
                  <h4 class="year__item-title text__gradient">
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
                  <h4 class="year__item-title text__gradient">
                    {{ t("road_map.stage") }} 2
                  </h4>
                  <p class="year__item-month year__item-month_line">
                    {{ t("road_map.months[0]") }}-{{ t("road_map.months[1]") }},
                  </p>
                  <p class="year__item-year year__item-year_line">2022</p>
                </div>
                <div class="year__item">
                  <h4 class="year__item-title text__gradient">
                    {{ t("road_map.stage") }} 2
                  </h4>
                  <p class="year__item-month year__item-month_line">
                    {{ t("road_map.months[2]") }}-{{ t("road_map.months[4]") }},
                  </p>
                  <p class="year__item-year year__item-year_line">2022</p>
                </div>
                <div class="year__item">
                  <h4 class="year__item-title text__gradient">
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
                  <h4 class="year__item-title text__gradient">
                    {{ t("road_map.stage") }} 5
                  </h4>
                  <p class="year__item-month year__item-month">
                    {{ t("road_map.months[5]") }}-{{ t("road_map.months[7]") }},
                  </p>
                  <p class="year__item-year year__item-year">2023</p>
                </div>
                <div class="year__item">
                  <h4 class="year__item-title text__gradient">
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
  <section class="buy">
    <div class="tw-container">
      <div class="buy__wrapper">
        <div class="buy__top">
          <h2 class="buy__title">{{ t("buy.title") }}</h2>
          <p class="buy__text">
            {{ t("buy.text") }}
          </p>
        </div>
        <div class="buy__card card__round">
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
              {{ t("buy.buttons.buy") }}
            </div>
            <div class="buy__card-button buy__card-button_red">
              {{ t("buy.buttons.sell") }}
            </div>
          </div>
        </div>
        <router-link class="button more__button" :to="{ name: 'auth.registr' }">
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
  <section class="question">
    <div class="tw-container">
      <div class="question__wrapper">
        <div class="question__card">
          <a href="https://t.me/Algacoin">
            <img class="question__pie" src="./icons/telegram.svg" alt="" />
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
          <span>© 2021-2022 ALGA</span>
          <a href="/whitePaperEng.pdf">White paper</a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const i18n = {
  messages: {
    "ru-RU": {
      dropdown: {
        buttons: {
          register: "Регистрация",
          login: "Авторизация",
        },
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
        },
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
        text: "For all questions, write to us and the operator will contact you as soon as possible",
        button: "GET INFO",
      },
    },
  },
};
export default {
  setup() {
    const dropdown = ref(false);
    const { t } = useI18n(i18n);
    return {
      dropdown,
      t,
    };
  },
  methods: {
    scrollMeTo(refName) {
      console.log("hio");
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
  },
};
</script>

<style scoped lang="scss">
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
    mix-blend-mode: color-dodge;
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
      transform: translateY(45px);
      z-index: 100;
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
  //   background-image: url("./img/bg/buy.png");
  //   background-repeat: no-repeat;
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
}
.button {
  display: flex;
  max-width: 264px;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 57px;
  height: 100%;
  color: #fff;
  &__text {
    z-index: 1;
    letter-spacing: 0.04em;
    font-weight: 700;
    text-transform: uppercase;
    margin-right: 8px;
  }
  &__icon {
    width: 17px;
    height: 14px;
    z-index: 1;
  }
  &__svg {
    width: 100%;
    position: absolute;
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
</style>
