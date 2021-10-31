<template>
  <q-page class="app-page-y">
    <div class="tw-container">
      <h1 class="app-h1 app-h1--space">Вывод</h1>

      <div class="p-output app-row app-gutter-col-x">
        <div class="app-rect p-output__balance app-col-18 xl:app-col-8">
          <WalletBalance v-bind="walletData" frozen frozenTill="13.01.2022" />
          <AppButton
            fullWidth
            label="Заявка на вывод"
            @click="$aDialog.open('output')"
          />

          <div class="xl:tw-hidden tw-text-center tw-text-xxs-2 tw-mt-4-1">
            При заявке на вывод средств с кошелька, который имеет статус
            «Заморожен», система произведёт вычет комиссии в размере 25% от
            суммы вывода
          </div>
        </div>
      </div>
      <AppModalWallet name="output">
        <AppStep name="output-form">
          <div class="page-wallet__content">
            <div class="page-wallet__title tw-mb-4">
              Заявка на вывод средств
            </div>
            <div class="tw-text-center tw-mb-1">Баланс кошелька</div>
            <WalletBalance v-bind="walletData" hideIcon hideWalletNumber />
            <Form
              v-slot="{ isSubmitting }"
              class="page-wallet__wrap app-space-y-sm"
            >
              <AppInput name="sum" label="Сумма" placeholder="Сумма" />
              <AppInput
                name="rec"
                label="Реквизиты платежа"
                placeholder="Реквизиты платежа"
              />
              <AppButton
                :disabled="isSubmitting"
                type="submit"
                label="Оставить заявку"
                fullWidth
              />
            </Form>
          </div>
        </AppStep>
        <AppStep name="finish"> </AppStep>
      </AppModalWallet>
    </div>
  </q-page>
</template>

<script>
import WalletBalance from 'src/components/Wallet/WalletBalance.vue';
import { mapGetters } from 'vuex';
import useStep from 'src/composition/useStep';

export default {
  setup() {
    const { changeStep } = useStep('output-form');

    return {
      changeStep,
    };
  },
  computed: {
    ...mapGetters('wallet', ['walletData']),
  },
  components: {
    WalletBalance,
  },
};
</script>

<style scoped lang="scss">
//$

.p-output {
  &__balance {
    @apply tw-px-6 tw-py-12;

    @include screen-xl {
      padding: 60px 100px;
    }
  }
}
</style>
