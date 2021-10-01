<template>
  <AppButton label="Продолжить" @click="a" />
  <AppButton label="Продолжить" :icon="require('assets/usdt.svg')" />

  <div class="tw-w-1/2 tw-mx-auto">
    <AppInput
      class="tw-mb-8"
      type="password"
      label="Пароль"
      placeholder="Пароль"
      v-model="password"
      rules="required|min:8"
    />

    <AppInput
      class="tw-mb-8"
      label="Номер телефона"
      placeholder="Номер телефона"
      type="tel"
      withTelPrefix
    />

    <AppInput
      class="tw-mb-8"
      label="append/prepend"
      placeholder="append/prepend"
    >
      <template #prepend> 1 </template>
      <template #append> <span class="tw-text-secondary">ALG</span> </template>
    </AppInput>

    <AppCurrencyInput
      class="tw-mb-8"
      label="Сумма в рублях"
      placeholder="Сумма в рублях"
      currency="rub"
      v-model="sum"
    />

    <AppCodeInput length="6" label="Код из СМС" v-model:code="code" />
    <UserMenu class="tw-mt-8 tw-mb-8" name="Валентина" />
    <AppLink to="#">Не получили код?</AppLink>
    <LangToolbar currentLang="ru" />

    <AppTimer :start="5" class="tw-text-xs">
      <template v-slot:default="{ time }">
        <span>Повторная отправка через ({{ time }})</span>
      </template>
    </AppTimer>
  </div>
</template>

<script>
import UserMenu from 'src/components/UserMenu';
import LangToolbar from 'src/components/LangToolbar';
import maskit from 'vue-the-mask/src/maskit';
import tokens from 'vue-the-mask/src/tokens';

export default {
  created() {
    this.testMaskit();
  },
  data() {
    return {
      code: '',
      sum: '',
      password: '',
    };
  },
  methods: {
    a() {
      alert(1);
    },
    testMaskit() {
      const value = '1-2-3-4';
      const mask = '#-#-#';

      const res = maskit(value, mask, true, tokens);
      console.log('maskit', res);
    },
  },
  components: {
    UserMenu,
    LangToolbar,
  },
};
</script>

<style>
</style>
