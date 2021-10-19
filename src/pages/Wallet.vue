<template>
  <q-page class="app-page-y">
    <div class="tw-container">
      <h1 class="app-h1 app-h1--space">Баланс кошелька</h1>

      <div class="app-row app-gutter-col-x wrap">
        <div class="wallet">
          <WalletBalance
            alg="1 232 151.348"
            rub="25 357 000"
            walletNumber="0xAbBDd166fD5DfFe50D294aEEe539CBB2547DE7DF"
          />

          <div class="wallet__actions">
            <div class="wallet__action">
              <AppButton
                fullWidth
                @click="$aDialog.open('wallet.output')"
                label="Купить"
              />
            </div>
            <div class="wallet__action">
              <AppButton
                fullWidth
                @click="$aDialog.open('wallet.input')"
                label="Отправить"
              />
            </div>
          </div>
        </div>

        <AppModalWallet
          v-slot="{ close }"
          name="wallet.input"
          contentClass="tw-grid"
        >
          <AppBtnBack class="wallet__back" @click="close" />
          <div class="tw-px-6 tw-py-12 tw-m-auto">
            <div class="tw-mb-6 tw-text-center xl:tw-text-sm">
              Выберите удобный способ пополнения
            </div>
            <div class="tw-space-y-2-1">
              <AppButton
                @click="
                  close();
                  $aDialog.open('wallet.input.card');
                "
                textClass="tw-text-xxs xl:tw-text-base"
                label="Карта VISA / Master Card"
                fullWidth
              />
              <AppButton
                @click="
                  close();
                  $aDialog.open('wallet.input.crypt');
                "
                textClass="tw-text-xxs xl:tw-text-base"
                label="Криптовалюта USDT / BUSD"
                fullWidth
              />
            </div>
          </div>
        </AppModalWallet>
        <div class="history">
          <HistoryTable />
        </div>
      </div>

      <!-- <AppModalWallet name="wallet.input.card" v-slot="{ close }" design="max-height">
        <AppBtnBack class="wallet__back" @click="close" />
        <div class="tw-py-12 tw-px-6">
          <div class="tw-space-y-4-1 tw-mb-6">
            <AppInput label="Сумма" placeholder="Сумма" />
            <AppInput label="Сумма" placeholder="Сумма" />
            <AppButton label="Пополнить" fullWidth />
          </div>
          <div class="tw-text-center tw-text-xxs-2">
            После нажатия «Пополнить» вы будете перенаправлены на страницу
            оплаты
          </div>
        </div>
      </AppModalWallet>

      <AppModalWallet
        name="wallet.input.crypt"
        v-slot="{ close }"
        design="max-height"
      >
        <AppBtnBack class="wallet__back" @click="close" />

        <div class="tw-px-6 tw-py-12">
          <div class="tw-space-y-4-1 tw-mb-4">
            <AppInput label="Сумма" placeholder="Сумма" />
            <AppInput label="Сумма" placeholder="Сумма" />
            <AppButton
              @click="
                close();
                $aDialog.open('wallet.input.crypt-confirm');
              "
              :icon="require('assets/usdt.svg')"
              label="Пополнить в USDT"
              fullWidth
              textClass="tw-text-xxs"
            />
            <AppButton
              @click="
                close();
                $aDialog.open('wallet.input.crypt-confirm');
              "
              :icon="require('assets/busd.svg')"
              label="Пополнить в BUSD"
              fullWidth
              textClass="tw-text-xxs"
            />
          </div>
        </div>
      </AppModalWallet>

      <AppModalWallet
        name="wallet.input.crypt-confirm"
        v-slot="{ close }"
        design="max-height"
      >
        <AppBtnBack class="wallet__back" @click="close" />

        <div class="tw-px-6 tw-py-12">
          <div class="tw-space-y-4-1 tw-mb-4">
            <div class="tw-text-center">Вам необходимо перевести</div>
            <AppTimer
              :minutes="30"
              v-slot="{ s, m, displayVal }"
              class="tw-text-center"
            >
              Осталось ({{ `${displayVal(m)}:${displayVal(s)}` }})
            </AppTimer>
            <AppButton
              @click="
                close();
                $aDialog.open('wallet.input.crypt-finish');
              "
              label="Я отправил"
              fullWidth
            />
          </div>
        </div>
      </AppModalWallet>

      <AppModalWallet name="wallet.input.crypt-finish" v-slot="{ close }">
        <AppBtnBack class="wallet__back" @click="close" />

        <div class="tw-px-6 tw-py-12">
          <div class="tw-space-y-4-1 tw-mb-4">
            <div class="tw-text-center">Информация о пополнении принята</div>
            <div>
              Зачисление денежных средств обычно происходит в течение 15 минут,
              в редких случаях достигает 4 часов. В случае проблем, просим
              направить запрос на mail@mail.ru
            </div>
          </div>
        </div>
      </AppModalWallet>

      <AppModalWallet design="max-height" name="wallet.output" v-slot="{ close }">
        <AppBtnBack class="wallet__back" @click="close" />
        <WalletOutputForm />
      </AppModalWallet> -->
    </div>
  </q-page>
</template>

<script>
import WalletBalance from 'src/components/Wallet/WalletBalance.vue';
import WalletOutputForm from 'src/components/Wallet/WalletOutputForm.vue';
import HistoryTable from 'src/components/HistoryTable.vue';

export default {
  data() {
    return {
      step1: '',
      step2: '',
    };
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
  @include col(18);
  @include col-xl(10);
  @apply tw-self-start;

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
  @include col(18);

  @include screen-xl {
    padding: 90px 70px;
    @include col(8);
  }

  @apply tw-rounded-base tw-bg-dark tw-relative;

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

  &__status {
    width: 70px;
    height: 70px;
  }

  &__back {
    position: absolute;
    top: 2px;
    left: 2px;

    @include screen-xl {
      top: 20px;
      left: 20px;
    }
  }
}
</style>
