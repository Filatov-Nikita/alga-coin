<template>
  <q-page>
    <div class="app-container tw-text-xxs">
      <div class="app-auth">
        <template v-if="step === 'registr'">
          <h1 class="h4 tw-mb-2">Зарегистрируйтесь в системе AlgaCoin</h1>
        </template>
        <template>
          <h1 class="h4 tw-mb-2">Верификация по номеру телефона</h1>
        </template>

        <AppFormWizard
          :initialValues="initialValues"
          v-model="step"
        >
          <AppFormStep name="registr">
            <p class="tw-mb-7-1">
              Зарегистрируйтесь с помощью эл. почты и мобильного телефона
            </p>

            <AuthRegistrationForm />
          </AppFormStep>
          <AppFormStep name="verifing">
            <p class="tw-mb-7-1">
              Введите 6-значный код подтверждения, который был отправлен на +7
              917 917-**-**. Код действителен в течение 30 минут.
            </p>
            <AuthVerifingCodeForm />
          </AppFormStep>
        </AppFormWizard>
      </div>
    </div>
  </q-page>
</template>

<script>
import AuthRegistrationForm from 'src/components/Auth/AuthRegistrationForm';
import AuthVerifingCodeForm from 'src/components/Auth/AuthVerifingCodeForm';

export default {
  setup() {
    return {
      step: 'registr',
      initialValues: {
        name: 'Никита',
        email: '1@1.ru',
        cellphone: '79174448517',
        conditions: true,
      },
    };
  },
  methods: {

  },
  components: {
    AuthVerifingCodeForm,
    AuthRegistrationForm,
  },
};
</script>

<style scoped lang="scss">
</style>
