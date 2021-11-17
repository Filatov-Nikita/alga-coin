<template>
  <q-page class="tw-py-6">
    <div class="app-row app-gutter-col-x">
      <div class="xl:app-col-4">
        <section v-if="$q.screen.xl">
          <h2 class="tw-text-secondary tw-text-xs tw-uppercase tw-mb-6">
            Новости
          </h2>
          <ArticlesLast />
        </section>
      </div>
      <div class="xl:app-col-14">
        <ArticlesItem class="tw-mb-16" main />
        <ArticlesReadAlso class="news-separator tw-py-9" />
        <ArticlesItem class="news-separator tw-pt-9" />
      </div>
    </div>
  </q-page>
</template>

<script>
import ArticlesLast from 'src/components/ArticlesLast';
import ArticlesItem from 'src/components/ArticlesItem.vue';
import ArticlesReadAlso from 'src/components/ArticlesReadAlso';

export default {
  components: {
    ArticlesLast,
    ArticlesItem,
    ArticlesReadAlso,
  },
};
</script>

<style scoped>
.news-separator {
  border-top: 1px solid theme('colors.dark-blue');
}
</style>
