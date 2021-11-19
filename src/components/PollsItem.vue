<template>
  <article
    class="
      tw-rounded-base tw-bg-dark
      app-col-6
      tw-px-7-1 tw-py-12 tw-opacity-50
    "
  >
    <div class="tw-text-xxs tw-text-secondary tw-mb-3-1">
      ДО {{ item.till }}
    </div>
    <h2 class="tw-text-sm tw-mb-4-1">{{ item.title }}</h2>
    <p class="tw-text-xs tw-mb-6">
      {{ item.text }}
    </p>
    <AppButton
      @click="modal = !modal"
      design="flat"
      :icon="require('assets/images/landing/landing-arrow.svg')"
      :iconStg="{ width: '43px', height: '12px' }"
    />
    <AppModal
      v-model="modal"
      contentClass="tw-w-1/2 tw-mx-auto"
      design="max-height"
    >
      <q-img
        class="tw-w-full tw-rounded-t-base"
        height="320px"
        src="https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=978&q=80"
      />
      <div class="tw-py-16 tw-px-24">
        <div class="tw-text-md2 tw-mb-9">
          {{ item.tilte }}
        </div>

        <slot name="variants" :variants="item.variants" />

        <section>
          <div
            class="
              app-row app-gutter-col-x
              tw-justify-between
              tw-items-center
              tw-mb-6
              tw-text-xxs
              tw-tracking-smallest
            "
          >
            <h3 class="tw-text-secondary tw-uppercase tw-text-xxs">Описание</h3>
            <p class="tw-text-primary tw-uppercase">
              АКУТАЛЕН ДО {{ item.till }}
            </p>
          </div>
          <p>{{item.description}}</p>
        </section>
      </div>
    </AppModal>
  </article>
</template>

<script>
export default {
  props: {
    item: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      modal: false,
    };
  },
  methods: {
    update(val, updateWin) {
      updateWin({ label: 'Нет' });
    },
  },
};
</script>

<style>
</style>
