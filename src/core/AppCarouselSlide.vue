<template>
  <!-- <transition leave-active-class="fadeOut" enter-active-class="fadeIn"> -->
  <div v-if="slide === name">
    <slot />
  </div>
  <!-- </transition> -->
</template>

<script>
import { inject, watch, onUnmounted } from 'vue';

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
    const remove = inject('unregistrSlide');

    registrSlide(props.name);

    const slide = inject('slide');

    watch(slide, (val) => {
      if (val === props.name) {
        emit('enter');
      }
    });

    onUnmounted(() => {
      remove(props.name);
    });

    return {
      slide,
    };
  },
};
</script>

<style>
</style>
