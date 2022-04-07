<template>
  <q-page id="page" class="app-page-y">
    <div class="tw-container">
      <h1 class="app-h1 app-h1--space">{{ $t('lk.menu.polls') }}</h1>
      <AppTabs
        class="tw-mb-7-1"
        @switch="switchTab"
        :value="step"
        :steps="[
          { name: 'processing', label: t('tabs.processing') },
          { name: 'finished', label: t('tabs.finished') },
        ]"
      />

      <AppPagination
        :key="step"
        scroll-target="body"
        :disable="complete"
        @load="getPolls"
      >
        <template v-if="polls">
          <div class="app-row app-gutter-col" v-if="polls.length > 0">
            <PollsItem
              v-for="poll in polls"
              :key="poll.id"
              :item="poll"
              :finished="step === 'finished'"
              
            >
              <template v-slot="{ close, showing }">
                <PollsCard v-if="showing" v-bind="{ close, id: poll.id }" @updateItem="updateData"/>
              </template>
            </PollsItem>
          </div>
          <AppEmptyList v-else msg="Нет ни одного опроса" />
        </template>
      </AppPagination>
    </div>
  </q-page>
</template>

<script>
import PollsList from 'src/components/PollsList.vue';
import PollsItem from 'src/components/PollsItem.vue';
import PollsCard from 'src/components/PollsCard.vue';
import AppTabs from 'src/components/AppTabs.vue';
import VariantsList from 'src/components/VariantsList.vue';
import useStep from 'src/composition/useStep';
import usePagination from 'src/composition/usePagination';
import { useStore } from 'vuex';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { t } = useI18n({
      messages: {
        'en-US': {
          tabs: {
            processing: 'Actual',
            finished: 'Finished',
          },
        },
        'ru-RU': {
          tabs: {
            processing: 'Актуальные',
            finished: 'Завершённые',
          },
        },
      },
    });
    const items = ref(null);
    const { step, changeStep } = useStep('processing');
    const store = useStore();

    const getPolls = async (filter = {}) => {
      filter.finished = false;
      if (step.value === 'finished') filter.finished = true;
      return store.dispatch('polls/list', filter);
    };

    const {
      isLoading,
      fetcher,
      data,
      complete,
      reset: resetData,
      updateData
    } = usePagination(getPolls);

    const switchTab = (tabName) => {
      if (tabName === step.value) return;
      resetData();
      changeStep(tabName);
    };

    return {
      t,
      step,
      isLoading,
      polls: data,
      complete,
      items,
      getPolls: fetcher,
      changeStep,
      switchTab,

      updateData
    };
  },
  components: {
    PollsList,
    AppTabs,
    PollsItem,
    VariantsList,
    PollsCard,
  },
};
</script>

<style>
</style>
