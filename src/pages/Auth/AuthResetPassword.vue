<template>
  <q-page class="tw-container tw-grid">
    <div class="app-auth">
      <AppStep name="input">
        <h1 class="app-auth__h1" v-html="t('header')"></h1>
        <p class="app-auth__subtitle" v-html="t('subtitle')"></p>
        <Form class="app-auth__form" @submit="submit" v-slot="{ isSubmitting }">
          <AppInput
            name="email"
            rules="required|email"
            type="email"
            label="E-mail"
            placeholder="ivanov@domain.ru"
          />
          <AppButton
            type="submit"
            fullWidth
            :label="$t('actions.getCode')"
            :disabled="isSubmitting"
          />
        </Form>
        <div
          class="app-auth__links tw-flex tw-flex-col tw-justify-center tw-gap-2 tw-mt-5"
        >
          <AppLink class="app-auth__link" :to="{ name: 'auth.login' }">
            {{ $t("actions.toLK") }}
          </AppLink>
          <AppLink class="app-auth__link" :to="{ name: 'auth.registr' }">
            {{ $t("buttons.registr") }}
          </AppLink>
        </div>
      </AppStep>
      <AppStep name="verifing">
        <FormVerify :mail="mail" @entered="handleCode" />
      </AppStep>
      <AppStep name="password">
        <h1 class="app-auth__h1" v-html="t('passHeader')"></h1>
        <p class="app-auth__subtitle">{{ $t("passRequired") }}</p>
        <Form
          class="app-auth__form"
          @submit="setPassword"
          v-slot="{ isSubmitting }"
        >
          <AppInput
            name="password"
            rules="required"
            type="password"
            :label="$t('inputs.newPass')"
            :placeholder="$t('inputs.password')"
          />
          <AppInput
            name="password2"
            rules="required|confirmed:@password"
            type="password"
            :label="$t('inputs.repeatPass')"
            :placeholder="$t('inputs.repeatPass')"
          />
          <AuthCodeVerification v-if="invalidCode" :cellphone="mail" />
          <AppButton
            type="submit"
            fullWidth
            :label="$t('actions.setPass')"
            :disabled="isSubmitting"
          />
        </Form>
        <i18n-t
          tag="div"
          class="app-auth__links tw-mt-6"
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
    </div>
  </q-page>
</template>

<script>
import useStep from "src/composition/useStep";
import useAuth from "src/composition/useAuth";
import FormVerify from "src/components/FormVerify.vue";
import AuthCodeVerification from "src/components/AuthCodeVerification.vue";
import { useI18n } from "vue-i18n";

const messages = {
  "ru-RU": {
    header: "Восстановление <br/> доступа",
    subtitle:
      "Восстановить доступ к системе с помощью <br/> мобильного телефона и смс-кода",
    passHeader: "Пароль сброшен. <br/> Установите новый пароль",
  },
  "en-US": {
    header: "Restoring <br/> access",
    subtitle:
      "Restore access to the system using <br/> a mobile phone and an SMS code",
    passHeader: "The password <br/> has been reset. <br/> Set a new password",
  },
  de: {
    header: "<br/> Zugriff wird wiederhergestellt",
    subtitle:
      "Stellen Sie den Zugriff auf das System mit <br/> einem Mobiltelefon und einem SMS-Code wieder her",
    passHeader:
      "Das Passwort <br/> wurde zurückgesetzt. <br/> Legen Sie ein neues Passwort fest",
  },
  "zh-CN": {
    header: "恢复<br/>访问",
    subtitle: "使用<br/>手机和短信代码恢复对系统的访问",
    passHeader: "密码<br/>已重置。 <br/> 设置新密码",
  },
};

export default {
  setup() {
    const { t } = useI18n({ messages });
    const { changeStep, step } = useStep("input");
    const { curCode, mail, setPassword, getCode, invalidCode } = useAuth();

    const submit = async ({ email }) => {
      await getCode({ mail: email });
      mail.value = email;
      changeStep("verifing");
    };

    const handleCode = (value) => {
      curCode.value = value;
      changeStep("password");
    };

    return {
      step,
      mail,
      invalidCode,
      t,
      submit,
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

<style></style>
