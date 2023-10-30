<template>
  <button class="button" :type="type" :class="`button__${design}`">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "base-button",
  props: {
    design: {
      type: String,
      default: "green",
    },
    type: {
      default: "button",
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  padding: 15px;
  min-height: 50px;
  font-size: 14px;
  line-height: 19px;
  min-width: 170px;
  border-radius: 12px;
  
  &__green {
    background: linear-gradient(180deg, #4ad66d 0%, #04ac2e 100%);
  }
  &__border-line {
    border: 1px solid #333653;
  }
  &:disabled,
  &__border {
     background: transparent;
     border: 1px solid #9596A3;
     color: #9596A3;
  }
  &__dense {
    
    min-width: fit-content;
    @screen xl {
      padding-left: 32px !important;
      padding-right: 32px !important;
    }
    
  }
}
</style>
