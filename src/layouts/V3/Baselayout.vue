<template>
  <q-layout
    style="min-height: 100vh;"
    class="app-page-bg app-page-bg_lk"
    view="hhh lpr lff"
  >
      <!-- <HeaderBase /> -->

     <q-header class=" tw-py-3-1 " :class="{'tw-bg-dark-blue-3':!$q.screen.xl}">
        <div class="tw-container tw-px-7.5">
          <div class=" tw-flex tw-justify-between">

            <img :src="require('assets/images/logo-v3.svg')" alt="logo" class=" tw-cursor-pointer"  @click="$router.push({name:'home'})">

            <div class="desk-n tw-flex tw-items-center">
              <Locale/>
              <div >
                <button class="burger" >
                  <span></span><span></span><span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </q-header>
     
          
          <q-page-container class="tw-container  xl:tw-px-7.5    tw-grid content">
            <div class="width:200px sidebar">
                <SideBar/>
            </div>
          <router-view  class="tw-pt-15 xl:tw-pt-0"/>
        </q-page-container>
     <q-footer v-if="!$q.screen.xl" class=" tw-pt-5 tw-pb-2.5">
        <div class=" tw-container">
          <ul class=" tw-flex">
            <router-link :to="{name: 'index-directive'}"
              custom
              v-slot="{ isExactActive, navigate }"
              
            >
              <li class=" tw-flex tw-flex-col tw-items-center" @click="navigate">
                <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" :class="{active: isExactActive}">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.41952 3.03769C1.93539 3.16674 1.51597 3.48951 1.24315 3.94299C1.02899 4.29898 0.944434 4.88259 1.04412 5.31698C1.29171 6.396 2.38166 7.04425 3.40481 6.72094C4.21971 6.46346 4.79104 5.59861 4.71306 4.74067C4.64497 3.99175 4.15637 3.34351 3.46984 3.09134C3.21384 2.99728 2.6745 2.96973 2.41952 3.03769ZM7.66074 3.63905C6.65004 3.79417 6.23903 5.05306 6.95798 5.79157C7.04764 5.88371 7.2112 6.0025 7.32148 6.0556L7.52192 6.15211H12.8003H18.0786L18.2799 6.0552C18.5007 5.94885 18.7681 5.69032 18.8675 5.48702C19.1958 4.81553 18.8905 3.9877 18.2105 3.70564L18.0082 3.62174L12.9234 3.61675C10.1268 3.614 7.75856 3.62402 7.66074 3.63905ZM2.42944 8.14218C1.7649 8.30767 1.20532 8.88849 1.04736 9.57679C0.816557 10.5824 1.45277 11.6229 2.44556 11.8633C3.48201 12.1144 4.53026 11.3774 4.69491 10.282C4.89267 8.96632 3.68826 7.82867 2.42944 8.14218ZM7.46815 8.78551C7.12685 8.89977 6.85607 9.14912 6.69853 9.49416C6.62245 9.66084 6.607 9.74644 6.607 10.0019C6.607 10.3414 6.69142 10.5879 6.89045 10.8297C7.02132 10.9887 7.30357 11.1709 7.50432 11.2261C7.62516 11.2592 8.89657 11.2671 12.8706 11.2593L18.0786 11.249L18.2764 11.1538C18.5545 11.0198 18.7453 10.8286 18.8788 10.55C18.9812 10.3365 18.9935 10.2774 18.9935 10.0019C18.9935 9.72637 18.9812 9.66731 18.8788 9.45378C18.7453 9.17519 18.5545 8.98403 18.2764 8.85003L18.0786 8.75478L12.8354 8.74936C8.96642 8.74535 7.55974 8.75482 7.46815 8.78551ZM2.55489 13.2206C1.61193 13.3922 0.941231 14.2606 1.00647 15.2253C1.05869 15.9973 1.53163 16.6422 2.24495 16.9139C2.54465 17.0281 3.17228 17.0288 3.46984 16.9153C4.52178 16.5142 5.0102 15.3068 4.5329 14.2874C4.39443 13.9917 4.10078 13.6542 3.82627 13.4752C3.49285 13.2579 2.94873 13.149 2.55489 13.2206ZM7.53015 13.8726C7.03388 13.9938 6.63998 14.473 6.59831 15.006C6.55538 15.5556 6.87891 16.0868 7.38401 16.2958L7.59229 16.3821H12.8003H18.0082L18.2105 16.2982C18.8905 16.0161 19.1958 15.1883 18.8675 14.5168C18.7681 14.3135 18.5007 14.0549 18.2799 13.9486L18.0786 13.8517L12.8706 13.846C9.90481 13.8427 7.60563 13.8542 7.53015 13.8726Z" fill="#BEC3FF"/>
                </svg>
                <span class=" tw-text-xxs-1">
                  Index Derivatives
                </span>
              </li>
             </router-link> 
          </ul>
        </div>
     </q-footer>
  </q-layout>
</template>

<script>
import TheBottomMenu from 'src/components/TheBottomMenu.vue';
import SideBar from "./Lk/SidebarLayout.vue"
import HeaderBase from '../HeaderBase.vue';

import Locale from "src/components/V3/LocaleButtons.vue"

export default {
  
  components: {
    TheBottomMenu,
    HeaderBase,
    SideBar,
    Locale
  },
  setup () {
  }
};
</script>

<style scoped lang="scss">
//$

.header-desktop {
  @apply tw-py-5;
  @include row();
  @include space-x(68px);
}

.content {
  @include screen-xl {
    grid-template-columns: 170px 1fr;
    gap: 90px;
  }
}

.sidebar {
  display: none;
  @include screen-xl {
    display: block;
  }
}
</style>
