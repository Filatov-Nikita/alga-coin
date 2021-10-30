<template>
  <q-page class="app-page-y">
    <div class="tw-container">
      <h1 class="app-h1 app-h1--space">Баланс кошелька</h1>

      <div class="app-row app-gutter-col-x wrap">
        <div class="wallet">
          <WalletBalance v-bind="walletData" />

          <div class="wallet__actions">
            <div class="wallet__action">
              <AppButton
                fullWidth
                @click="$aDialog.open('wallet.input')"
                label="Купить"
              />
            </div>
            <div class="wallet__action">
              <AppButton
                fullWidth
                @click="$aDialog.open('wallet.output')"
                label="Отправить"
              />
            </div>
          </div>
        </div>

        <AppModalWallet name="wallet.output" v-slot="{ close }">
          <AppBtnBack class="page-wallet__back-btn" @click="close" />
          <div class="page-wallet__content">
            <WalletBalance v-bind="walletData" hideIcon />

            <Form
              class="page-wallet__form"
              @submit="send"
              v-slot="{ isSubmitting }"
            >
              <AppInput
                rules="required"
                name="address"
                fullWidth
                placeholder="Адрес кошелька"
                label="Адрес кошелька"
              />
              <AppInput
                rules="required"
                name="sum"
                fullWidth
                placeholder="Сумма"
                label="Сумма"
              />

              <AppButton
                :disabled="isSubmitting"
                type="submit"
                label="Отправить"
                fullWidth
              />
            </Form>
          </div>
        </AppModalWallet>

        <AppModalWallet v-slot="{ close }" name="wallet.input">
          <AppBtnBack class="page-wallet__back-btn" @click="close" />
          <div class="page-wallet__content">
            <AppStep name="choose-type">
              <div class="page-wallet__title tw-mb-9">
                Выберите удобный способ пополнения
              </div>

              <div class="page-wallet__actions page-wallet__wrap">
                <AppButton
                  @click="changeStep('by-card')"
                  textClass="page-wallet__action"
                  label="Карта VISA / Master Card"
                  fullWidth
                />
                <AppButton
                  @click="changeStep('by-crypto')"
                  textClass="page-wallet__action"
                  label="Криптовалюта USDT / BUSD"
                  fullWidth
                />
              </div>
            </AppStep>

            <AppStep name="by-card">
              <WalletBalance v-bind="walletData" hideIcon />
              <Form class="page-wallet__form">
                <AppInput
                  rules="required"
                  name="sum"
                  fullWidth
                  placeholder="Сумма"
                  label="Сумма"
                />
                <AppButton @click="1" label="Пополнить" fullWidth />
              </Form>
              <div class="wallet-page__caption tw-mt-6">
                После нажатия «Пополнить» вы будете перенаправлены на страницу
                оплаты
              </div>
            </AppStep>

            <AppStep name="by-crypto">
              <WalletBalance v-bind="walletData" hideIcon />
              <Form class="page-wallet__form">
                <AppInput
                  rules="required"
                  name="sum"
                  fullWidth
                  placeholder="Сумма"
                  label="Сумма"
                />
                <div class="page-wallet__actions">
                  <AppButton
                    @click="changeStep('by-crypto.usdt')"
                    label="Пополнить в USDT"
                    :icon="require('assets/usdt.svg')"
                    fullWidth
                  />
                  <AppButton
                    @click="changeStep('by-crypto.busd')"
                    label="Пополнить в BUSD"
                    :icon="require('assets/busd.svg')"
                    fullWidth
                  />
                </div>
              </Form>
            </AppStep>

            <AppStep name="by-crypto.busd">
              <div class="wallet__title">Вам необходимо перевести</div>
              <AppTimer :minutes="30" v-slot="{ displayVal, m, s }">
                Осталось ({{ displayVal(m) + ':' + displayVal(s) }} )
              </AppTimer>
              <AppButton
                @click="changeStep('by-crypto.finish')"
                label="Я отправил"
                fullWidth
              />
            </AppStep>

            <AppStep name="by-crypto.usdt">
              <div class="wallet__title">Вам необходимо перевести</div>
              <AppTimer :minutes="30" v-slot="{ displayVal, m, s }">
                Осталось ({{ displayVal(m) + ':' + displayVal(s) }} )
              </AppTimer>
              <AppButton
                @click="changeStep('by-crypto.finish')"
                label="Я отправил"
                fullWidth
              />
            </AppStep>

            <AppStep name="by-crypto.finish">
              <div class="wallet__title">Информация о пополнении принята</div>
              <div class="wallet__caption">
                Зачисление денежных средств обычно происходит в течение 15
                минут, в редких случаях достигает 4 часов. В случае проблем,
                просим направить запрос на mail@mail.ru
              </div>
            </AppStep>
          </div>
        </AppModalWallet>

        <div class="history">
          <HistoryTable />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import WalletBalance from 'src/components/Wallet/WalletBalance.vue';
import WalletOutputForm from 'src/components/Wallet/WalletOutputForm.vue';
import HistoryTable from 'src/components/HistoryTable.vue';
import useOutput from 'src/composition/wallet/useOutput';
import useStep from 'src/composition/useStep';
import { mapGetters } from 'vuex';

export default {
  setup() {
    const { send } = useOutput();
    const { step, changeStep } = useStep('choose-type');

    return {
      send,
      step,
      changeStep,
    };
  },
  computed: {
    ...mapGetters('wallet', ['walletData']),
  },
  components: {
    WalletBalance,
    WalletOutputForm,
    HistoryTable,
  },
};
</script>

<style scoped lang="scss">
//$

.history {
  @apply tw-self-start;
  @include col(18);
  @include col-xl(10);
  @include screen-xl {
    max-height: 468px;
    @apply tw-overflow-x-hidden;
  }
}

.wrap {
  @include gutter-y(48px);
}

.wallet {
  padding: 48px 25px 56px;
  @apply tw-rounded-base tw-bg-dark tw-relative;
  @include col(18);
  @include screen-xl {
    padding: 90px 70px;
    @include col(8);
  }

  &__actions {
    @include gutter-p(10px);
    @include screen-xl {
      @include row();
    }
  }

  &__action {
    @include screen-xl {
      width: 50%;
    }
  }
}
</style>
