<template>
  <div class="tw-text-secondary tw-text-sm tw-py-2">
    <slot>{{ msg }}</slot>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      default: undefined,
      type: String,
    },
  },
};
</script>
