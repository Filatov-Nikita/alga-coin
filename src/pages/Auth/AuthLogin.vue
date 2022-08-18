<template>
  <q-page class="tw-grid tw-container">
    <div class="app-auth">
      <h1 class="app-auth__h1" v-html="t('header')"></h1>
      <p class="app-auth__subtitle">{{ t("subtitle") }}</p>
      <Form @submit="login" class="app-auth__form" v-slot="{ isSubmitting }">
        <AppInput
          name="cellphone"
          rules="required|cellphone"
          type="tel"
          :label="$t('inputs.cellphone')"
          placeholder="(999) 999-99-99"
        />
        <AppInput
          name="password"
          rules="required"
          type="password"
          :label="$t('inputs.password')"
          :placeholder="$t('inputs.password')"
        />

        <AppButton
          :disabled="isSubmitting"
          type="submit"
          fullWidth
          :label="$t('buttons.logIn')"
        />
      </Form>
      <div
        class="app-auth__links tw-mr-auto tw-ml-0 tw-mt-7.5 tw-flex tw-justify-between"
      >
        <AppLink class="app-auth__link" :to="{ name: 'auth.reset-password' }">{{
          $t("buttons.resetPass")
        }}</AppLink>
        <AppLink class="app-auth__link" :to="{ name: 'auth.registr' }">{{
          $t("buttons.registr")
        }}</AppLink>
      </div>
    </div>
  </q-page>
</template>

<script>
import useAuth from "src/composition/useAuth";
import { useRouter } from "vue-router";
import { useAlert } from "src/plugins/app-alert";
import { useI18n } from "vue-i18n";

const i18n = {
  messages: {
    "ru-RU": {
      header: "Войдите",
      subtitle: "Доступ к вашей учетной записи",
      wrongLogin: "неверный логин или пароль",
    },
    "en-US": {
      header: "Sign in",
      subtitle: "Access to your account",
      wrongLogin: "wrong login or password",
    },
  },
};

export default {
  setup() {
    const router = useRouter();
    const appAlert = useAlert();
    const { login: loginApi } = useAuth();
    const { t } = useI18n(i18n);

    const login = async ({ cellphoneFull: cellphone, password }) => {
      try {
        await loginApi({ cellphone, password });
        router.push({ name: "wallet" });
      } catch (e) {
        if (!e.response) throw e;
        if (e.response.status === 422) {
          appAlert({
            type: "negative",
            message: t("wrongLogin"),
          });
        } else {
          throw e;
        }
      }
    };

    return { login, t };
  },
};
</script>
