<template>
  <q-page class="tw-grid tw-container">
    <div class="app-auth">
      <h1 class="app-auth__h1">
        Авторизуйтесь <br />
        в экосистеме Alga
      </h1>
      <p class="app-auth__subtitle">с помощью мобильного телефона и пароля</p>
      <Form @submit="login" class="app-auth__form">
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

        <AppButton type="submit" fullWidth label="Войти" />
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
export default {
  setup() {
    const login = (values) => {
      console.log(values);
    };

    return { login };
  },
};
</script>
