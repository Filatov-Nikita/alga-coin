<template>
  <q-layout
    style="min-height: 100vh;"
    class="app-page-bg app-page-bg_lk"
    view="hhh lpr lff"
  >
      <!-- <HeaderBase /> -->

     <q-header class=" tw-py-3-1">
        <div class="tw-container tw-px-7.5">
            <img :src="require('assets/images/logo-v3.svg')" alt="logo">
        </div>
      </q-header>
     
          
          <q-page-container class="tw-container  tw-px-7.5 tw-grid content">
            <div class="width:200px sidebar">
                <SideBar/>
            </div>
          <router-view />
        </q-page-container>
     
  </q-layout>
</template>

<script>
import TheBottomMenu from 'src/components/TheBottomMenu.vue';
import SideBar from "./Lk/SidebarLayout.vue"
import HeaderBase from '../HeaderBase.vue';

export default {
  components: {
    TheBottomMenu,
    HeaderBase,
    SideBar
  },
  setup () {
    return {
    }
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
