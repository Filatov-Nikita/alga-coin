<template>
  <div v-touch-swipe.mouse.horizontal="handleSwipe">
    <slot />
    <div class="app-carousel__control tw-px-4">
      <button
        class="app-carousel__dot tw-mt-6"
        :class="{ 'app-carousel__dot--active': slide === slideName }"
        v-for="slideName in slideList"
        :key="slideName"
        @click="changeSlide(slideName)"
      ></button>
    </div>
  </div>
</template>

<script>
import { provide, ref, computed } from 'vue';

export default {
  setup() {
    const slides = ref(new Set());
    const slide = ref('');

    provide('slides', slides);
    provide('slide', slide);
    provide('registrSlide', (name) => {
      slides.value.add(name);
      if (slide.value === '') slide.value = name;
    });

    const changeSlide = (name) => {
      slide.value = name;
    };

    const slideList = computed(() => {
      return Array.from(slides.value.keys());
    });

    const slideIndexMap = computed(() => {
      return slideList.value.reduce((acc, item, index) => {
        acc[item] = index;
        return acc;
      }, {});
    });

    const handleSwipe = (evt) => {
      const index = slideIndexMap.value[slide.value];
      if (evt.direction === 'right') {
        const prevIndex = Math.max(0, index - 1);
        slide.value = slideList.value[prevIndex];
      } else {
        const nextIndex = Math.min(slides.value.size - 1, index + 1);
        slide.value = slideList.value[nextIndex];
      }
    };

    return {
      changeSlide,
      slideList,
      slide,
      handleSwipe,
    };
  },
};
</script>

<style scoped lang="scss">
//$

.app-carousel {
  &__control {
    @apply tw-flex tw-justify-center;
    @include space-x(6px);
  }

  &__dot {
    width: 6px;
    height: 6px;
    @apply tw-rounded-base tw-bg-dark-blue;

    &--active {
      width: 24px;
      @apply tw-bg-secondary;
    }
  }
}
</style>
