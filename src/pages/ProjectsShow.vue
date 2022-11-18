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
          {{ t("header") }}
        </h2>
        <ProjectsList :projects="otherProjects" />
      </section>
      <div
        class="app-col-18 xl:app-col-14 tw-order-1 xl:tw-order-2 tw-mb-12 xl:tw-mb-0"
      >
        <div
          class="tw-mb-6 xl:tw-mb-9 app-row tw-items-center xl:app-gutter-x-xl tw-justify-between xl:tw-justify-start"
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
              <div>{{ t("vote") }}</div>
            </div>
          </AppButton>
        </div>
        <div
          class="app-row title tw-items-center xl:tw-mb-12 tw-mb-9 tw-justify-center xl:tw-justify-start"
        >
          <svg
            class=""
            width="330"
            height="348"
            viewBox="0 0 330 348"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M321.613 165.04L293.642 87.9377C274.59 35.4251 225.134 0 170.409 0H159.059C104.739 0 55.2837 35.4251 36.2312 87.9377L8.2605 165.04C-6.73826 206.716 -1.06302 252.977 23.2593 289.653C47.987 325.911 88.1188 348 131.494 348C141.753 348 152.726 346.535 163.075 343.949C164.43 343.61 165.849 343.61 167.204 343.949C177.553 346.535 188.525 348 198.785 348C241.755 348 282.292 326.328 307.02 289.653C331.342 252.977 336.612 206.299 321.613 165.04Z"
              fill="#0A1E3E"
            />
            <path
              d="M321.613 165.04L293.642 87.9377C274.59 35.4251 225.134 0 170.409 0H159.059C104.739 0 55.2837 35.4251 36.2312 87.9377L8.2605 165.04C-6.73826 206.716 -1.06302 252.977 23.2593 289.653C47.987 325.911 88.1188 348 131.494 348C141.753 348 152.726 346.535 163.075 343.949C164.43 343.61 165.849 343.61 167.204 343.949C177.553 346.535 188.525 348 198.785 348C241.755 348 282.292 326.328 307.02 289.653C331.342 252.977 336.612 206.299 321.613 165.04Z"
              fill="url(#pattern0)"
            />
            <defs>
              <pattern id="pattern0" width="100%" height="100%">
                <image
                  id="image0_659_12886"
                  width="330"
                  height="348"
                  :xlink:href="project.bodyImage.url"
                />
              </pattern>
            </defs>
          </svg>
          <!-- <img
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
          /> -->
          <h1 class="tw-text-sm xl:tw-text-lg tw-order-1 tw-mb-6 xl:tw-mb-0">
            {{ project.name }}
          </h1>
        </div>
        <div>
          <div class="app-row app-gutter-col-x app-gutter-y-md tw-mb-6">
            <article class="app-col-18 xl:app-col-6">
              <h2 class="tw-text-xxs tw-mb-2">{{ t("author") }}</h2>
              <p class="tw-text-xs">{{ project.author }}</p>
            </article>
            <div class="app-col-18 xl:app-col-6">
              <h2 class="tw-text-xxs tw-mb-2">{{ t("partners") }}</h2>
              <p class="tw-text-xs">{{ project.partners }}</p>
            </div>
            <div class="app-col-18 xl:app-col-6">
              <h2 class="tw-text-xxs tw-mb-2">{{ t("foundationYear") }}</h2>
              <p class="tw-text-xs">{{ project.foundation_year }}</p>
            </div>
          </div>

          <div class="app-row app-gutter-col-x">
            <div class="app-col-18 xl:app-col-15">
              <h2 class="tw-text-xxs tw-mb-2">{{ t("about") }}</h2>
              <p class="tw-text-xs" v-html="project.description"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import ProjectsList from "src/components/ProjectsList";
import useLoading from "src/composition/useLoading";
import { useStore } from "vuex";
import { ref, watchEffect, computed } from "vue";
import { useI18n } from "vue-i18n";

const i18n = {
  messages: {
    "en-US": {
      header: "PROJECTS",
      vote: "Vote",
      author: "Project author",
      partners: "Project partners",
      about: "About the project",
      foundationYear: "Foundation year",
      voteAccepted: "Your vote accepted",
    },
    "ru-RU": {
      header: "ПРОЕКТЫ",
      vote: "Проголосовать",
      author: "Автор проекта",
      partners: "Партнёры проекта",
      about: "О проекте",
      foundationYear: "Год основания",
      voteAccepted: "Ваш голос принят",
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

    const projects = computed(() => store.getters["landing/projects"]);
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
          !projects.value ? store.dispatch("landing/projectsList") : null,
          store.dispatch("landing/projectShow", { id }),
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
