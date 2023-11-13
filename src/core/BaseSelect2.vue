<template>
  <div class="select" ref="select" :class="{ active: isActive }">
    <div class="select__head" @click="toggleSelect()">
      <div v-if="selected" class="tw-flex tw-gap-2 tw-items-center">
        <img
          v-if="selected?.img"
          :src="selected.img"
          alt=""
          class="tw-w-4 tw-h-4 tw-rounded-full"
        />
        <span>
          {{ selected.label }}
        </span>
      </div>
      <div v-else>{{ t("default") }}</div>
      <q-icon name="r_keyboard_arrow_down" size="15px" class="arrow-icon" />
    </div>
    <div class="select__body">
      <div class="child">
        <div
          v-for="opt in options"
          @click="selectOption(opt)"
          class="tw-flex tw-gap-2 tw-items-center"
        >
          <img
            v-if="opt?.img"
            :src="opt.img"
            alt=""
            class="tw-w-4 tw-h-4 tw-rounded-full"
          />
          <span>
            {{ opt.label }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

const i18n = {
  messages: {
    "ru-RU": {
      default: "Выберите значение",
    },
    "en-US": {
      default: "Select value",
    },
  },
};
const { t } = useI18n(i18n);
const props = defineProps({
  modelValue: {
    required: true,
    type: [Object, null],
  },

  options: {
    required: true,
    type: Array,
  },
});
const emit = defineEmits(["update:modelValue"]);
const select = ref(null);
const selected = ref(null);
const isActive = ref(false);
const selectOption = (opt) => {
  selected.value = opt;
  isActive.value = false;
};
const toggleSelect = () => {
  isActive.value = !isActive.value;
  if (isActive.value) window.addEventListener("click", closeSelect);
};
const closeSelect = (e) => {
  if (!e.composedPath().includes(select.value)) {
    isActive.value = false;
    window.removeEventListener("click", closeSelect);
    return;
  }
};
onMounted(() => (selected.val = props.modelValue));
watch(selected, (val) => {
  console.log(emit("update:modelValue", val));
  emit("update:modelValue", val);
});
</script>
<style lang="scss" scoped>
.select {
  @apply tw-relative;
  &__head {
    @apply tw-py-4 tw-px-5 tw-flex tw-justify-between tw-cursor-pointer tw-items-center;
    border-radius: 8px;
    border: 1px solid #707173;
    background: rgba(217, 217, 217, 0.08);
    font-size: 0.625rem;
    height: 50px;
  }
  &__body {
    @apply tw-absolute tw-w-full tw-overflow-hidden tw-z-10;
    @apply tw-transition-all tw-duration-300 tw-ease-out;
    border-radius: 8px;
    background: #1f2124;
    max-height: 0;
    width: fit-content;
    min-width: 160px;
    right: 0;
    .child {
      border-radius: 8px;
      border: 1px solid #707173;
      width: fit-content;
      @apply tw-grid  tw-overflow-auto;
      @apply tw-min-h-0;
      max-height: 170px;
      & > div {
        @apply tw-px-5 tw-py-2 tw-cursor-pointer;
        font-size: 0.625rem;
        &:hover {
          background: rgba(217, 217, 217, 0.08);
        }
      }
    }
  }
  .arrow-icon {
    @apply tw-transition-transform tw-duration-300  tw-ease-out;
  }
  &.active .arrow-icon {
    @apply tw-transform tw-rotate-180;
  }
  &.active &__body {
    max-height: 300px;
  }
}
</style>
