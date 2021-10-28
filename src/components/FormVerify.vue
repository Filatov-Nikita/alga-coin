<template>
  <h1 class="app-auth__h1">Верификация по номеру телефона</h1>
  <p class="app-auth__subtitle">
    Введите 6-значный код подтверждения, <br />
    который был отправлен на {{ cellphone }}. <br />
    Код действителен в течение 30 минут.
  </p>
  <Form @submit="1" class="app-auth__form tw-mb-6">
    <AppCodeInput
      class="app-auth__code"
      ref="code"
      label="Код из СМС"
      @update:code="1"
    />
  </Form>
  <AppTimer :seconds="60" v-slot="{ s, restart }" class="tw-text-center">
    <button @click="restart" v-if="s <= 0" class="app-link">
      Не получили код?
    </button>
    <span class="tw-text-xxs" v-else>
      Повторная проверка через ({{ s }}s)
    </span>
  </AppTimer>
</template>

<script>
export default {
  props: {
    cellphone: {
      required: true,
      type: String
    }
  }
};
</script>
