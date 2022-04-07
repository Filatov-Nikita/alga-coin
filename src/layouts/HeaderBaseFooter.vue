<template>
  <div v-if="footer" class="tw-flex tw-flex-col tw-items-center tw-mt-7">
    <div class="">
      <img
        class=""
        src="~assets/images/app-logo-3.svg"
        alt="логотип"
        width="148"
        height="60"
      />
    </div>
    <div class="tw-flex tw-space-x-3 tw-mt-7">
      <!-- <a href="#">
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
        </a> -->
      <a href="https://t.me/Algacoin">
        <InlineSvg
          width="30px"
          height="30px"
          :src="require('assets/te-icon.svg')"
        />
      </a>
    </div>

    <div class="tw-mt-5">
      <a href="#">{{ $t("landing.footer.serviceInfo") }}</a>
    </div>
    <div class="tw-mt-2.5">AlgaCoin © {{ $fullYear }}</div>
  </div>
  <div v-else class="tw-pt-6">
    <div class="tw-flex tw-justify-between tw-mb-3">
      <div class="app-logo-2">
        <img
          class="app-logo-i"
          src="~assets/images/app-logo-3.svg"
          alt="логотип"
        />
      </div>
      <div class="tw-flex tw-space-x-3">
        <!-- <a href="#">
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
        </a> -->
        <a href="https://t.me/Algacoin">
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
        <a href="#">{{ $t("landing.footer.serviceInfo") }}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    footer: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
