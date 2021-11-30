<template>
  <div>
    <AppInput
      name="verification_code"
      label="Код из смс"
      placeholder="Введите правильный код"
      rules="required"
    />
    <div class="tw-text-invalid tw-text-xxs">
      Вы ввели неверно код на предыдущем шаге. Введите код в это поле и
      повторите попытку.
    </div>
    <AuthCodeRepeat :cellphone="cellphone" />
  </div>
</template>
<script>
import AuthCodeRepeat from './AuthCodeRepeat.vue';
export default {
  components: { AuthCodeRepeat },
  props: {
    cellphone: {
      required: true,
      type: String,
    },
  },
};
</script>
