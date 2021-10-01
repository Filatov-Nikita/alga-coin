<template>
  <div>
    <slot :time="time" />
  </div>
</template>

<script>
// добавить возможность отображать часы и минуты
export default {
  props: {
    start: {
      required: true,
      type: Number,
    },
  },
  created() {
    this.interval = null;
  },
  data() {
    return {
      time: this.start,
    };
  },
  mounted() {
    this.startTimer();
  },
  emits: ['finish'],
  methods: {
    startTimer() {
      this.interval = setInterval(() => {
        this.tick();
        if (this.time <= 0) this.stop();
      }, 1000);
    },
    tick() {
      this.time--;
    },
    stop() {
      clearInterval(this.interval);
      this.$emit('finish');
    },
  },
};
</script>
