<template>
  <div class="tw-relative" :class="{ 'tw-h-full': !item }">
    <AppBtnBack class="tw-absolute tw-top-2 tw-left-2 tw-z-10" @click="close" />
    <template v-if="item">
      <q-img
        v-if="item.image"
        class="tw-w-full tw-rounded-t-base"
        height="320px"
        :src="item.image.url"
      />
      <div class="xl:tw-py-16 xl:tw-px-24 tw-py-12 tw-px-4">
        <div class="xl:tw-text-md2 tw-text-sm tw-mb-9">
          {{ item.name }}
        </div>

        <PollsOptions
          class="tw-mb-12"
          :options="item.options"
          :votedId="item.voted_option_uuid"
          :votesCount="item.votes_count"
          @vote="vote"
        />

        <section>
          <div
            class="
              app-row app-gutter-col-x
              tw-justify-between
              tw-items-center
              tw-mb-6
              tw-text-xxs
              tw-tracking-smallest
            "
          >
            <h3 class="tw-text-secondary tw-uppercase tw-text-xxs">
              {{ t('description') }}
            </h3>
            <p class="tw-text-primary tw-uppercase">
              {{ t('till') }} {{ $localDate(item.finish_at) }}
            </p>
          </div>
          <p class="tw-text-xxs xl:tw-text-xs">{{ item.description }}</p>
        </section>
      </div>
    </template>

    <AppInnerLoading v-if="!item" :showing="isLoading" />
    <q-inner-loading
      v-else
      class="tw-z-10"
      style="height: 100%"
      :showing="isLoading"
    >
      <q-spinner class="tw-text-primary" size="3em" />
    </q-inner-loading>
  </div>
</template>

<script>
import PollsOptions from 'src/components/PollsOptions.vue';
import useLoading from 'src/composition/useLoading';
import { useStore } from 'vuex';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
  props: {
    id: {
      required: true,
      type: Number,
    },
    close: {
      default: () => () => {},
      type: Function,
    },
  },
  setup(props) {
    const { t } = useI18n({
      messages: {
        'ru-RU': {
          description: 'Описание',
          till: 'Актуален до',
        },
        'en-US': {
          description: 'Description',
          till: 'Actual till',
        },
      },
    });
    const item = ref(null);
    const store = useStore();
    const { isLoading, stopLoading, startLoading } = useLoading();

    const getPoll = async () => {
      try {
        startLoading();
        item.value = await store.dispatch('polls/show', { id: props.id });
      } catch (e) {
        throw e;
      } finally {
        stopLoading();
      }
    };

    getPoll();

    const vote = async (optId) => {
      try {
        startLoading();

        await store.dispatch('polls/vote', {
          id: props.id,
          option: optId,
        });

        await getPoll();
      } catch (e) {
        throw e;
      } finally {
        stopLoading();
      }
    };

    return {
      t,
      item,
      isLoading,
      getPoll,
      vote,
    };
  },
  components: {
    PollsOptions,
  },
};
</script>

<style>
</style>
