<template>
  <svg height="500" width="500" viewBox="0 0 500 500" class="donut-chart">
    <!-- <filter id="goo" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
      <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
      <feComposite in="SourceGraphic" in2="goo" operator="atop" />
    </filter> -->
    <filter id="filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
	<feGaussianBlur stdDeviation="5 5" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"/>
	<feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" x="0%" y="0%" width="100%" height="100%" in="blur" result="colormatrix"/>
	<feComposite in="SourceGraphic" in2="colormatrix" operator="atop" x="0%" y="0%" width="100%" height="100%" result="composite1"/>
</filter>
    <g v-for="(value, index) in sortedValues ">
      <circle :cx="cx" :cy="cy" :r="radius" :stroke="colorsLocal[index]" :stroke-width="strokeWidth"
        :stroke-dasharray="adjustedCircumference" :stroke-dashoffset="calculateStrokeDashOffset(value, circumference)"
        fill="transparent" :transform="returnCircleTransformValue(index)" />

      <!-- <text v-if="middle !== undefined" class="text" text-anchor="middle" dy="3px" :x="250" :y="260"
        font-family="Open Sans">
        {{ middle }}
      </text>
      <text v-if="caption !== undefined" class="caption" text-anchor="middle" dy="3px" :x="250" :y="280"
        font-family="Open Sans">
        {{ caption }}
      </text> -->
      <text class="text" text-anchor="middle" dy="7px"  :x="chartData[index].textX" :y="chartData[index].textY">{{ value}}{{textBefore}}</text>

    </g>
    <slot name="image">
      
    </slot>
  </svg>
</template>

<script>
export default {
  props: {
    srcImage: {
      type: String,
      default: undefined
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
      default () {
        return [
          '#0FDF49',
          '#07C18A',
          '#0F6FDF',
          '#0395FF',
          '#DF410F',
          
        ];
      },
      type: Array,
    },
    textBefore: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      angleOffset: -90,
      chartData: [],
      colorsLocal: this.colors,
      cx: 250,
      cy: 250,
      radius: 160,
      sortedValues: [],
      strokeWidth: 90,
    };
  },
  computed: {
    // adjust the circumference to add small white gaps
    adjustedCircumference () {
      return this.circumference - 5;
    },
    circumference () {
      return 2 * Math.PI * this.radius;
    },
    dataTotal () {
      return this.sortedValues.reduce((acc, val) => acc + val);
    },
    calculateChartData () {
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
    sortvalues () {
      return (this.sortedValues = this.values);
    },
  },
  methods: {
    calculateStrokeDashOffset (dataVal, circumference) {
      const strokeDiff = this.dataPercentage(dataVal) * circumference;
      return circumference - strokeDiff;
    },
    calculateTextCoords (dataVal, angleOffset) {
      const angle = (this.dataPercentage(dataVal) * 360) / 2 + angleOffset;
      const radians = this.degreesToRadians(angle);
      const textCoords = {
        x: this.radius * Math.cos(radians) + this.cx,
        y: this.radius * Math.sin(radians) + this.cy,
      };
      return textCoords;
    },
    degreesToRadians (angle) {
      return angle * (Math.PI / 180);
    },
    dataPercentage (dataVal) {
      return dataVal / (this.dataTotal || 1);
    },
    percentageString (dataVal) {
      return `${Math.round(this.dataPercentage(dataVal) * 100)}%`;
    },
    returnCircleTransformValue (index) {
      return `rotate(${this.chartData[index].degrees}, ${this.cx}, ${this.cy})`;
    },
    segmentBigEnough (dataVal) {
      return Math.round(this.dataPercentage(dataVal) * 100) > 5;
    },
  },
  mounted () {
    this.sortvalues;
    this.calculateChartData;
  }
};
</script>

<style scoped>

circle {
  filter: url(#filter);
}

.text {
  @apply tw-text-white tw-text-xs;
  fill: #fff;
  font-size: 28px;
}
</style>