<template>
    <div>
        <!--<v-sparkline :label-size="14" :labels="['5/1','5/2','5/3','5/4','5/5','5/7','5/8','5/9']" :show-labels="true" :value="this.prices" :color="this.color" line-width="1" padding="8" :auto-draw="true" :auto-draw-duration="1000"></v-sparkline>-->
        <PriceVolChart v-if="loaded" :chartdata="this.chartData" :options="chartOptions"/>   
    </div>
</template>

<script>
import PriceVolChart from '@/components/PriceVolChart.vue'

export default {
    name:'PriceVol',
    data: () => ({
        loaded: false,
        chartData: null,
        chartOptions: null
    }),       
    components: {PriceVolChart},
    computed: {
        prices: function () {            
            return this.$parent.$parent.$parent.selectedTrend.prices;
        },        
        color: function () {            
            return this.$parent.$parent.$parent.selectedTrend.color;
        } 
    },
    methods:{
        renderLineChart: function() {
        this.loaded = false;
        this.chartData = {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            datasets: 
            [
                {
                    label: 'Price',
                    borderColor: this.color =='success' ? '#63C394' : '#EF4139',
                    fill:false,
                    data: this.prices
                },
                {
                    label: 'Volume',
                    borderColor: '#0065B5',
                    fill:false,
                    data: [60, 55, 32, 10, 2, 12, 53]
                }
            ]            
        }
        this.loaded = true;            
        }
    },
    async mounted () {
        this.renderLineChart();
    }
}
</script>

<style>

</style>
