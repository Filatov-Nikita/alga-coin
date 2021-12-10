<template>
  <q-layout class="release">
    <q-header class="tw-py-5 tw-mb-12">
      <div class="app-container">
        <div class="row q-gutter-lg release__parts">
          <div class="row tw-items-center q-gutter-lg tw-justify-center">
            <div class="app-logo-2">
              <img
                class="app-logo-i"
                src="~assets/images/app-logo-3.svg"
                alt="logo"
              />
            </div>
            <div>Законные безусловные глобальные активы</div>
          </div>
          <div class="row tw-items-center q-gutter-lg tw-justify-center">
            <div>Следите за развитием проекта в соцсетях</div>
            <div class="tw-flex">
              <a href="https://www.instagram.com/alga.ecosystem">
                <InlineSvg
                  class="tw-mr-3"
                  :src="require('assets/inst-icon.svg')"
                />
              </a>
              <a href="https://www.facebook.com/groups/1068352950606267">
                <InlineSvg :src="require('assets/fb-icon.svg')" />
              </a>
            </div>
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
  &__parts {
    @apply tw-justify-center tw-text-center;

    @media screen and (min-width: 1100px) {
      @apply tw-justify-between;
    }
  }
}
</style>
