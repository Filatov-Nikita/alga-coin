<template>
  <q-page class="tw-grid tw-container">
    <div class="app-auth">
      <AppStep name="registr">
        <h1 class="app-auth__h1">{{ t('header') }}</h1>
        <p class="app-auth__subtitle">{{ t('subtitle') }}</p>
        <Form
          @submit="createUser"
          class="app-auth__form"
          v-slot="{ isSubmitting }"
        >
          <AppInput
            name="name"
            :label="$t('inputs.name.label')"
            :placeholder="$t('inputs.name.placeholder')"
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
            :label="$t('inputs.cellphone')"
            placeholder="(999) 999 99 99"
          />

          <AppCheckbox
            rules="required"
            :name="$t('landing.footer.serviceInfo')"
            class="tw-text-left tw-mt-6"
            labelClass="tw-text-xxs"
          >
            <i18n-t scope="global" keypath="term">
              <template #link>
                <AppLink :to="$app.links.serviceInfo">
                  {{ $t('landing.footer.serviceInfo', 0) }}
                </AppLink>
              </template>
            </i18n-t>
          </AppCheckbox>
          <AppButton
            :label="$t('buttons.registr')"
            fullWidth
            type="submit"
            :disabled="isSubmitting"
          />
        </Form>
        <i18n-t
          class="app-auth__links tw-mt-6"
          tag="div"
          keypath="actions.hasAccount"
          scope="global"
        >
          <template #login>
            <AppLink :to="{ name: 'auth.login' }">
              {{ $t('buttons.logIn') }}
            </AppLink>
          </template>
        </i18n-t>
      </AppStep>
      <AppStep name="verifing">
        <FormVerify :cellphone="curCellphone" @entered="handleCode" />
      </AppStep>
      <AppStep name="password">
        <h1 class="app-auth__h1">{{ t('passHeader') }}</h1>
        <p class="app-auth__subtitle">{{ $t('passRequired') }}</p>
        <Form
          v-slot="{ isSubmitting }"
          class="app-auth__form"
          @submit="setPassword"
        >
          <AppInput
            type="password"
            name="password"
            :label="$t('inputs.password')"
            :placeholder="$t('inputs.password')"
            rules="required|password"
          />
          <AppInput
            type="password"
            name="pass2"
            :label="$t('inputs.repeatPass')"
            :placeholder="$t('inputs.password')"
            rules="required|confirmed:@password"
          />
          <AuthCodeVerification v-if="invalidCode" :cellphone="curCellphone" />
          <AppButton
            :label="$t('actions.setPass')"
            fullWidth
            type="submit"
            :disabled="isSubmitting"
          />
        </Form>
        <div class="app-auth__links tw-mt-6">
          {{ $t('actions.hasAccount') }}
          <AppLink :to="{ name: 'auth.login' }">
            {{ $t('buttons.logIn') }}
          </AppLink>
        </div>
      </AppStep>
    </div>
  </q-page>
</template>

<script>
import useStep from 'src/composition/useStep';
import FormVerify from 'src/components/FormVerify.vue';
import useAuth from 'src/composition/useAuth';
import { useStore } from 'vuex';
import AuthCodeVerification from 'src/components/AuthCodeVerification.vue';
import { useI18n } from 'vue-i18n';

const messages = {
  'ru-RU': {
    header: 'Зарегистрируйтесь в экосистеме Alga',
    subtitle: 'с помощью эл. почты и мобильного телефона',
    passHeader: 'Установите пароль',
  },
  'en-US': {
    header: 'Sign up in Alga ecosystem',
    subtitle: 'with e-mail and cellphone',
    passHeader: 'Set password',
  },
};

export default {
  setup() {
    const store = useStore();
    const { t } = useI18n({ messages });
    const { changeStep, step } = useStep('registr');
    const { setPassword, invalidCode, curCode, curCellphone, getCode } =
      useAuth();

    const registr = async (
      { cellphoneFull: cellphone, name, email },
      { setErrors }
    ) => {
      try {
        const data = await store.dispatch('auth/registr', {
          cellphone,
          name,
          email,
        });

        curCellphone.value = data.cellphone;
      } catch (e) {
        if (!e.response) throw e;
        if (e.response.status === 422) {
          const { errors } = await e.response.json();
          setErrors(errors);
          throw { 422: true };
        } else throw e;
      }
    };

    const createUser = async (...args) => {
      try {
        await registr(...args);
        changeStep('verifing');
        await getCode({ cellphone: args[0].cellphoneFull });
      } catch (e) {
        if(422 in e) return;
        throw e;
      }
    };

    const handleCode = (value) => {
      curCode.value = value;
      changeStep('password');
    };

    return {
      t,
      step,
      invalidCode,
      curCellphone,
      handleCode,
      changeStep,
      createUser,
      setPassword,
    };
  },
  components: {
    FormVerify,
    AuthCodeVerification,
  },
};
</script>
