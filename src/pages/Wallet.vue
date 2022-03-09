<template>
  <q-page class="app-page-y">
    <div class="tw-container">
      <h1 class="app-h1 app-h1--space">{{ t("header") }}</h1>

      <div class="app-row app-gutter-col-x wrap">
        <div class="wallet">
          <WalletBalance v-bind="walletData" />

          <div class="wallet__actions">
            <div class="wallet__action">
              <AppButton
                fullWidth
                :label="$t('actions.buy')"
                @click="$aDialog.open('wallet.input')"
              />
            </div>
            <div class="wallet__action">
              <AppButton
                fullWidth
                :label="$t('actions.send')"
                @click="$aDialog.open('wallet.output')"
              />
            </div>
          </div>
        </div>

        <AppModalWallet
          ref="sendDialog"
          name="wallet.output"
          v-slot="{ close }"
        >
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
                :placeholder="$t('inputs.wallet')"
                :label="$t('inputs.walletReciever')"
                rules="required|walletAddress"
              />
              <AppConvertInput />
              <AppButton
                fullWidth
                type="submit"
                :disabled="isSubmitting"
                :label="$t('actions.send')"
              />
            </Form>
          </div>
        </AppModalWallet>

        <AppModalWallet v-slot="{ close }" name="wallet.input">
          <AppBtnBack class="page-wallet__back-btn" @click="back(close)" />
          <div class="page-wallet__content">
            <div v-if="last.name === 'way'">
              <div class="page-wallet__title tw-mb-9">
                {{ t("buy.buyMethod") }}
              </div>

              <div class="page-wallet__actions page-wallet__wrap">
                <AppButton
                  @click="pushToPath({ name: 'card' })"
                  textClass="page-wallet__action"
                  :label="t('buy.byCard')"
                  fullWidth
                />
                <AppButton
                  @click="pushToPath({ name: 'crypto' })"
                  textClass="page-wallet__action"
                  :label="t('buy.byCrypto')"
                  fullWidth
                />
              </div>
            </div>

            <div v-else-if="last.name === 'card'">
              <WalletBalance v-bind="walletData" hideIcon />
              <Form class="page-wallet__form">
                <AppConvertInput />
                <AppButton @click="redir" :label="$t('actions.buy')" fullWidth />
                <div class="page-wallet__caption tw-text-center tw-mt-6">
                  {{ t("buy.agree") }}
                </div>
              </Form>
            </div>

            <div v-else-if="last.name === 'crypto'">
              <WalletBalance v-bind="walletData" hideIcon />
              <Form class="page-wallet__form">
                <AppConvertInput to="USD" @algValue="alg" />
                <div class="page-wallet__actions">
                  <AppButton
                    @click="pushToPath({ name: 'usdt' })"
                    :label="t('buy.usdt')"
                    :icon="require('assets/usdt.svg')"
                    fullWidth
                  />
                  <AppButton
                    @click="pushToPath({ name: 'busd' })"
                    :label="t('buy.busd')"
                    :icon="require('assets/busd.svg')"
                    fullWidth
                  />
                </div>
              </Form>
            </div>

            <div v-else-if="last.name === 'usdt'">
              <MyWalletAddress
                              v-bind="{
                address,
                count,
                coin
              }"
              />
              <div class="wallet__title">{{ t("buy.haveToSend") }}</div>
              <AppTimer :minutes="30" v-slot="{ displayVal, m, s }">
                Осталось ({{ displayVal(m) + ":" + displayVal(s) }} )
              </AppTimer>
              <AppButton
                @click="pushToPath({ name: 'finish' })"
                :label="t('buy.ISent')"
                fullWidth
              />
            </div>

            <div v-else-if="last.name === 'busd'">
              <MyWalletAddress
              v-bind="{
                address,
                count,
                coin
              }"
                
              />
              <div class="wallet__title">{{ t("buy.haveToSend") }}</div>
              <AppTimer :minutes="30" v-slot="{ displayVal, m, s }">
                Осталось ({{ displayVal(m) + ":" + displayVal(s) }} )
              </AppTimer>
              <AppButton
                @click="pushToPath({ name: 'finish' })"
                :label="t('buy.ISent')"
                fullWidth
              />
            </div>

            <div v-else-if="last.name === 'finish'">
              <div class="wallet__title">{{ t("buy.finish.title") }}</div>
              <div class="wallet__caption">{{ t("buy.finish.info") }}</div>
            </div>
          </div>
        </AppModalWallet>
        <div class="history scroll" id="history-block">
          <AppPagination
            scroll-target="#history-block"
            :disable="historyLoaded"
            @load="loadHistory"
          >
            <HistoryTable v-if="history" :transactions="history" />
          </AppPagination>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import WalletBalance from "src/components/Wallet/WalletBalance.vue";
import WalletOutputForm from "src/components/Wallet/WalletOutputForm.vue";
import HistoryTable from "src/components/HistoryTable.vue";
import MyWalletAddress from "src/components/MyWalletAddress";
import { ref, computed } from "vue";
import { useAlert } from "src/plugins/app-alert";
import usePagination from "src/composition/usePagination";
import { mapGetters, useStore } from "vuex";
import { useI18n } from "vue-i18n";

const messages = {
  "ru-RU": {
    header: "Баланс кошелька",
    buy: {
      buyMethod: "Выберите удобный способ пополнения",
      byCard: "Карта VISA / Master Card",
      byCrypto: "Криптовалюта USDT / BUSD",
      busd: "Пополнить в BUSD (BSC)",
      usdt: "Пополнить в USDT (ERC 20)",
      ISent: "Я отправил",
      haveToSend: "Вам необходимо перевести",
      finish: {
        title: "Информация о пополнении принята",
        info: "Зачисление денежных средств обычно происходит в течение 15 минут, в редких случаях достигает 4 часов. В случае проблем, просим направить запрос на mail@mail.ru",
      },
      agree:
        "После нажатия «Пополнить» вы будете перенаправлены на страницу оплаты",
    },
    send: {
      success: "Перевод успешно совершен ({total})",
    },
  },
  "en-US": {
    header: "Wallet balance",
    buy: {
      buyMethod: "Choose a convenient way to replenish",
      byCard: "Card VISA / Master Card",
      byCrypto: "Cryptocurrency USDT / BUSD",
      busd: "Buy in BUSD (BSC)",
      usdt: "Buy in USDT (ERC 20)",
      ISent: "I sent",
      haveToSend: "You need to send",
      finish: {
        title: "Replenishment information accepted",
        info: "Funds are usually credited within 15 minutes, in rare cases up to 4 hours. In case of problems, please send a request to mail@mail.ru",
      },
      agree:
        'After clicking "Deposit" you will be redirected to the payment page',
    },
    send: {
      success: "Transaction is completed ({total})",
    },
  },
};

export default {
  setup() {
    const { t } = useI18n({ messages });
    const appAlert = useAlert();
    const store = useStore();
    const path = ref([{ name: "way" }]);
    const sendDialog = ref(null);
    const algaValue = ref(0);
    const address = ref(null);
    const coin = ref(null);
    const count = ref(null);
    const redir = ()=>{
      // alert('hi')
      // location.replace("https://mpspay.io/");
      // location.href = 'https://mpspay.io/'
      window.open("https://mpspay.io/");
    }
    const last = computed(() => path.value[path.value.length - 1]);

    const pushToPath = async ({ name }) => {
      
      try {
        
        if (name == "busd" || name == "usdt") {
          await store.dispatch(
            "wallet/create",
            JSON.stringify({
              alga_amount: algaValue.value,
              coin: name.toUpperCase(),
            })
          )
          .then((resolve)=>{ coin.value= resolve.data.coin; address.value = resolve.data.address; count.value = resolve.data.amount });
          
        }
          path.value.push({ name });
        
      } catch (e) {
        if (!e.response) throw e;
      }
    };

    const back = (close) => {
      if (path.value.length <= 1) return close();
      path.value.pop();
    };

    const historyPagination = usePagination((filter) =>
      store.dispatch("transactions/showHistory", filter)
    );

    const send = async (values, { setErrors }) => {
      try {
        const result = await store.dispatch("transactions/to", values);
        appAlert({
          type: "positive",
          message: t("send.success", { total: result.amount.label }),
        });

        sendDialog.value?.close();
        store.dispatch("wallet/show");
        historyPagination.data.value.unshift(result);
      } catch (e) {
        if (!e.response) throw e;
        if (e.response.status === 422) {
          const { errors } = await e.response.json();
          if (errors.address)
            appAlert({ type: "negative", message: errors.address.join(", ") });

          setErrors(errors);
        } else {
          throw e;
        }
      }
    };
    const alg = (val) => (algaValue.value = val);

    return {
      address,
      coin,
      count,
      redir,
      algaValue,
      alg,
      last,
      sendDialog,
      t,
      send,
      pushToPath,
      back,
      history: historyPagination.data,
      historyLoaded: historyPagination.complete,
      loadHistory: historyPagination.fetcher,
    };
  },
  computed: {
    ...mapGetters("wallet", ["walletData"]),
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
    @apply tw-overflow-auto;
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
