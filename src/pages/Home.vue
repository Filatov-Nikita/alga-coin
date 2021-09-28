<template>
  <AppButton label="Продолжить" @click="a" />
  <div class="tw-w-1/2 tw-mx-auto">
    <AppInput label="Пароль" placeholder="Пароль" type="phone" />
    <AppCodeInput length="6" label="Код из СМС" v-model:code="code"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: ''
    }
  },
  methods: {
    a() {
      alert(1);
    },
  },
};
</script>

<style>
</style>
