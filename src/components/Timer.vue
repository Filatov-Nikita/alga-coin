<template>
  <div class="tw-flex">
    <TimerItem class="timer__item" :val="d" label="дней" />
    <TimerItem class="timer__item" :val="h" label="часов" />
    <TimerItem class="timer__item" :val="m" label="минут" />
    <TimerItem class="timer__item" :val="s" label="секунд" />
  </div>
</template>

<script>
import TimerItem from './TimerItem.vue';
import useTimer from 'src/composition/useTimer';

export default {
  props: {
    days: { type: Number, default: 0 },
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
  },
  setup(props) {
    const { seconds, minutes, hours, days } = props;
    const { s, m, h, d } = useTimer(seconds, minutes, hours, days);

    return {
      s,
      m,
      h,
      d,
    };
  },
  components: {
    TimerItem,
  },
};
</script>

<style scoped lang="scss">
.timer {
  &__item + &__item {
    margin-left: 4px;

    @media screen and (min-width: 1100px) {
      margin-left: 18px;
    }
  }
}
</style>
