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
                name="address"
                fullWidth
                placeholder="Адрес кошелька"
                label="Адрес кошелька получателя"
                rules="required|walletAddress"
              />
              <AppConvertInput />
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
          <AppBtnBack class="page-wallet__back-btn" @click="back(close)" />
          <div class="page-wallet__content">
            <div v-if="last.name === 'way'">
              <div class="page-wallet__title tw-mb-9">
                Выберите удобный способ пополнения
              </div>

              <div class="page-wallet__actions page-wallet__wrap">
                <AppButton
                  @click="pushToPath({ name: 'card' })"
                  textClass="page-wallet__action"
                  label="Карта VISA / Master Card"
                  fullWidth
                />
                <AppButton
                  @click="pushToPath({ name: 'crypto' })"
                  textClass="page-wallet__action"
                  label="Криптовалюта USDT / BUSD"
                  fullWidth
                />
              </div>
            </div>

            <div v-else-if="last.name === 'card'">
              <WalletBalance v-bind="walletData" hideIcon />
              <Form class="page-wallet__form">
                <AppConvertInput />
                <AppButton @click="1" label="Пополнить" fullWidth />
                <div class="page-wallet__caption tw-text-center tw-mt-6">
                  После нажатия «Пополнить» вы будете перенаправлены на страницу
                  оплаты
                </div>
              </Form>
            </div>

            <div v-else-if="last.name === 'crypto'">
              <WalletBalance v-bind="walletData" hideIcon />
              <Form class="page-wallet__form">
                <AppConvertInput />
                <div class="page-wallet__actions">
                  <AppButton
                    @click="pushToPath({ name: 'usdt' })"
                    label="Пополнить в USDT"
                    :icon="require('assets/usdt.svg')"
                    fullWidth
                  />
                  <AppButton
                    @click="pushToPath({ name: 'busd' })"
                    label="Пополнить в BUSD"
                    :icon="require('assets/busd.svg')"
                    fullWidth
                  />
                </div>
              </Form>
            </div>

            <div v-else-if="last.name === 'usdt'">
              <MyWalletAddress
                address="0xAbBDd166fD5DfFe50D294aEEe539CBB2547DE7DF"
              />
              <div class="wallet__title">Вам необходимо перевести</div>
              <AppTimer :minutes="30" v-slot="{ displayVal, m, s }">
                Осталось ({{ displayVal(m) + ':' + displayVal(s) }} )
              </AppTimer>
              <AppButton
                @click="pushToPath({ name: 'finish' })"
                label="Я отправил"
                fullWidth
              />
            </div>

            <div v-else-if="last.name === 'busd'">
              <MyWalletAddress
                address="0xAbBDd166fD5DfFe50D294aEEe539CBB2547DE7DF"
              />
              <div class="wallet__title">Вам необходимо перевести</div>
              <AppTimer :minutes="30" v-slot="{ displayVal, m, s }">
                Осталось ({{ displayVal(m) + ':' + displayVal(s) }} )
              </AppTimer>
              <AppButton
                @click="pushToPath({ name: 'finish' })"
                label="Я отправил"
                fullWidth
              />
            </div>

            <div v-else-if="last.name === 'finish'">
              <div class="wallet__title">Информация о пополнении принята</div>
              <div class="wallet__caption">
                Зачисление денежных средств обычно происходит в течение 15
                минут, в редких случаях достигает 4 часов. В случае проблем,
                просим направить запрос на mail@mail.ru
              </div>
            </div>
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
import MyWalletAddress from 'src/components/MyWalletAddress';
import { ref, computed } from 'vue';
import { mapGetters } from 'vuex';

export default {
  setup() {
    const { send } = useOutput();
    const path = ref([{ name: 'way' }]);
    const last = computed(() => path.value[path.value.length - 1]);
    const pushToPath = ({ name }) => path.value.push({ name });
    const back = (close) => {
      if (path.value.length <= 1) return close();
      path.value.pop();
    };

    return {
      send,
      last,
      pushToPath,
      back,
    };
  },
  computed: {
    ...mapGetters('wallet', ['walletData']),
  },
  components: {
    WalletBalance,
    WalletOutputForm,
    HistoryTable,
    MyWalletAddress,
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
