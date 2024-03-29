<template>
  <q-page class="tw-py-6 tw-pb-16">
    <div class="app-row app-gutter-col-x" v-if="project">
      <section
        class="app-col-18 xl:app-col-4 tw-order-2"
        v-if="otherProjects && otherProjects.length > 0"
      >
        <h2
          v-if="$q.screen.xl"
          class="tw-text-secondary tw-text-xs tw-uppercase tw-mb-2"
        >
          {{ t('header') }}
        </h2>
        <ProjectsList :projects="otherProjects" />
      </section>
      <div
        class="
          app-col-18
          xl:app-col-14
          tw-order-1
          xl:tw-order-2
          tw-mb-12
          xl:tw-mb-0
        "
      >
        <div
          class="
            tw-mb-6
            xl:tw-mb-9
            app-row
            tw-items-center
            xl:app-gutter-x-xl
            tw-justify-between
            xl:tw-justify-start
          "
        >
          <p class="tw-text-xs">{{ $prettyDate(project.created_at) }}</p>
          <AppButton
            design="flat"
            @click="$alert({ message: t('voteAccepted') })"
          >
            <div class="tw-flex tw-items-center tw-text-xs">
              <InlineSvg
                class="tw-mr-3"
                :src="require('assets/icons/heart.svg')"
                width="16px"
              />
              <div>{{ t('vote') }}</div>
            </div>
          </AppButton>
        </div>
        <div
          class="
            app-row
            title
            tw-items-center
            xl:tw-mb-12
            tw-mb-9 tw-justify-center
            xl:tw-justify-start
          "
        >
          <img
            width="172"
            height="181"
            class="
              project__pic
              tw-order-3
              xl:tw-order-1
              tw-self-center
              xl:tw-self-start
            "
            :src="project.bodyImage.url"
            alt=""
          />
          <h1 class="tw-text-sm xl:tw-text-lg tw-order-1 tw-mb-6 xl:tw-mb-0">
            {{ project.name }}
          </h1>
        </div>
        <div>
          <div class="app-row app-gutter-col-x app-gutter-y-md tw-mb-6">
            <article class="app-col-18 xl:app-col-6">
              <h2 class="tw-text-xxs tw-mb-2">{{ t('author') }}</h2>
              <p class="tw-text-xs">{{ project.author }}</p>
            </article>
            <div class="app-col-18 xl:app-col-6">
              <h2 class="tw-text-xxs tw-mb-2">{{ t('partners') }}</h2>
              <p class="tw-text-xs">{{ project.partners }}</p>
            </div>
            <div class="app-col-18 xl:app-col-6">
              <h2 class="tw-text-xxs tw-mb-2">{{ t('foundationYear') }}</h2>
              <p class="tw-text-xs">{{ project.foundation_year }}</p>
            </div>
          </div>

          <div class="app-row app-gutter-col-x">
            <div class="app-col-18 xl:app-col-15">
              <h2 class="tw-text-xxs tw-mb-2">{{ t('about') }}</h2>
              <p class="tw-text-xs">
                {{ project.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import ProjectsList from 'src/components/ProjectsList';
import useLoading from 'src/composition/useLoading';
import { useStore } from 'vuex';
import { ref, watchEffect, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const i18n = {
  messages: {
    'en-US': {
      header: 'PROJECTS',
      vote: 'Vote',
      author: 'Project author',
      partners: 'Project partners',
      about: 'About the project',
      foundationYear: 'Foundation year',
      voteAccepted: 'Your vote accepted',
    },
    'ru-RU': {
      header: 'ПРОЕКТЫ',
      vote: 'Проголосовать',
      author: 'Автор проекта',
      partners: 'Партнёры проекта',
      about: 'О проекте',
      foundationYear: 'Год основания',
      voteAccepted: 'Ваш голос принят',
    },
  },
};

export default {
  props: {
    id: {
      required: true,
      type: [String, Number],
    },
  },
  setup(props) {
    const store = useStore();
    const is404 = ref(false);
    const project = ref(null);
    const loading = useLoading();
    const { t } = useI18n(i18n);

    const projects = computed(() => store.getters['landing/projects']);
    const otherProjects = computed(
      () =>
        projects.value?.filter(
          (project) => project.id !== parseInt(props.id)
        ) || null
    );

    const fetchProject = async (id) => {
      try {
        loading.startLoading();
        is404.value = false;

        const result = await Promise.all([
          !projects.value ? store.dispatch('landing/projectsList') : null,
          store.dispatch('landing/projectShow', { id }),
        ]);

        project.value = result[1];
      } catch (e) {
        if (!e.response) throw e;
        if (e.response.status === 404) {
          is404.value = true;
        } else throw e;
      } finally {
        loading.stopLoading();
      }
    };

    watchEffect(() => {
      fetchProject(props.id);
    });

    return {
      isLoading: loading.isLoading,
      project,
      otherProjects,
      t,
    };
  },
  components: {
    ProjectsList,
  },
};
</script>
<style scoped lang="scss">
//$

.project__pic {
  width: 228px;
  @include screen-xl {
    max-width: 330px;
  }
}

.title {
  @include gutter-x(70px);

  h1 {
    width: 100%;
    @include screen-xl {
      max-width: 270px;
    }
  }
}
</style>
