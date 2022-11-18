<template>
  <AppButton
    design="flat"
    :label="$t('actions.back')"
    textClass="tw-text-xxs-1 xl:tw-text-xxs"
  >
    <template #prepend>
      <InlineSvg
        :src="require('assets/arrow2.svg')"
        style="transform: rotate(90deg)"
      />
    </template>
  </AppButton>
</template>

<script>
export default {

};
</script>

<style>
</style>
