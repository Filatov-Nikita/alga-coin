<template>
  <AppFullPageScreen
    name="news"
    class="tw-py-2 xl:tw-pt-10 tw-relative"
    :class="{ 'landing-h-center': $q.screen.lt.xl }"
  >
    <h2 v-if="$q.screen.lt.xl" class="app-h1 tw-mb-7-1 tw-text-center">
      {{ $t('header') }}
    </h2>
    <h2 v-else class="landing-h2 landing-h2--space tw-uppercase">
      {{ $t('header') }}
    </h2>

    <div v-if="$q.screen.xl" class="app-row app-gutter-col-x">
      <div class="app-col-4"></div>
      <div class="app-col-14">
        <div class="app-row app-gutter-col-x">
          <div
            v-for="newsItem in news"
            :key="newsItem.id"
            class="app-col-6 tw-flex tw-flex-col"
          >
            <q-img class="article__pic" :src="newsItem.announceImage.url" />
            <div class="article__bottom tw-flex-grow tw-flex tw-flex-col">
              <div class="tw-mb-3-1">
                {{ newsItem.title }}
              </div>
              <AppButton
                class="tw-mt-auto tw-self-start"
                :to="{
                  name: 'articles.show',
                  params: { id: newsItem.id },
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
      <AppCarouselSlide
        v-for="newsItem in news"
        :key="newsItem.id"
        :name="`${newsItem.id}`"
      >
        <q-img class="article__pic" :src="newsItem.announceImage.url" />
        <div class="article__bottom">
          <div class="tw-mb-3-1">
            {{ newsItem.title }}
          </div>
          <AppButton
            :to="{ name: 'articles.show', params: { id: newsItem.id } }"
            design="flat"
            :icon="require('assets/images/landing/landing-arrow.svg')"
          />
        </div>
      </AppCarouselSlide>
    </AppCarousel>
  </AppFullPageScreen>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  i18n: {
    messages: {
      en: { header: 'News' },
      ru: { header: 'Новости' },
    },
  },
  computed: {
    ...mapGetters('landing', ['news']),
  },
};
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
