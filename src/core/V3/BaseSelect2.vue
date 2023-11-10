<template>
  <div class="dropdown-select" :class="{ active: dropdown }">
    <div @click="dropdown = !dropdown" class="dropdown-select__head">
      <span>
        {{ selection?.label }}
      </span>
      <q-icon name="r_keyboard_arrow_down" size="15px" class="arrow-icon" />
    </div>
    <div class="dropdown-select__body" :class="{ active: dropdown }">
      <ul class="options">
        <li
          v-for="option in options"
          :key="option.id"
          class="option"
          :class="{ disabled: selection.id === option.id }"
          @click="setSelect(option.id)"
        >
          {{ option.label }}
        </li>
      </ul>
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
    const dropdown = ref(false);
    const selection = ref({});
    selection.value = props.options[0];
    return {
      selection,
      dropdown,
      setSelect: function (id) {
        this.selection = props.options.find((option) => option.id === id);
        console.log(selection);
        dropdown.value = false;
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.select {
    height: 100%;
    padding: 0 18px;
    position: absolute;
    top: 0;
    right: 0px;
    border: 1.26px solid #575656;
    border-radius: 10px;
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    line-height: 12px;
    background: rgba(217, 217, 217, 0.08);
  }
</style>
