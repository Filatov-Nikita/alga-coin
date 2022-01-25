<template>
  <div class="lang-toolbar">
    <div
      class="lang-toolbar__item"
      :class="{ 'lang-toolbar__item--active': currentLang === 'en-US' }"
      @click="updateLang('en-US')"
    >
      En
    </div>
    <div
      class="lang-toolbar__item"
      :class="{ 'lang-toolbar__item--active': currentLang === 'ru-RU' }"
      @click="updateLang('ru-RU')"
    >
      Ru
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentLang: {
      required: true,
      type: String,
    },
  },
  emits: ['update:lang'],
  methods: {
    updateLang(lang) {
      this.$emit('update:lang', lang);
    },
  },
};
</script>

<style scoped lang="scss">
//$

.lang-toolbar {
  @apply tw-flex;

  &__item {
    width: 24px;
    height: 24px;
    line-height: 24px;
    @include screen-xl {
      width: 30px;
      height: 30px;
      line-height: 30px;
    }

    @apply tw-text-center tw-text-xxs xl:tw-text-xs tw-bg-dark-blue tw-cursor-pointer;

    & + & {
      margin-left: 6px;
    }

    &--active {
      @apply tw-bg-blue;
    }

    @include screen-xl {
      &:hover {
        @apply tw-bg-blue-hover;
      }
    }
  }
}
</style>
