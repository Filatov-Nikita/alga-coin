<!-- <template src="./index.html"></template> -->
<template>
  <div>
   
    <section class="section about">
      <div class="tw-container">
        <div class="tw-relative">
          <img class="section-icon tw-right-0 desk-n" src="./img/section-about.png" />
        </div>
        <div class="xl:tw-flex xl:tw-gap-24">
          <h2>{{ t("about.title") }}</h2>
          <div class="tw-mt-5 xl:tw-mt-0">
            <p v-html="t('about.text')"></p>
          </div>
        </div>

        <div class="card-big tw-mt-10 xl:tw-mt-15">
          <img src="./img/plus.png" alt="plus" class="top-icon" />
          <div class="card-big__left">
            <h2 class="title">{{ t("card-big.signin.title") }}</h2>
            <p class="tw-mt-5">
              {{ t("card-big.signin.text") }}
            </p>
          </div>
          <button class="tw-mt-7.5 xl:tw-mt-0 button" @click="stage1">
            {{ t("card-big.signin.createButton") }}
          </button>
        </div>
      </div>
    </section>
    <section class="section index-directive">
      <div class="tw-container">
        <div class="tw-relative">
          <img class="section-icon section-icon_scale-x xl:tw-right-0" src="./img/section-directive.png" />
        </div>
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
                <h4>BTC main</h4>
              </div>
              <p class="tw-mt-2.5 tokens">
                BTC, STABLES
              </p>
              <div class="tw-mt-5 tw-flex tw-justify-between">
                <div>
                  <p class="tw-text-white" v-html="t('indexD.card.profitability.1', { numb: '2' })"></p>
                  <div class="tw-flex tw-gap-x-2.5">
                    <MarkIcon :mark="btnMainTwoMonthPrecent"/>
                    <h4>{{btnMainTwoMonthPrecent}}%</h4>
                  </div>
                </div>
                <div>
                  <MiniAreaChart :values="btnMainData" />

                  <button @click="stage2"
                    class="tw-mt-2 tw-flex tw-gap-1.5 tw-items-center">
                    <span class="buy">{{ t("other.button.buy") }}</span>
                    <img src="./icons/button-arrow.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div class="card card-gray">
              <div class="tw-flex tw-gap-3.5">
                <div class="circle tw-flex-shrink-0">
                  <img src="./img/index-icon_2.png" alt="" />
                </div>
                <h4>ETH main</h4>
              </div>
              <p class="tw-mt-2.5 tokens">
                ETH, ETC, ETHfork, STABLES
              </p>
              <div class="tw-mt-5 tw-flex tw-justify-between">
                <div>
                  <p class="tw-text-white" v-html="t('indexD.card.profitability.1', { numb: '2' })"></p>
                  <div class="tw-flex tw-gap-x-2.5">
                    <MarkIcon :mark="ethMainTwoMonthPrecent"/>
                    <h4>{{ethMainTwoMonthPrecent}}%</h4>
                  </div>
                </div>
                <div>
                  <MiniAreaChart :values="ethMainData" />

                  <button @click="stage2"
                    class="tw-mt-2 tw-flex tw-gap-1.5 tw-items-center">
                    <span class="buy">{{ t("other.button.buy") }}</span>
                    <img src="./icons/button-arrow.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div class="card card-gray">
              <div class="tw-flex tw-gap-3.5">
                <div class="circle tw-flex-shrink-0">
                  <img src="./img/index-icon_3.png" alt="" />
                </div>
                <h4>
                  BTC combo
                </h4>
              </div>
              <p class="tw-mt-2.5 tokens">
                BTC, ETH, BNB, LTC, STABLES
              </p>
              <div class="tw-mt-5 tw-flex tw-justify-between">
                <div>
                  <p class="tw-text-white" v-html="t('indexD.card.profitability.1', { numb: '2' })"></p>
                  <div class="tw-flex tw-gap-x-2.5">
                    <MarkIcon :mark="btcComboTwoMonthPrecent"/>
                    <h4>{{btcComboTwoMonthPrecent}}%</h4>
                  </div>
                </div>
                <div>
                  <MiniAreaChart :values="btcComboData"/>

                  <button @click="stage2"
                    class="tw-mt-2 tw-flex tw-gap-1.5 tw-items-center">
                    <span class="buy">{{ t("other.button.buy") }}</span>
                    <img src="./icons/button-arrow.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div class="card card-gray">
              <div class="tw-flex tw-gap-3.5">
                <div class="circle tw-flex-shrink-0">
                  <img src="./img/index-icon_6.png" alt="" />
                </div>
                <h4>
                  ETH combo 
                </h4>
              </div>
              <p class="tw-mt-2.5 tokens">
                ETH, BTC, ETC, BNB, LTC, STABLES
              </p>
              <div class="tw-mt-5 tw-flex tw-justify-between">
                <div>
                  <p class="tw-text-white" v-html="t('indexD.card.profitability.1', { numb: '2' })"></p>
                  <div class="tw-flex tw-gap-x-2.5">
                    <MarkIcon :mark="ethComboTwoMonthPrecent"/>
                    <h4>{{ethComboTwoMonthPrecent}}%</h4>
                  </div>
                </div>
                <div>
                  <MiniAreaChart :values="ethComboData" />

                  <button @click="stage2"
                    class="tw-mt-2 tw-flex tw-gap-1.5 tw-items-center">
                    <span class="buy">{{ t("other.button.buy") }}</span>
                    <img src="./icons/button-arrow.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div class="card card-gray">
              <div class="tw-flex tw-gap-3.5">
                <div class="circle tw-flex-shrink-0">
                  <img src="./img/index-icon_5.png" alt="" />
                </div>
                <h4>
                  Stable index 
                </h4>
              </div>
              <p class="tw-mt-2.5 tokens">
                ERC20, TRC20, BUSD, GUSD, USDC
              </p>
              <div class="tw-mt-5 tw-flex tw-justify-between">
                <div>
                  <p class="tw-text-white" v-html="t('indexD.card.profitability.1', { numb: '2' })"></p>
                  <div class="tw-flex tw-gap-x-2.5">
                    <MarkIcon :mark="stableIndexTwoMonthPrecent"/>
                    <h4>{{stableIndexTwoMonthPrecent}}%</h4>
                  </div>
                </div>
                <div>
                  <MiniAreaChart :values="stableIndexData" />

                  <button @click="stage2"
                    class="tw-mt-2 tw-flex tw-gap-1.5 tw-items-center">
                    <span class="buy">{{ t("other.button.buy") }}</span>
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
            <q-carousel v-model="slide" transition-prev="scale" transition-next="scale" swipeable animated navigation
              padding class="bg-transparent">
              <template v-slot:navigation-icon="{ index, active, btnProps, onClick }">
                <button class="slide-paginate active" v-if="active" @click="onClick">
                  {{ index + 1 }}
                </button>
                <button class="slide-paginate" v-else @click="onClick">
                  {{ index + 1 }}
                </button>
              </template>

              <q-carousel-slide name="1" class="column no-wrap flex-center">
                <div class="card card-gray">
                  <div class="tw-flex tw-gap-3.5">
                    <div class="circle tw-flex-shrink-0">
                      <img src="./img/index-icon_1.png" alt="" />
                    </div>
                    <h4>BTC main</h4>
                  </div>
                  <p class="tw-mt-2.5 tokens">
                    BTC, STABLES
                  </p>
                  <div class="tw-mt-5 tw-flex tw-justify-between">
                    <div>
                      <p class="tw-text-white" v-html="t('indexD.card.profitability.1', { numb: '2' })"></p>
                      <div class="tw-flex tw-gap-x-2.5">
                        <MarkIcon :mark="btnMainTwoMonthPrecent"/>
                        <h4>{{btnMainTwoMonthPrecent}}%</h4>
                      </div>
                    </div>
                    <div>
                      <MiniAreaChart :values="btnMainData"/>

                      <button @click="stage2"
                        class="tw-mt-2 tw-flex tw-gap-1.5 tw-items-center">
                        <span class="buy">{{ t("other.button.buy") }}</span>
                        <img src="./icons/button-arrow.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </q-carousel-slide>
              <q-carousel-slide name="2" class="column no-wrap flex-center">
                <div class="card card-gray">
                  <div class="tw-flex tw-gap-3.5">
                    <div class="circle tw-flex-shrink-0">
                      <img src="./img/index-icon_2.png" alt="" />
                    </div>
                    <h4>ETH main</h4>
                  </div>
                  <p class="tw-mt-2.5 tokens">
                    ETH, ETC, ETHfork, STABLES
                  </p>
                  <div class="tw-mt-5 tw-flex tw-justify-between">
                    <div>
                      <p class="tw-text-white" v-html="t('indexD.card.profitability.1', { numb: '2' })"></p>
                      <div class="tw-flex tw-gap-x-2.5">
                        <MarkIcon :mark="ethMainTwoMonthPrecent"/>
                        <h4>{{ethMainTwoMonthPrecent}}%</h4>
                      </div>
                    </div>
                    <div>
                      <MiniAreaChart :values="
                      ethMainData" />

                      <button @click="stage2"
                        class="tw-mt-2 tw-flex tw-gap-1.5 tw-items-center">
                        <span class="buy">{{ t("other.button.buy") }}</span>
                        <img src="./icons/button-arrow.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </q-carousel-slide>
              <q-carousel-slide name="3" class="column no-wrap flex-center">
                <div class="card card-gray">
                  <div class="tw-flex tw-gap-3.5">
                    <div class="circle tw-flex-shrink-0">
                      <img src="./img/index-icon_3.png" alt="" />
                    </div>
                    <h4>
                      BTC combo 
                    </h4>
                  </div>
                  <p class="tw-mt-2.5 tokens">
                    BTC, ETH, BNB, LTC, STABLES
                  </p>
                  <div class="tw-mt-5 tw-flex tw-justify-between">
                    <div>
                      <p class="tw-text-white" v-html="t('indexD.card.profitability.1', { numb: '2' })"></p>
                      <div class="tw-flex tw-gap-x-2.5">
                        <MarkIcon :mark="btcComboTwoMonthPrecent"/>
                        <h4>{{btcComboTwoMonthPrecent}}%</h4>
                      </div>
                    </div>
                    <div>
                      <MiniAreaChart :values="btcComboData" />

                      <button @click="stage2"
                        class="tw-mt-2 tw-flex tw-gap-1.5 tw-items-center">
                        <span class="buy">{{ t("other.button.buy") }}</span>
                        <img src="./icons/button-arrow.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </q-carousel-slide>
              <q-carousel-slide name="4" class="column no-wrap flex-center">
                <div class="card card-gray">
                  <div class="tw-flex tw-gap-3.5">
                    <div class="circle tw-flex-shrink-0">
                      <img src="./img/index-icon_4.png" alt="" />
                    </div>
                    <h4>
                      ETH combo
                    </h4>
                  </div>
                  <p class="tw-mt-2.5 tokens">
                    ETH, BTC, ETC, BNB, LTC, STABLES 
                  </p>
                  <div class="tw-mt-5 tw-flex tw-justify-between">
                    <div>
                      <p class="tw-text-white" v-html="t('indexD.card.profitability.1', { numb: '2' })"></p>
                      <div class="tw-flex tw-gap-x-2.5">
                        <MarkIcon :mark="ethComboTwoMonthPrecent"/>
                        <h4>{{ethComboTwoMonthPrecent}}%</h4>
                      </div>
                    </div>
                    <div>
                      <MiniAreaChart :values="ethComboData" />

                      <button @click="stage2"
                        class="tw-mt-2 tw-flex tw-gap-1.5 tw-items-center">
                        <span class="buy">{{ t("other.button.buy") }}</span>
                        <img src="./icons/button-arrow.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </q-carousel-slide>
              <q-carousel-slide name="5" class="column no-wrap flex-center">
                <div class="card card-gray">
                  <div class="tw-flex tw-gap-3.5">
                    <div class="circle tw-flex-shrink-0">
                      <img src="./img/index-icon_5.png" alt="" />
                    </div>
                    <h4>
                      Stable index 
                    </h4>
                  </div>
                  <p class="tw-mt-2.5 tokens">
                    ERC20, TRC20, BUSD, GUSD, USDC
                  </p>
                  <div class="tw-mt-5 tw-flex tw-justify-between">
                    <div>
                      <p class="tw-text-white" v-html="t('indexD.card.profitability.1', { numb: '2' })"></p>
                      <div class="tw-flex tw-gap-x-2.5">
                        <MarkIcon :mark="stableIndexTwoMonthPrecent"/>
                        <h4>{{stableIndexTwoMonthPrecent}}%</h4>
                      </div>
                    </div>
                    <div>
                      <MiniAreaChart :values="stableIndexData" />

                      <button @click="stage2"
                        class="tw-mt-2 tw-flex tw-gap-1.5 tw-items-center">
                        <span class="buy">{{ t("other.button.buy") }}</span>
                        <img src="./icons/button-arrow.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </q-carousel-slide>
            </q-carousel>
          </div>
        </div>
      </div>
    </section>
    <section class="section roadmap">
      <div class="tw-container">
        <div class="tw-relative">
          <img class="section-icon tw-right-0" src="./img/section-road.png" />
        </div>
        <h2>{{ t("roadmap.title") }}</h2>
        <div class="mob-n">
          <div class="tw-flex tw-gap-5 tw--mx-15">
            <q-carousel transition-prev="scale" transition-next="scale" v-model="slide" swipeable animated navigation
              padding height="calc(150% + 100px)" class="bg-transparent" ref="carousel" arrows control-type="regular"
              control-color="arrow-brand" control-text-color="arrow-brand">
              <template v-slot:navigation-icon="{ index, active, btnProps, onClick }">
                <button class="slide-paginate active" v-if="active" @click="onClick">
                  {{ index + 1 }}
                </button>
                <button class="slide-paginate" v-else @click="onClick">
                  {{ index + 1 }}
                </button>
              </template>

              <q-carousel-slide name="1" class="column no-wrap flex-center tw-pt-20">
                <div class="tw-flex tw-gap-5">
                  <div class="card card__border-line roadmap__item roadmap__item-desk tw-w-1/2">
                    <div class="roadmap__item-wrapper">
                      <div class="roadmap__item-header">
                        <img src="./icons/icon-1.svg" alt="" />
                        <div>
                          <h2>{{ t("roadmap.stages.1.title") }}</h2>
                          <h5 class="tw-mt-2.5">
                            {{ t("roadmap.stages.1.subtitle") }}
                          </h5>
                        </div>
                      </div>
                      <ul class="roadmap__item-list" :class="roadmap == 'test' ? 'active' : ''" id="roadmap-test">
                        <li>
                          {{ t("roadmap.stages.1.items.0") }}
                        </li>
                        <li>{{ t("roadmap.stages.1.items.1") }}</li>
                        <li>
                          {{ t("roadmap.stages.1.items.2") }}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="card card__border-line roadmap__item roadmap__item-desk tw-w-1/2">
                    <div class="roadmap__item-wrapper">
                      <div class="roadmap__item-header">
                        <img src="./icons/icon-2.svg" alt="" />
                        <div>
                          <h2>{{ t("roadmap.stages.2.title") }}</h2>
                          <h5 class="tw-mt-2.5">
                            {{ t("roadmap.stages.2.subtitle") }}
                          </h5>
                        </div>
                      </div>
                      <ul class="roadmap__item-list" :class="roadmap == 'test' ? 'active' : ''" id="roadmap-test">
                        <li>
                          {{ t("roadmap.stages.2.items.0") }}
                        </li>
                        <li>{{ t("roadmap.stages.2.items.1") }}</li>
                        <li>
                          {{ t("roadmap.stages.2.items.2") }}
                        </li>
                        <li>
                          {{ t("roadmap.stages.2.items.3") }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </q-carousel-slide>
              <q-carousel-slide name="2" class="column no-wrap flex-center tw-pt-20">
                <div class="tw-flex tw-gap-5">
                  <div class="card card__border-line roadmap__item roadmap__item-desk tw-w-1/2">
                    <div class="roadmap__item-wrapper">
                      <div class="roadmap__item-header" :class="roadmap == 'test' ? 'active' : ''">
                        <img src="./icons/icon-3.svg" alt="" />
                        <div>
                          <h2>{{ t("roadmap.stages.3.title") }}</h2>
                          <h5 class="tw-mt-2.5">
                            {{ t("roadmap.stages.3.subtitle") }}
                          </h5>
                        </div>
                      </div>
                      <ul class="roadmap__item-list" :class="roadmap == 'test' ? 'active' : ''" id="roadmap-test">
                        <li>
                          {{ t("roadmap.stages.3.items.0") }}
                        </li>
                        <li>{{ t("roadmap.stages.3.items.1") }}</li>
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
                    </div>
                  </div>
                  <div class="card card__border-line roadmap__item roadmap__item-desk tw-w-1/2">
                    <div class="roadmap__item-wrapper">
                      <div class="roadmap__item-header">
                        <img src="./icons/icon-4.svg" alt="" />
                        <div>
                          <h2>{{ t("roadmap.stages.4.title") }}</h2>
                          <h5 class="tw-mt-2.5">
                            {{ t("roadmap.stages.4.subtitle") }}
                          </h5>
                        </div>
                      </div>
                      <ul class="roadmap__item-list" :class="roadmap == 'test' ? 'active' : ''" id="roadmap-test">
                        <li>
                          {{ t("roadmap.stages.4.items.0") }}
                        </li>
                        <li>{{ t("roadmap.stages.4.items.1") }}</li>
                        <li>
                          {{ t("roadmap.stages.4.items.2") }}
                        </li>
                        <li>
                          {{ t("roadmap.stages.4.items.3") }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </q-carousel-slide>
              <q-carousel-slide name="3" class="column no-wrap flex-center tw-pt-20">
                <div class="tw-flex tw-gap-5">
                  <div class="card card__border-line roadmap__item roadmap__item-desk tw-w-1/2">
                    <div class="roadmap__item-wrapper">
                      <div class="roadmap__item-header">
                        <img src="./icons/icon-5.svg" alt="" />
                        <div>
                          <h2>{{ t("roadmap.stages.5.title") }}</h2>
                          <h5 class="tw-mt-2.5">
                            {{ t("roadmap.stages.5.subtitle") }}
                          </h5>
                        </div>
                      </div>
                      <ul class="roadmap__item-list" :class="roadmap == 'test' ? 'active' : ''" id="roadmap-test">
                        <li>
                          {{ t("roadmap.stages.5.items.0") }}
                        </li>
                        <li>{{ t("roadmap.stages.5.items.1") }}</li>
                        <li>
                          {{ t("roadmap.stages.5.items.2") }}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="card card__border-line roadmap__item roadmap__item-desk tw-w-1/2">
                    <div class="roadmap__item-wrapper">
                      <div class="roadmap__item-header">
                        <img src="./icons/icon-6.svg" alt="" />
                        <div>
                          <h2>{{ t("roadmap.stages.6.title") }}</h2>
                          <h5 class="tw-mt-2.5">
                            {{ t("roadmap.stages.6.subtitle") }}
                          </h5>
                        </div>
                      </div>
                      <ul class="roadmap__item-list" :class="roadmap == 'test' ? 'active' : ''" id="roadmap-test">
                        <li>
                          {{ t("roadmap.stages.6.items.0") }}
                        </li>
                        <li>{{ t("roadmap.stages.6.items.1") }}</li>
                        <li>
                          {{ t("roadmap.stages.6.items.2") }}
                        </li>
                        <li>
                          {{ t("roadmap.stages.6.items.3") }}
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
          <div class="tw-mt-10 tw-flex tw-flex-col tw-gap-5">
            <div class="card card__border-line roadmap__item roadmap__item_1" :class="roadmap == '1' ? 'active' : ''">
              <div class="roadmap__item-wrapper">
                <div class="roadmap__item-header" :class="roadmap == '1' ? 'active' : ''">
                  <img src="./icons/icon-1.svg" alt="" />
                  <h2>
                    {{ t("roadmap.stages.1.title") }}
                  </h2>
                  <h5>{{ t("roadmap.stages.1.subtitle") }}</h5>
                </div>
                <ul class="roadmap__item-list" :class="roadmap == '1' ? 'active' : ''" id="roadmap-1">
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
                <button @click="toggleRoadmap('1')" class="pie pie-arrow button-arrow"
                  :class="roadmap == '1' ? 'active' : ''">
                  <q-icon name="r_keyboard_arrow_down" size="35px" class="arrow-icon">
                  </q-icon>
                </button>
              </div>
            </div>
            <div class="card card__border-line roadmap__item roadmap__item_2" :class="roadmap == '2' ? 'active' : ''">
              <div class="roadmap__item-wrapper">
                <div class="roadmap__item-header" :class="roadmap == '2' ? 'active' : ''">
                  <img src="./icons/icon-2.svg" alt="" />
                  <h2>
                    {{ t("roadmap.stages.2.title") }}
                  </h2>
                  <h5>{{ t("roadmap.stages.2.subtitle") }}</h5>
                </div>
                <ul class="roadmap__item-list" :class="roadmap == '2' ? 'active' : ''" id="roadmap-2">
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
                <button @click="toggleRoadmap('2')" class="pie pie-arrow button-arrow"
                  :class="roadmap == '2' ? 'active' : ''">
                  <q-icon name="r_keyboard_arrow_down" size="35px" class="arrow-icon">
                  </q-icon>
                </button>
              </div>
            </div>
            <div class="card card__border-line roadmap__item roadmap__item_3" :class="roadmap == '3' ? 'active' : ''">
              <div class="roadmap__item-wrapper">
                <div class="roadmap__item-header" :class="roadmap == '3' ? 'active' : ''">
                  <img src="./icons/icon-3.svg" alt="" />
                  <h2>
                    {{ t("roadmap.stages.3.title") }}
                  </h2>
                  <h5>{{ t("roadmap.stages.3.subtitle") }}</h5>
                </div>
                <ul class="roadmap__item-list" :class="roadmap == '3' ? 'active' : ''" id="roadmap-3">
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
                <button @click="toggleRoadmap('3')" class="pie pie-arrow button-arrow"
                  :class="roadmap == '3' ? 'active' : ''">
                  <q-icon name="r_keyboard_arrow_down" size="35px" class="arrow-icon">
                  </q-icon>
                </button>
              </div>
            </div>
            <div class="card card__border-line roadmap__item roadmap__item_4" :class="roadmap == '4' ? 'active' : ''">
              <div class="roadmap__item-wrapper">
                <div class="roadmap__item-header" :class="roadmap == '4' ? 'active' : ''">
                  <img src="./icons/icon-4.svg" alt="" />
                  <h2>
                    {{ t("roadmap.stages.4.title") }}
                  </h2>
                  <h5>{{ t("roadmap.stages.4.subtitle") }}</h5>
                </div>
                <ul class="roadmap__item-list" :class="roadmap == '4' ? 'active' : ''" id="roadmap-4">
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
                <button @click="toggleRoadmap('4')" class="pie pie-arrow button-arrow"
                  :class="roadmap == '4' ? 'active' : ''">
                  <q-icon name="r_keyboard_arrow_down" size="35px" class="arrow-icon">
                  </q-icon>
                </button>
              </div>
            </div>
            <div class="card card__border-line roadmap__item roadmap__item_5" :class="roadmap == '5' ? 'active' : ''">
              <div class="roadmap__item-wrapper">
                <div class="roadmap__item-header" :class="roadmap == '5' ? 'active' : ''">
                  <img src="./icons/icon-5.svg" alt="" />
                  <h2>
                    {{ t("roadmap.stages.5.title") }}
                  </h2>
                  <h5>{{ t("roadmap.stages.5.subtitle") }}</h5>
                </div>
                <ul class="roadmap__item-list" :class="roadmap == '5' ? 'active' : ''" id="roadmap-5">
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
                <button @click="toggleRoadmap('5')" class="pie pie-arrow button-arrow"
                  :class="roadmap == '5' ? 'active' : ''">
                  <q-icon name="r_keyboard_arrow_down" size="35px" class="arrow-icon">
                  </q-icon>
                </button>
              </div>
            </div>
            <div class="card card__border-line roadmap__item roadmap__item_6" :class="roadmap == '6' ? 'active' : ''">
              <div class="roadmap__item-wrapper">
                <div class="roadmap__item-header" :class="roadmap == '6' ? 'active' : ''">
                  <img src="./icons/icon-6.svg" alt="" />
                  <h2>
                    {{ t("roadmap.stages.6.title") }}
                  </h2>
                  <h5>{{ t("roadmap.stages.6.subtitle") }}</h5>
                </div>
                <ul class="roadmap__item-list" :class="roadmap == '6' ? 'active' : ''" id="roadmap-6">
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
                <button @click="toggleRoadmap('6')" class="pie pie-arrow button-arrow"
                  :class="roadmap == '6' ? 'active' : ''">
                  <q-icon name="r_keyboard_arrow_down" size="35px" class="arrow-icon">
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
        <div class="tw-relative">
          <img class="section-icon section-icon_scale-x xl:tw-right-0" src="./img/section-directive.png" />
        </div>
        <h2>{{ t("team.title") }}</h2>
        <div class="xl:tw-mt-10">
          <div>
            <div class="desk-n">
              <q-carousel v-model="slide" transition-prev="scale" transition-next="scale" swipeable animated navigation
                padding height="calc(150% + 100px)" class="bg-transparent">
                <template v-slot:navigation-icon="{ index, active, btnProps, onClick }">
                  <button class="slide-paginate active" v-if="active" @click="onClick">
                    {{ index + 1 }}
                  </button>
                  <button class="slide-paginate" v-else @click="onClick">
                    {{ index + 1 }}
                  </button>
                </template>

                <q-carousel-slide name="1" class="column no-wrap flex-center tw-pt-20">
                  <div class="card card__border-line star star-card--desk">
                    <div class="star-avatar">
                      <div class="star-avatar__wrapper">
                        <img class="star-avatar__bg" src="./icons/star.svg" alt="" />
                        <img class="star-avatar__img" src="./img/karazbaev.png" alt="" />
                      </div>
                    </div>
                    <h4>
                      {{ t("team.peoples.1.name") }} <br />
                      {{ t("team.peoples.1.lastName") }}
                    </h4>
                    <p class="tw-mt-5">
                      {{ t("team.peoples.1.bio") }}
                    </p>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide name="2" class="column no-wrap flex-center tw-pt-20">
                  <div class="card card__border-line star star-card--desk">
                    <div class="star-avatar">
                      <div class="star-avatar__wrapper">
                        <img class="star-avatar__bg" src="./icons/star.svg" alt="" />
                        <img class="star-avatar__img" src="./img/latypov.png" alt="" />
                      </div>
                    </div>
                    <h4>
                      {{ t("team.peoples.2.name") }} <br />
                      {{ t("team.peoples.2.lastName") }}
                    </h4>
                    <p class="tw-mt-5">
                      {{ t("team.peoples.2.bio") }}
                    </p>
                  </div>
                </q-carousel-slide>

                <q-carousel-slide name="3" class="column no-wrap flex-center tw-pt-20">
                  <div class="card card__border-line star star-card--desk">
                    <div class="star-avatar">
                      <div class="star-avatar__wrapper">
                        <img class="star-avatar__bg" src="./icons/star.svg" alt="" />
                        <img class="star-avatar__img" src="./img/sadreev.png" alt="" />
                      </div>
                    </div>
                    <h4>
                      {{ t("team.peoples.3.name") }} <br />
                      {{ t("team.peoples.3.lastName") }}
                    </h4>
                    <p class="tw-mt-5">
                      {{ t("team.peoples.3.bio") }}
                    </p>
                  </div>
                </q-carousel-slide>

                <q-carousel-slide name="4" class="column no-wrap flex-center tw-pt-20">
                  <div class="card card__border-line star star-card--desk">
                    <div class="star-avatar">
                      <div class="star-avatar__wrapper">
                        <img class="star-avatar__bg" src="./icons/star.svg" alt="" />
                        <img class="star-avatar__img" src="./img/beliy.png" alt="" />
                      </div>
                    </div>
                    <h4>
                      {{ t("team.peoples.4.name") }} <br />
                      {{ t("team.peoples.4.lastName") }}
                    </h4>
                    <p class="tw-mt-5">
                      {{ t("team.peoples.4.bio") }}
                    </p>
                  </div>
                </q-carousel-slide>

                <q-carousel-slide name="5" class="column no-wrap flex-center tw-pt-20">
                  <div class="card card__border-line star star-card--desk">
                    <div class="star-avatar">
                      <div class="star-avatar__wrapper">
                        <img class="star-avatar__bg" src="./icons/star.svg" alt="" />
                        <img class="star-avatar__img" src="./img/shakhanova.png" alt="" />
                      </div>
                    </div>
                    <h4>
                      {{ t("team.peoples.5.name") }} <br />
                      {{ t("team.peoples.5.lastName") }}
                    </h4>
                    <p class="tw-mt-5">
                      {{ t("team.peoples.5.bio") }}
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
                        <img class="star-avatar__bg" src="./icons/star.svg" alt="" />
                        <img class="star-avatar__img" src="./img/karazbaev.png" alt="" />
                      </div>
                    </div>
                    <h4 class="tw-mt-5">
                      {{ t("team.peoples.1.name") }}
                      {{ t("team.peoples.1.lastName") }}
                    </h4>
                    <p class="tw-mt-2.5">
                      {{ t("team.peoples.1.bio") }}
                    </p>
                  </div>
                </div>
                <div class="tw-col-span-2">
                  <div class="star star-card--mob">
                    <div class="star-avatar">
                      <div class="star-avatar__wrapper">
                        <img class="star-avatar__bg" src="./icons/star.svg" alt="" />
                        <img class="star-avatar__img" src="./img/latypov.png" alt="" />
                      </div>
                    </div>
                    <h4 class="tw-mt-5">
                      {{ t("team.peoples.2.name") }}
                      {{ t("team.peoples.2.lastName") }}
                    </h4>
                    <p class="tw-mt-2.5">
                      {{ t("team.peoples.2.bio") }}
                    </p>
                  </div>
                </div>
                <div class="tw-col-span-2">
                  <div class="star star-card--mob">
                    <div class="star-avatar">
                      <div class="star-avatar__wrapper">
                        <img class="star-avatar__bg" src="./icons/star.svg" alt="" />
                        <img class="star-avatar__img" src="./img/sadreev.png" alt="" />
                      </div>
                    </div>
                    <h4 class="tw-mt-5">
                      {{ t("team.peoples.3.name") }}
                      {{ t("team.peoples.3.lastName") }}
                    </h4>
                    <p class="tw-mt-2.5">
                      {{ t("team.peoples.3.bio") }}
                    </p>
                  </div>
                </div>
                <div class="tw-col-span-3 tw-justify-self-end">
                  <div class="star star-card--mob">
                    <div class="star-avatar">
                      <div class="star-avatar__wrapper">
                        <img class="star-avatar__bg" src="./icons/star.svg" alt="" />
                        <img class="star-avatar__img" src="./img/beliy.png" alt="" />
                      </div>
                    </div>
                    <h4 class="tw-mt-5">
                      {{ t("team.peoples.4.name") }}
                      {{ t("team.peoples.4.lastName") }}
                    </h4>
                    <p class="tw-mt-2.5">
                      {{ t("team.peoples.4.bio") }}
                    </p>
                  </div>
                </div>
                <div class="tw-col-span-2">
                  <div class="star star-card--mob">
                    <div class="star-avatar">
                      <div class="star-avatar__wrapper">
                        <img class="star-avatar__bg" src="./icons/star.svg" alt="" />
                        <img class="star-avatar__img" src="./img/shakhanova.png" alt="" />
                      </div>
                    </div>
                    <h4 class="tw-mt-5">
                      {{ t("team.peoples.5.name") }}
                      {{ t("team.peoples.5.lastName") }}
                    </h4>
                    <p class="tw-mt-2.5">
                      {{ t("team.peoples.5.bio") }}
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
        <div class="tw-relative">
          <img class="section-icon tw-right-0" src="./img/section-backers.png" />
        </div>
        <h2>{{ t("backers.title") }}</h2>

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
        <div class="tw-relative">
          <img class="section-icon tw-right-0 desk-n" src="./img/section-faq.png" />
        </div>
        <h2>{{ t("faq.title") }}</h2>
        <div class="accardion tw-mt-10">
          <div class="accardion-item">
            <div class="card card__border-line accardion-item__card">
              <h4 v-html="t('faq.items.1.title')"></h4>
              <button @click="toggle('test')" class="pie pie-arrow button-arrow"
                :class="accardion == 'test' ? 'active' : ''">
                <q-icon name="r_keyboard_arrow_down" size="35px" class="arrow-icon">
                </q-icon>
              </button>
            </div>
            <p class="accardion-item__text" :class="accardion == 'test' ? 'active' : ''" id="accordion-test"
              v-html="t('faq.items.1.text')"></p>
          </div>

          <div class="accardion-item">
            <div class="card card__border-line accardion-item__card">
              <h4 v-html="t('faq.items.2.title')"></h4>
              <button @click="toggle('2')" class="pie pie-arrow button-arrow"
                :class="accardion == '2' ? 'active' : ''">
                <q-icon name="r_keyboard_arrow_down" size="35px" class="arrow-icon">
                </q-icon>
              </button>
            </div>
            <p class="accardion-item__text" :class="accardion == '2' ? 'active' : ''" id="accordion-2"
              v-html="t('faq.items.2.text')"></p>
          </div>

          <div class="accardion-item">
            <div class="card card__border-line accardion-item__card">
              <h4 v-html="t('faq.items.3.title')"></h4>
              <button @click="toggle('3')" class="pie pie-arrow button-arrow"
                :class="accardion == '3' ? 'active' : ''">
                <q-icon name="r_keyboard_arrow_down" size="35px" class="arrow-icon">
                </q-icon>
              </button>
            </div>
            <p class="accardion-item__text" :class="accardion == '3' ? 'active' : ''" id="accordion-3"
              v-html="t('faq.items.3.text')"></p>
          </div>

          <div class="accardion-item">
            <div class="card card__border-line accardion-item__card">
              <h4 v-html="t('faq.items.4.title')"></h4>
              <button @click="toggle('4')" class="pie pie-arrow button-arrow"
                :class="accardion == '4' ? 'active' : ''">
                <q-icon name="r_keyboard_arrow_down" size="35px" class="arrow-icon">
                </q-icon>
              </button>
            </div>
            <p class="accardion-item__text" :class="accardion == '4' ? 'active' : ''" id="accordion-4"
              v-html="t('faq.items.4.text')"></p>
          </div>

          <div class="accardion-item">
            <div class="card card__border-line accardion-item__card">
              <h4 v-html="t('faq.items.5.title')"></h4>
              <button @click="toggle('5')" class="pie pie-arrow button-arrow"
                :class="accardion == '5' ? 'active' : ''">
                <q-icon name="r_keyboard_arrow_down" size="35px" class="arrow-icon">
                </q-icon>
              </button>
            </div>
            <p class="accardion-item__text" :class="accardion == '5' ? 'active' : ''" id="accordion-5"
              v-html="t('faq.items.5.text')"></p>
          </div>

          <div class="accardion-item">
            <div class="card card__border-line accardion-item__card">
              <h4 v-html="t('faq.items.6.title')"></h4>
              <button @click="toggle('6')" class="pie pie-arrow button-arrow"
                :class="accardion == '6' ? 'active' : ''">
                <q-icon name="r_keyboard_arrow_down" size="35px" class="arrow-icon">
                </q-icon>
              </button>
            </div>
            <p class="accardion-item__text" :class="accardion == '6' ? 'active' : ''" id="accordion-6"
              v-html="t('faq.items.6.text')"></p>
          </div>
        </div>
        <div class="card-big tw-mt-15 xl:tw-mt-20">
          <img src="./img/telegram-round.png" alt="plus" class="top-icon" />
          <div class="card-big__left">
            <h2>{{ t("card-big.anyquestion.title") }}</h2>
            <p class="tw-mt-5">
              {{ t("card-big.anyquestion.text") }}
            </p>
          </div>
          <div class="tw-flex tw-flex-col tw-mt-7.5 tw-gap-5 xl:tw-mt-0 xl:tw-flex-row xl:tw-gap-3">
            <a class="button" href="https://t.me/algafinancechat" target="blank">
              {{ t("card-big.anyquestion.contacrusButton") }}
            </a>
            <a class="button-black" href="https://t.me/algafinancechat" target="blank">
              {{ t("card-big.anyquestion.joinButton") }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import useChartData from "src/composition/V3/useChartData.js"

import MiniAreaChart from "src/components/V3/MiniAreaChart.vue"
import MarkIcon from "src/components/V3/MarkIcon.vue"
import { method } from "lodash";
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
        text: "ALGA — это совершенно новая платформа CeFi для реализации различных инвестиционных стратегий на основе индексных деривативов. <br> Лежащая в основе передовая технология наряду с огромным опытом основной команды в области торговли делает ALGA универсальным сервисом для инвестиций в проверенные и эффективные стратегии, облегчающие вход в криптовалюту для всех. Эти стратегии, основанные на индексных деривативах, состоящих из множества активов, подобранных в наиболее эффективном соотношении, позволяют получать солидный доход на вложенный капитал при минимизации рисков. <br> Платформа создана людьми для людей с единственной целью - обеспечить комфортное отслеживание активов и прозрачность транзакций, чтобы вывести опыт управления активами на совершенно новый уровень.",
      },
      indexD: {
        title: "Index Derivatives",
        card: {
          profitability: {
            1: "Прибыльность <br/> за {numb} месяцев",
            2: "Прибыльность <br/> за {numb} месяцев",
            3: "Прибыльность <br/> за {numb} месяцев",
            4: "Прибыльность <br/> за {numb} месяцев",
            5: "Прибыльность <br/> за {numb} месяцев",
            6: "Прибыльность <br/> за {numb} месяцев",
            7: "Прибыльность <br/> за {numb} месяцев",
            8: "Прибыльность <br/> за {numb} месяцев",
            9: "Прибыльность <br/> за {numb} месяцев",
            10: "Прибыльность <br/> за {numb} месяцев",
          },
        },
      },
      roadmap: {
        title: "Дорожная карта",
        stages: {
          1: {
            title: "Этап 1",
            subtitle: "Январь-Март, 2022",
            items: [
              "Разработка концепции и брендбука проекта",
              "Разработка архитектуры платформы",
              "Создание и наполнение сайта (дизайн, верстка, мобильная адаптация, разработка ядра учетной записи пользователя)",
            ],
          },
          2: {
            title: "Этап 2",
            subtitle: "Март-Май, 2022",
            items: [
              "Разработка платформы MVP",
              "Разработка маркетингового плана",
              "Создание и наполнение соцсетей (Facebook, Instagram, Telegram, Reddit)",
              "Старт предварительной маркетинговой кампании",
            ],
          },
          3: {
            title: "Этап 3",
            subtitle: "Май-Июль, 2022",
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
            subtitle: "Июль-Сентябрь, 2022",
            items: [
              "Старт глобальной маркетинговой кампании",
              "Проведение IEO на CEX",
              "Листинг CEX",
              "Запуск платформы MVP",
            ],
          },
          5: {
            title: "Этап 5",
            subtitle: "Сентябрь-Ноябрь, 2022",
            items: [
              "Обновление функционала платформы",
              "Запуск программы индексов Alga Advisors",
              "Разработка мобильных приложений",
            ],
          },
          6: {
            title: "Этап 5",
            subtitle: "Ноябрь 2022-Фев 2023",
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
        title: "Team",
        peoples: {
          1: {
            name: "Урал",
            lastName: "Каразбаев",
            bio: "Основатель ALGA Ecosystem, предприниматель, основатель инвестиционного клуба «Музей финансов», соучредитель ТЦ «Город», «Форестпром», Д.С.Р. Уфа",
          },
          2: {
            name: "Данат",
            lastName: "Латыпов",
            bio: "Разработчик, кандидат экономических наук, математик. Руководитель группы разработки. Специализируется на разработке высоконагруженных систем и коммерческих блокчейн-проектов с 2017 года.",
          },
          3: {
            name: "Раст",
            lastName: "Пентагон",
            bio: "Основатель ALGA Ecosystem и торговый директор криптовалютного фонда Fakel в СНГ, основатель консалтинговой компании Take Profit, международный спикер, квалифицированный трейдер с опытом работы более 8 лет.",
          },
          4: {
            name: "Иван",
            lastName: "Белый",
            bio: "Основатель и генеральный директор криптовалютного фонда Fakel в СНГ, руководитель образовательной программы, квалифицированный трейдер и маркетолог с опытом работы более 10 лет",
          },
          5: {
            name: "Елена",
            lastName: "Шаханова",
            bio: "Бизнесмен, основатель и генеральный директор агентства цифрового брендинга YES IDEA, арт-директор российских и международных проектов",
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
              Alga Ecosystem — это совершенно новый инструмент для удобного входа в мир криптовалюты и разумных инвестиций. На начальном этапе в экосистема будет состоять из трех основных продуктов:
              <br>
              -Платформа индексных деривативов Alga (AID)
              <br>
              -Образовательная платформа Alga (AE)
              <br>
              -Социальная сеть Alga Indexview (AI)
            `,
          },
          2: {
            title: "Что такое Платформа индексных деривативов Alga?",
            text: `
              Это CeFi платформа, которая позволяет вам инвестировать в криптовалюты через индексные деривативы. Команда объединила передовые технологии и личный торговый опыт, чтобы создать среду безопасного инвестирования средств пользователей и получения сбалансированной доходности на аллокированный капитал с помощью индексов. AID дает возможность отдельным лицам или учреждениям создавать, управлять и вкладываться в инновационные инвестиционные инструменты.
            `
          },
          3: {
            title: "Что такое индекс?",
            text: `
              Индекс — это дериватив, который представляет собой полностью обеспеченный портфель активов, который может позволить людям или организациям управлять своим капиталом и капиталом других в безопасной среде.
            `
          },
          4: {
            title: "Какие виды индексов есть у вас на платформе?",
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
              С развитием платформы будут добавляться новые индексы.
            `
          },
          5: {
            title: "Что такое Alga Token и для чего он нужен?",
            text: `
              Токен Alga является нативным токеном экосистемы. Владельцы Alga получат ряд преимуществ, таких как: возможность стейкинга и участия в DAO, создания собственных индексов. Кроме того, за токены Alga можно будет получить скидку на образовательные программы и различные функции кастомизации в Alga Indexview.
            `
          },
          6: {
            title: "Законна ли деятельность вашей платформы?",
            text: `
            Да, интеллектуальная собственность Alga Ecosystem принадлежит юридическому лицу, официально оформленному в г. Дубай (ОАЭ). Оно имеет лицензию на работу с цифровыми активами.
            `
          }
        },
      },
      "card-big": {
        signin: {
          title: "Создать",
          text: "По всем вопросам пишите нам и оператор свяжется с вами в ближайшее время",
          createButton: "Создать аккаунт",
        },
        anyquestion: {
          title: "Остались вопросы?",
          text: "По всем вопросам пишите нам и оператор свяжется с вами в ближайшее время",
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
        text: "ALGA is a brand new CeFi platform for the implementation of different investment strategies based on index derivatives. <br> The underlying cutting edge technology along with a huge background of the core team in  trading makes ALGA the one-stop shop for investments into proven and efficient strategies facilitating entry to the crypto for everyone. These strategies based on index derivatives consisting of many assets selected in the most effective ratio allow to receive solid return on the allocated capital while minimizing risks. <br> The platform is designed by people for people with the only one goal - to ensure comfortable tracking of assets and transparent transactions in order to bring asset management experience to completely new level.",
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
            subtitle: "March-May, 2022",
            items: [
              "Development of platform MVP",
              "Development of the marketing plan",
              "Creation and content of socials (Facebook, Instagram, Telegram, Reddit)",
              "Start of the preliminary marketing campaign",
            ],
          },
          3: {
            title: "Stage 3",
            subtitle: "May-July, 2022",
            items: [
              "Company establishment and obtaining of legal documents",
              "Start of the fundraise",
              "Offices establishment: Dubai, Moscow, Ufa, Kazan",
              "MVP testing and QA",
              "Platform security audit completion",
            ],
          },
          4: {
            title: "Stage 4",
            subtitle: "July-September, 2022",
            items: [
              "Start of the global marketing campaign",
              "Conduction of IEO on CEX",
              "CEX listing",
              "Platform MVP launch",
            ],
          },
          5: {
            title: "Stage 5",
            subtitle: "September-November, 2022",
            items: [
              "Platform functionality update",
              "Launch of the Alga Advisors indexes program",
              "Mobile app development",
            ],
          },
          6: {
            title: "Stage 6",
            subtitle: "Nov 2022-Feb 2023",
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
            title: 'What is the Alga Index Derivatives platform?',
            text: `
              It is a CeFi platform that allows you to invest in cryptocurrencies through index derivatives.
              <br>
              Founders combine advanced technology and personal trading experience to create an environment for safe investment of users’ funds and balanced returns on allocated capital with the help of indexes. AID empowers individuals or institutions to create, manage and invest in innovative on-chain investment tools.
            `
          },
          3: {
            title: 'What is index?',
            text: `
              Index is a derivative that represents a fully collateralized portfolio of assets that can enable people or entities to manage their wealth & the wealth of others within a safe environment. 
            `
          },
          4: {
            title: 'What kind of indexes are represented at AIDT?',
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
              With the development of the platform it will be more.
            `
          },
          5: {
            title: 'What is an Alga token and what are its use cases?',
            text: `
              Alga token is native token of the Alga Ecosystem. Holders of Alga will have several benefits, such as: possibility of staking and DAO participation, creation of own indexes. Discounts for Educational programs and different customization features at Alga Indexview.
            `
          },
          6: {
            title: 'Is the operation of Alga Ecosystem legal?',
            text: `Yes, Alga Ecosystem works under the registered legal entity in Dubai (UAE). Entity is licensed to work with digital assets.`
          }
        },
      },
      "card-big": {
        signin: {
          title: "Sign up",
          text: "For all questions, write to us and the operator will contact you as soon as possible",
          createButton: "Create an account",
        },
        anyquestion: {
          title: "Any questions?",
          text: "For all questions, write to us and the operator will contact you as soon as possible",
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
  },
};
export default {
  components: {
    MiniAreaChart,
    MarkIcon
  },
  setup() {
    const {btnMainData, ethMainData, btcComboData, ethComboData,stableIndexData,
            btnMainTwoMonthPrecent, ethMainTwoMonthPrecent, btcComboTwoMonthPrecent, ethComboTwoMonthPrecent, stableIndexTwoMonthPrecent
        } = useChartData();
    const $i18n = useI18n();
    const store = useStore();
    const locale = computed(() => {
      console.log($i18n.locale.value);
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
      slide: ref("1"),
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",

      btnMainData, ethMainData, btcComboData, ethComboData,stableIndexData,
            btnMainTwoMonthPrecent, ethMainTwoMonthPrecent, btcComboTwoMonthPrecent, ethComboTwoMonthPrecent, stableIndexTwoMonthPrecent
    };


  },
  methods: {
    stage1(){
      ym(90160255,'reachGoal','stage1');
      this.$router.push({ name: 'auth.registr' })
    },
    stage2 (){
      ym(90160255,'reachGoal','stage 2')
      this.$router.push({ name: 'index-directive' })
    }
  }
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
