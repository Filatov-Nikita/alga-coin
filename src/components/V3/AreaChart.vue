<template>
    <div>

        <!-- <div class="toolbar">
            <button id="one_month" @click="updateData('one_month')" :class="{ active: selection === 'one_month' }">
                1M
            </button>

            <button id="six_months" @click="updateData('six_months')" :class="{ active: selection === 'six_months' }">
                6M
            </button>

            <button id="one_year" @click="updateData('one_year')" :class="{ active: selection === 'one_year' }">
                1Y
            </button>

            <button id="all" @click="updateData('all')" :class="{ active: selection === 'all' }">
                ALL
            </button>
            {{selection}}
        </div> -->
        <apexchart type="area" height="230" :options="chartOptions" :series="series" ref="chart"></apexchart>
    </div>
</template>

<script>


export default {
    props: {
        valSeries: {
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
                    type: 'area',
                    toolbar: {
                        show: false
                    }
                },
                stroke: {
                    curve: 'smooth',
                    width: 2
                },
                grid: {
                    show: true,
                    borderColor: '#101333',
                    strokeDashArray: 5,
                    xaxis: {
                        lines: {
                            show: true
                        }
                    },
                    yaxis: {
                        lines: {
                            show: true
                        }
                    },
                },
                colors: ['#2DB44F'],
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: "dark",
                        shadeIntensity: 1,
                        opacityFrom: 0.56,
                        // opacityTo: 0,
                        stops: [0, 100]
                    }
                },
                xaxis: {
                    type: 'datetime',
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
                },
                tooltip: {
                    x: {
                        format: 'dd MMM yyyy'
                    },
                    theme: "dark"
                },
            },
            series: [
                {
                    name: "значение",
                    data: this.valSeries
                },
            ],
            selection: 'one_year',
        }
    },
    created(){
        console.log(new Date('28 Jan 2013').getTime());
        console.log(new Date('28 Jan 2013').getTime());
    },
    computed:{
        r(){
        return new Date('28 Jan 2013').getTime();
        },
    },  
    methods: {
        updateData: function (timeline) {
            this.selection = timeline
            const date = new Date('28 Jan 2013')
            switch (timeline) {
                case 'one_month':
                    this.$refs.chart.zoomX(
                        new Date('28 Jan 2013').getTime(),
                        new Date('27 Feb 2013').getTime()
                    )
                    break
                case 'six_months':
                    this.$refs.chart.zoomX(
                        new Date('27 Sep 2012').getTime(),
                        new Date('27 Feb 2013').getTime()
                    )
                    break
                case 'one_year':
                    this.$refs.chart.zoomX(
                        new Date('27 Feb 2012').getTime(),
                        new Date('27 Feb 2013').getTime()
                    )
                    break
                case 'ytd':
                    this.$refs.chart.zoomX(
                        new Date('01 Jan 2013').getTime(),
                        new Date('27 Feb 2013').getTime()
                    )
                    break
                case 'all':
                    this.$refs.chart.zoomX(
                        new Date('23 Jan 2012').getTime(),
                        new Date('27 Feb 2013').getTime()
                    )
                    break
                default:
            }
        }
    },
    // watch: {
    //     valSeries(val){
    //         this.series[0].data = val
    //         console.log(val)
    //     }
    // },

}
</script>

<style>

</style>