import { onMounted, reactive, watch, toRefs } from "vue";
let ticker;

export default function (
  seconds = 0,
  minutes = 0,
  hours = 0,
  days = 0,
  onStop = () => {}
) {
  const time = reactive({
    s: seconds,
    m: minutes,
    h: hours,
    d: days,
  });

  const { s, m, h, d } = toRefs(time);

  function start() {
    ticker = setInterval(() => {
      tick();
    }, 1000);
  }

  const restart = () => {
    time.s = seconds;
    time.m = minutes;
    time.h = hours;
    time.d = days;

    stop();
    start();
  };

  function tick() {
    s.value--;
  }

  function stop() {
    clearInterval(ticker);
    onStop();
  }

  onMounted(() => {
    start();
  });

  watch(s, (newVal) => {
    if (newVal < 0) {
      m.value--;
      s.value = 59;
    }
  });

  watch(m, (newVal) => {
    if (newVal < 0) {
      h.value--;
      m.value = 59;
    }
  });
  watch(h, (newVal) => {
    if (newVal < 0) {
      d.value--;
      h.value = 23;
    }
  });

  watch(d, (newVal) => {
    if (newVal < 0) {
      stop();
      s.value = m.value = h.value = d.value = 0;
    }
  });

  return {
    s,
    m,
    h,
    d,
    restart,
  };
}
