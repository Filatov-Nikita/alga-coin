<template>
  <article
    class="
      tw-rounded-base
      app-col-18
      xl:app-col-6
      tw-py-7 tw-px-4
      xl:tw-px-7-1 xl:tw-py-12
      tw-relative tw-flex tw-flex-col tw-items-start
    "
    :class="[
      item.is_voted ? 'tw-bg-deep-dark' : 'tw-bg-dark',
      { 'tw-opacity-50': finished },
    ]"
  >
    <InlineSvg
      v-if="item.is_voted"
      class="tw-absolute tw-right-5 tw-top-5"
      :src="require('assets/icons/alert-success.svg')"
      width="24px"
      height="24px"
      fill="#208B3A"
    />
    <div class="tw-text-xxs tw-text-secondary tw-mb-3-1">
      ДО {{ $localDate(item.finish_at) }}
    </div>
    <h2 class="tw-text-xs xl:tw-text-sm tw-mb-4-1">{{ item.name }}</h2>
    <p class="tw-text-xxs xl:tw-text-xs tw-mb-6">
      {{ item.title }}
    </p>
    <AppButton
      v-if="!finished"
      design="flat"
      class="tw-mt-auto"
      :icon="require('assets/images/landing/landing-arrow.svg')"
      :iconStg="{ width: '43px', height: '12px' }"
      @click="modal = !modal"
    />
    <AppModal
      v-model="modal"
      contentClass="tw-w-full xl:tw-w-1/2 tw-mx-auto"
      design="max-height"
    >
      <slot :showing="modal" :close="close" />
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
    finished: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      modal: false,
    };
  },
  methods: {
    close() {
      this.modal = false;
    },
  },
};
</script>

<style>
</style>
