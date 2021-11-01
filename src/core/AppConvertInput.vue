<template>
  <div class="app-convert">
    <AppInput
      name="alg"
      label="Сумма в AlgaСoin"
      placeholder="Сумма в рублях"
      currency
      @change="convert"
    >
      <template #append> ALG </template>
    </AppInput>
    <div class="sign">≈</div>
    <AppInput
      ref="inp2"
      name="rub"
      label="Сумма в рублях"
      placeholder="Сумма в рублях"
      currency
      standalone
    >
      <template #append>
        <span v-if="!isLoading">RUB</span>
        <q-spinner v-else size="20px" />
      </template>
    </AppInput>
  </div>
</template>

<script>
import { ref, getCurrentInstance } from 'vue';
import useLoading from 'src/composition/useLoading';

export default {
  setup() {
    const { isLoading, startLoading, stopLoading } = useLoading();
    const inp2 = ref(null);
    const appAlert =
      getCurrentInstance().appContext.config.globalProperties.$alert;

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
  top: 10px;
  @apply tw-text-sm tw-text-secondary tw-relative tw-self-center;
}
</style>
