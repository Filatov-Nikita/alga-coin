<template>
  <button class="button" :class="`button__${design}`">
    <slot></slot>
  </button>
</template>

<script>
export default {
    name: "base-button",
    props: {
      design: {
        type: String,
        default: 'green'
      }
    }
}
</script>

<style lang="scss" scoped>
.button {
  padding: 15px;
    padding-right: 22.05px;
    padding-left: 22.05px;
    min-height: 50px;
    font-size: 1rem;
    line-height: 19px;
    min-width: 170px;
      border-radius: 12px;
    &__green {
      background: linear-gradient(180deg, #4ad66d 0%, #04ac2e 100%);
    }
    &__border-line {
      border: 1px solid #333653;
    }
  }
</style>