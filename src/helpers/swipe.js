export default function (domEl, up, down) {
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

  domEl.addEventListener("touchstart", handleTouchStart, false);
  domEl.addEventListener(
    "touchmove",
    (e) => handleTouchMove(e, up, down),
    false
  );
}
