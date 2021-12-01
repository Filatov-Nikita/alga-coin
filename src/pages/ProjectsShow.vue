<template>
  <q-page class="tw-py-6 tw-pb-16">
    <div class="app-row app-gutter-col-x">
      <section class="app-col-18 xl:app-col-4 tw-order-2">
        <h2
          v-if="$q.screen.xl"
          class="tw-text-secondary tw-text-xs tw-uppercase tw-mb-2"
        >
          ПРОЕКТЫ
        </h2>
        <ProjectsList />
      </section>
      <div
        class="
          app-col-18
          xl:app-col-14
          tw-order-1
          xl:tw-order-2
          tw-mb-12
          xl:tw-mb-0
        "
      >
        <div
          class="
            tw-mb-6
            xl:tw-mb-9
            app-row
            tw-items-center
            xl:app-gutter-x-xl
            tw-justify-between
            xl:tw-justify-start
          "
        >
          <p class="tw-text-xs">15.11.2021, 13:39</p>
          <AppButton
            design="flat"
            @click="$alert({ message: 'Ваш голос принят' })"
          >
            <div class="tw-flex tw-items-center tw-text-xs">
              <InlineSvg
                class="tw-mr-3"
                :src="require('assets/icons/heart.svg')"
                width="16px"
              />
              <div>Проголосовать</div>
            </div>
          </AppButton>
        </div>
        <div
          class="
            app-row
            title
            tw-items-center
            xl:tw-mb-12
            tw-mb-9 tw-justify-center
            xl:tw-justify-start
          "
        >
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
          <h1 class="tw-text-sm xl:tw-text-lg tw-order-1 tw-mb-6 xl:tw-mb-0">
            Проект AT-island
          </h1>
        </div>
        <div>
          <div class="app-row app-gutter-col-x app-gutter-y-md tw-mb-6">
            <article class="app-col-18 xl:app-col-6">
              <h2 class="tw-text-xxs tw-mb-2">Автор проекта</h2>
              <p class="tw-text-xs">Сообщество Alga Ecosystem</p>
            </article>
            <div class="app-col-18 xl:app-col-6">
              <h2 class="tw-text-xxs tw-mb-2">Партнёры проекта</h2>
              <p class="tw-text-xs">Пилипчук и партнеры</p>
            </div>
            <div class="app-col-18 xl:app-col-6">
              <h2 class="tw-text-xxs tw-mb-2">Год основания</h2>
              <p class="tw-text-xs">2021</p>
            </div>
          </div>

          <div class="app-row app-gutter-col-x">
            <div class="app-col-18 xl:app-col-15">
              <h2 class="tw-text-xxs tw-mb-2">О проекте</h2>
              <p class="tw-text-xs">
                Цифровая инвестиционная платформа, основанная на традиционных
                инструментах инвестирования в недвижимость. Держатели активов
                ALGA могут проводить аудит проектов, инвестировать в
                строительство объектов недвижимости, контролировать риски,
                беспрепятственно торговать правами собственности на объекты
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import ProjectsList from 'src/components/ProjectsList';

export default {
  setup(props) {
    const store = useStore();
    const fetchArticle = (id) => {
      store.dispatch('landing/')
    };

    watchEffect(() => {
      fetchArticle(props.id);
    });
  },
  components: {
    ProjectsList,
  },
};
</script>
<style scoped lang="scss">
//$

.project__pic {
  width: 228px;
  @include screen-xl {
    max-width: 330px;
  }
}

.title {
  @include gutter-x(70px);

  h1 {
    width: 100%;
    @include screen-xl {
      max-width: 270px;
    }
  }
}
</style>
