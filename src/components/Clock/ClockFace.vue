<template>
  <div class="clock-face">
    <div class="clock-face__top">
      <div class="clock-face__number">10</div>
      <div class="clock-face__number">11</div>
      <div class="clock-face__number">12</div>
      <div class="clock-face__number">1</div>
      <div class="clock-face__number">2</div>
    </div>
    <div class="clock-face__middle">
      <div class="clock-face__number">9</div>
      <div class="clock-face__number">3</div>
    </div>
    <div class="clock-face__bottom">
      <div class="clock-face__number">8</div>
      <div class="clock-face__number">7</div>
      <div class="clock-face__number">6</div>
      <div class="clock-face__number">5</div>
      <div class="clock-face__number">4</div>
    </div>
    <div class="clock-face__arrows">
      <ClockHand />
    </div>

    <div class="label">До запуска</div>

    <div class="timer">
      <Timer v-bind="{ days, hours, minutes, seconds }" />
    </div>
  </div>
</template>

<script>
import ClockHand from './ClockHand.vue';
import Timer from 'src/components/Timer.vue';

export default {
  props: {
    days: { type: Number, required: true },
    hours: { type: Number, required: true },
    minutes: { type: Number, required: true },
    seconds: { type: Number, required: true },
  },
  components: {
    ClockHand,
    Timer,
  },
};
</script>

<style scoped lang="scss">
.clock-face {
  max-width: 773px;
  margin: 0 auto;
  position: relative;

  &__middle,
  &__bottom,
  &__top {
    @apply tw-flex tw-justify-between;
  }

  &__middle {
    margin: 150px 0;
  }

  &__number {
    width: 118px;
    height: 118px;
    font-size: 96px;
    line-height: 118px;
    text-align: center;
  }

  &__arrows {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 10;
  }
}

.timer,
.label {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
}

.timer {
  bottom: 125px;
}

.label {
  top: 125px;
  @apply tw-text-md2 tw-text-center;
}
</style>
