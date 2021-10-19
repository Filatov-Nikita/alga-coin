<template>
  <div class="tw-py-12 tw-px-6">
    <WalletBalance
      alg="1 232 151.348"
      rub="25 357 000"
      walletNumber="0xAbBDd166fD5DfFe50D294aEEe539CBB2547DE7DF"
    />

    <div class="">
      <div class="tw-space-y-4-1">
        <AppInput label="Кошелек" placeholder="Кошелек" />
        <AppInput label="Сумма" placeholder="Сумма" />
        <AppInput label="Сумма" placeholder="Сумма" />
        <AppButton label="Отправить" fullWidth />
      </div>
    </div>
  </div>
</template>

<script>
import WalletBalance from 'src/components/Wallet/WalletBalance.vue';

export default {
  components: {
    WalletBalance,
  },
};
</script>

<style>
</style>
