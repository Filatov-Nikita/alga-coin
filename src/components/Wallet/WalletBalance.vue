<template>
  <div class="wallet-balance">
    <AppWalletDisplay
      class="tw-justify-center tw-mb-3-1"
      v-bind="{ walletNumber }"
    />

    <div class="tw-mb-6 tw-text-center">
      <div class="wallet-balance__icon tw-mx-auto tw-mb-3">
        <InlineSvg :src="require('assets/images/logo.svg')" />
      </div>
      <div class="tw-text-md2 xl:tw-text-md1">{{ alg }} ALG</div>
      <div class="tw-text-secondary tw-text-xs xl:tw-text-sm">{{ rub }} RUB</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    walletNumber: {
      required: true,
      type: String,
    },
    alg: {
      required: true,
      type: String,
    },
    rub: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.wallet-balance {
  &__icon {
    width: 70px;
    height: 70px;
  }
}
</style>
