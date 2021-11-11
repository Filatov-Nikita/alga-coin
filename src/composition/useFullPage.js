import { ref, onMounted, computed, inject } from "vue";
import useStopPageScroll from "./useStopPageScroll";

let yDown = null;

function handleTouchStart(evt) {
  const firstTouch = evt.touches[0];
  yDown = firstTouch.clientY;
}

function handleTouchMove(evt, down, up) {
  if (!yDown) {
    return;
  }

  let yUp = evt.touches[0].clientY;
  let yDiff = yDown - yUp;

  if (yDiff > 0) {
    down();
  } else {
    up();
  }
  /* reset values */
  yDown = null;
}

export default function (page) {
  useStopPageScroll();

  const y = ref(0);
  let lock = false;

  const containerH = () => {
    return document.documentElement.clientHeight;
  };

  const togglView = (e) => {
    if (lock) return;

    const windowH = containerH();
    const pageOffsetH = page.value.offsetHeight;

    if (e.deltaY > 0) {
      const newY = y.value - windowH;

      if (Math.abs(newY) > pageOffsetH - windowH) return;

      y.value = newY;
    } else {
      const newY = y.value + windowH;

      if (newY > 0) return;

      y.value = newY;
    }

    lock = true;
  };

  onMounted(() => {
    page.value.addEventListener("transitionend", () => {
      lock = false;
    });

    page.value.addEventListener("wheel", togglView);
    page.value.addEventListener("touchstart", handleTouchStart, false);
    page.value.addEventListener(
      "touchmove",
      (e) =>
        handleTouchMove(
          e,
          () => {
            const windowH = containerH();
            const pageOffsetH = page.value.offsetHeight;

            const newY = y.value - windowH;

            if (Math.abs(newY) > pageOffsetH - windowH) return;

            y.value = newY;

            lock = true;
          },
          () => {
            const windowH = window.innerHeight;

            const newY = y.value + windowH;

            if (newY > 0) return;

            y.value = newY;

            lock = true;
          }
        ),
      false
    );
  });

  const styles = computed(() => {
    return {
      transform: `translateY(${y.value}px)`,
    };
  });

  const sectionIndex = computed(() => {
    return Math.abs(y.value) / containerH();
  });

  const toByIndex = (index) => {
    const windowH = containerH();
    y.value = windowH * index * -1;
  };

  return {
    styles,
    sectionIndex,
    toByIndex,
  };
}
