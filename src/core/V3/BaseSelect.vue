<template>
  <div class="select">
    <div class="select__head">
      <img
        src="https://admin.alga.finance/storage/coin_images/7rQbWbecOrwZdODcQ1w2who2iLSPonLCRt68AuvU.svg"
        alt=""
        width="16"
        height="16"
      />
      <span> LTC </span>
      <q-icon name="r_keyboard_arrow_down" size="15px" class="arrow-icon" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "base-select",
  props: {
    options: {
      type: Array,
      requred: true,
    },
  },
  setup(props) {
    
  },
};
</script>

<style lang="scss" scoped>
.dropdown-select {
  $this: &;
  margin: 0;
  max-width: 180px;
  width: max-content;
  position: relative;

  &__head {
    cursor: pointer;
    font-size: 12px;
    line-height: 140%;
    display: flex;
    align-items: center;
    text-align: right;

    color: #bec3ff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #333653;
    backdrop-filter: blur(7px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 6px;
    padding: 6px 9px;

    .arrow-icon {
      transition: all 0.2s ease;
    }
  }

  &__body {
    border-bottom: none;
    left: 0;
    max-height: 0;
    overflow-y: hidden;
    position: absolute;
    right: 0;
    z-index: 10;
    font-size: 12px;
    line-height: 140%;
    background: theme("colors.dark-blue-cover");
    color: #bec3ff;

    &.active {
      max-height: 100vh;
    }

    & > .options {
      border-radius: 4px;
      border: 1px solid #333653;
      list-style-type: none;
      margin: 0;
      padding: 0;
      position: relative;
    }
  }

  &.active {
    #{$this}__head {
      .arrow-icon {
        transform: rotate(180deg);
      }
    }
  }

  .option {
    cursor: pointer;
    padding: 6px 9px;
  }
}
</style>
