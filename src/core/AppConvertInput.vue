<template>
  <div class="app-convert">
    <div class="tw-flex-1 tw-w-2/5">
      <AppInput
        :key="label1"
        currency
        ref="inp1"
        name="amount"
        rules="required"
        :label="label1"
        :placeholder="fromLocal"
        v-model="val1"
      >
        <template #append> {{ fromLocal }} </template>
      </AppInput>
    </div>
    <div class="sign" @click="swap">≈</div>
    <div class="tw-flex-1 tw-w-2/5">
      <AppInput
        currency
        standalone
        readonly
        ref="inp2"
        name="to"
        :label="label2"
        :placeholder="toLocal"
        v-model="val2"
      >
        <template #append>
          <span v-if="!isLoading">{{ toLocal }}</span>
          <q-spinner v-else size="20px" />
        </template>
      </AppInput>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import useLoading from 'src/composition/useLoading';
import { useAlert } from 'src/plugins/app-alert';
import { useStore } from 'vuex';
import { throttle } from 'src/helpers/perfomance';
import { useI18n } from 'vue-i18n';

function validator(val) {
  return ['ALG', 'RUB', 'USD'].includes(val);
}

const labelByCurrency = (t) => ({
  RUB: t('rubSum'),
  USD: t('usdSum'),
  ALG: t('algSum'),
});

const i18n = {
  messages: {
    'en-US': {
      rubSum: 'Amount in rubles',
      usdSum: 'Amount in dollars',
      algSum: 'Amount in AlgaСoin',
    },
    'ru-RU': {
      rubSum: 'Сумма в рублях',
      usdSum: 'Сумма в долларах',
      algSum: 'Сумма в AlgaСoin',
    },
  },
};

export default {
  props: {
    from: {
      default: 'ALG',
      validator,
    },
    to: {
      default: 'RUB',
      validator,
    },
  },
  setup(props) {
    const { isLoading, startLoading, stopLoading } = useLoading();
    const to = ref(props.to);
    const from = ref(props.from);
    const inp1 = ref(null);
    const inp2 = ref(null);
    const val1 = ref('');
    const val2 = ref('');
    const appAlert = useAlert();
    const store = useStore();
    const { t } = useI18n(i18n);

    const currencyCode = computed(() =>
      from.value === 'ALG' ? to.value : from.value
    );
    const isSource = computed(() => from.value !== 'ALG');
    const label1 = computed(() => labelByCurrency(t)[from.value]);
    const label2 = computed(() => labelByCurrency(t)[to.value]);

    const swap = () => {
      const temp = to.value;
      to.value = from.value;
      from.value = temp;
      val1.value = '';
      val2.value = '';
    };

    const convert = async (value) => {
      if (!value) return;

      try {
        startLoading();

        const calc = await store.dispatch('info/conversion', {
          amount: value.replace(/\s/g, ''),
          is_source: isSource.value ? 1 : 0,
          currency_code: currencyCode.value,
        });

        val2.value = calc.out.amount.value;
      } catch (e) {
        appAlert({
          message:
            'Не удалось конвертировать валюту. Попрбуйте ввести значение еще раз.',
          type: 'negative',
        });
        throw e;
      } finally {
        stopLoading();
      }
    };

    const quickConvert = throttle(convert, 700);

    watch(val1, quickConvert);

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
      t,
    };
  },
};
</script>

<style scoped lang="scss">
//$

.app-convert {
  @apply tw-flex;
  @include space-x(10px);
}

.sign {
  top: 38px;
  @apply tw-text-sm tw-text-secondary tw-relative tw-cursor-pointer;
}
</style>
