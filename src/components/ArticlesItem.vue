<template>
  <section>
    <div
      class="
        app-row app-gutter-x-xl
        tw-items-center tw-mb-6 tw-justify-between
        xl:tw-justify-start
      "
    >
      <p class="tw-text-xs">{{ $prettyDate(content.created_at) }}</p>
      <AppButton design="flat" @click="share">
        <div class="tw-flex tw-items-center tw-text-xs">
          <InlineSvg
            class="tw-mr-3"
            :src="require('assets/icons/share.svg')"
            width="16px"
          />
          <div>Поделиться</div>
        </div>
      </AppButton>
    </div>
    <component
      :is="main ? 'h1' : 'div'"
      class="tw-text-sm xl:tw-text-lg tw-mb-4-1 xl:tw-mb-6"
    >
      {{ content.title }}
    </component>
    <div class="tw-mb-9">
      <q-img
        height="370px"
        class="tw-rounded-base"
        :src="content.bodyImage.url"
      />
    </div>

    <p class="tw-text-xxs xl:tw-text-xs tw-leading-loose xl:app-col-14">
      {{ content.body }}
    </p>
  </section>
</template>

<script>
export default {
  props: {
    main: {
      default: false,
      type: Boolean,
    },
    content: {
      required: true,
      type: Object,
    },
  },
  methods: {
    share() {
      const route = this.$router.resolve({
        name: 'articles.show',
        params: { id: 2 },
      });
      this.$copy(window.location.origin + route.href);
      this.$alert({
        type: 'neutral',
        message: 'Ссылка скопирована в буфер обмена',
      });
    },
  },
};
</script>

<style>
</style>
