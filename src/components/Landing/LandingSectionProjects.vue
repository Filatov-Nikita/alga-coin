<template>
  <AppFullPageScreen
    name="projects"
    class="tw-py-1 xl:tw-pt-10 tw-relative"
    :class="{ 'landing-h-center': $q.screen.lt.xl }"
  >
    <h2 v-if="$q.screen.lt.xl" class="app-h1 tw-mb-4 tw-text-center">
      {{ t('mHeader') }}
    </h2>
    <h2 v-else class="landing-h2 landing-h2--space tw-uppercase">
      {{ t('header') }}
    </h2>

    <div v-if="$q.screen.xl" class="app-row app-gutter-col-x">
      <div
        class="tw-text-xs tw-mt-12 app-col-4"
        v-html="t('description')"
      ></div>

      <div class="app-col-14">
        <div class="app-row app-gutter-col-x">
          <div
            class="tw-bg-dark tw-rounded-base app-col-6"
            v-for="project in projectsDisplay"
            :key="project.id"
          >
            <div class="project__cover tw-flex tw-flex-col tw-justify-between">
              <img
                v-if="project.announceImage"
                width="172"
                height="181"
                class="project__pic"
                :src="project.announceImage.url"
                alt=""
              />
              <div>
                <p class="tw-text-xs tw-text-center xl:tw-text-left tw-mb-3-1">
                  {{ project.name }}
                </p>
                <AppButton
                  :to="{ name: 'projects.show', params: { id: project.id } }"
                  design="flat"
                  :icon="require('assets/images/landing/landing-arrow.svg')"
                />

              </div>

            </div>
          </div>

          <div class="project__add app-col-6 tw-p-7-1">
            <button
              class="project__btn tw-mb-3-1"
              @click="$router.push({ name: 'offer-project' })"
            >
              <InlineSvg
                class="tw-inline-block"
                fill="#208B3A"
                width="24px"
                height="24px"
                :src="require('assets/icons/plus.svg')"
              />
            </button>
            <div
              class="tw-text-xs tw-text-center xl:tw-text-left"
              v-html="t('callback')"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <AppCarousel v-else>
      <AppCarouselSlide
        v-for="project in projects"
        :key="project.id"
        :name="`${project.id}`"
      >
        <router-link
          class="tw-block tw-w-full tw-text-white"
          :to="{ name: 'projects.show', params: { id: project.id } }"
        >
          <div
            class="tw-text-center tw-mb-4-1"
            v-html="
              t('description', { className: 'tw-text-xxs-1 tw-leading-tight' })
            "
          ></div>

          <div class="project__cover tw-text-center">
            <img
              v-if="project.announceImage"
              width="130"
              height="135"
              class="project__pic"
              :src="project.announceImage.url"
              alt=""
            />
            <p class="tw-text-xs">{{ project.name }}</p>
          </div>
        </router-link>
      </AppCarouselSlide>
      <AppCarouselSlide name="add">
        <div class="project__add">
          <div class="tw-text-center">
            <div class="tw-text-xs tw-mb-3-1" v-html="t('callback')"></div>
            <button
              @click="$router.push({ name: 'offer-project' })"
              class="project__btn"
            >
              <InlineSvg
                class="tw-inline-block"
                fill="#208B3A"
                width="34px"
                height="36px"
                :src="require('assets/icons/plus.svg')"
              />
            </button>
          </div>
        </div>
      </AppCarouselSlide>
    </AppCarousel>
  </AppFullPageScreen>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { mapGetters } from 'vuex';

function createHtml(txts, className) {
  const tag = className ? `<p class="${className}">` : '<p>';
  return txts.map((txt) => `${tag}${txt}</p>`).join('<br/>');
}

const i18n = {
  messages: {
    'ru-RU': {
      header: 'ПРОЕКТЫ',
      mHeader: 'Направления',
      callback:
        'Подать заявку <br /> на рассмотрение <br /> инвестиционного проекта',
      description: ({ named }) => {
        const txts = [
          'Alga — это стартовая инвестиционная площадка для разработки, подготовки к запуску и реализации новых технологических иэкологических проектов по всему миру',
          'Экосистема Alga бесконечна, как мировой океан, и каждый её участник может предложить миру свой уникальный проект',
          'Каждый проект проходит процедуру отбора, после чего получает полную поддержку экосистемы до этапа запуска и дальнейшего сопровождения',
        ];
        return createHtml(txts, named('className'));
      },
    },
    'en-US': {
      header: 'PROJECTS',
      mHeader: 'Projects',
      callback: 'Apply for consideration investment project',
      description: ({ named }) => {
        const txts = [
          'Alga is a startup investment platform for the development, preparation for launch and implementation of new technological and environmental projects around the world',
          "The Alga ecosystem is as endless as the world's oceans, and each of its participants can offer the world their own unique project",
          'Each project goes through a selection process, after which it receives full support from the ecosystem until the launch and further support',
        ];
        return createHtml(txts, named('className'));
      },
    },
  },
};

export default {
  setup() {
    const { t } = useI18n(i18n);
    return { t };
  },
  computed: {
    ...mapGetters('landing', ['projects']),
    projectsDisplay() {
      return this.projects.slice(0, 2);
    },
  },
};
</script>

<style scoped lang="scss">
//$

.project {
  &__cover {
    min-height: 222px;
    height: 100%;
    @apply tw-bg-dark tw-rounded-base tw-p-6 xl:tw-pt-12 xl:tw-p-7-1;
  }

  &__pic {
    width: 130px;
    @apply tw-mx-auto tw-mb-4-1;
    @include screen-xl {
      width: 181px;
      @apply tw-mb-12;
    }
  }

  &__add {
    background: linear-gradient(
      149.13deg,
      #a0e09c 18.3%,
      #0cb65f 55.25%,
      #a0e09c 100%
    );
    min-height: 400px;
    @include screen-xl {
      min-height: unset;
      @apply tw-justify-between;
    }
    @apply tw-rounded-base tw-flex tw-flex-col tw-justify-center;
  }

  &__btn {
    @include screen-xl {
      width: 60px;
      height: 60px;
      line-height: 60px;
    }
    width: 90px;
    height: 90px;
    line-height: 90px;
    @apply tw-rounded-full tw-bg-valid tw-text-center;
  }
}
</style>
