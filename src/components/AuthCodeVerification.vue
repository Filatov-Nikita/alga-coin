<template>
  <div>
    <AppInput
      name="verification_code"
      :label="$t('inputs.code')"
      :placeholder="$t('inputs.wrongCode')"
      rules="required"
    />
    <div class="tw-text-invalid tw-text-xxs">{{ $t('errors.code') }}</div>
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
