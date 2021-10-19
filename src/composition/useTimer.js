import { onMounted, ref, watch } from "vue";
let ticker;

export default function (
  seconds = 0,
  minutes = 0,
  hours = 0,
  days = 0,
  onStop = () => {}
) {
  const s = ref(seconds);
  const m = ref(minutes);
  const h = ref(hours);
  const d = ref(days);

  function start() {
    ticker = setInterval(() => {
      tick();
    }, 1000);
  }

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
  };
}
