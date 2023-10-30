<template>
  <div>
    <!-- <div class="toolbar tw-flex tw-gap-2">
      <button
        id="one_month"
        @click="updateData('one_month')"
        :class="{ active: selection === 'one_month' }"
      >
        1M
      </button>

      <button
        id="week"
        @click="updateData('week')"
        :class="{ active: selection === 'week' }"
      >
        W
      </button>

      <button
        id="month"
        @click="updateData('month')"
        :class="{ active: selection === 'month' }"
      >
        M
      </button>

      <button
        id="year"
        @click="updateData('year')"
        :class="{ active: selection === 'year' }"
      >
        Y
      </button>
      {{ selection }}
    </div> -->
    <apexchart
      type="area"
      height="230"
      :options="chartOptions"
      :series="series"
      ref="chart"
    ></apexchart>
  </div>
</template>

<script>
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
export default {
  props: {
    valSeries: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      chartOptions: {
        dataLabels: {
          enabled: false,
        },
        chart: {
          type: "area",
          toolbar: {
            show: false,
          },
        },
        stroke: {
          curve: "smooth",
          width: 2,
        },
        grid: {
          show: true,
          borderColor: "#101333",
          strokeDashArray: 5,
          xaxis: {
            lines: {
              show: true,
            },
          },
          yaxis: {
            lines: {
              show: true,
            },
          },
        },
        colors: ["#2DB44F"],
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            shadeIntensity: 1,
            opacityFrom: 0.56,
            // opacityTo: 0,
            stops: [0, 100],
          },
        },
        xaxis: {
          type: "datetime",
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
        tooltip: {
          x: {
            format: "dd MMM yyyy",
          },
          theme: "dark",
        },
      },
      series: [
        {
          name: "значение",
          data: this.valSeries,
        },
      ],
      selection: "one_year",
    };
  },

  computed: {
    r() {
      return new Date("28 Jan 2013").getTime();
    },
  },
  mounted() {
    dayjs.extend(utc);
  },
  methods: {
    updateData: function (timeline) {
      this.selection = timeline;

      const date = new Date();
      switch (timeline) {
        case "one_month":
          this.$refs.chart.zoomX(
            dayjs.utc(dayjs().add(-25, "h"), "YYYY-MM-DD").valueOf(),
            dayjs.utc(dayjs(), "YYYY-MM-DD").valueOf()
          );
          break;
        case "week":
          this.$refs.chart.zoomX(
            dayjs.utc(dayjs().add(-1, "w"), "YYYY-MM-DD").valueOf(),
            dayjs.utc(dayjs(), "YYYY-MM-DD").valueOf()
          );
          break;
        case "month":
          this.$refs.chart.zoomX(
            dayjs.utc(dayjs().add(-1, "M"), "YYYY-MM-DD").valueOf(),
            dayjs.utc(dayjs(), "YYYY-MM-DD").valueOf()
          );
          break;
        case "year":
          this.$refs.chart.zoomX(
            dayjs.utc(dayjs(`${dayjs().year()}-01-01`, "YYYY-MM-DD")).valueOf(),
            dayjs.utc(dayjs(), "YYYY-MM-DD").valueOf()
          );
          break;
        case "all":
          this.$refs.chart.zoomX(
            new Date("01 Jan 2013").getTime(),
            new Date(`27 Feb 2013`).getTime()
          );
          break;
        default:
      }
    },
  },
  watch: {
    valSeries(val) {
      this.series[0].data = val;
    },
  },
};
</script>

<style></style>
