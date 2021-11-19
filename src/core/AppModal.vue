<template>
  <teleport to="body">
    <div :class="[`app-modal app-modal--${design}`]" v-bind="$attrs">
      <transition name="app-modal">
        <div class="app-modal__wrap" v-if="innerValue">
          <div class="app-modal__content app-rect" :class="contentClass">
            <slot v-bind="{ close }" />
          </div>
        </div>
      </transition>
    </div>
    <div v-if="innerValue" class="app-modal__overlay overlay"></div>
  </teleport>
</template>

<script>
import { ref, watch, computed, getCurrentInstance } from 'vue';
export default {
  inheritAttrs: false,
  props: {
    modelValue: {
      default: false,
      type: Boolean,
    },
    name: {
      type: String,
    },
    design: {
      default: 'standart',
      type: String,
    },
    contentClass: {
      default: '',
      type: String
    }
  },
  emits: ['update:modelValue'],
  mounted() {
    const dialog =
      getCurrentInstance().appContext.config.globalProperties.$aDialog;

    dialog.bus.on('open', (name) => {
      if (this.name === name) this.innerValue = true;
    });

    dialog.bus.on('close', (name) => {
      if (this.name === name) this.innerValue = false;
    });
  },
  unmounted() {
    const dialog =
      getCurrentInstance().appContext.config.globalProperties.$aDialog;
    dialog.bus.off('open');
  },
  setup(props, { emit }) {
    const self = getCurrentInstance();
    const modelValue = computed(() => props.modelValue);

    function close() {
      innerValue.value = false;
    }

    const innerValue = ref(props.modelValue);

    watch(modelValue, (newVal) => {
      if (newVal === innerValue.value) return;
      innerValue.value = newVal;
    });

    watch(innerValue, (newVal) => {
      const scroll = self.appContext.config.globalProperties.$scroll;

      if (newVal) {
        scroll.stop(`modal ${self.uid}`);
      } else {
        scroll.start(`modal ${self.uid}`);
      }

      emit('update:modelValue', newVal);
    });

    return {
      close,
      innerValue,
    };
  },
};
</script>

<style scoped lang="scss">
//$

.app-modal {
  @apply tw-fixed tw-w-full;

  &--standart {
    z-index: 1001;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  &--max-height {
    top: 48px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2001;
    & .app-modal__wrap > .app-modal__content {
      height: calc(100vh - 48px - 52px);
      @apply tw-overflow-x-hidden;
    }

    & .app-modal__wrap {
      @apply tw-pb-0 tw-pt-0;
    }
  }

  &__wrap {
    @apply tw-p-6;
  }

  &__overlay {
    position: fixed;
    z-index: 1000;
    @apply tw-w-full tw-h-full tw-top-0 tw-left-0;
  }

  &__content {
    position: relative;
    transform-origin: center center;
  }

  &-enter-active,
  &-leave-active {
    transition: opacity 0.3s, transform 0.3s ease-in-out;
  }

  &-enter-from,
  &-leave-to {
    transform: scale(0.25);
    opacity: 0;
  }
}
</style>
