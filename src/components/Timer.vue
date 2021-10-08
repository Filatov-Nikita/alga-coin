<template>
  <div class="tw-flex">
    <TimerItem class="timer__item" :val="d" label="дней" />
    <TimerItem class="timer__item" :val="h" label="часов" />
    <TimerItem class="timer__item" :val="m" label="минут" />
    <TimerItem class="timer__item" :val="s" label="секунд" />
  </div>
</template>

<script>
import TimerItem from './Timer/TimerItem.vue';

let ticker;

export default {
  mounted() {
    this.start();
  },
  data() {
    return {
      s: 2,
      m: 0,
      h: 0,
      d: 1,
    };
  },
  watch: {
    s(newVal) {
      if (newVal < 0) {
        this.m--;
        this.s = 59;
      }
    },
    m(newVal) {
      if (newVal < 0) {
        this.h--;
        this.m = 59;
      }
    },
    h(newVal) {
      if (newVal < 0) {
        this.d--;
        this.h = 23;
      }
    },
    d(newVal) {
      if (newVal < 0) {
        this.stop();
        this.s = this.m = this.h = this.d = 0;
      }
    },
  },
  methods: {
    start() {
      ticker = setInterval(() => {
        this.tick();
      }, 1000);
    },
    stop() {
      clearInterval(ticker);
    },
    tick() {
      this.s--;
    },
  },
  components: {
    TimerItem,
  },
};
</script>

<style scoped lang="scss">
.timer {
  &__item + &__item {
    margin-left: 18px;
  }
}
</style>
