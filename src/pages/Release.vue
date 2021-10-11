<template>
  <q-page class="tw-p-4 tw-pb-10 lg:tw-p-9">
    <ClockFace v-bind="{ days, hours, minutes, seconds }" />
  </q-page>
</template>

<script>
import ClockFace from 'src/components/Clock/ClockFace.vue';

export default {
  setup() {
    function calcTimerValue(countDownDate) {
      const now = new Date().getTime();
      const timeleft = countDownDate - now;

      const oneH = 1000 * 60 * 60;
      const days = Math.floor(timeleft / (oneH * 24));
      const hours = Math.floor((timeleft % (oneH * 24)) / oneH);
      const minutes = Math.floor((timeleft % oneH) / (1000 * 60));
      const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

      return {
        days,
        hours,
        minutes,
        seconds,
      };
    }

    const countDownDate = new Date('Oct 25, 2021 14:00:00').getTime();

    const { days, hours, minutes, seconds } = calcTimerValue(countDownDate);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  },
  components: {
    ClockFace,
  },
};
</script>
