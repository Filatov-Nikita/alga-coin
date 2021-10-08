<template>
  <div class="arrows">
    <div class="arrow-big arrow-big--hour">
      <div :style="{ transform: `rotate(${hourDeg}deg)` }"></div>
    </div>
    <div class="arrow-big arrow-big--minute">
      <div :style="{ transform: `rotate(${minuteDeg}deg)` }"></div>
    </div>
    <div class="arrow-slim arrow-slim--second">
      <div :style="{ transform: `rotate(${secondDeg}deg)` }"></div>
    </div>
    <div class="center">
      <div class="center__center"></div>
    </div>
  </div>
</template>

<script>
const DEGS = {
  7: 30,
  8: 50,
  9: 90,
  10: 130,
  11: 150,
  12: 180,
  1: 210,
  2: 230,
  3: 270,
  4: 310,
  5: 330,
  6: 0,
};

let ticker;

export default {
  mounted() {
    this.start();
  },
  unmounted() {
    clearInterval(ticker);
  },
  data() {
    return {
      secondDeg: 180,
      minuteDeg: 180,
      hourDeg: 180,
    };
  },
  methods: {
    start() {
      this.setLocalTime();

      ticker = setInterval(() => {
        this.tick();
      }, 1000);
    },
    setLocalTime() {
      const today = new Date();
      const m = today.getMinutes();
      let h = today.getHours();

      // 12 часовой форма
      h = Math.abs(h - 12);

      this.setTime(h, m);
    },
    setTime(HH, mm) {
      this.hourDeg = DEGS[HH];
      for (let i = 0; i <= mm * 60; i++) {
        this.tick();
      }

      this.secondDeg = 180;
    },
    tick() {
      const tickArrow = (arrowDeg, divider) => {
        if (isdeg(30, [30, 180, 210, 360], this[arrowDeg])) {
          this[arrowDeg] += 30 / divider;
        } else if (isdeg(20, [50, 150, 230, 330], this[arrowDeg])) {
          this[arrowDeg] += 20 / divider;
        } else if (isdeg(40, [90, 130, 270, 310], this[arrowDeg])) {
          this[arrowDeg] += 40 / divider;
        }
      };

      this.secondDeg += 360 / 60;
      tickArrow('minuteDeg', 60 * 5);
      tickArrow('hourDeg', 3600);

      if (this.secondDeg >= 360) this.secondDeg = 0;
      if (this.minuteDeg >= 360) this.minuteDeg = 0;
      if (this.hourDeg >= 360) this.hourDeg = 0;

      function include(from, to, val) {
        return from <= val && val <= to;
      }

      function isdeg(space, otr, val) {
        return otr.some((number) => include(number - space, number, val));
      }
    },
  },
};
</script>

<style scoped lang="scss">
%center {
  position: absolute;
  top: 50%;
  left: 50%;
}

.arrow-big {
  @extend %center;
  transform: translateX(-50%) translateY(20px);

  div {
    border-radius: 18px;
    width: 25px;
    @apply tw-bg-dark-blue;
    transform-origin: center -20px;
  }

  &--hour {
    div {
      height: 140px;
    }
  }

  &--minute {
    div {
      height: 200px;
    }
  }
}

.arrow-slim {
  @extend %center;
  transform: translateX(-50%) translateY(-40px);

  div {
    width: 2px;
    height: 300px;
    background: linear-gradient(rgba(0, 193, 242, 1), rgba(0, 93, 172, 1));
    transform-origin: center 40px;
  }
}

.arrows {
  width: 100px;
  height: 100px;
  transform-origin: center center;
}

.center {
  @extend %center;
  transform: translateX(-50%) translateY(-50%);
  width: 30px;
  height: 30px;
  line-height: 30px;
  @apply tw-bg-dark-blue tw-rounded-full tw-text-center;

  &__center {
    width: 16px;
    height: 16px;
    background: #001233;
    @apply tw-rounded-full tw-inline-block tw-align-middle;
  }
}
</style>
