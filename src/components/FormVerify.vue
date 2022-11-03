<template>
  <h1 class="app-auth__h1">{{ t("header") }}</h1>
  <p class="app-auth__subtitle" v-html="t('subtitle', { mail })"></p>
  
  <Form class="app-auth__form tw-mb-6" v-slot="{ validate }">
    <AppCodeInput
    :length="4"
    class="app-auth__code"
    @update:code="submit($event, { validate })"
    />
    <!-- :label="$t('inputs.code')" -->
    <AuthCodeRepeat :mail="mail" />
  </Form>
  <p class="app-auth__subtitle" v-html="t('message')"></p>
</template>

<script>
import { useI18n } from "vue-i18n";
import AuthCodeRepeat from "./AuthCodeRepeat.vue";

export default {
  props: {
    mail: {
      required: true,
      type: String,
    },
  },
  emits: ["entered"],
  setup() {
    const { t } = useI18n({
      messages: {
        "ru-RU": {
          header: "Введите код",
          subtitle:
            // 'Введите 6-значный код подтверждения, <br /> который был отправлен на {mail}. <br /> Код действителен в течение 30 минут.',
            "Мы отправили код на вашу электронную почту",
          message: "Если вы не получили письмо - проверьте папку спам"
        },
        "en-US": {
          header: "Enter Code",
          subtitle:
            "We are sending code to your email",
          message: "If you haven't received the email, <br> check the spam folder"
        },
      },
    });

    return {
      t,
    };
  },
  methods: {
    async submit(value, { validate }) {
      const { valid } = await validate();
      if (!valid) return;
      this.$emit("entered", value);
    },
  },
  components: {
    AuthCodeRepeat,
  },
};
</script>
