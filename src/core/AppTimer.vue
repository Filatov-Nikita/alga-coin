<template>
  <div>
    <slot v-bind="{ s, m, h, d, displayVal, restart }" />
  </div>
</template>

<script>
// добавить возможность отображать часы и минуты
import useTimer from 'src/composition/useTimer';

export default {
  props: {
    days: { default: 0, type: Number },
    hours: { default: 0, type: Number },
    minutes: { default: 0, type: Number },
    seconds: { default: 0, type: Number },
  },
  setup(props, { emit }) {
    const { seconds, minutes, hours, days } = props;

    function onStop() {
      emit('finish');
    }

    const { s, m, h, d, restart } = useTimer(
      seconds,
      minutes,
      hours,
      days,
      onStop
    );

    return {
      s,
      m,
      h,
      d,
      restart
    };
  },
  methods: {
    displayVal(val) {
      if (typeof val !== 'number') val = 0;

      if (Math.floor(val / 10) <= 0) {
        return `0${val}`;
      }

      return `${val}`;
    },
  },
  emits: ['finish'],
};
</script>
