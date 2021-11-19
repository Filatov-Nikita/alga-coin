<template>
  <div class="app-row app-gutter-col-x">
    <slot name="item" v-for="item in items" :key="item.id" :item="item"/>
  </div>
</template>

<script>
import PollsItem from './PollsItem.vue';

export default {
  props: {
    items: {
      required: true,
      type: Array,
    },
  },
  components: {
    PollsItem,
  },
};
</script>

<style>
</style>
