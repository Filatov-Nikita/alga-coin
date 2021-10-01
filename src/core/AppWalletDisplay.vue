<template>
  <div class="app-wallet-display">
    <div class="app-wallet-display__text">{{ displayWallet }}</div>
    <button @click="copy">
      <InlineSvg :src="require('assets/copy.svg')" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    walletNumber: {
      requirec: true,
      type: String,
    },
  },
  computed: {
    displayWallet() {
      const {
        groups: { start, end },
      } = this.walletNumber.match(/^(?<start>.{6}).*(?<end>.{4})$/);
      return `${start}...${end}`;
    },
  },
  methods: {
    copy() {
      navigator.clipboard.writeText(this.walletNumber);
      this.$q.notify({
        type: 'positive',
        message: 'Номер кошелька скопирован в буфер обмена',
      });
    },
  },
};
</script>

<style scoped lang="scss">
.app-wallet-display {
  @apply tw-flex tw-items-center;

  &__text {
    margin-right: 6px;
  }
}
</style>
