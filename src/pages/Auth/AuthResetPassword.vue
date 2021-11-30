<template>
  <q-page class="tw-container tw-grid">
    <div class="app-auth">
      <AppStep name="input">
        <h1 class="app-auth__h1 xl:tw--mx-12">Восстановление доступа</h1>
        <p class="app-auth__subtitle">
          Воcстановите доступ в систему с помощью мобильного телефона и СМС-кода
        </p>
        <Form class="app-auth__form" @submit="submit" v-slot="{ isSubmitting }">
          <AppInput
            name="cellphone"
            rules="required|cellphone"
            type="tel"
            label="Телефон"
            placeholder="(999) 999-99-99"
          />
          <AppButton
            type="submit"
            fullWidth
            label="Выслать код"
            :disabled="isSubmitting"
          />
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
      <AppStep name="verifing">
        <FormVerify :cellphone="curCellphone" @entered="handleCode" />
      </AppStep>
      <AppStep name="password">
        <h1 class="app-auth__h1 xl:tw--mx-12">
          Пароль сброшен. Установите новый пароль
        </h1>
        <p class="app-auth__subtitle">
          Пароль должен быть на английском языке и содержать не менее 6-и
          символов
        </p>
        <Form
          class="app-auth__form"
          @submit="setPassword"
          v-slot="{ isSubmitting }"
        >
          <AppInput
            name="password"
            rules="required"
            type="password"
            label="Новый пароль"
            placeholder="Пароль"
          />
          <AppInput
            name="password2"
            rules="required|confirmed:@password"
            type="password"
            label="Повторите пароль"
            placeholder="Повторите пароль"
          />
          <AuthCodeVerification v-if="invalidCode" :cellphone="curCellphone" />
          <AppButton
            type="submit"
            fullWidth
            label="Установить и войти"
            :disabled="isSubmitting"
          />
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
import useAuth from 'src/composition/useAuth';
import FormVerify from 'src/components/FormVerify.vue';
import AuthCodeVerification from 'src/components/AuthCodeVerification.vue';

export default {
  setup() {
    const { changeStep, step } = useStep('input');
    const { curCode, curCellphone, setPassword, getCode, invalidCode } =
      useAuth();

    const submit = async ({ cellphoneFull: cellphone }) => {
      await getCode({ cellphone });
      curCellphone.value = cellphone;
      changeStep('verifing');
    };

    const handleCode = (value) => {
      curCode.value = value;
      changeStep('password');
    };

    return {
      step,
      submit,
      curCellphone,
      invalidCode,
      changeStep,
      handleCode,
      setPassword,
    };
  },
  components: {
    FormVerify,
    AuthCodeVerification,
  },
};
</script>

<style>
</style>
