<!-- <template src="./index.html"></template> -->
<template>
  <div>
    <header>
      <nav class="nav">
        <div class="tw-container">
          <div class="nav__wrapper tw-flex tw-justify-between tw-items-center">
            <div class="nav__left tw-flex tw-gap-12 tw-items-center">
              <img src="./icons/logo.svg" alt="logo" />
              <span class="mob-n">Tokenomics</span>
            </div>
            <div class="nav__right tw-flex tw-items-center">
              <div class="auth tw-flex tw-gap-2.5 tw-mr-7">
                <button class="mob-n button-border-light">Authorization</button>
                <button class="mob-n button-border-light">Registration</button>
              </div>
              <div class="local">
                <button class="active">
                  <span>EN</span>
                </button>
                <button>
                  <span> RU </span>
                </button>
              </div>
              <div class="desk-n">
                <button class="burger" @click="toggleDrop">
                  <span></span><span></span><span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div class="drop" :class="dropDown ? 'active' : ''" id="dropdown">
        <div class="tw-container">
          <div class="drop__wrapper tw-flex tw-justify-between tw-gap-1">
            <button class="button-border tw-w-1/2">Authorization</button>
            <button class="button tw-w-1/2">Registration</button>
          </div>
        </div>
      </div>
      <div class="tw-mt-7.5">
        <div class="tw-container">
          <div class="header-bg">
            <div class="header-bg__touch"></div>
            <div class="header-bg__wrapper">
              <div>
                <h1 class="header-bg__title">ALGA</h1>
                <h2>
                  Index <br />
                  Derivatives <br />
                  Platform
                </h2>
              </div>
              <!-- <div class="header-bg__img"></div> -->
              <div class="header-bg__img">
                <picture>
                  <source srcset="./img/AA_2.png" media="(min-width: 1100px)" />
                  <img src="./img/AA_2@2x.png" alt="" />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section class="section about">
      <div class="tw-container">
        <img class="section-icon tw-right-0" src="./img/section-about.png" />
        <div class="xl:tw-flex xl:tw-gap-24">
          <h2>About</h2>
          <div class="tw-mt-5 xl:tw-mt-0">
            <p>
              ALGA is a brand new CeFi platform for the implementation of
              different investment strategies based on index derivatives.
              <br />
              The underlying cutting edge technology along with a huge
              background of the core team in trading makes ALGA the one-stop
              shop for investments into proven and efficient strategies
              facilitating entry to the crypto for everyone. These strategies
              based on index derivatives consisting of many assets selected in
              the most effective ratio allow to receive solid return on the
              allocated capital while minimizing risks.
              <br />
              The platform is designed by people for people with the only one
              goal - to ensure comfortable tracking of assets and transparent
              transactions in order to bring asset management experience to
              completely new level.
            </p>
          </div>
        </div>

        <div class="card-big tw-mt-10 xl:tw-mt-15">
          <img src="./img/plus.png" alt="plus" class="top-icon" />
          <div class="card-big__left">
            <h2 class="title">Sign in</h2>
            <p class="tw-mt-5">
              For all questions, write to us and the operator will contact you
              as soon as possible
            </p>
          </div>
          <button class="tw-mt-7.5 xl:tw-mt-0 button">Create an account</button>
        </div>
      </div>
    </section>
    <section class="section index-directive">
      <div class="tw-container">
        <img class="section-icon" src="./img/section-directive.png" />
        <h2>Index Derivatives</h2>
        <!-- cards -->
        <div class="mob-n">
          <div class="index-directive__cards tw-mt-10">
            <!-- card -->
            <div class="card card-gray">
              <div class="tw-flex tw-gap-3.5">
                <div class="circle tw-flex-shrink-0">
                  <img src="./img/index-icon_1.png" alt="" />
                </div>
                <h4>Golden Rain Index</h4>
              </div>
              <p class="tw-mt-2.5 tokens">
                BNB, ETH, ALG, BNB, ETH, ALG, ETH, ALG
              </p>
              <div class="tw-mt-5 tw-flex tw-justify-between">
                <div>
                  <p class="tw-text-white">
                    Profitability <br />
                    for 6 months
                  </p>
                  <div class="tw-flex tw-gap-x-2.5">
                    <img src="./icons/up.svg" alt="" />
                    <h4>12,75%</h4>
                  </div>
                </div>
                <div>
                  <img src="./icons/diagram.svg" alt="" />

                  <button class="tw-mt-2 tw-flex tw-gap-1.5 tw-items-center">
                    <span class="buy">Buy</span>
                    <img src="./icons/button-arrow.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div class="card card-gray">
              <div class="tw-flex tw-gap-3.5">
                <div class="circle tw-flex-shrink-0">
                  <img src="./img/index-icon_1.png" alt="" />
                </div>
                <h4>Golden Rain Index</h4>
              </div>
              <p class="tw-mt-2.5 tokens">
                BNB, ETH, ALG, BNB, ETH, ALG, ETH, ALG
              </p>
              <div class="tw-mt-5 tw-flex tw-justify-between">
                <div>
                  <p class="tw-text-white">
                    Profitability <br />
                    for 6 months
                  </p>
                  <div class="tw-flex tw-gap-x-2.5">
                    <img src="./icons/up.svg" alt="" />
                    <h4>12,75%</h4>
                  </div>
                </div>
                <div>
                  <img src="./icons/diagram.svg" alt="" />

                  <button class="tw-mt-2 tw-flex tw-gap-1.5 tw-items-center">
                    <span class="buy">Buy</span>
                    <img src="./icons/button-arrow.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div class="card card-gray">
              <div class="tw-flex tw-gap-3.5">
                <div class="circle tw-flex-shrink-0">
                  <img src="./img/index-icon_1.png" alt="" />
                </div>
                <h4>Golden Rain Index</h4>
              </div>
              <p class="tw-mt-2.5 tokens">
                BNB, ETH, ALG, BNB, ETH, ALG, ETH, ALG
              </p>
              <div class="tw-mt-5 tw-flex tw-justify-between">
                <div>
                  <p class="tw-text-white">
                    Profitability <br />
                    for 6 months
                  </p>
                  <div class="tw-flex tw-gap-x-2.5">
                    <img src="./icons/up.svg" alt="" />
                    <h4>12,75%</h4>
                  </div>
                </div>
                <div>
                  <img src="./icons/diagram.svg" alt="" />

                  <button class="tw-mt-2 tw-flex tw-gap-1.5 tw-items-center">
                    <span class="buy">Buy</span>
                    <img src="./icons/button-arrow.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div class="card card-gray">
              <div class="tw-flex tw-gap-3.5">
                <div class="circle tw-flex-shrink-0">
                  <img src="./img/index-icon_1.png" alt="" />
                </div>
                <h4>Golden Rain Index</h4>
              </div>
              <p class="tw-mt-2.5 tokens">
                BNB, ETH, ALG, BNB, ETH, ALG, ETH, ALG
              </p>
              <div class="tw-mt-5 tw-flex tw-justify-between">
                <div>
                  <p class="tw-text-white">
                    Profitability <br />
                    for 6 months
                  </p>
                  <div class="tw-flex tw-gap-x-2.5">
                    <img src="./icons/up.svg" alt="" />
                    <h4>12,75%</h4>
                  </div>
                </div>
                <div>
                  <img src="./icons/diagram.svg" alt="" />

                  <button class="tw-mt-2 tw-flex tw-gap-1.5 tw-items-center">
                    <span class="buy">Buy</span>
                    <img src="./icons/button-arrow.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div class="card card-gray">
              <div class="tw-flex tw-gap-3.5">
                <div class="circle tw-flex-shrink-0">
                  <img src="./img/index-icon_1.png" alt="" />
                </div>
                <h4>Golden Rain Index</h4>
              </div>
              <p class="tw-mt-2.5 tokens">
                BNB, ETH, ALG, BNB, ETH, ALG, ETH, ALG
              </p>
              <div class="tw-mt-5 tw-flex tw-justify-between">
                <div>
                  <p class="tw-text-white">
                    Profitability <br />
                    for 6 months
                  </p>
                  <div class="tw-flex tw-gap-x-2.5">
                    <img src="./icons/up.svg" alt="" />
                    <h4>12,75%</h4>
                  </div>
                </div>
                <div>
                  <img src="./icons/diagram.svg" alt="" />

                  <button class="tw-mt-2 tw-flex tw-gap-1.5 tw-items-center">
                    <span class="buy">Buy</span>
                    <img src="./icons/button-arrow.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="desk-n">
          <div class="index-directive__cards tw-mt-10">
            <!-- card -->
            <div class="card card-gray">
              <div class="tw-flex tw-gap-3.5">
                <div class="circle tw-flex-shrink-0">
                  <img src="./img/index-icon_1.png" alt="" />
                </div>
                <h4>Golden Rain Index</h4>
              </div>
              <p class="tw-mt-2.5 tokens">
                BNB, ETH, ALG, BNB, ETH, ALG, ETH, ALG
              </p>
              <div class="tw-mt-5 tw-flex tw-justify-between">
                <div>
                  <p class="tw-text-white">
                    Profitability <br />
                    for 6 months
                  </p>
                  <div class="tw-flex tw-gap-x-2.5">
                    <img src="./icons/up.svg" alt="" />
                    <h4>12,75%</h4>
                  </div>
                </div>
                <div>
                  <img src="./icons/diagram.svg" alt="" />

                  <button class="tw-mt-2 tw-flex tw-gap-1.5 tw-items-center">
                    <span class="buy">Buy</span>
                    <img src="./icons/button-arrow.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div class="card card-gray">
              <div class="tw-flex tw-gap-3.5">
                <div class="circle tw-flex-shrink-0">
                  <img src="./img/index-icon_1.png" alt="" />
                </div>
                <h4>Golden Rain Index</h4>
              </div>
              <p class="tw-mt-2.5 tokens">
                BNB, ETH, ALG, BNB, ETH, ALG, ETH, ALG
              </p>
              <div class="tw-mt-5 tw-flex tw-justify-between">
                <div>
                  <p class="tw-text-white">
                    Profitability <br />
                    for 6 months
                  </p>
                  <div class="tw-flex tw-gap-x-2.5">
                    <img src="./icons/up.svg" alt="" />
                    <h4>12,75%</h4>
                  </div>
                </div>
                <div>
                  <img src="./icons/diagram.svg" alt="" />

                  <button class="tw-mt-2 tw-flex tw-gap-1.5 tw-items-center">
                    <span class="buy">Buy</span>
                    <img src="./icons/button-arrow.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div class="card card-gray">
              <div class="tw-flex tw-gap-3.5">
                <div class="circle tw-flex-shrink-0">
                  <img src="./img/index-icon_1.png" alt="" />
                </div>
                <h4>Golden Rain Index</h4>
              </div>
              <p class="tw-mt-2.5 tokens">
                BNB, ETH, ALG, BNB, ETH, ALG, ETH, ALG
              </p>
              <div class="tw-mt-5 tw-flex tw-justify-between">
                <div>
                  <p class="tw-text-white">
                    Profitability <br />
                    for 6 months
                  </p>
                  <div class="tw-flex tw-gap-x-2.5">
                    <img src="./icons/up.svg" alt="" />
                    <h4>12,75%</h4>
                  </div>
                </div>
                <div>
                  <img src="./icons/diagram.svg" alt="" />

                  <button class="tw-mt-2 tw-flex tw-gap-1.5 tw-items-center">
                    <span class="buy">Buy</span>
                    <img src="./icons/button-arrow.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div class="card card-gray">
              <div class="tw-flex tw-gap-3.5">
                <div class="circle tw-flex-shrink-0">
                  <img src="./img/index-icon_1.png" alt="" />
                </div>
                <h4>Golden Rain Index</h4>
              </div>
              <p class="tw-mt-2.5 tokens">
                BNB, ETH, ALG, BNB, ETH, ALG, ETH, ALG
              </p>
              <div class="tw-mt-5 tw-flex tw-justify-between">
                <div>
                  <p class="tw-text-white">
                    Profitability <br />
                    for 6 months
                  </p>
                  <div class="tw-flex tw-gap-x-2.5">
                    <img src="./icons/up.svg" alt="" />
                    <h4>12,75%</h4>
                  </div>
                </div>
                <div>
                  <img src="./icons/diagram.svg" alt="" />

                  <button class="tw-mt-2 tw-flex tw-gap-1.5 tw-items-center">
                    <span class="buy">Buy</span>
                    <img src="./icons/button-arrow.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div class="card card-gray">
              <div class="tw-flex tw-gap-3.5">
                <div class="circle tw-flex-shrink-0">
                  <img src="./img/index-icon_1.png" alt="" />
                </div>
                <h4>Golden Rain Index</h4>
              </div>
              <p class="tw-mt-2.5 tokens">
                BNB, ETH, ALG, BNB, ETH, ALG, ETH, ALG
              </p>
              <div class="tw-mt-5 tw-flex tw-justify-between">
                <div>
                  <p class="tw-text-white">
                    Profitability <br />
                    for 6 months
                  </p>
                  <div class="tw-flex tw-gap-x-2.5">
                    <img src="./icons/up.svg" alt="" />
                    <h4>12,75%</h4>
                  </div>
                </div>
                <div>
                  <img src="./icons/diagram.svg" alt="" />

                  <button class="tw-mt-2 tw-flex tw-gap-1.5 tw-items-center">
                    <span class="buy">Buy</span>
                    <img src="./icons/button-arrow.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section roadmap">
      <div class="tw-container">
        <img class="section-icon tw-right-0" src="./img/section-road.png" />
        <h2>Roadmap</h2>
        <div class="mob-n">
          <div class="tw-flex tw-gap-5 tw--mx-15">
            <q-carousel
              transition-prev="scale"
              transition-next="scale"
              v-model="slide"
              swipeable
              animated
              navigation
              padding
              height="calc(150% + 100px)"
              class="bg-transparent"
              ref="carousel"
              arrows
              control-type="regular"
              control-color="arrow-brand"
              control-text-color="arrow-brand"
            >
              <template
                v-slot:navigation-icon="{ index, active, btnProps, onClick }"
              >
                <button
                  class="slide-paginate active"
                  v-if="active"
                  @click="onClick"
                >
                  {{ index + 1 }}
                </button>
                <button class="slide-paginate" v-else @click="onClick">
                  {{ index + 1 }}
                </button>
              </template>

              <q-carousel-slide
                name="1"
                class="column no-wrap flex-center tw-pt-20"
              >
                <div class="tw-flex tw-gap-5">
                  <div
                    class="card card__border-line roadmap__item roadmap__item-desk"
                    :class="roadmap == 'test' ? 'active' : ''"
                  >
                    <div class="roadmap__item-wrapper">
                      <div
                        class="roadmap__item-header"
                        :class="roadmap == 'test' ? 'active' : ''"
                      >
                        <img src="./icons/icon-1.svg" alt="" />
                        <div>
                          <h2>Stage 1</h2>
                          <h5 class="tw-mt-2.5">January-March, 2022</h5>
                        </div>
                      </div>
                      <ul
                        class="roadmap__item-list"
                        :class="roadmap == 'test' ? 'active' : ''"
                        id="roadmap-test"
                      >
                        <li>
                          Development of the concept and brand book of the
                          project
                        </li>
                        <li>Platform architecture development</li>
                        <li>
                          Website creation and content (design, layout, mobile
                          adaptation, development of the user account core)
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="card card__border-line roadmap__item roadmap__item-desk"
                    :class="roadmap == 'test' ? 'active' : ''"
                  >
                    <div class="roadmap__item-wrapper">
                      <div
                        class="roadmap__item-header"
                        :class="roadmap == 'test' ? 'active' : ''"
                      >
                        <img src="./icons/icon-1.svg" alt="" />
                        <div>
                          <h2>Stage 1</h2>
                          <h5 class="tw-mt-2.5">January-March, 2022</h5>
                        </div>
                      </div>
                      <ul
                        class="roadmap__item-list"
                        :class="roadmap == 'test' ? 'active' : ''"
                        id="roadmap-test"
                      >
                        <li>
                          Development of the concept and brand book of the
                          project
                        </li>
                        <li>Platform architecture development</li>
                        <li>
                          Website creation and content (design, layout, mobile
                          adaptation, development of the user account core)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </q-carousel-slide>
              <q-carousel-slide
                name="2"
                class="column no-wrap flex-center tw-pt-20"
              >
                <div class="tw-flex tw-gap-5">
                  <div
                    class="card card__border-line roadmap__item roadmap__item-desk"
                    :class="roadmap == 'test' ? 'active' : ''"
                  >
                    <div class="roadmap__item-wrapper">
                      <div
                        class="roadmap__item-header"
                        :class="roadmap == 'test' ? 'active' : ''"
                      >
                        <img src="./icons/icon-1.svg" alt="" />
                        <div>
                          <h2>Stage 1</h2>
                          <h5 class="tw-mt-2.5">January-March, 2022</h5>
                        </div>
                      </div>
                      <ul
                        class="roadmap__item-list"
                        :class="roadmap == 'test' ? 'active' : ''"
                        id="roadmap-test"
                      >
                        <li>
                          Development of the concept and brand book of the
                          project
                        </li>
                        <li>Platform architecture development</li>
                        <li>
                          Website creation and content (design, layout, mobile
                          adaptation, development of the user account core)
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="card card__border-line roadmap__item roadmap__item-desk"
                    :class="roadmap == 'test' ? 'active' : ''"
                  >
                    <div class="roadmap__item-wrapper">
                      <div
                        class="roadmap__item-header"
                        :class="roadmap == 'test' ? 'active' : ''"
                      >
                        <img src="./icons/icon-1.svg" alt="" />
                        <div>
                          <h2>Stage 1</h2>
                          <h5 class="tw-mt-2.5">January-March, 2022</h5>
                        </div>
                      </div>
                      <ul
                        class="roadmap__item-list"
                        :class="roadmap == 'test' ? 'active' : ''"
                        id="roadmap-test"
                      >
                        <li>
                          Development of the concept and brand book of the
                          project
                        </li>
                        <li>Platform architecture development</li>
                        <li>
                          Website creation and content (design, layout, mobile
                          adaptation, development of the user account core)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </q-carousel-slide>
              <q-carousel-slide
                name="3"
                class="column no-wrap flex-center tw-pt-20"
              >
                <div class="tw-flex tw-gap-5">
                  <div
                    class="card card__border-line roadmap__item roadmap__item-desk"
                    :class="roadmap == 'test' ? 'active' : ''"
                  >
                    <div class="roadmap__item-wrapper">
                      <div
                        class="roadmap__item-header"
                        :class="roadmap == 'test' ? 'active' : ''"
                      >
                        <img src="./icons/icon-1.svg" alt="" />
                        <div>
                          <h2>Stage 1</h2>
                          <h5 class="tw-mt-2.5">January-March, 2022</h5>
                        </div>
                      </div>
                      <ul
                        class="roadmap__item-list"
                        :class="roadmap == 'test' ? 'active' : ''"
                        id="roadmap-test"
                      >
                        <li>
                          Development of the concept and brand book of the
                          project
                        </li>
                        <li>Platform architecture development</li>
                        <li>
                          Website creation and content (design, layout, mobile
                          adaptation, development of the user account core)
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="card card__border-line roadmap__item roadmap__item-desk"
                    :class="roadmap == 'test' ? 'active' : ''"
                  >
                    <div class="roadmap__item-wrapper">
                      <div
                        class="roadmap__item-header"
                        :class="roadmap == 'test' ? 'active' : ''"
                      >
                        <img src="./icons/icon-1.svg" alt="" />
                        <div>
                          <h2>Stage 1</h2>
                          <h5 class="tw-mt-2.5">January-March, 2022</h5>
                        </div>
                      </div>
                      <ul
                        class="roadmap__item-list"
                        :class="roadmap == 'test' ? 'active' : ''"
                        id="roadmap-test"
                      >
                        <li>
                          Development of the concept and brand book of the
                          project
                        </li>
                        <li>Platform architecture development</li>
                        <li>
                          Website creation and content (design, layout, mobile
                          adaptation, development of the user account core)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </q-carousel-slide>

              <template v-slot:control>
                <!-- <q-carousel-control> prev </q-carousel-control> -->
                <!-- <div @click="$refs.carousel.previous()">prev</div>
                {{ $refs.carousel }}
                prev next
                {{ $refs.carousel }}
                <q-carousel-control
                  position="bottom-right"
                  :offset="[18, 18]"
                  class="q-gutter-xs"
                >
                  <q-btn
                    push
                    round
                    dense
                    color="orange"
                    text-color="black"
                    icon="arrow_left"
                    @click="$refs.carousel.previous()"
                    
                  />
                  <q-btn
                    push
                    round
                    dense
                    color="orange"
                    text-color="black"
                    icon="arrow_right"
                    @click="$refs.carousel.next()"
                  />
                </q-carousel-control> -->
              </template>
            </q-carousel>
          </div>
        </div>
        <div class="desk-n">
          <div class="tw-mt-10">
            <div
              class="card card__border-line roadmap__item"
              :class="roadmap == 'test' ? 'active' : ''"
            >
              <div class="roadmap__item-wrapper">
                <div
                  class="roadmap__item-header"
                  :class="roadmap == 'test' ? 'active' : ''"
                >
                  <img src="./icons/icon-1.svg" alt="" />
                  <h2>Stage 1</h2>
                  <h5>January-March, 2022</h5>
                </div>
                <ul
                  class="roadmap__item-list"
                  :class="roadmap == 'test' ? 'active' : ''"
                  id="roadmap-test"
                >
                  <li>
                    Development of the concept and brand book of the project
                  </li>
                  <li>Platform architecture development</li>
                  <li>
                    Website creation and content (design, layout, mobile
                    adaptation, development of the user account core)
                  </li>
                  <li style="height: 40px"></li>
                </ul>
                <button
                  @click="toggleRoadmap('test')"
                  class="pie pie-arrow button-arrow"
                  :class="roadmap == 'test' ? 'active' : ''"
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
          </div>
        </div>
      </div>
    </section>
    <section class="section team">
      <div class="tw-container">
        <img class="section-icon" src="./img/section-directive.png" />
        <h2>Team</h2>
        <div class="tw-mt-10">
          <div>
            <div class="desk-n">
              <q-carousel
                v-model="slide"
                transition-prev="scale"
                transition-next="scale"
                swipeable
                animated
                navigation
                padding
                height="calc(150% + 100px)"
                class="bg-transparent"
              >
                <template
                  v-slot:navigation-icon="{ index, active, btnProps, onClick }"
                >
                  <button
                    class="slide-paginate active"
                    v-if="active"
                    @click="onClick"
                  >
                    {{ index + 1 }}
                  </button>
                  <button class="slide-paginate" v-else @click="onClick">
                    {{ index + 1 }}
                  </button>
                </template>

                <q-carousel-slide
                  name="1"
                  class="column no-wrap flex-center tw-pt-20"
                >
                  <div class="card card__border-line star star-card--desk">
                    <div class="star-avatar">
                      <div class="star-avatar__wrapper">
                        <img
                          class="star-avatar__bg"
                          src="./icons/star.svg"
                          alt=""
                        />
                        <img
                          class="star-avatar__img"
                          src="./img/karazbaev.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <h4>
                      Ural <br />
                      Karazbaev
                    </h4>
                    <p class="tw-mt-5">
                      Founder of ALGA Ecosystem, entrepreneur, founder of Museum
                      of Finance investment club, co-founder of TC Gorod,
                      Forestprom, D.S.R. Ufa
                    </p>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide
                  name="2"
                  class="column no-wrap flex-center tw-pt-20"
                >
                  <div class="card card__border-line star star-card--desk">
                    <div class="star-avatar">
                      <div class="star-avatar__wrapper">
                        <img
                          class="star-avatar__bg"
                          src="./icons/star.svg"
                          alt=""
                        />
                        <img
                          class="star-avatar__img"
                          src="./img/karazbaev.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <h4>
                      Ural <br />
                      Karazbaev
                    </h4>
                    <p class="tw-mt-5">
                      Founder of ALGA Ecosystem, entrepreneur, founder of Museum
                      of Finance investment club, co-founder of TC Gorod,
                      Forestprom, D.S.R. Ufa
                    </p>
                  </div>
                </q-carousel-slide>

                <q-carousel-slide
                  name="3"
                  class="column no-wrap flex-center tw-pt-20"
                >
                  <div class="card card__border-line star star-card--desk">
                    <div class="star-avatar">
                      <div class="star-avatar__wrapper">
                        <img
                          class="star-avatar__bg"
                          src="./icons/star.svg"
                          alt=""
                        />
                        <img
                          class="star-avatar__img"
                          src="./img/karazbaev.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <h4>
                      Ural <br />
                      Karazbaev
                    </h4>
                    <p class="tw-mt-5">
                      Founder of ALGA Ecosystem, entrepreneur, founder of Museum
                      of Finance investment club, co-founder of TC Gorod,
                      Forestprom, D.S.R. Ufa
                    </p>
                  </div>
                </q-carousel-slide>

                <q-carousel-slide
                  name="4"
                  class="column no-wrap flex-center tw-pt-20"
                >
                  <div class="card card__border-line star star-card--desk">
                    <div class="star-avatar">
                      <div class="star-avatar__wrapper">
                        <img
                          class="star-avatar__bg"
                          src="./icons/star.svg"
                          alt=""
                        />
                        <img
                          class="star-avatar__img"
                          src="./img/karazbaev.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <h4>
                      Ural <br />
                      Karazbaev
                    </h4>
                    <p class="tw-mt-5">
                      Founder of ALGA Ecosystem, entrepreneur, founder of Museum
                      of Finance investment club, co-founder of TC Gorod,
                      Forestprom, D.S.R. Ufa
                    </p>
                  </div>
                </q-carousel-slide>

                <q-carousel-slide
                  name="5"
                  class="column no-wrap flex-center tw-pt-20"
                >
                  <div class="card card__border-line star star-card--desk">
                    <div class="star-avatar">
                      <div class="star-avatar__wrapper">
                        <img
                          class="star-avatar__bg"
                          src="./icons/star.svg"
                          alt=""
                        />
                        <img
                          class="star-avatar__img"
                          src="./img/karazbaev.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <h4>
                      Ural <br />
                      Karazbaev
                    </h4>
                    <p class="tw-mt-5">
                      Founder of ALGA Ecosystem, entrepreneur, founder of Museum
                      of Finance investment club, co-founder of TC Gorod,
                      Forestprom, D.S.R. Ufa
                    </p>
                  </div>
                </q-carousel-slide>
              </q-carousel>
            </div>
            <div class="mob-n">
              <div class="tw-grid tw-grid-cols-6 tw-gap-y-7.5 tw-gap-x-16">
                <div class="tw-col-span-2">
                  <div class="star star-card--mob">
                    <div class="star-avatar">
                      <div class="star-avatar__wrapper">
                        <img
                          class="star-avatar__bg"
                          src="./icons/star.svg"
                          alt=""
                        />
                        <img
                          class="star-avatar__img"
                          src="./img/karazbaev.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <h4 class="tw-mt-5">Ural Karazbaev</h4>
                    <p class="tw-mt-2.5">
                      Founder of ALGA Ecosystem, entrepreneur, founder of Museum
                      of Finance investment club, co-founder of TC Gorod,
                      Forestprom, D.S.R. Ufa
                    </p>
                  </div>
                </div>
                <div class="tw-col-span-2">
                  <div class="star star-card--mob">
                    <div class="star-avatar">
                      <div class="star-avatar__wrapper">
                        <img
                          class="star-avatar__bg"
                          src="./icons/star.svg"
                          alt=""
                        />
                        <img
                          class="star-avatar__img"
                          src="./img/karazbaev.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <h4 class="tw-mt-5">Ural Karazbaev</h4>
                    <p class="tw-mt-2.5">
                      Founder of ALGA Ecosystem, entrepreneur, founder of Museum
                      of Finance investment club, co-founder of TC Gorod,
                      Forestprom, D.S.R. Ufa
                    </p>
                  </div>
                </div>
                <div class="tw-col-span-2">
                  <div class="star star-card--mob">
                    <div class="star-avatar">
                      <div class="star-avatar__wrapper">
                        <img
                          class="star-avatar__bg"
                          src="./icons/star.svg"
                          alt=""
                        />
                        <img
                          class="star-avatar__img"
                          src="./img/karazbaev.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <h4 class="tw-mt-5">Ural Karazbaev</h4>
                    <p class="tw-mt-2.5">
                      Founder of ALGA Ecosystem, entrepreneur, founder of Museum
                      of Finance investment club, co-founder of TC Gorod,
                      Forestprom, D.S.R. Ufa
                    </p>
                  </div>
                </div>
                <div class="tw-col-span-3 tw-justify-self-end">
                  <div class="star star-card--mob">
                    <div class="star-avatar">
                      <div class="star-avatar__wrapper">
                        <img
                          class="star-avatar__bg"
                          src="./icons/star.svg"
                          alt=""
                        />
                        <img
                          class="star-avatar__img"
                          src="./img/karazbaev.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <h4 class="tw-mt-5">Ural Karazbaev</h4>
                    <p class="tw-mt-2.5">
                      Founder of ALGA Ecosystem, entrepreneur, founder of Museum
                      of Finance investment club, co-founder of TC Gorod,
                      Forestprom, D.S.R. Ufa
                    </p>
                  </div>
                </div>
                <div class="tw-col-span-2">
                  <div class="star star-card--mob">
                    <div class="star-avatar">
                      <div class="star-avatar__wrapper">
                        <img
                          class="star-avatar__bg"
                          src="./icons/star.svg"
                          alt=""
                        />
                        <img
                          class="star-avatar__img"
                          src="./img/karazbaev.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <h4 class="tw-mt-5">Ural Karazbaev</h4>
                    <p class="tw-mt-2.5">
                      Founder of ALGA Ecosystem, entrepreneur, founder of Museum
                      of Finance investment club, co-founder of TC Gorod,
                      Forestprom, D.S.R. Ufa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section backers-partner">
      <div class="tw-container">
        <img class="section-icon tw-right-0" src="./img/section-backers.png" />
        <h2>Backers & Partners</h2>

        <div class="tw-flex tw-mt-10 tw-gap-2.25 tw-flex-wrap xl:tw-gap-6.25">
          <div class="card-partner">
            <a href="#">
              <img src="./img/satoshi.png" alt="" />
            </a>
          </div>
          <div class="card-partner">
            <a href="#">
              <img src="./img/ventures.png" alt="" />
            </a>
          </div>
          <div class="card-partner">
            <a href="#">
              <img src="./img/terracrypto.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="section faq tw-mb-10 xl:tw-mb-20">
      <div class="tw-container">
        <img class="section-icon tw-right-0" src="./img/section-faq.png" />
        <h2>FAQ</h2>
        <div class="accardion tw-mt-10">
          <div class="accardion-item">
            <div class="card card__border-line accardion-item__card">
              <h4>What is WalletConnect used for?</h4>
              <button
                @click="toggle('test')"
                class="pie pie-arrow button-arrow"
                :class="accardion == 'test' ? 'active' : ''"
              >
                <q-icon
                  name="r_keyboard_arrow_down"
                  size="35px"
                  class="arrow-icon"
                >
                </q-icon>
              </button>
            </div>
            <p
              class="accardion-item__text"
              :class="accardion == 'test' ? 'active' : ''"
              id="accordion-test"
            >
              WalletConnect forms connections and transfers funds between
              decentralized wallets and applications. Many people misunderstand
              WalletConnect to be some wallet. However, that's not true. Some of
              the most common use cases of WalletConnect include transferring
              funds to decentralized betting platforms, online casinos, DApps
              based services, etc.
              <br />
              Hence, whenever there is an element of transaction involved,
              WalletConnect comes into the picture. The significance of
              WalletConnect is the encrypted connection that it offers.
              Naturally, security is the topmost priority when it comes to
              online transactions.
            </p>
          </div>
          <div class="accardion-item">
            <div class="card card__border-line accardion-item__card">
              <h4>What is WalletConnect used for?</h4>
              <button
                @click="toggle('test2')"
                class="pie pie-arrow button-arrow"
                :class="accardion == 'test2' ? 'active' : ''"
              >
                <q-icon
                  name="r_keyboard_arrow_down"
                  size="35px"
                  class="arrow-icon"
                >
                </q-icon>
              </button>
            </div>
            <p
              class="accardion-item__text tw-mt-5"
              :class="accardion == 'test2' ? 'active' : ''"
              id="accordion-test2"
            >
              WalletConnect forms connections and transfers funds between
              decentralized wallets and applications. Many people misunderstand
              WalletConnect to be some wallet. However, that's not true. Some of
              the most common use cases of WalletConnect include transferring
              funds to decentralized betting platforms, online casinos, DApps
              based services, etc.
              <br />
              Hence, whenever there is an element of transaction involved,
              WalletConnect comes into the picture. The significance of
              WalletConnect is the encrypted connection that it offers.
              Naturally, security is the topmost priority when it comes to
              online transactions.
            </p>
          </div>
        </div>
        <div class="card-big tw-mt-10 xl:tw-mt-20">
          <img src="./img/telegram-round.png" alt="plus" class="top-icon" />
          <div class="card-big__left">
            <h2>Any questions?</h2>
            <p class="tw-mt-5">
              For all questions, write to us and the operator will contact you
              as soon as possible
            </p>
          </div>
          <div
            class="tw-flex tw-flex-col tw-mt-7.5 tw-gap-5 xl:tw-mt-0 xl:tw-flex-row xl:tw-gap-3"
          >
            <button class="button">Contact us</button>
            <button class="button-black">Join our community</button>
          </div>
        </div>
      </div>
    </section>
    <footer class="tw-pt-10 tw-pb-8">
      <div class="tw-container">
        <div class="footer__top tw-flex tw-justify-between tw-items-center">
          <img src="./icons/logo.svg" alt="" />
          <div class="mob-n">
            <a href="#" class="text-arrow-brand tw-underline tw-mr-10">
              Roadmap.pdf</a
            >
            <a href="#" class="text-arrow-brand tw-underline">
              Whitepaper.pdf</a
            >
          </div>
          <div class="tw-flex tw-gap-2.5">
            <a href="#" class="pie pie-link"
              ><img src="./icons/twitter.svg" alt="twitter" /></a
            ><a href="#" class="pie pie-link"
              ><img src="./icons/telegram.svg" alt="telegram" /></a
            ><a href="#" class="pie pie-link"
              ><img src="./icons/discord.svg" alt="discord"
            /></a>
          </div>
        </div>
        <div
          class="footer__bottom tw-flex tw-gap-1.5 tw-justify-center tw-mt-7.5 desk-n"
        >
          <div class="flex tw-flex-col tw-justify-center tw-items-center">
            <img src="./img/whitepaper.png" alt="" />
            <a href="#" class="text-arrow-brand tw-underline">
              Whitepaper.pdf
            </a>
          </div>
          <div class="flex tw-flex-col tw-justify-center tw-items-center">
            <img src="./img/roadmap-link.png" alt="" />
            <a href="#" class="text-arrow-brand tw-underline"> Roadmap.pdf </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
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
    return {
      toggleDrop,
      dropDown,
      roadmap,
      toggleRoadmap,
      test,
      accardion,
      toggle,
      slide: ref("1"),
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
    };
  },
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
