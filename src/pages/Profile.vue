<template>
  <q-page class="app-page-y">
    <div class="tw-container">
      <h1 class="app-h1 app-h1--space">{{ t('header') }}</h1>
      <div class="app-row app-gutter-col-x">
        <div class="app-col-18 xl:app-col-5">
          <AppTabs
            class="tw-mb-7-1"
            @switch="changeStep"
            :value="step"
            :steps="[
              { name: 'profile-data', label: t('tabData') },
              { name: 'password', label: $t('inputs.password') },
            ]"
          />
          <AppStep name="profile-data">
            <Form class="app-space-y-md" v-slot="{ isSubmittig }">
              <AppInput
                name="name"
                :label="$t('inputs.name.label')"
                :placeholder="$t('inputs.name.placeholder')"
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
                :label="$t('inputs.cellphone')"
                placeholder="(999) 999 99 99"
                rules="required"
              />
              <AppButton
                type="submit"
                :disabled="isSubmittig"
                fullWidth
                :label="t('save')"
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
import { useI18n } from 'vue-i18n';

const messages = {
  'ru-RU': {
    header: 'Личный кабинет',
    save: 'Сохранить изменения',
    tabData: 'Данные',
  },
  'en-US': {
    header: 'Profile',
    save: 'Save changes',
    tabData: 'Data',
  },
};

export default {
  setup() {
    const { step, changeStep } = useStep('profile-data');
    const { t } = useI18n({
      messages,
    });

    return {
      t,
      step,
      changeStep,
    };
  },
  components: { AppTabs },
};
</script>
