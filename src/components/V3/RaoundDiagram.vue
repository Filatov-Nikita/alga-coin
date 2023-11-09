<template>
  <svg
    height="100%"
    width="100%"
    viewBox="0 0 500 500"
    class="donut-chart"
    ref="round"
  >
    <!-- <filter id="goo" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
      <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
      <feComposite in="SourceGraphic" in2="goo" operator="atop" />
    </filter> -->
    <!-- <filter id="filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
	<feGaussianBlur stdDeviation="5 2" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"/>
	<feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" x="0%" y="0%" width="100%" height="100%" in="blur" result="colormatrix"/>
	<feComposite in="SourceGraphic" in2="colormatrix" operator="atop" x="0%" y="0%" width="100%" height="100%" result="composite1"/> -->
    <!-- <feDropShadow stdDeviation="5 5" in="composite2" dx="10" dy="10" flood-color="#88ceff" flood-opacity="1" x="0%" y="0%" width="100%" height="100%" result="dropShadow5"/>
	<feDropShadow stdDeviation="5 5" in="dropShadow5" dx="10" dy="10" flood-color="#109CFF" flood-opacity="1" x="0%" y="0%" width="100%" height="100%" result="dropShadow6"/> -->
    <!-- filter: drop-shadow(0 0px 19px rgba(16, 156, 255, 0.5)) drop-shadow(0px 0px 34.272px #109CFF); -->
    <!-- </filter> -->
    <g v-for="(value, index) in sortedValues" :key="index">
      <circle
        class="circle"
        :class="{ 'circle-pointer': clickable }"
        cx="50%"
        cy="50%"
        :r="radius"
        :stroke="colorsLocal[index]"
        :stroke-width="strokeWidth"
        :stroke-dasharray="adjustedCircumference"
        :stroke-dashoffset="calculateStrokeDashOffset(value, circumference)"
        fill="transparent"
        :transform="returnCircleTransformValue(index)"
        @click="clickCircle(index)"
        :data-value="value"
      />

      <!-- <text v-if="middle !== undefined" class="text" text-anchor="middle" dy="3px" :x="250" :y="260"
        font-family="Open Sans">
        {{ middle }}
      </text>
      <text v-if="caption !== undefined" class="caption" text-anchor="middle" dy="3px" :x="250" :y="280"
        font-family="Open Sans">
        {{ caption }}
      </text> -->

      <text
        v-if="isText"
        class="text"
        text-anchor="middle"
        dy="7px"
        :x="chartData[index].textX"
        :y="chartData[index].textY"
      >
        {{ value }}{{ textBefore }}
      </text>
    </g>
    <slot name="image"></slot>
  </svg>
</template>

<script>
import { throttle } from "throttle-debounce";

export default {
  props: {
    isText: {
      type: Boolean,
      default: true,
    },
    srcImage: {
      type: String,
      default: undefined,
    },
    values: {
      default: () => [10, 20, 10, 30, 30],
    },
    middle: {
      default: undefined,
      type: String,
    },
    caption: {
      default: undefined,
      type: String,
    },
    colors: {
      default() {
        return ["#0FDF49", "#07C18A", "#0F6FDF", "#0395FF", "#DF410F"];
      },
      type: Array,
    },
    textBefore: {
      type: String,
      default: "",
    },
    activeCircleIndex: {
      type: Number,
      default: null,
    },
    clickable: {
      default: false,
      type: Boolean,
    },
  },
  
  data() {
    return {
      angleOffset: -90,
      chartData: [],
      colorsLocal: this.colors,
      cx: 250,
      cy: 250,
      radius: 250 - 48,
      strokeWidth: 96,
      // radius: 160,
      // strokeWidth: 90,
      sortedValues: [],
    };
  },
  computed: {
    // adjust the circumference to add small white gaps
    adjustedCircumference() {
      return this.circumference - 5;
    },
    circumference() {
      return 2 * Math.PI * this.radius;
    },
    dataTotal() {
      return this.sortedValues.reduce((acc, val) => acc + val);
    },
    calculateChartData() {
      this.sortedValues.forEach((dataVal, index) => {
        const { x, y } = this.calculateTextCoords(dataVal, this.angleOffset);
        // start at -90deg so that the largest segment is perpendicular to top
        const data = {
          degrees: this.angleOffset,
          textX: x,
          textY: y,
        };
        this.chartData.push(data);
        this.angleOffset =
          this.dataPercentage(dataVal) * 360 + this.angleOffset;
      });
    },
    sortvalues() {
      return (this.sortedValues = this.values);
    },
  },
  methods: {
    choiceCircle(index, oldIndex = null) {
      const svg = this.$refs.round;
      const circles = svg.querySelectorAll(".circle");
      this.defaultCirclesStyle(circles);
      if (index !== null) {
        const newRadius = 165;
        const color = circles[index].getAttribute("stroke");
        const parent = circles[index].parentNode;
        circles.forEach((el) => {
          if (el !== circles[index]) el.style.opacity = 0.3;
        });
        circles[index].style.opacity = 1;
        if (parent) {
          parent.style.filter = `drop-shadow(0px 0px 15px ${color}) drop-shadow(0px 0px 19px ${this.hexToRgbA(
            color
          )})`;
          circles[index].setAttribute("r", newRadius);
          circles[index].setAttribute(
            "stroke-dasharray",
            2 * Math.PI * newRadius - 5
          );
          circles[index].setAttribute(
            "stroke-dashoffset",
            this.calculateStrokeDashOffset(
              circles[index].getAttribute("data-value"),
              2 * Math.PI * newRadius
            )
          );
        }
      } else {
        const parent = circles[oldIndex].parentNode;
        circles.forEach((el) => {
          if (el !== circles[oldIndex]) el.style.opacity = 1;
        });

        if (parent) parent.style.filter = "none";
        circles[oldIndex].setAttribute(
          "stroke-dasharray",
          2 * Math.PI * this.radius - 5
        );
        circles[oldIndex].setAttribute(
          "stroke-dashoffset",
          this.calculateStrokeDashOffset(
            circles[oldIndex].getAttribute("data-value"),
            2 * Math.PI * this.radius
          )
        );
      }
    },
    defaultCirclesStyle(circles) {
      circles.forEach((el) => {
        const oldRadius = +el.getAttribute("r");
        if (oldRadius !== this.radius) {
          el.parentNode.style.filter = "none";
          el.setAttribute("r", this.radius);
          el.style.opacity = 1;
        }
      });
    },
    clickCircle(index) {
      this.$emit("clickCircle", index);
    },
    hexToRgbA(hex) {
      var c;
      if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split("");
        if (c.length == 3) {
          c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = "0x" + c.join("");
        return (
          "rgba(" +
          [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
          ",0.5)"
        );
      }
    },
    calculateStrokeDashOffset(dataVal, circumference) {
      const strokeDiff = this.dataPercentage(dataVal) * circumference;
      return circumference - strokeDiff;
    },
    calculateTextCoords(dataVal, angleOffset) {
      const angle = (this.dataPercentage(dataVal) * 360) / 2 + angleOffset;
      const radians = this.degreesToRadians(angle);
      
      const textCoords = {
        x: this.radius * Math.cos(radians) + this.cx,
        y: this.radius * Math.sin(radians) + this.cy,
      };
      return textCoords;
    },
    degreesToRadians(angle) {
      return angle * (Math.PI / 180);
    },
    dataPercentage(dataVal) {
      return dataVal / (this.dataTotal || 1);
    },
    percentageString(dataVal) {
      return `${Math.round(this.dataPercentage(dataVal) * 100)}%`;
    },
    returnCircleTransformValue(index) {
      return `rotate(${this.chartData[index].degrees}, ${this.cx}, ${this.cy})`;
    },
    segmentBigEnough(dataVal) {
      return Math.round(this.dataPercentage(dataVal) * 100) > 5;
    },
  },
  mounted() {
    this.sortvalues;
    this.calculateChartData;
    this.$nextTick(() => {
      // const svg = this.$refs.round
      // const circles =  svg.querySelectorAll('.circle');
      // circles.forEach((circle,index)=>{
      //   circle.addEventListener("mouseover", (e)=>{
      //     const newRadius = 165;
      //     const color = e.target.getAttribute('stroke')
      //     const parent = e.target.parentNode;
      //     circles.forEach(el=>{if(el !== e.target)el.style.opacity=0.3;})
      //     if(parent){
      //       parent.style.filter = `drop-shadow(0px 0px 15px ${color}) drop-shadow(0px 0px 19px ${this.hexToRgbA(color)})`;
      //       e.target.setAttribute('r', newRadius)
      //       e.target.setAttribute('stroke-dasharray',2 * Math.PI  * newRadius - 5)
      //       e.target.setAttribute('stroke-dashoffset',
      //       this.calculateStrokeDashOffset( e.target.getAttribute('data-value'),2 * Math.PI  * newRadius))
      //     }
      //   })
      //   circle.addEventListener("mouseout", (e)=>{
      //     const parent = e.target.parentNode;
      //     circles.forEach(el=>{if(el !== e.target)el.style.opacity=1;})
      //     if(parent)
      //     parent.style.filter = 'none'
      //     e.target.setAttribute('r', this.radius)
      //     e.target.setAttribute('stroke-dasharray',2 * Math.PI  * this.radius - 5)
      //     e.target.setAttribute('stroke-dashoffset',
      //     this.calculateStrokeDashOffset( e.target.getAttribute('data-value'),2 * Math.PI  * this.radius))
      //   })
      // })
    });
    // window.addEventListener("mouseout", function(e){

    // })
  },

  watch: {
    activeCircleIndex: throttle(50, function (val, oldVal) {
      if (this.clickable) this.choiceCircle(val, oldVal);
    }),
  },
};
</script>

<style scoped lang="scss">
// circle {
//   filter: url(#filter);
// }

.text {
  @apply tw-text-white tw-text-xs;
  fill: #fff;
  font-size: 28px;
}

.circle {
  fill: none;

  animation-name: render;
  animation-duration: 500ms;
  transition-property: all;
  transition-duration: 500ms;
  &-pointer {
    cursor: pointer;
  }
}

.circle:hover,
.hovered {
  // opacity: 0.8;
  /* stroke-width: 100; */
}

g {
  transition: filter 0.9s ease-in;
  filter: none;
  // &.active {
  //   filter: drop-shadow(0px 0px 15px #109CFF) drop-shadow(0px 0px 19px #88ceff);
  // }
}
</style>
