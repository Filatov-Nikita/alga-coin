<template>
  <AppButton label="Продолжить" @click="a" />
  <div class="tw-w-1/2 tw-mx-auto">
    <AppInput label="Пароль" placeholder="Пароль" type="phone" />
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

export default {
  data() {
    return {
      code: '',
    };
  },
  methods: {
    a() {
      alert(1);
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
