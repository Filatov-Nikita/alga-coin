<template>
  <h1 class="app-auth__h1">{{ t('header') }}</h1>
  <p class="app-auth__subtitle" v-html="t('subtitle', { cellphone })"></p>
  <Form class="app-auth__form tw-mb-6" v-slot="{ validate }">
    <AppCodeInput
      class="app-auth__code"
      :label="$t('inputs.code')"
      @update:code="submit($event, { validate })"
    />
  </Form>
  <AuthCodeRepeat :cellphone="cellphone" />
</template>

<script>
import { useI18n } from 'vue-i18n';
import AuthCodeRepeat from './AuthCodeRepeat.vue';

export default {
  props: {
    cellphone: {
      required: true,
      type: String,
    },
  },
  emits: ['entered'],
  setup() {
    const { t } = useI18n({
      messages: {
        'ru-RU': {
          header: 'Верификация по номеру телефона',
          subtitle:
            'Введите 6-значный код подтверждения, <br /> который был отправлен на {cellphone}. <br /> Код действителен в течение 30 минут.',
        },
        'en-US': {
          header: 'Verification by phone number',
          subtitle:
            'Enter a 6-digit verification code, <br/> which was sent to {cellphone}. <br/> The code is valid for 30 minutes.',
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
      this.$emit('entered', value);
    },
  },
  components: {
    AuthCodeRepeat,
  },
};
</script>
