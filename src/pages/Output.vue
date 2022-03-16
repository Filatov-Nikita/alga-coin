<template>
  <q-page class="app-page-y">
    <div class="tw-container">
      <h1 class="app-h1 app-h1--space">{{ t('header') }}</h1>

      <div class="p-output app-row app-gutter-col-x">
        <div class="app-rect p-output__balance app-col-18 xl:app-col-8">
          <WalletBalance v-bind="walletData" frozen frozenTill="01.07.2022" />
          <AppButton
            fullWidth
            :label="t('request')"
            @click="$aDialog.open('output')"
          />

          <div class="xl:tw-hidden tw-text-center tw-text-xxs-2 tw-mt-4-1">
            {{ t('info') }}
          </div>
        </div>
      </div>
      <AppModalWallet name="output" v-slot="{ close }">
        <AppBtnBack class="page-wallet__back-btn" @click="close" />
        <AppStep name="output-form">
          <div class="page-wallet__content">
            <div class="page-wallet__title tw-mb-4">
              {{t('popupTitle')}}
            </div>
            <div class="tw-text-center tw-mb-1">{{t('balance')}}</div>
            <WalletBalance v-bind="walletData" hideIcon hideWalletNumber />
            <Form
              v-slot="{ isSubmitting }"
              class="page-wallet__wrap app-space-y-sm"
            >
              <AppInput name="sum" :label="t('summLabel')" :placeholder="t('summLabel')" />
              <AppInput
                name="rec"
                :label="t('detailsLabel')"
                :placeholder="t('detailsLabel')"
              />
              <AppButton
                :disabled="isSubmitting"
                type="submit"
                :label="t('sendRequest')"
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
import { useI18n } from 'vue-i18n';

const messages = {
  'ru-RU': {
    header: 'Вывод',
    request: 'Заявка на вывод',
    balance: 'Баланс кошелька',
    popupTitle: 'Заявка на вывод средств',
    summLabel: 'Сумма',
    detailsLabel: 'Реквизиты платежа',
    sendRequest: 'Оставить заявку',
    info: 'При заявке на вывод средств с кошелька, который имеет статус «Заморожен», система произведёт вычет комиссии в размере 25% от суммы вывода',
  },
  'en-US': {
    header: 'Output',
    request: 'Request to output',
    balance: 'Wallet balance',
    popupTitle: 'Request for withdrawal of funds',
    summLabel: 'Amount',
    detailsLabel: 'Payment details',
    sendRequest: 'Leave a request',
    info: 'When applying for a withdrawal of funds from a wallet that has the status “Frozen”, the system will deduct a commission of 25% from withdrawal amounts',
  },
};

export default {
  setup() {
    const { changeStep } = useStep('output-form');
    const { t } = useI18n({ messages });

    return {
      t,
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
