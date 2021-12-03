<template>
  <div class="last-articles tw-space-y-4-1">
    <div class="last-articles__article" v-for="item in items" :key="item.id">
      <router-link
        :to="{ name: 'articles.show', params: { id: item.id } }"
        class="tw-text-xs tw-mb-2 tw-text-white tw-block"
      >
        {{ item.title }}
      </router-link>
      <p class="tw-text-primary tw-text-xxs">
        {{ $prettyDate(item.created_at) }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style scoped lang="scss">
.last-articles {
  &__article {
    border-bottom: 1px solid theme('colors.dark-blue');
    @apply tw-pb-4-1;
  }
}
</style>
