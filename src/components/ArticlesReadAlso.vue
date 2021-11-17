<template>
  <section>
    <h2 class="tw-text-sm xl:tw-text-md2 tw-mb-6">Читайте так же</h2>

    <AppCarousel v-if="$q.screen.lt.xl" height="auto">
      <AppCarouselSlide v-for="i in 3" :name="`${i}`" :key="i">
        <article class="tw-rounded-base tw-bg-dark-blue tw-p-5">
          <h3 class="tw-text-xs tw-text-white tw-block tw-mb-3-1">
            Миллиардер Стернлихт поспорил с главой JPMorgan о бесполезности
            биткоина
          </h3>
          <AppButton
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
        v-for="i in 3"
        :key="i"
        class="app-col-6 tw-rounded-base tw-bg-dark-blue tw-p-5"
      >
        <h3 class="tw-text-xs tw-text-white tw-block tw-mb-3-1">
          Миллиардер Стернлихт поспорил с главой JPMorgan о бесполезности
          биткоина
        </h3>
        <AppButton
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
export default {};
</script>

<style>
</style>
