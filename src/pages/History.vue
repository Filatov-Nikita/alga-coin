<template>
  <q-page class="app-page-y">
    <div class="tw-container">
      <h1 class="app-h1 app-h1--space">{{ t('header') }}</h1>
      <div class="app-row app-gutter-col-x">
        <div
          class="app-col-18 xl:app-col-12 tw-overflow-auto"
          style="max-height: 550px"
          id="history-block"
        >
        
          <AppPagination
            scroll-target="#history-block"
            :disable="complete"
            @load="fetcher"
          >
            <HistoryTable v-if="history" :transactions="history" />
          </AppPagination>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import HistoryTable from 'src/components/HistoryTable.vue';
import usePagination from 'src/composition/usePagination';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';

const messages = {
  'ru-RU': {
    header: 'История операций',
  },
  'en-US': {
    header: 'Operations history',
  },
};

export default {
  setup() {
    const { t } = useI18n({ messages });
    const store = useStore();
    const { data, fetcher, complete } = usePagination((filter) =>
      store.dispatch('transactions/showHistory', filter)
    );

    return {
      history: data,
      complete,
      fetcher,
      t,
    };
  },
  components: {
    HistoryTable,
  },
};
</script>

<style>
</style>
