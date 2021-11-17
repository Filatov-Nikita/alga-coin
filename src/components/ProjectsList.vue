<template>
  <div v-if="$q.screen.xl">
    <router-link
      class="tw-text-xs tw-block tw-py-4-1 tw-text-white projects__item"
      v-for="item in items"
      to="#"
    >
      {{ item.label }}
    </router-link>
  </div>
  <section v-else class="projects--xs">
    <h2 class="tw-text-sm tw-mb-6">Другие проекты</h2>
    <AppCarousel height="auto">
      <AppCarouselSlide
        v-for="(item, index) in items"
        :name="item.label + index"
        class="tw-bg-dark-blue tw-rounded-base tw-px-5 tw-py-8"
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
              src="images/landing-project-1.png"
              alt=""
            />
          </div>
          <div>
            {{ item.label }}
          </div>
        </div>
      </AppCarouselSlide>
    </AppCarousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: 'Проект AT-island',
          to: '#',
        },
        {
          label: 'Alga NFT',
          to: '#',
        },
        {
          label: 'Проект AT-island',
          to: '#',
        },
        {
          label: 'Проект AT-island',
          to: '#',
        },
      ],
    };
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
