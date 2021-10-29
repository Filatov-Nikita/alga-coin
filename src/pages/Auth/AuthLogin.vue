<template>
  <q-page class="tw-grid tw-container">
    <div class="app-auth">
      <h1 class="app-auth__h1">
        Авторизуйтесь <br />
        в экосистеме Alga
      </h1>
      <p class="app-auth__subtitle">с помощью мобильного телефона и пароля</p>
      <Form
        @submit="login"
        class="app-auth__form"
        :initialValues="{ cellphone: '9174448517', password: '987412365' }"
        v-slot="{ isSubmitting }"
      >
        <AppInput
          name="cellphone"
          rules="required|cellphone"
          type="tel"
          label="Телефон"
          placeholder="(999) 999-99-99"
        />
        <AppInput
          name="password"
          rules="required"
          type="password"
          label="Пароль"
          placeholder="Пароль"
        />

        <AppButton
          :disabled="isSubmitting"
          type="submit"
          fullWidth
          label="Войти"
        />
      </Form>
      <div class="app-auth__links tw-mt-6">
        <AppLink class="app-auth__link" :to="{ name: 'auth.reset-password' }"
          >Забыли пароль?</AppLink
        >
        <AppLink class="app-auth__link" :to="{ name: 'auth.registr' }"
          >Зарегистрироваться</AppLink
        >
      </div>
    </div>
  </q-page>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import loadCritical from 'src/store/utilities/load-critical';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const login = async ({ cellphoneUm: cellphone, password }) => {
      try {
        await store.dispatch('auth/login', { cellphone, password });
        await loadCritical(store);
        router.push({ name: 'wallet' });
      } catch (e) {
        if (!e.response) throw e;
        if (e.response.status === 400) {
          console.log('неверный логин или пароль');
        } else {
          throw e;
        }
      }
    };

    return { login };
  },
};
</script>
