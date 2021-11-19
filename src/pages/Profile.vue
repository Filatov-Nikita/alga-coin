<template>
  <q-page class="app-page-y">
    <div class="tw-container">
      <h1 class="app-h1 app-h1--space">Личный кабинет</h1>
      <div class="app-row app-gutter-col-x">
        <div class="app-col-18 xl:app-col-5">
          <AppTabs
            class="tw-mb-7-1"
            @switch="changeStep"
            :value="step"
            :steps="[
              { name: 'profile-data', label: 'Данные' },
              { name: 'password', label: 'Пароль' },
            ]"
          />
          <AppStep name="profile-data">
            <Form class="app-space-y-md" v-slot="{ isSubmittig }">
              <AppInput
                name="name"
                label="Имя"
                placeholder="Имя"
                rules="required"
              />
              <AppInput
                name="email"
                label="E-mail"
                placeholder="E-mail"
                rules="required|email"
              />
              <AppInput
                type="tel"
                name="cellphone"
                label="Телефон"
                placeholder="Номер телефона"
                rules="required"
              />
              <AppButton
                type="submit"
                :disabled="isSubmittig"
                fullWidth
                label="Сохранить изменения"
              />
            </Form>
          </AppStep>
          <AppStep name="password">
            <Form class="app-space-y-md" v-slot="{ isSubmittig }">
              <AppInput
                type="password"
                name="oldPass"
                label="Старый пароль"
                placeholder="Пароль"
                rules="required|password"
              />
              <AppInput
                type="password"
                name="newPass"
                label="Новый пароль"
                placeholder="Пароль"
                rules="required|confirmed:@oldPass"
              />
              <AppButton
                type="submit"
                :disabled="isSubmittig"
                fullWidth
                label="Изменить пароль"
              />
            </Form>
          </AppStep>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import AppTabs from 'src/components/AppTabs.vue';
import useStep from 'src/composition/useStep';

export default {
  setup() {
    const { step, changeStep } = useStep('profile-data');
    return {
      step,
      changeStep,
    };
  },
  components: { AppTabs },
};
</script>
