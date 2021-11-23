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
