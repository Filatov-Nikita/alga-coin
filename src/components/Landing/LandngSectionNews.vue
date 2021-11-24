<template>
  <AppFullPageScreen
    name="news"
    class="tw-py-2 xl:tw-pt-10 tw-relative"
    :class="{ 'landing-h-center': $q.screen.lt.xl }"
  >
    <h2 v-if="$q.screen.lt.xl" class="app-h1 tw-mb-7-1 tw-text-center">
      Новости
    </h2>
    <h2 v-else class="landing-h2 landing-h2--space tw-uppercase">Новости</h2>

    <div v-if="$q.screen.xl" class="app-row app-gutter-col-x">
      <div class="app-col-4"></div>
      <div class="app-col-14">
        <div class="app-row app-gutter-col-x">
          <div v-for="i in 3" class="app-col-6">
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
                :to="{
                  name: 'articles.show',
                  params: { id: 1 },
                }"
                design="flat"
                :icon="require('assets/images/landing/landing-arrow.svg')"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <AppCarousel v-else>
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
            :to="{ name: 'articles.show', params: { id: 1 } }"
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
            :to="{ name: 'articles.show', params: { id: 1 } }"
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
