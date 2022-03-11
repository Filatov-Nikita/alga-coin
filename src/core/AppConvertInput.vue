<template>
  <div class="app-convert">
    <div class="tw-flex-1 xl:tw-w-2/5">
      <AppInput
        inputClass="app-convert__r-offset"
        :key="label1"
        currency
        ref="inp1"
        name="amount"
        rules="required"
        :label="label1"
        :placeholder="fromLocal"
        v-model="val1"
      >
        <template #append>
          <span> {{ fromLocal }}</span>
        </template>
      </AppInput>
    </div>
    <div class="sign" @click="swap">
      <span>≈</span>
    </div>
    <div class="tw-flex-1 xl:tw-w-2/5">
      <AppInput
        inputClass="app-convert__r-offset"
        currency
        standalone
        readonly
        ref="inp2"
        name="to"
        :label="label2"
        :placeholder="toLocal"
        v-model="val2"
        @click="showSum"
      >
        <template #append>
          <span v-if="!isLoading">{{ toLocal }}</span>
          <q-spinner v-else size="20px" />
        </template>
      </AppInput>
    </div>
    <div v-if="showedSum && val2" class="resultSum" @click="showSum">
      {{ val2 }} {{ toLocal }}
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import useLoading from "src/composition/useLoading";
import { useAlert } from "src/plugins/app-alert";
import { useStore } from "vuex";
import { throttle } from "src/helpers/perfomance";
import { useI18n } from "vue-i18n";
import { useQuasar } from "quasar";

function validator(val) {
  return ["ALG", "RUB", "USD"].includes(val);
}

const labelByCurrency = (t) => ({
  RUB: t("rubSum"),
  USD: t("usdSum"),
  ALG: t("algSum"),
});

const i18n = {
  messages: {
    "en-US": {
      rubSum: "Amount in rubles",
      usdSum: "Amount in dollars",
      algSum: "Amount in AlgaСoin",
    },
    "ru-RU": {
      rubSum: "Сумма в рублях",
      usdSum: "Сумма в долларах",
      algSum: "Сумма в AlgaСoin",
    },
  },
};

export default {
  props: {

    from: {
      default: "ALG",
      validator,
    },
    to: {
      default: "RUB",
      validator,
    },
  },
  setup(props, { emit }) {
    const q = useQuasar();
    const { isLoading, startLoading, stopLoading } = useLoading();
    const to = ref(props.to);
    const from = ref(props.from);
    const inp1 = ref(null);
    const inp2 = ref(null);
    const val1 = ref("");
    const val2 = ref("");
    const showedSum = ref(false);
    const appAlert = useAlert();
    const store = useStore();
    const { t } = useI18n(i18n);

    const currencyCode = computed(() =>
      from.value === "ALG" ? to.value : from.value
    );
    const isSource = computed(() => from.value !== "ALG");
    const label1 = computed(() => labelByCurrency(t)[from.value]);
    const label2 = computed(() => labelByCurrency(t)[to.value]);

    const swap = () => {
      const temp = to.value;
      to.value = from.value;
      from.value = temp;
      val1.value = "";
      val2.value = "";
    };

    const convert = async (value) => {
      if (!value) return;

      try {
        startLoading();

        const calc = await store.dispatch("info/conversion", {
          amount: value.replace(/\s/g, ""),
          is_source: isSource.value ? 1 : 0,
          currency_code: currencyCode.value,
        });

        val2.value = calc.out.amount.value;
      } catch (e) {
        appAlert({
          message: (t) => t("errors.convert"),
          type: "negative",
        });
        throw e;
      } finally {
        stopLoading();
      }
    };

    const quickConvert = throttle(convert, 700);

    watch(val1, quickConvert);

    const showSum = () => {
      if (!q.screen.lt.xl || !val2.value) return;
      showedSum.value = !showedSum.value;
    };

    const findAlg = computed(() => {
      return from.value == "ALG" ? val1.value : val2.value;
    });
    const findValuta = computed(() => {
      return from.value !== "ALG" ? val1.value : val2.value;
    });
    watch(findAlg, (val) => {
      if(val.indexOf('.') !== -1){
        emit("algValue", val.replace(/\s/g, ""));
      }else {
        emit("algValue", `${val}.000`.replace(/\s/g, ""));
      }
    });

    watch(findValuta, (val) => {
      if(val.indexOf('.') !== -1){
        emit("valutaValue", val.replace(/\s/g, ""));
      }else {
        emit("valutaValue", `${val}.000`.replace(/\s/g, ""));
      }
    });
    return {
      toLocal: to,
      fromLocal: from,
      val1,
      val2,
      inp1,
      inp2,
      label1,
      label2,
      isLoading,
      swap,
      convert,
      showSum,
      showedSum,
      t,
      findAlg,
      findValuta
    };
  },
};
</script>
<style>
.app-convert__r-offset {
  padding-right: 55px !important;
}
</style>
<style scoped lang="scss">
//$

.app-convert {
  @apply xl:tw-flex tw-relative;
  @include gutter-x(10px);
}

.resultSum {
  bottom: 0;
  right: 0;
  transform: translateY(calc(100% + 5px));
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
  @apply tw-absolute tw-bg-white tw-rounded-base tw-px-3 tw-py-2 tw-text-dark tw-text-xxs;
}

.resultSum::after {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  background: white;
  position: absolute;
  right: 35px;
  top: -2px;
  transform: rotate(45deg);
}

.sign {
  @include screen-xl {
    height: 50px;
    line-height: 50px;
    top: 28px;
  }
  width: 12px;
  @apply tw-text-sm tw-text-secondary tw-relative tw-cursor-pointer;
}
</style>
