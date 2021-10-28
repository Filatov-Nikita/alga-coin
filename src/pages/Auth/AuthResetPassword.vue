<template>
  <q-page class="tw-container tw-grid">
    <div class="app-auth">
      <AppStep name="input">
        <h1 class="app-auth__h1 xl:tw--mx-12">Восстановление доступа</h1>
        <p class="app-auth__subtitle">
          Воcстановите доступ в систему с помощью мобильного телефона и СМС-кода
        </p>
        <Form class="app-auth__form">
          <AppInput
            name="cellphone"
            rules="required|cellphone"
            type="tel"
            label="Телефон"
            placeholder="(999) 999-99-99"
          />
          <AppButton type="submit" fullWidth label="Выслать код" />
        </Form>
        <div class="app-auth__links tw-mt-6">
          <AppLink class="app-auth__link" :to="{ name: 'auth.login' }">
            Вход в личный кабинет
          </AppLink>
          <AppLink class="app-auth__link" :to="{ name: 'auth.registr' }">
            Зарегистрироваться
          </AppLink>
        </div>
      </AppStep>
      <AppStep name="verifing"> <FormVerify :cellphone="'123'" /> </AppStep>
      <AppStep name="set-password">
        <h1 class="app-auth__h1 xl:tw--mx-12">
          Пароль сброшен. Установите новый пароль
        </h1>
        <p class="app-auth__subtitle">
          Пароль должен быть на английском языке и содержать не менее 6-и
          символов
        </p>
        <Form class="app-auth__form">
          <AppInput
            name="password1"
            rules="required"
            type="password"
            label="Пароль"
            placeholder="Пароль"
          />
          <AppInput
            name="password2"
            rules="required"
            type="password"
            label="Повторите пароль"
            placeholder="Повторите пароль"
          />
          <AppButton type="submit" fullWidth label="Установить и войти" />
        </Form>
        <div class="app-auth__links tw-mt-6">
          Уже зарегистрированы?
          <AppLink :to="{ name: 'auth.login' }"> Войти </AppLink>
        </div>
      </AppStep>
    </div>
  </q-page>
</template>

<script>
import useStep from 'src/composition/useStep';
import FormVerify from 'src/components/FormVerify.vue';

export default {
  setup() {
    const { changeStep, step } = useStep('input');

    return {
      changeStep,
      step,
    };
  },
  components: {
    FormVerify,
  },
};
</script>

<style>
</style>
