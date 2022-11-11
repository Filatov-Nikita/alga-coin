<template>
  <q-page class="tw-grid tw-container">
    <div class="app-auth">
      <AppStep name="registr">
        <h1 class="app-auth__h1">{{ t("header") }}</h1>
        <p class="app-auth__subtitle">{{ t("subtitle") }}</p>
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
            rules="required|cellphone"
            name="cellphone"
            :label="$t('inputs.cellphone')"
            placeholder="+123456789012345"
          />

          <AppCheckbox
            rules="required"
            :name="$t('landing.footer.serviceInfo')"
            class="tw-text-left tw-mt-6"
            labelClass="tw-text-xxs"
          >
            <div class="tw-text-xxs">
              {{ $t("termBefore") }}
              <AppLink
                :to="$t('serviceInfoFile')"
                class="term-link tw-text-xxs"
              >
                <!-- <i18n-t scope="global" keypath="term" > </i18n-t> -->
                {{ $t("term-link") }}
              </AppLink>
              {{ $t("termAfter") }}
            </div>
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
              {{ $t("buttons.logIn") }}
            </AppLink>
          </template>
        </i18n-t>
      </AppStep>
      <AppStep name="verifing">
        <FormVerify :mail="mail" @entered="handleCode" />
      </AppStep>
      <AppStep name="password">
        <h1 class="app-auth__h1">{{ t("passHeader") }}</h1>
        <p class="app-auth__subtitle">{{ $t("passRequired") }}</p>
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
          <AuthCodeVerification v-if="invalidCode" :mail="mail" />
          <AppButton
            :label="$t('actions.setPass')"
            fullWidth
            type="submit"
            :disabled="isSubmitting"
          />
        </Form>
        <div class="app-auth__links tw-mt-6">
          {{ $t("actions.hasAccount") }}
          <AppLink :to="{ name: 'auth.login' }">
            {{ $t("buttons.logIn") }}
          </AppLink>
        </div>
      </AppStep>
    </div>
  </q-page>
</template>

<script>
import useStep from "src/composition/useStep";
import FormVerify from "src/components/FormVerify.vue";
import useAuth from "src/composition/useAuth";
import { useStore } from "vuex";
import AuthCodeVerification from "src/components/AuthCodeVerification.vue";
import { useI18n } from "vue-i18n";
import { AppAlert } from "src/plugins/app-alert";
const messages = {
  "ru-RU": {
    header: "Зарегистрируйтесь",
    subtitle: "Используя эл. почту и мобильный телефон",
    passHeader: "Установите пароль",
  },
  "en-US": {
    header: "Sign up",
    subtitle: "Using email and mobile phone",
    passHeader: "Set password",
  },
  de: {
    header: "Anmelden",
    subtitle: "Mit E-Mail und Handy",
    passHeader: "Passwort festlegen",
  },
  "zh-CN": {
    header: "注册",
    subtitle: "使用电子邮件和手机",
    passHeader: "设置密码",
  },
};

export default {
  setup() {
    const store = useStore();
    const { t } = useI18n({ messages });
    const { changeStep, step } = useStep("registr");
    const { setPassword, invalidCode, curCode, mail, getCode } = useAuth();

    const registr = async ({ cellphone, name, email }, { setErrors }) => {
      try {
        const data = await store.dispatch("auth/registr", {
          cellphone: `+${cellphone.replace("+", "")}`,
          name,
          email,
        });

        mail.value = data.email;
      } catch (e) {
        if (!e.response) throw e;
        if (e.response.status === 422) {
          AppAlert({
            message: () => errors.password[0],
            type: "negative",
          });
          const { errors } = await e.response.json();
          setErrors(errors);
          throw { 422: true };
        } else throw e;
      }
    };

    const createUser = async (...args) => {
      try {
        await registr(...args);
        changeStep("verifing");
        // consolog.log(...args)
        // await getCode({ mail: args[0].email });
      } catch (e) {
        if (422 in e) return;
        throw e;
      }
    };

    const handleCode = (value) => {
      curCode.value = value;
      changeStep("password");
    };

    return {
      t,
      step,
      invalidCode,
      mail,
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
<style scoped>
.term-link {
  color: #bec3ff;
}
</style>
