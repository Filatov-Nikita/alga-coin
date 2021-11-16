<template>
  <!-- <transition leave-active-class="fadeOut" enter-active-class="fadeIn"> -->
  <div v-if="slide === name">
    <slot />
  </div>
  <!-- </transition> -->
</template>

<script>
import { inject, watch } from 'vue';

export default {
  props: {
    name: {
      required: true,
      type: String,
    },
  },
  emits: ['enter'],
  setup(props, { emit }) {
    const registrSlide = inject('registrSlide');
    registrSlide(props.name);

    const slide = inject('slide');

    watch(slide, (val) => {
      if (val === props.name) {
        emit('enter');
      }
    });

    return {
      slide,
    };
  },
};
</script>

<style>
</style>
