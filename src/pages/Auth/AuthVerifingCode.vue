<template>
  <q-page>
    <div class="app-container">
      <div class="app-auth">
        <h1 class="h4 tw-mb-8">Верификация по номеру телефона</h1>
        <p class="tw-mb-7-1">
          Введите 6-значный код подтверждения, который был отправлен на +7 917
          917-**-**. Код действителен в течение 30 минут.
        </p>
        <form class="tw-mb-6">
          <AppCodeInput class="tw-mx-auto tw-justify-center" label="Код из СМС" />
        </form>
        <AppTimer :start="60" v-slot="{time}">
          Повторная отправка через ({{time}}s)
        </AppTimer>
        <AppLink to="#">Не получили код</AppLink>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {};
</script>

<style>
</style>
