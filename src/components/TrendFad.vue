<template>
    <div>
        <TrendFadChart :chart-data="this.chartData" :options="chartOptions"/>   
    </div>
</template>

<script>
import uiMixin from '@/mixins/uimixin.js'
import TrendFadChart from '@/components/TrendFadChart.vue'

export default {
    name: 'TrendFad',
    mixins:[uiMixin],
    data: () => ({
        chartData: null,
        chartOptions: null
    }),
    components: {
        TrendFadChart
    },
    methods: {
        renderLineChart: function() {
            this.chartData = {
                labels: ['Twitter','FB','Insta'],
                datasets: 
                [{
                    data: [30, 20, 10],
                    backgroundColor:['#0065B5','#EF4139','#63C394']
                }]
            },
            this.chartOptions = {
                maintainAspectRatio : this.isMobile(),
                elements: {
                    center: {
                        text: `${Math.floor(Math.random() * (100 - 0 + 1)) + 0}%`,
                        color: '#0065B5', // Default is #000000                        
                        sidePadding: 20 // Defualt is 20 (as a percentage)
                    }
                }
            }      
        }
    },
    created() {
        this.renderLineChart();
    }
}
</script>

<style>

</style>
