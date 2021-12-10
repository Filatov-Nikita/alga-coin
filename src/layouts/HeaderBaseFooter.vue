<template>
  <div class="tw-pt-6">
    <div class="tw-flex tw-justify-between tw-mb-3">
      <div class="app-logo-2">
        <img class="app-logo-i" src="~assets/images/app-logo-3.svg" alt="логотип" />
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
