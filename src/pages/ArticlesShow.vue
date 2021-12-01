<template>
  <q-page class="tw-py-6">
    <div class="app-row app-gutter-col-x" v-if="!is404">
      <div class="xl:app-col-4">
        <section v-if="$q.screen.xl">
          <h2 class="tw-text-secondary tw-text-xs tw-uppercase tw-mb-6">
            Новости
          </h2>
          <ArticlesLast :items="recomendedList" v-if="recomendedList" />
        </section>
      </div>
      <div class="xl:app-col-14">
        <ArticlesItem
          class="tw-mb-16"
          main
          :content="newsItem"
          v-if="newsItem"
        />
        <ArticlesReadAlso
          v-if="readAlsoList && readAlsoList.length > 0"
          class="news-separator tw-py-9"
          :items="readAlsoList"
        />
        <template v-if="otherNews">
          <ArticlesItem
            class="news-separator tw-pt-9"
            v-for="item in otherNews"
            :key="item.id"
            :content="item"
          />
        </template>
      </div>
    </div>
    <div v-else>
      <h1 class="app-h1">404 Запрашиваемый ресурс не найден</h1>
    </div>
  </q-page>
</template>

<script>
import ArticlesLast from 'src/components/ArticlesLast';
import ArticlesItem from 'src/components/ArticlesItem.vue';
import ArticlesReadAlso from 'src/components/ArticlesReadAlso';
import useLoading from 'src/composition/useLoading';
import { watchEffect, ref, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  props: {
    id: {
      required: true,
      type: [String, Number],
    },
  },
  setup(props) {
    const is404 = ref(false);
    const newsItem = ref(null);
    const store = useStore();
    const loading = useLoading();
    const recomendedList = ref(null);

    const news = computed(() => store.getters['landing/news']);

    const getNewsItem = async (id) => {
      try {
        is404.value = false;
        loading.startLoading();

        const result = await Promise.all([
          store.dispatch('landing/newsRecomendedList', { id }),
          !news.value ? store.dispatch('landing/newsList') : null,
        ]);

        newsItem.value = store.getters['landing/newsMap'][id] || null;

        if (newsItem.value) {
          recomendedList.value = result[0];
        } else {
          is404.value = true;
        }
      } catch (e) {
        if (!e.response) throw e;
        if (e.response.status === 404) is404.value = true;
        else throw e;
      } finally {
        loading.stopLoading();
      }
    };

    watchEffect(() => {
      getNewsItem(props.id);
    });

    const readAlsoList = computed(() => {
      if (!news.value) return null;
      const curIndex = news.value.findIndex(
        (item) => item.id === parseInt(props.id)
      );

      if (typeof curIndex !== 'number' || curIndex === -1) return null;
      return news.value.slice(curIndex + 1, curIndex + 3) || null;
    });

    const otherNews = computed(
      () => news.value?.filter((item) => item.id !== parseInt(props.id)) || null
    );

    return {
      newsItem,
      isLoading: loading.isLoading,
      is404,
      recomendedList,
      readAlsoList,
      otherNews,
    };
  },
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
