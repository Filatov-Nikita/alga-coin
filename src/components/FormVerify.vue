<template>
  <h1 class="app-auth__h1">{{ t("header") }}</h1>
  <p class="app-auth__subtitle" v-html="t('subtitle', { mail })"></p>
  <Form class="app-auth__form tw-mb-6" v-slot="{ validate }">
    <AppCodeInput
      :length="4"
      class="app-auth__code"
      :label="$t('inputs.code')"
      @update:code="submit($event, { validate })"
    />
  </Form>
  <AuthCodeRepeat :mail="mail" />
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
          header: "Верификация по номеру телефона",
          subtitle:
            // 'Введите 6-значный код подтверждения, <br /> который был отправлен на {mail}. <br /> Код действителен в течение 30 минут.',
            "Восстановить доступ к системе с помощью <br/> мобильного телефона и смс-кода.",
        },
        "en-US": {
          header: "Verification by phone number",
          subtitle:
            "Restore access to the system using <br/> a mobile phone and an SMS code.",
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
