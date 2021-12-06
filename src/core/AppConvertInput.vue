<template>
  <div class="app-convert">
    <div class="tw-flex-1 tw-w-2/5">
      <AppInput
        name="alg"
        label="Сумма в AlgaСoin"
        placeholder="ALG"
        currency
        rules="required"
        @change="convert"
      >
        <template #append> ALG </template>
      </AppInput>
    </div>
    <div class="sign">≈</div>
    <div class="tw-flex-1 tw-w-2/5">
      <AppInput
        ref="inp2"
        name="rub"
        label="Сумма в рублях"
        placeholder="RUB"
        currency
        standalone
        readonly
      >
        <template #append>
          <span v-if="!isLoading">RUB</span>
          <q-spinner v-else size="20px" />
        </template>
      </AppInput>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import useLoading from 'src/composition/useLoading';
import { useAlert } from 'src/plugins/app-alert';

export default {
  setup() {
    const { isLoading, startLoading, stopLoading } = useLoading();
    const inp2 = ref(null);
    const appAlert = useAlert();

    const convert = async ({ target: { value } }) => {
      startLoading();
      return new Promise((res, rej) => {
        setTimeout(() => {
          stopLoading();
          if (Math.random() > 0.5) {
            const calc = Math.random() * 1000;
            res(calc);
            inp2.value.setValue(calc);
          } else {
            appAlert({
              message:
                'Не удалось конвертировать валюту. Попрбуйте ввести значение еще раз.',
              type: 'negative',
            });
            res(false);
          }
        }, 1000);
      });
    };

    return {
      convert,
      inp2,
      isLoading,
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
  @apply tw-text-sm tw-text-secondary tw-relative;
}
</style>
