<template>
  <q-infinite-scroll ref="scroll" v-bind="$props" :offset="50">
    <slot />
    <template #loading>
      <div class="row justify-center q-my-md">
        <q-spinner class="tw-text-primary" size="3em" />
      </div>
    </template>
  </q-infinite-scroll>
</template>

<script>
import { QInfiniteScroll } from 'quasar';
export default {
  props: {
    ...QInfiniteScroll.props,
  },
  methods: {
    trigger() {
      this.$refs?.scroll?.trigger();
    },
    reset() {
      this.$refs?.scroll?.reset();
    },
  },
};
</script>
