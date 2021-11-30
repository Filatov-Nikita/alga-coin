<template>
  <h1 class="app-auth__h1">Верификация по номеру телефона</h1>
  <p class="app-auth__subtitle">
    Введите 6-значный код подтверждения, <br />
    который был отправлен на {{ cellphone }}. <br />
    Код действителен в течение 30 минут.
  </p>
  <Form class="app-auth__form tw-mb-6" v-slot="{ validate }">
    <AppCodeInput
      class="app-auth__code"
      label="Код из СМС"
      @update:code="submit($event, { validate })"
    />
  </Form>
  <AuthCodeRepeat :cellphone="cellphone" />
</template>

<script>
import AuthCodeRepeat from './AuthCodeRepeat.vue';

export default {
  props: {
    cellphone: {
      required: true,
      type: String,
    },
  },
  emits: ['entered'],
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
