<template>
  <div class="last-articles tw-space-y-4-1">
    <div class="last-articles__article" v-for="i in 3">
      <router-link to="#" class="tw-text-xs tw-mb-2 tw-text-white tw-block">
        Миллиардер Стернлихт поспорил с главой JPMorgan о бесполезности биткоина
      </router-link>
      <p class="tw-text-primary tw-text-xxs">15.11.2021, 13:39</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.last-articles {
  &__article {
    border-bottom: 1px solid theme('colors.dark-blue');
    @apply tw-pb-4-1;
  }
}
</style>
