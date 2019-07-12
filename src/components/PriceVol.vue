<template>
    <div>
        <!--<v-sparkline :label-size="14" :labels="['5/1','5/2','5/3','5/4','5/5','5/7','5/8','5/9']" :show-labels="true" :value="this.prices" :color="this.color" line-width="1" padding="8" :auto-draw="true" :auto-draw-duration="1000"></v-sparkline>-->
        <PriceVolChart :chart-data="this.chartData" :options="chartOptions"/>   
    </div>
</template>

<script>
import PriceVolChart from '@/components/PriceVolChart.vue'

export default {
    name: 'PriceVol',
    data: () => ({
        chartData: null,
        chartOptions: null
    }),
    components: {
        PriceVolChart
    },
    computed: {
        dates: function() {
            return this.$store.getters.vxTrend.dateHistory;
        },
        prices: function() {
            return this.$store.getters.vxTrend.priceHistory;
        },
        price: function() {
            return this.$store.getters.vxTrend.price;
        },
        color: function() {
            return this.$store.getters.vxTrend.color;
        }
    },
    methods: {
        renderLineChart: function() {
            this.chartData = {
                labels: this.dates,
                datasets: 
                [{
                        label: 'Price',
                        borderColor: this.color,
                        fill: false,
                        data: this.prices
                    },
                    /*{
                        label: 'Volume',
                        borderColor: '#0065B5',
                        fill: false,
                        data: [60, 55, 32, 10, 2, 12, 53]
                    }*/
                ]
            }
        }
    },
    watch: {
        dates: function() {
            this.renderLineChart();
        }
    },
    created() {
        this.renderLineChart();
    }
}
</script>

<style>

</style>
