<template>
  <AppFullPageScreen class="ecosystem tw-py-2">
    <h2 class="app-h1 tw-mb-7-1 tw-text-center">Новости</h2>
    <AppCarousel>
      <AppCarouselSlide name="1">
        <q-img
          class="article__pic"
          src="https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=978&q=80"
        />
        <div class="article__bottom">
          <div class="tw-mb-3-1">
            Миллиардер Стернлихт поспорил с главой JPMorgan о бесполезности
            биткоина
          </div>
          <AppButton
            design="flat"
            :icon="require('assets/images/landing/landing-arrow.svg')"
          />
        </div>
      </AppCarouselSlide>
      <AppCarouselSlide name="2">
        <q-img
          class="article__pic"
          src="https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=978&q=80"
        />
        <div class="article__bottom">
          <div class="tw-mb-3-1">
            Миллиардер Стернлихт поспорил с главой JPMorgan о бесполезности
            биткоина 1
          </div>
          <AppButton
            design="flat"
            :icon="require('assets/images/landing/landing-arrow.svg')"
          />
        </div>
      </AppCarouselSlide>
    </AppCarousel>
  </AppFullPageScreen>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.article {
  &__pic {
    height: 258px;
    @apply tw-rounded-base;
  }

  &__bottom {
    padding: 22px 20px;
    transform: translateY(-28px);
    @apply tw-bg-dark tw-rounded-base tw-text-xs;
  }
}
</style>
