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
      const now = Date.now();
      const timeleft = countDownDate - now;

      const aS = 1000;
      const aM = aS * 60;
      const anH = aM * 60;
      const aDay = anH * 24;

      const days = Math.floor(timeleft / aDay);
      const hours = Math.floor((timeleft % aDay) / anH);
      const minutes = Math.floor((timeleft % anH) / aM);
      const seconds = Math.floor((timeleft % aM) / aS);

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
