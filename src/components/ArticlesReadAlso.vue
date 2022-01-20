<template>
  <section>
    <h2 class="tw-text-sm xl:tw-text-md2 tw-mb-6">{{ $t('readAlso') }}</h2>

    <AppCarousel v-if="$q.screen.lt.xl" height="auto">
      <AppCarouselSlide
        v-for="item in items"
        :key="item.id"
        :name="`${item.id}`"
      >
        <article class="tw-rounded-base tw-bg-dark-blue tw-p-5">
          <h3 class="tw-text-xs tw-text-white tw-block tw-mb-3-1">
            {{ item.title }}
          </h3>
          <AppButton
            :to="{ name: 'articles.show', params: { id: item.id } }"
            design="flat"
            :icon="require('assets/images/landing/landing-arrow.svg')"
            :iconStg="{
              width: '43px',
              height: '12px',
            }"
          />
        </article>
      </AppCarouselSlide>
    </AppCarousel>

    <div v-else class="app-row app-gutter-col-x">
      <article
        v-for="item in items"
        :key="item.id"
        class="app-col-6 tw-rounded-base tw-bg-dark-blue tw-p-5"
      >
        <h3 class="tw-text-xs tw-text-white tw-block tw-mb-3-1">
          {{ item.title }}
        </h3>
        <AppButton
          :to="{ name: 'articles.show', params: { id: item.id } }"
          design="flat"
          :icon="require('assets/images/landing/landing-arrow.svg')"
          :iconStg="{
            width: '43px',
            height: '12px',
          }"
        />
      </article>
    </div>
  </section>
</template>

<script>
export default {
  i18n: {
    messages: {
      ru: {
        readAlso: 'Читайте так же',
      },
      en: {
        readAlso: 'Read also',
      },
    },
  },
  props: {
    items: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style>
</style>
