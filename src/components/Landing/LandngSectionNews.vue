<template>
  <AppFullPageScreen
    name="news"
    class="tw-py-2 xl:tw-pt-10 tw-relative"
    :class="{ 'landing-h-center news': $q.screen.lt.xl }"
  >
    <h2 v-if="$q.screen.lt.xl" class="tw-text-md2 tw-mb-7-1 tw-text-center">
      {{ t("header") }}
    </h2>
    <h2 v-else class="landing-h2 landing-h2--space tw-uppercase">
      {{ t("header") }}
    </h2>

    <div v-if="$q.screen.xl" class="app-row app-gutter-col-x">
      <div class="app-col-4"></div>
      <div class="app-col-14">
        <template v-if="newsDisplay.length > 0">
          <div class="app-row app-gutter-col-x">
            <div
              v-for="newsItem in newsDisplay"
              :key="newsItem.id"
              class="app-col-6 tw-flex tw-flex-col"
              @click="
                $router.push({
                  name: 'articles.show',
                  params: { id: newsItem.id },
                })
              "
            >
              <q-img
                v-if="newsItem.announceImage"
                class="article__pic"
                :src="newsItem.announceImage.url"
              />
              <div class="article__bottom tw-flex-grow tw-flex tw-flex-col">
                <div class="tw-mb-3-1">
                  {{ newsItem.title }}
                </div>
                <AppButton
                  class="tw-mt-auto tw-self-start tw-transform tw--translate-x-2"
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
        </template>
        <AppEmptyList
          v-else
          msg="Нет новостей"
          class="tw-absolute tw-left-1/2 tw-top-1/3 tw-transform tw--translate-x-1/2 tw--translate-y-1/2"
        />
      </div>
    </div>

    <template v-else>
      <AppCarousel v-if="news.length > 0" :isNavDefault="true">
        <AppCarouselSlide
          v-for="newsItem in news"
          :key="newsItem.id"
          :name="`${newsItem.id}`"
          @click="
            $router.push({ name: 'articles.show', params: { id: newsItem.id } })
          "
        >
          <q-img
            v-if="newsItem.announceImage"
            class="article__pic"
            :src="newsItem.announceImage.url"
          />
          <div class="article__bottom">
            <div class="tw-mb-3-1 tw-text-xs">
              {{ newsItem.title }}
            </div>
            <AppButton
              :to="{ name: 'articles.show', params: { id: newsItem.id } }"
              design="flat"
              :icon="require('assets/images/landing/landing-arrow.svg')"
              class="tw-transform tw--translate-x-2"
            />
          </div>
        </AppCarouselSlide>
      </AppCarousel>
      <AppEmptyList v-else class="tw-text-center" msg="Нет новостей" />
    </template>
  </AppFullPageScreen>
</template>

<script>
import { useI18n } from "vue-i18n";
import { mapGetters } from "vuex";

const i18n = {
  messages: {
    "en-US": { header: "News" },
    "ru-RU": { header: "Новости" },
  },
};

export default {
  setup() {
    const { t } = useI18n(i18n);
    return { t };
  },
  computed: {
    ...mapGetters("landing", ["news"]),
    newsDisplay() {
      return this.news.slice(0, 3);
    },
  },
};
</script>

<style scoped lang="scss">
.news {
  padding-top: 90px;
}
.article {
  &__pic {
    height: 300px;
    @apply tw-rounded-base;
  }

  &__bottom {
    padding: 22px 20px;
    transform: translateY(-28px);
    margin-bottom: -28px;
    @apply tw-bg-dark tw-rounded-base tw-text-xs;
  }
}
</style>
