<template>
    <apexchart type="line" height="40" width="79" :options="chartOptions" :series="series" ref="chart"></apexchart>
</template>

<script>
import { props } from 'vue-inline-svg'


export default {
    props: {
        values: {
            type: Array,
            default: []
        }
    },  
    data() {
        return {
            chartOptions: {
                dataLabels: {
                    enabled: false
                },
                chart: {
                    type: 'line',
                    toolbar: {
                        show: false
                    },
                     sparkline: {
                        enabled: true
                    }
                },
                stroke: {
                    curve: 'smooth',
                    width: 2
                },
                grid: {
                    show: false,
                },
                colors: ['#2DB44F'],
                tooltip: {
                    enabled: false
                },
            },
            series: [
                {
                    name: "значение",
                    data: this.values
                },
            ],
            selection: 'one_year',
        }
    },

    created(){
        // this.series[0].data = this.values
        // console.log(this.series)
    }

}
</script>

<style>

</style>