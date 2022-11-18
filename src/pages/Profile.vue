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
            <Form class="app-space-y-md" v-slot="{ isSubmittig }" @submit="submit">
              <AppInput
                name="name"
                :label="$t('inputs.name.label')"
                :placeholder="$t('inputs.name.placeholder')"
                rules="required"
                v-model="name"
              />
              <AppInput
                name="email"
                label="E-mail"
                placeholder="E-mail"
                rules="required|email"
                :rootAttrs="{disabled:true}"
                v-model="email"
              />
              <AppInput
                type="tel"
                name="cellphone"
                :label="$t('inputs.cellphone')"
                placeholder="(999) 999 99 99"
                rules="required"
                :rootAttrs="{disabled: true}"
                v-model="phone"
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
            <Form class="app-space-y-md" v-slot="{ isSubmittig }" @submit="submitPassword">
              <AppInput
                type="password"
                name="oldPass"
                :label="$t('inputs.oldPass')"
                :placeholder="$t('inputs.password')"
                rules="required|password"
                v-model="password"
              />
              <AppInput
                type="password"
                name="newPass"
                :label="$t('inputs.newPass')"
                :placeholder="$t('inputs.password')"
                rules="required|confirmed:@oldPass"
                
                v-model="copyPassword"
              />
              <AppButton
                type="submit"
                :disabled="isSubmittig"
                fullWidth
                :label="t('savePass')"
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
import {ref, computed} from "vue";
import { useStore } from 'vuex'
import { AppAlert } from "src/plugins/app-alert";

const messages = {
  'ru-RU': {
    header: 'Личный кабинет',
    save: 'Сохранить изменения',
    tabData: 'Данные',
    savePass: 'Изменить пароль',
    updatePassword: 'Пароль изменён',
    updateName: 'Имя изменёно'
  },
  'en-US': {
    header: 'Profile',
    save: 'Save changes',
    tabData: 'Data',
    savePass: 'Change password',
    updatePassword: 'Update password',
    updateName: 'Update name'
  },
};

export default {
  setup() {
    const store = useStore();
    const { t } = useI18n({
      messages,
    });
    const name = computed({
      get() {
        return store.getters['profile/fio']
      },
      set(value) {
        store.commit("profile/setFio", value);
      }
    })
    const phone = computed(()=>store.getters['profile/phone'])
    const email = computed(()=>store.getters['profile/email'])
    const submit = async ()=>{
      try{
        await store.dispatch('profile/editName', name.value)
        return AppAlert({
          type: "positive",
          message: t("updateName")
        })
      }catch(e){throw e}
      
    }

    const password = ref("")
    const copyPassword = ref("")
    const submitPassword = async ()=>{
      try{
        await store.dispatch('profile/editPassword', password.value)
        return AppAlert({
          type: "positive",
          message: t("updatePassword")
        })
      }catch(e){throw e}
    }
    const { step, changeStep } = useStep('profile-data');
    

    return {
      t,
      step,
      changeStep,
      name,
      phone,
      email,
      submit,
      password,
      copyPassword,
      submitPassword
    };
  },
  components: { AppTabs },
};
</script>
