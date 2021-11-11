<template>
  <!-- <transition leave-active-class="fadeOut" enter-active-class="fadeIn"> -->
    <div v-if="slide === name">
      <slot />
    </div>
  <!-- </transition> -->
</template>

<script>
import { inject, ref } from 'vue';

export default {
  props: {
    name: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const registrSlide = inject('registrSlide');
    registrSlide(props.name);

    const slide = inject('slide');

    return {
      slide,
    };
  },
};
</script>

<style>
</style>
