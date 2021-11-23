<template>
  <AppFullPageScreen name="projects" class="tw-py-1 xl:tw-pt-10 tw-relative">
    <h2 v-if="$q.screen.lt.xl" class="app-h1 tw-mb-4 tw-text-center">
      Направления
    </h2>
    <h2 v-else class="landing-h2 landing-h2--space tw-uppercase">ПРОЕКТЫ</h2>

    <div v-if="$q.screen.xl" class="app-row app-gutter-col-x">
      <div class="tw-text-xs tw-mt-12 app-col-4">
        <p>
          Alga — это стартовая инвестиционная площадка для разработки,
          подготовки к запуску и реализации новых технологических и
          экологических проектов по всему миру
        </p>
        <br />
        <p>
          Экосистема Alga бесконечна, как мировой океан, и каждый её участник
          может предложить миру свой уникальный проект
        </p>
        <br />
        <p>
          Каждый проект проходит процедуру отбора, после чего получает полную
          поддержку экосистемы до этапа запуска и дальнейшего сопровождения
        </p>
      </div>

      <div class="app-col-14">
        <div class="app-row app-gutter-col-x">
          <div class="tw-bg-dark tw-rounded-base app-col-6">
            <div class="project__cover">
              <img
                width="172"
                height="181"
                class="project__pic"
                src="images/landing-project-1.png"
                alt=""
              />
              <p class="tw-text-xs tw-text-center xl:tw-text-left tw-mb-3-1">
                Проект AT-island
              </p>
              <AppButton
                :to="{ name: 'projects.show', params: { id: 1 } }"
                design="flat"
                :icon="require('assets/images/landing/landing-arrow.svg')"
              />
            </div>
          </div>

          <div class="tw-bg-dark tw-rounded-base app-col-6">
            <div class="project__cover">
              <img
                width="172"
                height="181"
                class="project__pic"
                src="images/landing-project-2.png"
                alt=""
              />
              <p class="tw-text-xs tw-mb-3-1 tw-text-center xl:tw-text-left">
                Alga NFT
              </p>
              <AppButton
                :to="{ name: 'projects.show', params: { id: 1 } }"
                design="flat"
                :icon="require('assets/images/landing/landing-arrow.svg')"
              />
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
            <div class="tw-text-xs tw-text-center xl:tw-text-left">
              Подать заявку <br />
              на рассмотрение <br />
              инвестиционного проекта
            </div>
          </div>
        </div>
      </div>
    </div>

    <AppCarousel v-else>
      <AppCarouselSlide name="1">
        <div class="tw-text-center tw-mb-4-1">
          <p class="project__text">
            Alga — это стартовая инвестиционная площадка для разработки,
            подготовки к запуску и реализации новых технологических и
            экологических проектов по всему миру
          </p>
          <br />
          <p class="project__text">
            Экосистема ALGA бесконечна, как мировой океан, и каждый её участник
            может предложить миру свой уникальный проект
          </p>
          <br />
          <p class="project__text">
            Каждый проект проходит процедуру отбора, после чего получает полную
            поддержку экосистемы до этапа запуска и дальнейшее сопровождение
          </p>
        </div>

        <div class="project__cover tw-text-center">
          <img
            width="130"
            height="135"
            class="project__pic"
            src="images/landing-project-1.png"
            alt=""
          />
          <p class="tw-text-xs">Проект AT-island</p>
        </div>
      </AppCarouselSlide>
      <AppCarouselSlide name="2">
        <div class="tw-text-center tw-mb-4-1">
          <p class="project__text">
            Alga — это стартовая инвестиционная площадка для разработки,
            подготовки к запуску и реализации новых технологических и
            экологических проектов по всему миру
          </p>
          <br />
          <p class="project__text">
            Экосистема ALGA бесконечна, как мировой океан, и каждый её участник
            может предложить миру свой уникальный проект
          </p>
          <br />
          <p class="project__text">
            Каждый проект проходит процедуру отбора, после чего получает полную
            поддержку экосистемы до этапа запуска и дальнейшее сопровождение
          </p>
        </div>

        <div class="project__cover tw-text-center">
          <img
            width="130"
            height="135"
            class="project__pic"
            src="images/landing-project-2.png"
            alt=""
          />
          <p class="tw-text-xs">Alga NFT</p>
        </div>
      </AppCarouselSlide>
      <AppCarouselSlide name="3">
        <div class="project__add">
          <div class="tw-text-center">
            <div class="tw-text-xs tw-mb-3-1">
              Подать заявку <br />
              на рассмотрение <br />
              инвестиционного проекта
            </div>
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
export default {};
</script>

<style scoped lang="scss">
//$

.project {
  &__cover {
    min-height: 222px;
    @apply tw-bg-dark tw-rounded-base tw-p-6 xl:tw-pt-12 xl:tw-p-7-1;
  }

  &__text {
    @apply tw-text-xxs-1 tw-leading-tight;
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
