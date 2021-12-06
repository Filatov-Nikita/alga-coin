<template>
  <div v-if="$q.screen.xl">
    <router-link
      class="tw-text-xs tw-block tw-py-4-1 tw-text-white projects__item"
      v-for="item in projects"
      :key="item.id"
      :to="{ name: 'projects.show', params: { id: item.id } }"
    >
      {{ item.name }}
    </router-link>
  </div>
  <section v-else class="projects--xs">
    <h2 class="tw-text-sm tw-mb-6">Другие проекты</h2>
    <AppCarousel height="auto">
      <AppCarouselSlide
        v-for="item in projects"
        :key="item.id"
        :name="`${item.id}`"
        class="tw-bg-dark-blue tw-rounded-base tw-px-5 tw-py-8"
      >
        <router-link
          class="tw-block tw-w-full tw-text-white"
          :to="{ name: 'projects.show', params: { id: item.id } }"
        >
          <div class="tw-flex tw-items-center">
            <div class="projects__logo tw-mr-4-1">
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
                :src="item.announceImage.url"
                alt=""
              />
            </div>
            <div>
              {{ item.name }}
            </div>
          </div>
        </router-link>
      </AppCarouselSlide>
    </AppCarousel>
  </section>
</template>

<script>
export default {
  props: {
    projects: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style scoped lang="scss">
.projects {
  &__item {
    border-bottom: 1px solid #003870;
  }

  &__logo {
    width: 60px;
  }

  &--xs {
    border-bottom: 1px solid #003870;
    border-top: 1px solid #003870;
    @apply tw-py-9;
  }
}
</style>
