<template>
  <AppFullPageScreen class="tw-py-1">
    <h2 class="app-h1 tw-mb-4 tw-text-center">Направления</h2>

    <AppCarousel>
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

        <div class="project__cover">
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

        <div class="project__cover">
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
            <button class="project__btn">
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
.project {
  &__cover {
    min-height: 222px;
    @apply tw-bg-dark tw-rounded-base tw-text-center tw-p-6;
  }

  &__text {
    @apply tw-text-xxs-1 tw-leading-tight;
  }

  &__pic {
    width: 130px;
    @apply tw-mx-auto tw-mb-4-1;
  }

  &__add {
    background: linear-gradient(
      149.13deg,
      #a0e09c 18.3%,
      #0cb65f 55.25%,
      #a0e09c 100%
    );
    min-height: 400px;
    @apply tw-rounded-base tw-flex tw-flex-col tw-justify-center;
  }

  &__btn {
    width: 90px;
    height: 90px;
    line-height: 90px;
    @apply tw-rounded-full tw-bg-valid tw-text-center;
  }
}
</style>
