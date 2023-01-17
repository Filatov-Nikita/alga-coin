<template>
  <apexchart
    type="line"
    :height="height"
    :width="width"
    :options="chartOptions"
    :series="series"
    ref="chart"
  ></apexchart>
</template>

<script>
export default {
  props: {
    values: {
      type: Array,
      default: [],
    },
    height: {
      type: [String, Number],
      default: "40",
    },
    width: {
      type: [String, Number],
      default: "79",
    },
  },
  data() {
    return {
      chartOptions: {
        dataLabels: {
          enabled: false,
        },
        chart: {
          type: "line",
          toolbar: {
            show: false,
          },
          sparkline: {
            enabled: true,
          },
        },
        stroke: {
          curve: "smooth",
          width: 2,
        },
        grid: {
          show: false,
        },
        colors: ["#2DB44F"],
        tooltip: {
          enabled: false,
        },
      },
      series: [
        {
          name: "значение",
          data: this.values,
        },
      ],
      selection: "one_year",
    };
  },

  created() {
    // this.series[0].data = this.values
    // console.log(this.series)
  },
};
</script>

<style></style>
