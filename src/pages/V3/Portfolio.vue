<template>
  <div class="tw-flex tw-flex-col tw-overflow-hidden">
    <div class="tw-flex tw-flex-col">
      <h2 class="tw-mb-15">My Portfolio</h2>
    </div>
    <div class="card card-bg card__border-line tw-mb-10">
      <h6 class="tw-text-xxs tw-text-text-gray tw-mb-2.5">BALANCE</h6>
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
        <p class="tw-text-white tw-text-md2 tw-leading-7">Constantine</p>
        <p class="tw-text-white tw-text-md2 tw-leading-7">Constantinople</p>
      </div>
    </div>
    <div class="tw-relative">
      <h4 class="tw-mb-5">My Indexes</h4>
      <div class="index-list">
        <div class="index-grid tw-mb-7.5">
          <p>Index</p>
          <p>Closing date</p>
          <p>Balance</p>
          <p>Realized profit</p>
          <p>Action</p>
        </div>
        <div class="tw-flex tw-flex-col tw-gap-y-7.5">
          <div>
            <div class="index-content index-grid tw-items-center">
              <div class="tw-flex tw-items-center tw-gap-5 tw-mr-15">
                <q-img
                  :src="require('assets/icons/index-directive/indg-1.png')"
                  width="50px"
                  height="50px"
                />
                <div class="tw-flex-grow">
                  <div class="tw-flex tw-justify-between tw-items-center">
                    <span class="">ALGA GOLD</span>
                    <div
                      @click="choiseIndex(1)"
                      class="index-content__dropicon tw-cursor-pointer"
                      :class="{ active: activeIndex == 1 }"
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
                  <p class="tw-text-xxs">12.08.2020-12.12.2020</p>
                </div>
              </div>
              <div>30 days</div>
              <div>
                1.255 <span class="tw-text-text-gray tw-ml-2.5"> USDT</span>
              </div>
              <div>
                <span class="tw-text-green"> + 0.215 </span>
                <span class="tw-text-text-gray tw-ml-2.5"> USDT</span>
              </div>
              <div class="tw-flex tw-justify-between">
                <span class="tw-underline">Buy</span>
                <span class="tw-underline">Withdrawal</span>
              </div>
            </div>
            <div>
              <div
                class="index-dropdown tw-flex tw-flex-col tw-gap-7.5 tw-mt-7.5"
                :class="{ active: activeIndex === 1 }"
              >
                <div class="index-grid tw-items-center">
                  <div class="tw-flex tw-items-center tw-mr-15">
                    <div class="tw-ml-15.5">
                      <p class="tw-text-xxs">12.08.2020-12.12.2020</p>
                    </div>
                  </div>
                  <div></div>
                  <div>
                    1.255 <span class="tw-text-text-gray tw-ml-2.5"> USDT</span>
                  </div>
                  <div>
                    <span class="tw-text-green"> + 0.215 </span>
                    <span class="tw-text-text-gray tw-ml-2.5"> USDT</span>
                  </div>
                  <div></div>
                </div>
                <div class="index-grid tw-items-center">
                  <div class="tw-flex tw-items-center tw-mr-15">
                    <div class="tw-ml-15.5">
                      <p class="tw-text-xxs">12.08.2020-12.12.2020</p>
                    </div>
                  </div>
                  <div></div>
                  <div>
                    1.255 <span class="tw-text-text-gray tw-ml-2.5"> USDT</span>
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
          <div>
            <div class="index-content index-grid tw-items-center">
              <div class="tw-flex tw-items-center tw-gap-5 tw-mr-15">
                <q-img
                  :src="require('assets/icons/index-directive/indg-1.png')"
                  width="50px"
                  height="50px"
                />
                <div class="tw-flex-grow">
                  <div class="tw-flex tw-justify-between tw-items-center">
                    <span class="">ALGA GOLD</span>
                    <div
                      @click="choiseIndex(2)"
                      class="index-content__dropicon tw-cursor-pointer"
                      :class="{ active: activeIndex == 2 }"
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
                  <p class="tw-text-xxs">12.08.2020-12.12.2020</p>
                </div>
              </div>
              <div>30 days</div>
              <div>
                1.255 <span class="tw-text-text-gray tw-ml-2.5"> USDT</span>
              </div>
              <div>
                <span class="tw-text-green"> + 0.215 </span>
                <span class="tw-text-text-gray tw-ml-2.5"> USDT</span>
              </div>
              <div class="tw-flex tw-justify-between">
                <span class="tw-underline">Buy</span>
                <span class="tw-underline">Withdrawal</span>
              </div>
            </div>
            <div>
              <div
                class="index-dropdown tw-flex tw-flex-col tw-gap-7.5 tw-mt-7.5"
                :class="{ active: activeIndex === 2 }"
              >
                <div class="index-grid tw-items-center">
                  <div class="tw-flex tw-items-center tw-mr-15">
                    <div class="tw-ml-15.5">
                      <p class="tw-text-xxs">12.08.2020-12.12.2020</p>
                    </div>
                  </div>
                  <div></div>
                  <div>
                    1.255 <span class="tw-text-text-gray tw-ml-2.5"> USDT</span>
                  </div>
                  <div>
                    <span class="tw-text-green"> + 0.215 </span>
                    <span class="tw-text-text-gray tw-ml-2.5"> USDT</span>
                  </div>
                  <div></div>
                </div>
                <div class="index-grid tw-items-center">
                  <div class="tw-flex tw-items-center tw-mr-15">
                    <div class="tw-ml-15.5">
                      <p class="tw-text-xxs">12.08.2020-12.12.2020</p>
                    </div>
                  </div>
                  <div></div>
                  <div>
                    1.255 <span class="tw-text-text-gray tw-ml-2.5"> USDT</span>
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

          <!-- popup -->
          <Transition
            appear
            mode="out-in"
            enter-active-class="animated zoomIn"
            leave-active-class="animated zoomOut"
          >
            <div
              v-if="isPopup"
              class="card card__border-line tw-absolute tw-w-full tw-top-1/2 tw-h-36"
            ></div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const activeIndex = ref(null);
const isPopup = ref(false);
const choiseIndex = (index) => {
  if (activeIndex.value === index) activeIndex.value = null;
  else {
    activeIndex.value = index;
  }
};
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
}
</style>
