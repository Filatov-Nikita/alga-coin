<template>
  <div class="tw-pt-6">
    <div class="tw-flex tw-justify-between tw-mb-3">
      <div class="logo">
        <img src="~assets/images/app-logo.svg" alt="логотип" />
      </div>
      <div class="tw-flex tw-space-x-3">
        <a href="#">
          <InlineSvg
            width="24px"
            height="24px"
            :src="require('assets/fb-icon.svg')"
          />
        </a>
        <a href="#">
          <InlineSvg
            width="24px"
            height="24px"
            :src="require('assets/inst-icon.svg')"
          />
        </a>
        <a href="#">
          <InlineSvg
            width="24px"
            height="24px"
            :src="require('assets/te-icon.svg')"
          />
        </a>
      </div>
    </div>

    <div class="tw-flex tw-justify-between tw-text-xxs">
      <div>AlgaCoin © {{ $fullYear }}</div>
      <div>
        <a href="#">Условия обслуживания</a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.logo {
  width: 100px;
}
</style>
