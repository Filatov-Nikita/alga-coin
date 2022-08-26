<template>
    <!-- slider -->
    <div class=" tw-flex  tw-flex-col">
        <div class=" item tw-flex tw-justify-between tw-items-center  ">
            <h2>
                Index Derivatives
            </h2>
            <div class="flex tw-flex-wrap">
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
                <div class="slide-button" :class="{active:slide === 6}" @click="slide = 6">
                    <img :src="require('assets/icons/index-directive/indg-6.svg')" alt="">
                </div>


            </div>

        </div>
        <q-carousel swipeable animated v-model="slide" ref="carousel" class="bg-transparent" height="100%"
            padding="false">

            <q-carousel-slide :name="1">
                <div class="card card__border-line tw-mb-10 index-directive">
                        <div class=" item tw-flex tw-justify-between tw-items-center tw-mb-5">
                            <div class=" tw-flex tw-gap-5 tw-items-center">
                                <div>
                                    <img :src="require('assets/icons/index-directive/indg-1.png')" alt=""/>
                                </div>
                                <div class=" tw-flex  tw-gap-10 tw-items-center">
                                    <div class=" tw-flex tw-flex-col">
                                        <h4>BTC</h4>
                                        <p>
                                            from 12.08.2020 to 12.12.2020
                                        </p>
                                    </div>
                                    <base-button class="button">buy</base-button>
                                </div>
                            </div>
                            <div class=" tw-flex tw-gap-2.5">
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
                            Index Portu — the index that was opened by Bill Gates in 1999 and opens the index that was
                            opened by Bill Gates in 1999 and opens the index that was opened by Bill Gates in 1999 and
                            opens
                        </p>

                </div>

                <div>
                    <h4 class=" tw-mb-5">
                        What's inside
                    </h4>
                    <div class="inside tw-mb-10">
                        <div class="inside-card card card__border-line">
                            <RoundDiagram class="inside__round" :values="[75,25]" textBefore="%" :colors="['#F26437', '#EC249B']">
                                <template #image>
                                    <image  x="180" y="180" width="140"   :xlink:href="require('assets/icons/index-directive/indg-1.png')" />
                                </template>
                            </RoundDiagram>
                        </div>
                        <div class=" ">
                            <ul class="coinlist" style="width:170px">
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/test.svg')" alt="bitcoin">
                                        <span>Bitcoin</span>
                                    </div>
                                    <span>75%</span>
                                </li>
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/test.svg')" alt="bitcoin">
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
                                <div>Statistics</div>
                                <base-select
                                    :options="[{ label: 'Last 6 months', id: 1 },{label:'Last 3 months', id: 2}, {label:'Last 1 months', id: 3} ]" />
                            </div>

                        </div>
                        <div class="statistics__bottom">

                            <AreaChart />
                            <div class=" tw-mt-5 ">
                                <div class=" tw-mb-2.5">
                                    Profitability <br> for 6 months
                                </div>
                                <div class=" tw-text-md2 tw-flex tw-gap-x-2.5">
                                    <img :src="require('assets/icons/up.svg')" alt="up">
                                    12,75%
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </q-carousel-slide>

            <q-carousel-slide :name="2">
                <div class="card card__border-line tw-mb-10 index-directive">
                        <div class=" item tw-flex tw-justify-between tw-items-center tw-mb-5">
                            <div class=" tw-flex tw-gap-5 tw-items-center">
                                <div>
                                    <img :src="require('assets/icons/index-directive/indg-1.png')" alt=""/>
                                </div>
                                <div class=" tw-flex  tw-gap-10 tw-items-center">
                                    <div class=" tw-flex tw-flex-col">
                                        <h4>ETH</h4>
                                        <p>
                                            from 12.08.2020 to 12.12.2020
                                        </p>
                                    </div>
                                    <base-button class="button">buy</base-button>
                                </div>
                            </div>
                            <div class=" tw-flex tw-gap-2.5">
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
                            Index Portu — the index that was opened by Bill Gates in 1999 and opens the index that was
                            opened by Bill Gates in 1999 and opens the index that was opened by Bill Gates in 1999 and
                            opens
                        </p>

                </div>

                <div>
                    <h4 class=" tw-mb-5">
                        What's inside
                    </h4>
                    <div class="inside tw-mb-10">
                        <div class="inside-card card card__border-line">
                            <RoundDiagram class="inside__round" :values="[65,10,10,15]" textBefore="%" :colors="['#2CCCFF','#F26437', '#EC249B', '#92D441']">
                                <template #image>
                                    <image  x="180" y="180" width="140"   :xlink:href="require('assets/icons/index-directive/indg-1.png')" />
                                </template>
                                </RoundDiagram>
                                
                        </div>
                        <div class=" ">
                            <ul class="coinlist" style="width:170px">
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/test.svg')" alt="bitcoin">
                                        <span>ETH</span>
                                    </div>
                                    <span>65%</span>
                                </li>
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/test.svg')" alt="bitcoin">
                                        <span>Stable</span>
                                    </div>
                                    <span>10%</span>
                                </li>
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/test.svg')" alt="bitcoin">
                                        <span>Stable</span>
                                    </div>
                                    <span>10%</span>
                                </li>
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/test.svg')" alt="bitcoin">
                                        <span>Stable</span>
                                    </div>
                                    <span>15%</span>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div class="card card__border-line statistics">
                        <div class="w statistics__top">
                            <div class=" tw-flex tw-justify-between">
                                <div>Statistics</div>
                                <base-select
                                    :options="[{ label: 'Last 6 months', id: 1 },{label:'Last 3 months', id: 2}, {label:'Last 1 months', id: 3} ]" />
                            </div>

                        </div>
                        <div class="statistics__bottom">

                            <AreaChart />
                            <div class=" tw-mt-5 ">
                                <div class=" tw-mb-2.5">
                                    Profitability <br> for 6 months
                                </div>
                                <div class=" tw-text-md2 tw-flex tw-gap-x-2.5">
                                    <img :src="require('assets/icons/up.svg')" alt="up">
                                    12,75%
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </q-carousel-slide>

            <q-carousel-slide :name="3">
                <div class="card card__border-line tw-mb-10 index-directive">
                        <div class=" item tw-flex tw-justify-between tw-items-center tw-mb-5">
                            <div class=" tw-flex tw-gap-5 tw-items-center">
                                <div>
                                    <img :src="require('assets/icons/index-directive/indg-1.png')" alt=""/>
                                </div>
                                <div class=" tw-flex  tw-gap-10 tw-items-center">
                                    <div class=" tw-flex tw-flex-col">
                                        <h4>BTC combo</h4>
                                        <p>
                                            from 12.08.2020 to 12.12.2020
                                        </p>
                                    </div>
                                    <base-button class="button">buy</base-button>
                                </div>
                            </div>
                            <div class=" tw-flex tw-gap-2.5">
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
                            Index Portu — the index that was opened by Bill Gates in 1999 and opens the index that was
                            opened by Bill Gates in 1999 and opens the index that was opened by Bill Gates in 1999 and
                            opens
                        </p>

                </div>

                <div>
                    <h4 class=" tw-mb-5">
                        What's inside
                    </h4>
                    <div class="inside tw-mb-10">
                        <div class="inside-card card card__border-line">
                            <RoundDiagram class="inside__round" :values="[45,25,10,10,10]" textBefore="%" :colors="['#2CCCFF','#F26437', '#EC249B', '#92D441', '#3362D2']">
                                <template #image>
                                    <image  x="180" y="180" width="140"   :xlink:href="require('assets/icons/index-directive/indg-1.png')" />
                                </template>
                            </RoundDiagram>
                        </div>
                        <div class=" ">
                            <ul class="coinlist" style="width:170px">
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/test.svg')" alt="bitcoin">
                                        <span>BTC</span>
                                    </div>
                                    <span>45%</span>
                                </li>
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/test.svg')" alt="bitcoin">
                                        <span>ETH</span>
                                    </div>
                                    <span>25%</span>
                                </li>
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/test.svg')" alt="bitcoin">
                                        <span>BNB</span>
                                    </div>
                                    <span>10%</span>
                                </li>
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/test.svg')" alt="bitcoin">
                                        <span>LTC</span>
                                    </div>
                                    <span>10%</span>
                                </li>

                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/test.svg')" alt="bitcoin">
                                        <span>Stables</span>
                                    </div>
                                    <span>10%</span>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div class="card card__border-line statistics">
                        <div class="w statistics__top">
                            <div class=" tw-flex tw-justify-between">
                                <div>Statistics</div>
                                <base-select
                                    :options="[{ label: 'Last 6 months', id: 1 },{label:'Last 3 months', id: 2}, {label:'Last 1 months', id: 3} ]" />
                            </div>

                        </div>
                        <div class="statistics__bottom">

                            <AreaChart />
                            <div class=" tw-mt-5 ">
                                <div class=" tw-mb-2.5">
                                    Profitability <br> for 6 months
                                </div>
                                <div class=" tw-text-md2 tw-flex tw-gap-x-2.5">
                                    <img :src="require('assets/icons/up.svg')" alt="up">
                                    12,75%
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </q-carousel-slide>

            <q-carousel-slide :name="4">
                <div class="card card__border-line tw-mb-10 index-directive">
                        <div class=" item tw-flex tw-justify-between tw-items-center tw-mb-5">
                            <div class=" tw-flex tw-gap-5 tw-items-center">
                                <div>
                                    <img :src="require('assets/icons/index-directive/indg-1.png')" alt=""/>
                                </div>
                                <div class=" tw-flex  tw-gap-10 tw-items-center">
                                    <div class=" tw-flex tw-flex-col">
                                        <h4>ETH combo</h4>
                                        <p>
                                            from 12.08.2020 to 12.12.2020
                                        </p>
                                    </div>
                                    <base-button class="button">buy</base-button>
                                </div>
                            </div>
                            <div class=" tw-flex tw-gap-2.5">
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
                            Index Portu — the index that was opened by Bill Gates in 1999 and opens the index that was
                            opened by Bill Gates in 1999 and opens the index that was opened by Bill Gates in 1999 and
                            opens
                        </p>

                </div>

                <div>
                    <h4 class=" tw-mb-5">
                        What's inside
                    </h4>
                    <div class="inside tw-mb-10">
                        <div class="inside-card card card__border-line">
                            <RoundDiagram class="inside__round" :values="[45,25,10,5,5,10]" textBefore="%" :colors="['#2CCCFF','#F26437', '#EC249B', '#92D441', '#3362D2', '#0F6FDF']">
                                <template #image>
                                    <image  x="180" y="180" width="140"   :xlink:href="require('assets/icons/index-directive/indg-1.png')" />
                                </template>
                            </RoundDiagram>
                        </div>
                        <div class=" ">
                            <ul class="coinlist" style="width:170px">
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/test.svg')" alt="bitcoin">
                                        <span>ETH</span>
                                    </div>
                                    <span>45%</span>
                                </li>
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/test.svg')" alt="bitcoin">
                                        <span>BTC</span>
                                    </div>
                                    <span>25%</span>
                                </li>
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/test.svg')" alt="bitcoin">
                                        <span>ETC</span>
                                    </div>
                                    <span>10%</span>
                                </li>
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/test.svg')" alt="bitcoin">
                                        <span>BNB</span>
                                    </div>
                                    <span>5%</span>
                                </li>

                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/test.svg')" alt="bitcoin">
                                        <span>LTC</span>
                                    </div>
                                    <span>5%</span>
                                </li>
                                
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/test.svg')" alt="bitcoin">
                                        <span>Stables</span>
                                    </div>
                                    <span>10%</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card card__border-line statistics">
                        <div class="w statistics__top">
                            <div class=" tw-flex tw-justify-between">
                                <div>Statistics</div>
                                <base-select
                                    :options="[{ label: 'Last 6 months', id: 1 },{label:'Last 3 months', id: 2}, {label:'Last 1 months', id: 3} ]" />
                            </div>

                        </div>
                        <div class="statistics__bottom">

                            <AreaChart />
                            <div class=" tw-mt-5 ">
                                <div class=" tw-mb-2.5">
                                    Profitability <br> for 6 months
                                </div>
                                <div class=" tw-text-md2 tw-flex tw-gap-x-2.5">
                                    <img :src="require('assets/icons/up.svg')" alt="up">
                                    12,75%
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </q-carousel-slide>

            <q-carousel-slide :name="5">
                <div class="card card__border-line tw-mb-10 index-directive">
                        <div class=" item tw-flex tw-justify-between tw-items-center tw-mb-5">
                            <div class=" tw-flex tw-gap-5 tw-items-center">
                                <div>
                                    <img :src="require('assets/icons/index-directive/indg-1.png')" alt=""/>
                                </div>
                                <div class=" tw-flex  tw-gap-10 tw-items-center">
                                    <div class=" tw-flex tw-flex-col">
                                        <h4>DeFi combo</h4>
                                        <p>
                                            from 12.08.2020 to 12.12.2020
                                        </p>
                                    </div>
                                    <base-button class="button">buy</base-button>
                                </div>
                            </div>
                            <div class=" tw-flex tw-gap-2.5">
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
                            Index Portu — the index that was opened by Bill Gates in 1999 and opens the index that was
                            opened by Bill Gates in 1999 and opens the index that was opened by Bill Gates in 1999 and
                            opens
                        </p>

                </div>

                <div>
                    <h4 class=" tw-mb-5">
                        What's inside
                    </h4>
                    <div class="inside tw-mb-10">
                        <div class="inside-card card card__border-line">
                            <RoundDiagram class="inside__round" :values="[20,10,10,10,10,25,15]" textBefore="%" :colors="['#2CCCFF','#F26437', '#EC249B', '#92D441', '#3362D2', '#0F6FDF', '#0FDF49']">
                                <template #image>
                                    <image  x="180" y="180" width="140"   :xlink:href="require('assets/icons/index-directive/indg-1.png')" />
                                </template>
                            </RoundDiagram>
                        </div>
                        <div class=" ">
                            <ul class="coinlist" style="width:170px">
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/test.svg')" alt="bitcoin">
                                        <span>UNIswap</span>
                                    </div>
                                    <span>20%</span>
                                </li>
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/test.svg')" alt="bitcoin">
                                        <span>Decentrland</span>
                                    </div>
                                    <span>10%</span>
                                </li>
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/test.svg')" alt="bitcoin">
                                        <span>AAVE</span>
                                    </div>
                                    <span>10%</span>
                                </li>
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/test.svg')" alt="bitcoin">
                                        <span>MakerDao</span>
                                    </div>
                                    <span>10%</span>
                                </li>

                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/test.svg')" alt="bitcoin">
                                        <span>CurseFi</span>
                                    </div>
                                    <span>10%</span>
                                </li>
                                
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/test.svg')" alt="bitcoin">
                                        <span>1inch</span>
                                    </div>
                                    <span>25%</span>
                                </li>
                                                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/test.svg')" alt="bitcoin">
                                        <span>Stables</span>
                                    </div>
                                    <span>15%</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card card__border-line statistics">
                        <div class="w statistics__top">
                            <div class=" tw-flex tw-justify-between">
                                <div>Statistics</div>
                                <base-select
                                    :options="[{ label: 'Last 6 months', id: 1 },{label:'Last 3 months', id: 2}, {label:'Last 1 months', id: 3} ]" />
                            </div>

                        </div>
                        <div class="statistics__bottom">

                            <AreaChart />
                            <div class=" tw-mt-5 ">
                                <div class=" tw-mb-2.5">
                                    Profitability <br> for 6 months
                                </div>
                                <div class=" tw-text-md2 tw-flex tw-gap-x-2.5">
                                    <img :src="require('assets/icons/up.svg')" alt="up">
                                    12,75%
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </q-carousel-slide>

            <q-carousel-slide :name="6">
                <div class="card card__border-line tw-mb-10 index-directive">
                        <div class=" item tw-flex tw-justify-between tw-items-center tw-mb-5">
                            <div class=" tw-flex tw-gap-5 tw-items-center">
                                <div>
                                    <img :src="require('assets/icons/index-directive/indg-1.png')" alt=""/>
                                </div>
                                <div class=" tw-flex  tw-gap-10 tw-items-center">
                                    <div class=" tw-flex tw-flex-col">
                                        <h4>Stable index </h4>
                                        <p>
                                            from 12.08.2020 to 12.12.2020
                                        </p>
                                    </div>
                                    <base-button class="button">buy</base-button>
                                </div>
                            </div>
                            <div class=" tw-flex tw-gap-2.5">
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
                            Index Portu — the index that was opened by Bill Gates in 1999 and opens the index that was
                            opened by Bill Gates in 1999 and opens the index that was opened by Bill Gates in 1999 and
                            opens
                        </p>

                </div>

                <div>
                    <h4 class=" tw-mb-5">
                        What's inside
                    </h4>
                    <div class="inside tw-mb-10">
                        <div class="inside-card card card__border-line">
                            <RoundDiagram class="inside__round" :values="[20,20,20,20,20]" textBefore="%" :colors="['#2CCCFF','#F26437', '#EC249B', '#92D441', '#3362D2']">
                                <template #image>
                                    <image  x="180" y="180" width="140"   :xlink:href="require('assets/icons/index-directive/indg-1.png')" />
                                </template>
                            </RoundDiagram>
                        </div>
                        <div class=" ">
                            <ul class="coinlist" style="width:170px">
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/test.svg')" alt="bitcoin">
                                        <span>USDT ERC20</span>
                                    </div>
                                    <span>20%</span>
                                </li>
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/test.svg')" alt="bitcoin">
                                        <span>USDT TRC20</span>
                                    </div>
                                    <span>20%</span>
                                </li>
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/test.svg')" alt="bitcoin">
                                        <span>BUSD</span>
                                    </div>
                                    <span>20%</span>
                                </li>
                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/test.svg')" alt="bitcoin">
                                        <span>DAI</span>
                                    </div>
                                    <span>20%</span>
                                </li>

                                <li class=" item tw-flex tw-justify-between tw-items-center">
                                    <div class=" tw-flex tw-gap-3-1 tw-items-center">
                                        <img :src="require('assets/icons/tokens/test.svg')" alt="bitcoin">
                                        <span>USDC</span>
                                    </div>
                                    <span>20%</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card card__border-line statistics">
                        <div class="w statistics__top">
                            <div class=" tw-flex tw-justify-between">
                                <div>Statistics</div>
                                <base-select
                                    :options="[{ label: 'Last 6 months', id: 1 },{label:'Last 3 months', id: 2}, {label:'Last 1 months', id: 3} ]" />
                            </div>

                        </div>
                        <div class="statistics__bottom">

                            <AreaChart />
                            <div class=" tw-mt-5 ">
                                <div class=" tw-mb-2.5">
                                    Profitability <br> for 6 months
                                </div>
                                <div class=" tw-text-md2 tw-flex tw-gap-x-2.5">
                                    <img :src="require('assets/icons/up.svg')" alt="up">
                                    12,75%
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
export default {
    components: {
        RoundDiagram,
        AreaChart
    },
    setup(){
        return {
            slide: ref(1),
            
        }
    }
}
</script>

<style lang="scss" scoped>
.index-directive {
    .text {
        max-width: 539px;
    }
}
.slide-button {
    width: 50px;
    height: 50px;
    cursor: pointer;
    opacity: .5;
    transition: opacity .2s ease;
    &.active {
        opacity: 1;
    }
}
.inside {
    display: flex;
    gap: 110px;
    align-items: center;
    &-card {

        width: 340px;
        height: 340px;
    }
    &__round {
        width: 100%;
        height: 100%;
    }
}

.statistics{
    &__top,
    &__bottom {
        display: grid;
        gap: 55px;
        grid-template-columns: 1fr 170px;
    }
}

.coinlist {
    display: grid;
    grid-template-columns: repeat(2, 170px);
    gap: 20px 60px;
    .item {
        width: 170px;
    }
}
</style>