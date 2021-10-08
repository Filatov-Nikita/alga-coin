<template>
  <q-layout class="release">
    <q-header class="tw-py-5 tw-mb-12">
      <div class="app-container--desktop">
        <div class="tw-flex tw-justify-between">
          <div class="tw-flex tw-items-center">
            <img src="~assets/images/app-logo.svg" alt="logo" />
            <div class="tw-ml-12">Законные безусловные глобальные активы</div>
          </div>
          <div class="tw-flex tw-items-center">
            <div class="tw-mr-8">Следите за развитием проекта в соцсетях</div>
            <a href="https://www.instagram.com/alga.ecosystem">
              <InlineSvg
                class="tw-mr-3"
                :src="require('assets/inst-icon.svg')"
              />
            </a>
            <a href="#">
              <InlineSvg :src="require('assets/fb-icon.svg')" />
            </a>
          </div>
        </div>
      </div>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.release {
  background: #001233 url('~assets/release-bg.svg') no-repeat center;
}
</style>
