<template>
  <teleport to="body">
    <div class="app-modal">
      <transition name="app-modal">
        <div class="app-modal__wrap tw-container" v-if="innerValue">
          <div class="app-modal__content" :class="contentClass">
            <slot :close="close" />
          </div>
        </div>
      </transition>
    </div>
    <div v-if="innerValue" class="app-modal__overlay overlay"></div>
  </teleport>
</template>

<script>
import useModal from 'src/composition/useModal';

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
    contentClass: {
      default: '',
      type: String,
    },
  },
  emit: ['update:modelValue'],
  setup(props, { emit }) {
    const { close, innerValue } = useModal(props, emit);

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
  position: fixed;
  z-index: 2001;

  @include screen-start-xl {
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  @include screen-xl {
    top: 184px; // должна через js высчитываться
  }

  @apply tw-w-full;

  &__wrap {
    @include screen-start-xl {
      @apply tw-pt-6;
      padding-bottom: 60px;
    }
  }

  &__content {
    @apply tw-bg-dark tw-rounded-base tw-relative tw-overflow-x-hidden tw-grid;

    @include screen-start-xl {
      max-height: calc(
        100vh - 60px - 24px - env(safe-area-inset-top) -
          env(safe-area-inset-bottom) - 80px
      );
    }

    @include screen-xl {
      height: 480px; // должна через js высчитываться
      @include col-xl(8);
      @include col-shift-left-xl(8);
    }
  }

  &__overlay {
    position: fixed;
    z-index: 2000;
    @include screen-xl {
      z-index: 2000;
    }
    @apply tw-w-full tw-h-full tw-top-0 tw-left-0;
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
