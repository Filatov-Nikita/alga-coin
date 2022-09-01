<template>
  <div>
    <!-- :label="$t('inputs.code')" -->
    <AppInput
      name="verification_code"
      :placeholder="$t('inputs.wrongCode')"
      rules="required"
    />
    <div class="tw-text-invalid tw-text-xxs">{{ $t('errors.code') }}</div>
    <AuthCodeRepeat :mail="mail" />
  </div>
</template>
<script>
import AuthCodeRepeat from './AuthCodeRepeat.vue';
export default {
  components: { AuthCodeRepeat },
  props: {
    mail: {
      required: true,
      type: String,
    },
  },
};
</script>
