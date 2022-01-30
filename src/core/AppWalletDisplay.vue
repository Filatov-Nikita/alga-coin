<template>
  <div class="app-wallet-display">
    <div class="app-wallet-display__text">{{ displayWallet }}</div>
    <CopyClip
      :value="walletNumber"
      :message="$t('alerts.copy', { msg: $t('inputs.wallet') })"
    />
  </div>
</template>

<script>
import CopyClip from 'src/components/CopyClip.vue';

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
  components: {
    CopyClip,
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
