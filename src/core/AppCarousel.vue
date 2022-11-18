<template>
  <div v-touch-swipe.mouse.horizontal="handleSwipe">
    <div :style="{ 'min-height': height }">
      <slot />
    </div>

    <div class="xl:tw-flex xl:tw-justify-between xl:tw-pr-5 tw-items-center">
      <div v-if="$q.screen.xl" class="tw-flex">
        <AppButton
          class="tw-rotate-180 tw-transform"
          design="flat"
          :icon="require('assets/images/landing/landing-arrow.svg')"
          :iconStg="{
            width: '60px',
            height: '18px',
            fill: '#fff',
          }"
          @click="prev"
        />
        <AppButton
          @click="next"
          design="flat"
          :icon="require('assets/images/landing/landing-arrow.svg')"
          :iconStg="{
            width: '60px',
            height: '18px',
            fill: isNavDefault ? themes.default : themes[theme],
          }"
        />
      </div>
      <div class="app-carousel__control tw-px-4">
        <button
          :style="{
            '--theme-color': isNavDefault
              ? colorsDotsByTheme.default
              : colorsDotsByTheme[theme],
            '--theme-color-active': isNavDefault
              ? themes.default
              : themes[theme],
          }"
          class="app-carousel__dot"
          :class="{
            'app-carousel__dot--active': slide === slideName,
            'tw-mt-6': $q.screen.lt.xl,
          }"
          v-for="slideName in slideList"
          :key="slideName"
          @click="changeSlide(slideName)"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
import { provide, ref, computed, inject, watchEffect, watch } from "vue";

export default {
  props: {
    height: {
      default: "300px",
      type: String,
    },
    theme: {},
    modelValue: {
      default: undefined,
      type: String,
    },
    isNavDefault: {
      type: Boolean,
      default: false,
    },
  },
  emit: ["update:modelValue"],
  setup(props, { emit }) {
    const themes = inject("themes");
    const theme = inject("theme");

    const colorsDotsByTheme = {
      default: "#005BAA",
      orange: "#913417",
      purple: "#6F1C47",
      red: "#6C080F",
      darkGreen: "#033A1E",
      lightGreen: "#0D6438",
      yellow: "#F79226",
      indigo: "#1F2377",
      biruze: "#063443",
      darkBlue: "#0E3267",
      blue: "#043267",
    };

    const slides = ref(new Set());
    const slide = ref("");

    watchEffect(() => {
      if (props.modelValue) {
        slide.value = props.modelValue;
      }
    });

    watch(slide, (val) => {
      emit("update:modelValue", val);
    });

    provide("slides", slides);
    provide("slide", slide);
    provide("registrSlide", (name) => {
      slides.value.add(name);
      if (slide.value === "") slide.value = name;
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

    const isFirst = computed(() => {
      return slideIndexMap.value[slide.value] === 0;
    });

    const isLast = computed(() => {
      return slideIndexMap.value[slide.value] === slides.value.size - 1;
    });

    const next = () => {
      const index = slideIndexMap.value[slide.value];

      const nextIndex = Math.min(slides.value.size - 1, index + 1);
      slide.value = slideList.value[nextIndex];
    };

    const prev = () => {
      const index = slideIndexMap.value[slide.value];

      const prevIndex = Math.max(0, index - 1);
      slide.value = slideList.value[prevIndex];
    };

    const handleSwipe = (evt) => {
      if (evt.direction === "right") {
        prev();
      } else {
        next();
      }
    };

    provide("unregistrSlide", (name) => {
      if (slides.value.has(name)) slides.value.delete(name);
      slide.value = slideList.value[0] || "";
    });

    return {
      changeSlide,
      slideList,
      slide,
      handleSwipe,
      isFirst,
      isLast,
      next,
      prev,
      themes,
      theme,
      colorsDotsByTheme,
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
    background: var(--theme-color);
    @apply tw-rounded-base;

    &--active {
      width: 24px;
      background: var(--theme-color-active);
    }
  }
}
.arrows-carousel {
  transform: translateX(-18px);
}
</style>
