<template>
    <!-- slider -->
    <div class=" tw-flex  tw-flex-col ">
        
        <div class=" item tw-flex tw-justify-between tw-items-center  tw-mb-6 xl:tw-mb-10 ">
            <h2>
                {{ t("indexderivatives.title") }}
            </h2>
            <div class=" tw-hidden  xl:tw-flex xl:tw-flex-wrap xl:tw-gap-2.5">
                <div class="slide-button" :class="{active:slide === 1}" @click="slide = 1">
                    <img :src="require('assets/icons/index-directive/indg-1.svg')" alt="">
                </div>
                <div class="slide-button" :class="{active:slide === 2}" @click="slide = 2">
                    <img :src="require('assets/icons/index-directive/indg-2.svg')" alt="">
                </div>

                <div class="slide-button" :class="{active:slide === 3}" @click="slide = 3">
                    <img :src="require('assets/icons/index-directive/indg-3.svg')" alt="">
                </div>
                <div class="slide-button" :class="{active:slide === 4}" @click="slide = 4">
                    <img :src="require('assets/icons/index-directive/indg-4.svg')" alt="">
                </div>

                <div class="slide-button" :class="{active:slide === 5}" @click="slide = 5">
                    <img :src="require('assets/icons/index-directive/indg-5.svg')" alt="">
                </div>
            </div>

        </div>
        <q-carousel swipeable animated v-model="slide" ref="carousel" class="bg-transparent" height="100%"
            padding="false">

            <q-carousel-slide :name="1">
                <div class="card card__border-line tw-mb-7.5 xl:tw-mb-10 index-directive">
                    <div class=" item xl:tw-flex xl:tw-justify-between xl:tw-items-center tw-mb-5">
                        <div class=" tw-flex tw-gap-5 tw-items-center ">
                           
                            <div class=" tw-flex  tw-gap-10 tw-items-center">
                                <img :src="require('assets/icons/index-directive/indg-1.png')" alt="" />
                                <div class=" tw-flex tw-flex-col">
                                    <h4>BTC main</h4>
                                    <p>
                                        {{t('indexderivatives.time', { to: '31.08.2022', from: '31.12.2022' })}}
                                    </p>
                                </div>
                            </div>
                            <base-button @click="stage2" class="button tw-w-full tw-hidden  xl:tw-block xl:tw-w-auto ">buy</base-button>
                        </div>
                        <div class=" tw-hidden xl:tw-flex xl:tw-gap-2.5">
                            <button @click="$refs.carousel.previous()" class="pie pie-arrow button-arrow">
                                <q-icon name="r_keyboard_arrow_left" size="35px" class="arrow-icon">
                                </q-icon>
                            </button>
                            <button @click="$refs.carousel.next()" class="pie pie-arrow button-arrow">
                                <q-icon name="r_keyboard_arrow_right" size="35px" class="arrow-icon">
                                </q-icon>
                            </button>
                        </div>
                    </div>
                    <p class="text">
                        {{t('indexderivatives.items[0]')}}
                    </p>
                    <base-button class="button tw-w-full tw-mt-5 xl:tw-hidden xl:tw-w-auto ">buy</base-button>
                </div>
                <div class=" tw-mb-20 tw-flex tw-flex-wrap tw-gap-2.5 xl:tw-hidden">
                    <div class="slide-button" :class="{active:slide === 1}" @click="slide = 1">
                        <img :src="require('assets/icons/index-directive/indg-1.svg')" alt="">
                    </div>
                    <div class="slide-button" :class="{active:slide === 2}" @click="slide = 2">
                        <img :src="require('assets/icons/index-directive/indg-2.svg')" alt="">
                    </div>

                    <div class="slide-button" :class="{active:slide === 3}" @click="slide = 3">
                        <img :src="require('assets/icons/index-directive/indg-3.svg')" alt="">
                    </div>
                    <div class="slide-button" :class="{active:slide === 4}" @click="slide = 4">
                        <img :src="require('assets/icons/index-directive/indg-4.svg')" alt="">
                    </div>

                    <div class="slide-button" :class="{active:slide === 5}" @click="slide = 5">
                        <img :src="require('assets/icons/index-directive/indg-5.svg')" alt="">
                    </div>
                </div>
                <div>
                    <h4 class=" tw-mb-5">
                        {{ t("inside.title") }}
                    </h4>
                    <div class="inside tw-mb-10">
                        <div class="inside-card card card__border-line">
                            <RoundDiagram class="inside__round" :values="[75,25]" textBefore="%"
                                :colors="['#F26437', '#EC249B']">
                                <template #image>
                                    <image x="180" y="180" width="140"
                                        :xlink:href="require('assets/icons/index-directive/indg-1.svg')" />
                                </template>
                            </RoundDiagram>
                        </div>
                        <div class=" ">
                            <ul class="coinlist" >
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/bitcoin.svg')" alt="bitcoin" width="30" height="30">
                                        <span>Bitcoin</span>
                                    </div>
                                    <span>75%</span>
                                </li>
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/index-directive/indg-1.svg')" alt="Stable" width="30" height="30">
                                        <span>Stable</span>
                                    </div>
                                    <span>25%</span>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="card card__border-line statistics">
                        <div class="w statistics__top">
                            <div class=" tw-flex tw-justify-between">
                                <div>{{t('statistics.title')}}</div>
                                <base-select
                                    :options="[{ label: t('statistics.selectProfit', {numb:'2'}), id: 1 }]" />
                            </div>

                        </div>
                        <div class="statistics__bottom">

                            <AreaChart :valSeries="btnMainData"  class=" tw-order-2 xl:tw-order-1"/>
                            <div class=" tw-flex tw-justify-between tw-items-center tw-order-1 xl:tw-block tw-mt-5   xl:tw-order-2">
                                <div class=" tw-mb-2.5"
v-html="t('statistics.profitText', {numb:'2'})"
>
                                </div>
                                <div class=" tw-text-md2 tw-flex tw-gap-x-2.5">
                                    <MarkIcon :mark="btnMainTwoMonthPrecent"/>
                                    {{btnMainTwoMonthPrecent}}%
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </q-carousel-slide>

            <q-carousel-slide :name="2">
                <div class="card card__border-line tw-mb-7.5 xl:tw-mb-10 index-directive">
                    <div class=" item xl:tw-flex xl:tw-justify-between xl:tw-items-center tw-mb-5">
                        <div class=" tw-flex tw-gap-5 tw-items-center ">
                           
                            <div class=" tw-flex  tw-gap-10 tw-items-center">
                                <img :src="require('assets/icons/index-directive/indg-2.svg')" alt="" />
                                <div class=" tw-flex tw-flex-col">
                                    <h4>ETH main</h4>
                                    <p>
                                        {{t('indexderivatives.time', { to: '31.08.2022', from: '31.12.2022' })}}
                                    </p>
                                </div>
                            </div>
                            <base-button @click="stage2" class="button tw-w-full tw-hidden  xl:tw-block xl:tw-w-auto ">buy</base-button>
                        </div>
                        <div class=" tw-hidden xl:tw-flex xl:tw-gap-2.5">
                            <button @click="$refs.carousel.previous()" class="pie pie-arrow button-arrow">
                                <q-icon name="r_keyboard_arrow_left" size="35px" class="arrow-icon">
                                </q-icon>
                            </button>
                            <button @click="$refs.carousel.next()" class="pie pie-arrow button-arrow">
                                <q-icon name="r_keyboard_arrow_right" size="35px" class="arrow-icon">
                                </q-icon>
                            </button>
                        </div>
                    </div>
                    <p class="text">
                        {{t('indexderivatives.items[1]')}}
                    </p>
                    <base-button class="button tw-w-full tw-mt-5 xl:tw-hidden xl:tw-w-auto ">buy</base-button>
                </div>
                <div class=" tw-mb-20 tw-flex tw-flex-wrap tw-gap-2.5 xl:tw-hidden">
                    <div class="slide-button" :class="{active:slide === 1}" @click="slide = 1">
                        <img :src="require('assets/icons/index-directive/indg-1.svg')" alt="">
                    </div>
                    <div class="slide-button" :class="{active:slide === 2}" @click="slide = 2">
                        <img :src="require('assets/icons/index-directive/indg-2.svg')" alt="">
                    </div>

                    <div class="slide-button" :class="{active:slide === 3}" @click="slide = 3">
                        <img :src="require('assets/icons/index-directive/indg-3.svg')" alt="">
                    </div>
                    <div class="slide-button" :class="{active:slide === 4}" @click="slide = 4">
                        <img :src="require('assets/icons/index-directive/indg-4.svg')" alt="">
                    </div>

                    <div class="slide-button" :class="{active:slide === 5}" @click="slide = 5">
                        <img :src="require('assets/icons/index-directive/indg-5.svg')" alt="">
                    </div>
                </div>
                <div>
                    <h4 class=" tw-mb-5">
                        {{ t("inside.title") }}
                    </h4>
                    <div class="inside tw-mb-10">
                        <div class="inside-card card card__border-line">
                            <RoundDiagram class="inside__round" :values="[65,10,10,15]" textBefore="%"
                                :colors="['#37367B','#3AB83A', '#BDC5D1', '#272B4F']">
                                <template #image>
                                    <image x="180" y="180" width="140"
                                        :xlink:href="require('assets/icons/index-directive/indg-2.svg')" />
                                </template>
                            </RoundDiagram>

                        </div>
                        <div class=" ">
                            <ul class="coinlist" >
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/eth.svg')" alt="Ethereum (ETH)" width="30" height="30">
                                        <span>Ethereum (ETH)</span>
                                    </div>
                                    <span>65%</span>
                                </li>
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/eth-classic.svg')" alt="Ethereum Classic (ETC)" width="30" height="30">
                                        <span>Ethereum Classic (ETC)</span>
                                    </div>
                                    <span>10%</span>
                                </li>
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/eth-fork.svg')" alt="Ethereum Fork (ETHfork)" width="30" height="30">
                                        <span>Ethereum Fork (ETHfork)</span>
                                    </div>
                                    <span>10%</span>
                                </li>
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/index-directive/indg-1.svg')" alt="Stable Index" width="30" height="30">
                                        <span>Stable Index</span>
                                    </div>
                                    <span>15%</span>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="card card__border-line statistics">
                        <div class="w statistics__top">
                            <div class=" tw-flex tw-justify-between">
                                <div>{{t('statistics.title')}}</div>
                                <base-select
                                    :options="[{ label: t('statistics.selectProfit', {numb:'2'}), id: 1 }]" />
                            </div>

                        </div>
                        <div class="statistics__bottom">

                            <AreaChart :valSeries="ethMainData"  class=" tw-order-2 xl:tw-order-1"/>
                            <div class=" tw-flex tw-justify-between tw-items-center tw-order-1 xl:tw-block tw-mt-5   xl:tw-order-2">
                                <div class=" tw-mb-2.5"
v-html="t('statistics.profitText', {numb:'2'})"
>
                                </div>
                                <div class=" tw-text-md2 tw-flex tw-gap-x-2.5">
                                    <MarkIcon :mark="ethMainTwoMonthPrecent"/>
                                    {{ethMainTwoMonthPrecent}}%
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </q-carousel-slide>

            <q-carousel-slide :name="3">
                <div class="card card__border-line tw-mb-7.5 xl:tw-mb-10 index-directive">
                    <div class=" item xl:tw-flex xl:tw-justify-between xl:tw-items-center tw-mb-5">
                        <div class=" tw-flex tw-gap-5 tw-items-center ">
                           
                            <div class=" tw-flex  tw-gap-10 tw-items-center">
                                <img :src="require('assets/icons/index-directive/indg-3.svg')" alt="" />
                                <div class=" tw-flex tw-flex-col">
                                    <h4>BTC combo </h4>
                                    <p>
                                        {{t('indexderivatives.time', { to: '31.08.2022', from: '31.12.2022' })}}
                                    </p>
                                </div>
                            </div>
                            <base-button @click="stage2" class="button tw-w-full tw-hidden  xl:tw-block xl:tw-w-auto ">buy</base-button>
                        </div>
                        <div class=" tw-hidden xl:tw-flex xl:tw-gap-2.5">
                            <button @click="$refs.carousel.previous()" class="pie pie-arrow button-arrow">
                                <q-icon name="r_keyboard_arrow_left" size="35px" class="arrow-icon">
                                </q-icon>
                            </button>
                            <button @click="$refs.carousel.next()" class="pie pie-arrow button-arrow">
                                <q-icon name="r_keyboard_arrow_right" size="35px" class="arrow-icon">
                                </q-icon>
                            </button>
                        </div>
                    </div>
                    <p class="text">
                        {{t('indexderivatives.items[2]')}}
                    </p>
                    <base-button class="button tw-w-full tw-mt-5 xl:tw-hidden xl:tw-w-auto ">buy</base-button>
                </div>
                <div class=" tw-mb-20 tw-flex tw-flex-wrap tw-gap-2.5 xl:tw-hidden">
                    <div class="slide-button" :class="{active:slide === 1}" @click="slide = 1">
                        <img :src="require('assets/icons/index-directive/indg-1.svg')" alt="">
                    </div>
                    <div class="slide-button" :class="{active:slide === 2}" @click="slide = 2">
                        <img :src="require('assets/icons/index-directive/indg-2.svg')" alt="">
                    </div>

                    <div class="slide-button" :class="{active:slide === 3}" @click="slide = 3">
                        <img :src="require('assets/icons/index-directive/indg-3.svg')" alt="">
                    </div>
                    <div class="slide-button" :class="{active:slide === 4}" @click="slide = 4">
                        <img :src="require('assets/icons/index-directive/indg-4.svg')" alt="">
                    </div>

                    <div class="slide-button" :class="{active:slide === 5}" @click="slide = 5">
                        <img :src="require('assets/icons/index-directive/indg-5.svg')" alt="">
                    </div>
                </div>

                <div>
                    <h4 class=" tw-mb-5">
                        {{ t("inside.title") }}
                    </h4>
                    <div class="inside tw-mb-10">
                        <div class="inside-card card card__border-line">
                            <RoundDiagram class="inside__round" :values="[45,25,10,10,10]" textBefore="%"
                                :colors="['#F7931A','#14044D', '#F0B90B', '#345D9D', '#272B4F']">
                                <template #image>
                                    <image x="180" y="180" width="140"
                                        :xlink:href="require('assets/icons/index-directive/indg-3.svg')" />
                                </template>
                            </RoundDiagram>
                        </div>
                        <div class=" ">
                            <ul class="coinlist" >
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/bitcoin.svg')" alt="Bitcoin (BTC)" width="30" height="30">
                                        <span>Bitcoin (BTC)</span>
                                    </div>
                                    <span>45%</span>
                                </li>
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/eth.svg')" alt="Ethereum (ETH)" width="30" height="30">
                                        <span>Ethereum (ETH)</span>
                                    </div>
                                    <span>25%</span>
                                </li>
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/binance.svg')" alt="Binance (BNB)" width="30" height="30">
                                        <span>Binance (BNB)</span>
                                    </div>
                                    <span>10%</span>
                                </li>
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/litecoin.svg')" alt="Litecoin (LTC)" width="30" height="30">
                                        <span>Litecoin (LTC)</span>
                                    </div>
                                    <span>10%</span>
                                </li>

                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/index-directive/indg-1.svg')" alt="stable" width="30" height="30">
                                        <span>Stable Index</span>
                                    </div>
                                    <span>10%</span>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="card card__border-line statistics">
                        <div class="w statistics__top">
                            <div class=" tw-flex tw-justify-between">
                                <div>{{t('statistics.title')}}</div>
                                <base-select
                                    :options="[{ label: t('statistics.selectProfit', {numb:'2'}), id: 1 }]" />
                            </div>

                        </div>
                        <div class="statistics__bottom">

                            <AreaChart :valSeries="btcComboData"  class=" tw-order-2 xl:tw-order-1"/>
                            <div class=" tw-flex tw-justify-between tw-items-center tw-order-1 xl:tw-block tw-mt-5   xl:tw-order-2">
                                <div class=" tw-mb-2.5"
v-html="t('statistics.profitText', {numb:'2'})"
>
                                </div>
                                <div class=" tw-text-md2 tw-flex tw-gap-x-2.5">
                                    <MarkIcon :mark="btcComboTwoMonthPrecent"/>
                                    {{btcComboTwoMonthPrecent}}%
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </q-carousel-slide>

            <q-carousel-slide :name="4">
                <div class="card card__border-line tw-mb-7.5 xl:tw-mb-10 index-directive">
                    <div class=" item xl:tw-flex xl:tw-justify-between xl:tw-items-center tw-mb-5">
                        <div class=" tw-flex tw-gap-5 tw-items-center ">
                           
                            <div class=" tw-flex  tw-gap-10 tw-items-center">
                                <img :src="require('assets/icons/index-directive/indg-4.svg')" alt="" />
                                <div class=" tw-flex tw-flex-col">
                                    <h4>ETH combo </h4>
                                    <p>
                                        {{t('indexderivatives.time', { to: '31.08.2022', from: '31.12.2022' })}}
                                    </p>
                                </div>
                            </div>
                            <base-button @click="stage2" class="button tw-w-full tw-hidden  xl:tw-block xl:tw-w-auto ">buy</base-button>
                        </div>
                        <div class=" tw-hidden xl:tw-flex xl:tw-gap-2.5">
                            <button @click="$refs.carousel.previous()" class="pie pie-arrow button-arrow">
                                <q-icon name="r_keyboard_arrow_left" size="35px" class="arrow-icon">
                                </q-icon>
                            </button>
                            <button @click="$refs.carousel.next()" class="pie pie-arrow button-arrow">
                                <q-icon name="r_keyboard_arrow_right" size="35px" class="arrow-icon">
                                </q-icon>
                            </button>
                        </div>
                    </div>
                    <p class="text">
                        {{t('indexderivatives.items[3]')}}
                    </p>
                    <base-button class="button tw-w-full tw-mt-5 xl:tw-hidden xl:tw-w-auto ">buy</base-button>
                </div>
                <div class=" tw-mb-20 tw-flex tw-flex-wrap tw-gap-2.5 xl:tw-hidden">
                    <div class="slide-button" :class="{active:slide === 1}" @click="slide = 1">
                        <img :src="require('assets/icons/index-directive/indg-1.svg')" alt="">
                    </div>
                    <div class="slide-button" :class="{active:slide === 2}" @click="slide = 2">
                        <img :src="require('assets/icons/index-directive/indg-2.svg')" alt="">
                    </div>

                    <div class="slide-button" :class="{active:slide === 3}" @click="slide = 3">
                        <img :src="require('assets/icons/index-directive/indg-3.svg')" alt="">
                    </div>
                    <div class="slide-button" :class="{active:slide === 4}" @click="slide = 4">
                        <img :src="require('assets/icons/index-directive/indg-4.svg')" alt="">
                    </div>

                    <div class="slide-button" :class="{active:slide === 5}" @click="slide = 5">
                        <img :src="require('assets/icons/index-directive/indg-5.svg')" alt="">
                    </div>
                </div>

                <div>
                    <h4 class=" tw-mb-5">
                        {{ t("inside.title") }}
                    </h4>
                    <div class="inside tw-mb-10">
                        <div class="inside-card card card__border-line">
                            <RoundDiagram class="inside__round" :values="[45,25,10,5,5,10]" textBefore="%"
                                :colors="['#14044D','#F7931A', '#3AB83A', '#F0B90B', '#345D9D', '#272B4F']">
                                <template #image>
                                    <image x="180" y="180" width="140"
                                        :xlink:href="require('assets/icons/index-directive/indg-4.svg')" />
                                </template>
                            </RoundDiagram>
                        </div>
                        <div class=" ">
                            <ul class="coinlist" >
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/eth.svg')" alt="Ethereum (ETH)" width="30" height="30">
                                        <span>Ethereum (ETH)</span>
                                    </div>
                                    <span>45%</span>
                                </li>
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/bitcoin.svg')" alt="Bitcoin (BTC)" width="30" height="30">
                                        <span>Bitcoin (BTC)</span>
                                    </div>
                                    <span>25%</span>
                                </li>
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/eth-classic.svg')" alt="Ethereum Classic (ETC)" width="30" height="30">
                                        <span>Ethereum Classic (ETC)</span>
                                    </div>
                                    <span>10%</span>
                                </li>
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/binance.svg')" alt="Binance (BNB)" width="30" height="30">
                                        <span>Binance (BNB)</span>
                                    </div>
                                    <span>5%</span>
                                </li>

                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/litecoin.svg')" alt="Litecoin (LTC)" width="30" height="30">
                                        <span>Litecoin (LTC)</span>
                                    </div>
                                    <span>5%</span>
                                </li>

                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/index-directive/indg-5.svg')" alt="Stable Index" width="30" height="30">
                                        <span>Stable Index</span>
                                    </div>
                                    <span>10%</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card card__border-line statistics">
                        <div class="w statistics__top">
                            <div class=" tw-flex tw-justify-between">
                                <div>{{t('statistics.title')}}</div>
                                <base-select
                                    :options="[{ label: t('statistics.selectProfit', {numb:'2'}), id: 1 }]" />
                            </div>

                        </div>
                        <div class="statistics__bottom">

                            <AreaChart :valSeries="ethComboData"  class=" tw-order-2 xl:tw-order-1"/>
                            <div class=" tw-flex tw-justify-between tw-items-center tw-order-1 xl:tw-block tw-mt-5   xl:tw-order-2">
                                <div class=" tw-mb-2.5">                                </div>
                                <div class=" tw-text-md2 tw-flex tw-gap-x-2.5">
                                    <MarkIcon :mark="ethComboTwoMonthPrecent"/>
                                    {{ethComboTwoMonthPrecent}}%
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </q-carousel-slide>

            <q-carousel-slide :name="5">
                <div class="card card__border-line tw-mb-7.5 xl:tw-mb-10 index-directive">
                    <div class=" item xl:tw-flex xl:tw-justify-between xl:tw-items-center tw-mb-5">
                        <div class=" tw-flex tw-gap-5 tw-items-center ">
                           
                            <div class=" tw-flex  tw-gap-10 tw-items-center">
                                <img :src="require('assets/icons/index-directive/indg-5.svg')" alt="" />
                                <div class=" tw-flex tw-flex-col">
                                    <h4>Stable index </h4>
                                    <p>
                                        {{t('indexderivatives.time', { to: '31.08.2022', from: '31.12.2022' })}}
                                    </p>
                                </div>
                            </div>
                            <base-button @click="stage2" class="button tw-w-full tw-hidden  xl:tw-block xl:tw-w-auto ">buy</base-button>
                        </div>
                        <div class=" tw-hidden xl:tw-flex xl:tw-gap-2.5">
                            <button @click="$refs.carousel.previous()" class="pie pie-arrow button-arrow">
                                <q-icon name="r_keyboard_arrow_left" size="35px" class="arrow-icon">
                                </q-icon>
                            </button>
                            <button @click="$refs.carousel.next()" class="pie pie-arrow button-arrow">
                                <q-icon name="r_keyboard_arrow_right" size="35px" class="arrow-icon">
                                </q-icon>
                            </button>
                        </div>
                    </div>
                    <p class="text">
                        {{t('indexderivatives.items[4]')}}
                    </p>
                    <base-button class="button tw-w-full tw-mt-5 xl:tw-hidden xl:tw-w-auto ">buy</base-button>
                </div>
                <div class=" tw-mb-20 tw-flex tw-flex-wrap tw-gap-2.5 xl:tw-hidden">
                    <div class="slide-button" :class="{active:slide === 1}" @click="slide = 1">
                        <img :src="require('assets/icons/index-directive/indg-1.svg')" alt="">
                    </div>
                    <div class="slide-button" :class="{active:slide === 2}" @click="slide = 2">
                        <img :src="require('assets/icons/index-directive/indg-2.svg')" alt="">
                    </div>

                    <div class="slide-button" :class="{active:slide === 3}" @click="slide = 3">
                        <img :src="require('assets/icons/index-directive/indg-3.svg')" alt="">
                    </div>
                    <div class="slide-button" :class="{active:slide === 4}" @click="slide = 4">
                        <img :src="require('assets/icons/index-directive/indg-4.svg')" alt="">
                    </div>

                    <div class="slide-button" :class="{active:slide === 5}" @click="slide = 5">
                        <img :src="require('assets/icons/index-directive/indg-5.svg')" alt="">
                    </div>
                </div>

                <div>
                    <h4 class=" tw-mb-5">
                        {{ t("inside.title") }}
                    </h4>
                    <div class="inside tw-mb-10">
                        <div class="inside-card card card__border-line">
                            <RoundDiagram class="inside__round" :values="[20,20,20,20,20]" textBefore="%"
                                :colors="['#FF060A','#F0B90B', '#00DCFA', '#2775CA', '#504D83']">
                                <template #image>
                                    <image x="180" y="180" width="140"
                                        :xlink:href="require('assets/icons/index-directive/indg-5.svg')" />
                                </template>
                            </RoundDiagram>
                        </div>
                        <div class=" ">
                            <ul class="coinlist" >
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/erc20.svg')" alt="Tether (USDT) ERC20 " width="30" height="30">
                                        <span>Tether (USDT) ERC20 </span>
                                    </div>
                                    <span>20%</span>
                                </li>
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/trc20.svg')" alt="Tether (USDT) TRC20 " width="30" height="30">
                                        <span>Tether (USDT) TRC20 </span>
                                    </div>
                                    <span>20%</span>
                                </li>

                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/binance-busd.svg')" alt="Binance USD (BUSD) " width="30" height="30">
                                        <span>Binance USD (BUSD) </span>
                                    </div>
                                    <span>20%</span>
                                </li>

                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/gusd.svg')" alt="Gemini Dollar (GUSD)" width="30" height="30">
                                        <span>Gemini Dollar (GUSD)</span>
                                    </div>
                                    <span>20%</span>
                                </li>
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/usdc.svg')" alt="USD Coin (USDC)" width="30" height="30">
                                        <span>USD Coin (USDC)</span>
                                    </div>
                                    <span>20%</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card card__border-line statistics">
                        <div class="w statistics__top">
                            <div class=" tw-flex tw-justify-between">
                                <div>{{t('statistics.title')}}</div>
                                <base-select
                                    :options="[{ label: t('statistics.selectProfit', {numb:'2'}), id: 1 }]" />
                            </div>

                        </div>
                        <div class="statistics__bottom">

                            <AreaChart :valSeries="stableIndexData" class=" tw-order-2 xl:tw-order-1"/>
                            <div class=" tw-flex tw-justify-between tw-items-center tw-order-1 xl:tw-block tw-mt-5   xl:tw-order-2">
                                <div class=" tw-mb-2.5"
v-html="t('statistics.profitText', {numb:'2'})"
>
                                </div>
                                <div class=" tw-text-md2 tw-flex tw-gap-x-2.5">
                                    <MarkIcon :mark="stableIndexTwoMonthPrecent"/>
                                    {{stableIndexTwoMonthPrecent}}%
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </q-carousel-slide>

        </q-carousel>
    </div>
</template>

<script>
import {ref} from "vue"
import RoundDiagram from "src/components/V3/RaoundDiagram.vue"
import AreaChart from "src/components/V3/AreaChart.vue"
import MarkIcon from "src/components/V3/MarkIcon.vue"

import { useI18n } from "vue-i18n";

import useChartData from "src/composition/V3/useChartData.js"
const i18n = {
    messages: {
        "en-US": {
            indexderivatives: {
                title: 'Index Derivatives',
                time: "from {from} to {to}",
                items: [
                    "Stable index is a stable base index ALGA INDEX DERIVATIVES PLATFORM, consisting of 6 leading stablecoins in the cryptocurrency market, weighted by capitalization. The index is not subject to high volatility in the market, allowing you to keep your cryptocurrency savings for a certain period. Stable index is a smart and secure way to get diversified access to crypto assets with minimal fees.",
                    "ETH combo - ALGA INDEX DERIVATIVES PLATFORM base index. It is a balanced index composed of the most valuable cryptoassets, weighted by market capitalization, time-tested and monitored for certain risks with monthly rebalancing. The index has a public methodology for its formation, which includes the rules of acceptability, identifying critical risks (storage, liquidity, execution costs, and others).",
                    "BTC combo - ALGA INDEX DERIVATIVES PLATFORM base index. it is a balanced index composed of the most valuable cryptoassets, weighted by market capitalization, time-tested and monitored for certain risks with monthly rebalancing. The index has a public methodology for its formation, which includes the rules of acceptability, identifying critical risks (storage, liquidity, execution costs, and others).",
                    "ETH main - ALGA INDEX DERIVATIVES PLATFORM base index. It is a capitalization-weighted index that tracks the performance of major financial crypto assets built on the Ethereum blockchain. You will gain access to a crypto asset with the security and convenience of a traditional investment vehicle, while lowering the logistical barriers to entry (access to exchanges, storage, and execution costs).",
                    "BTC main is the base index of ALGA INDEX DERIVATIVES PLATFORM. It is an index designed to track the world's largest crypto asset. You will gain access to a crypto asset with the security and convenience of a traditional investment vehicle, while lowering the logistical barriers to entry (access to exchanges, storage, and execution costs).",
                ]
            },
            inside: {
                title: "What's inside"
            },
            statistics: {
                title: 'Statistics',
                profitText: "Profitability <br> for {numb} months",
                selectProfit: 'Last {numb} months'
            }
        },
        "ru-RU": {
            indexderivatives: {
                title: 'Производные индексы',
                time: "с {from} по {to}",
                items: [
                    "Stable index – устойчивый базовый индекс ALGA INDEX DERIVATIVES PLATFORM, состоящий из 6 ведущих стейблкоинов на криптовалютном рынке, взвешенных по капитализации. Индекс не подвержен высокой волатильности на рынке, позволящий сохранить ваши криптовалютные сбережения на определенный срок. Stable index – умный и безопасный способ получить диверсифицированный доступ к криптоактивам с минимальными комиссионными издержками.",
                    "ETH combo - базовый индекс ALGA INDEX DERIVATIVES PLATFORM. Это сбалансированный индекс, состоящий из наиболее ценных криптоактивов, взвешенных по рыночной капитализации, проверенных временем и отслеживаемых на наличие определенных рисков с ежемесячной ребалансировкой. Индекс имеет общедоступную методологию своего формирования, которая включает в себя правила приемлемости, выявления критических рисков (хранение, ликвидность, затраты на исполнение и другие).",
                    "BTC combo - базовый индекс ALGA INDEX DERIVATIVES PLATFORM. это сбалансированный индекс, состоящий из наиболее ценных криптоактивов, взвешенных по рыночной капитализации, проверенных временем и отслеживаемых на наличие определенных рисков с ежемесячной ребалансировкой. Индекс имеет общедоступную методологию своего формирования, которая включает в себя правила приемлемости, выявления критических рисков (хранение, ликвидность, затраты на исполнение и другие).",
                    "ETH main - базовый индекс ALGA INDEX DERIVATIVES PLATFORM. Это индекс, взвешенный по капитализации, который отслеживает эффективность основных финансовых криптоактивов, построенных на блокчейне Ethereum. Вы получите доступ к криптоактиву с безопасностью и удобством традиционного инвестиционного инструмента, снижая при этом логистические барьеры для входа (доступ к биржам, хранение и затраты на исполнение).",
                    "BTC main – базовый индекс ALGA INDEX DERIVATIVES PLATFORM. Это индекс, предназначенный для отслеживания крупнейшего в мире криптоактива. Вы получите доступ к криптоактиву с безопасностью и удобством традиционного инвестиционного инструмента, снижая при этом логистические барьеры для входа (доступ к биржам, хранение и затраты на исполнение).",
                ]
            },
            inside: {
                title: "Что внутри"
            },
            statistics: {
                title: 'Статистика',
                profitText: "Доходность <br> за {numb} месяца",
                selectProfit: 
                    "Последние {numb} месяца"
                
            }
        }
    }
}
export default {
    components: {
        RoundDiagram,
        AreaChart,
        MarkIcon
        
    },
    setup(){

        const {btnMainData, ethMainData, btcComboData, ethComboData,stableIndexData,
            btnMainTwoMonthPrecent, ethMainTwoMonthPrecent, btcComboTwoMonthPrecent, ethComboTwoMonthPrecent, stableIndexTwoMonthPrecent
        } = useChartData();
        const { t } = useI18n(i18n);
        return {
            slide: ref(1),
            t,
            btnMainData, ethMainData, btcComboData, ethComboData,stableIndexData,
            btnMainTwoMonthPrecent, ethMainTwoMonthPrecent, btcComboTwoMonthPrecent, ethComboTwoMonthPrecent, stableIndexTwoMonthPrecent
        }
    },
     methods: {
        stage2 (){
            console.log('stage2');
            ym(90160255,'reachGoal','stage 2')
            //   this.$router.push({ name: 'index-directive' })
        }
     }
}
</script>

<style lang="scss" scoped>
//$
.index-directive {
    .text {
        max-width: 539px;
    }
}
.slide-button {
    cursor: pointer;
    opacity: .5;
    width: 60px;
    height: 60px;
    transition: opacity .2s ease;
    @include screen-xl {
        width: 40px;
        height: 40px;
    }
    &.active {
        opacity: 1;
    }
}
.inside {
    display: flex;
    flex-direction: column;
    gap: 30px;
    @include screen-xl {
        flex-direction: row;
        gap: 110px;
        align-items: center;
    }
    &-card {
        width: 100%;
        height: 100%;
        @include screen-xl {
            width: 340px;
            height: 340px;
        }
    }
    &__round {
        width: 100%;
        height: 100%;
    }
}

.statistics{
    &__bottom {
        display: flex;
        flex-direction: column;
    }
    &__top,
    &__bottom {
        @include screen-xl {
            display: grid;
            gap: 55px;
            grid-template-columns: 1fr 170px;
        }
    }
}

.coinlist {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .item {
        @include screen-xl {

            width: 318px;
        }
    }
}

.up-icon {
    width: 24px;
}
</style>