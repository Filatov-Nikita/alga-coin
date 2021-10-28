<template>
  <q-page class="tw-grid tw-container">
    <div class="app-auth">
      <AppStep name="registr">
        <h1 class="app-auth__h1">Зарегистрируйтесь в экосистеме Alga</h1>
        <p class="app-auth__subtitle">
          с помощью эл. почты и мобильного телефона
        </p>
        <Form
          @submit="login"
          :initialValues="initialValues"
          class="app-auth__form"
        >
          <AppInput
            name="name"
            label="ФИО"
            placeholder="Иванов Иван Иванович"
            rules="required"
          />
          <AppInput
            name="email"
            rules="required|email"
            type="email"
            label="E-mail"
            placeholder="ivanov@domain.ru"
          />
          <AppInput
            rules="required"
            type="tel"
            name="cellphone"
            label="Телефон"
          />

          <AppCheckbox
            rules="required"
            name="Условия обслуживания"
            class="tw-text-left tw-mt-6"
            labelClass="tw-text-xxs"
          >
            Я ознакомился(ась) и соглашаюсь <br />
            с
            <AppLink to="#" target="_blank"> Условиями обслуживания </AppLink>
            AlgaCoin
          </AppCheckbox>
          <AppButton label="Зарегистрироваться" fullWidth type="submit" />
        </Form>
        <div class="app-auth__links tw-mt-6">
          Уже зарегистрированы?
          <AppLink :to="{ name: 'auth.login' }"> Войти </AppLink>
        </div>
      </AppStep>
      <AppStep name="verifing">
        <FormVerify :cellphone="displayCellphone"/>
      </AppStep>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';
import useStep from 'src/composition/useStep';
import FormVerify from 'src/components/FormVerify.vue';

function setCellphone(prefix = '', cellphone = '') {
  return prefix + cellphone;
}

export default {
  setup() {
    const { changeStep, step } = useStep('registr');
    const displayCellphone = ref('');
    const code = ref('');

    const login = (values) => {
      setCellphone(values.telPrefix, values.cellphone);
      changeStep('verifing');
    };

    const verify = (values) => {
      console.log(values.code);
    };

    return {
      step,
      changeStep,
      displayCellphone,
      login,
      verify,
      initialValues: {
        name: 'Никита',
        email: '1@1.ru',
        cellphone: '9174448517',
        conditions: true,
      },
      code,
    };
  },
  components: {
    FormVerify,
  },
};
</script>
