<template>
    <div>
        <TweetVolChart :chart-data="this.chartData" :options="chartOptions"/>
    </div>
</template>

<script>
import TweetVolChart from '@/components/TweetVolChart.vue'
let percentColors = [
    { pct: -1.0, color: { r: 239, g: 73, b: 66 } },
    { pct: 0.0, color: { r: 255, g: 203, b: 74 } },
    { pct: 1.0, color: { r: 74, g: 195, b: 74 } } ];

export default {
    name: 'TweetVol',
    data: () => ({
        chartData: null,
        chartOptions: null
    }),
    components: {
        TweetVolChart
    },
    computed: {
        dates: function() {
            return this.$store.getters.vxTrendVol.loadDate;
        },
        tweetVolumes: function() {
            return this.$store.getters.vxTrendVol.tweetVolume;
        },
        avgSentiments: function() {
            return this.$store.getters.vxTrendVol.avgSentiment.map(n => this.getColor(n));
        }        
    },
    methods: {
        renderLineChart: function() {
            this.chartData = {
                labels: this.dates,
                datasets: [{
                    label: 'Data',
                    backgroundColor: this.avgSentiments,
                    borderWidth: 1,
                    pointBorderColor: '#249EBF',
                    data: this.tweetVolumes
                }],
            },
            this.chartOptions = {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            callback: function(value) {
                                if (value >= 1000000) {
                                    return (value / 1000000) + 'm';
                                } else if (value >= 1000) {
                                    return (value / 1000) + 'k';
                                }
                                return value;
                            },
                        },
                        gridLines: {
                            display: true
                        },
                        scaleLabel: {
                            display: false,
                            fontSize: 14,
                            fontStyle: 'bold',
                            labelString: "Tweet Volume",
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false
                        }
                    }]
                },
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: true,
                    mode: 'single',
                    callbacks: {
                        label: function(tooltipItems) {
                            return 'Tweets: ' + tooltipItems.yLabel;
                        }
                    }
                },
                responsive: true,
                maintainAspectRatio: true
            }
        },
        getColor: function(pct) {
            for (var i = 1; i < percentColors.length - 1; i++) {
                    if (pct < percentColors[i].pct) {
                        break;
                    }
                }
                let lower = percentColors[i - 1];
                let upper = percentColors[i];
                let range = upper.pct - lower.pct;
                let rangePct = (pct - lower.pct) / range;
                let pctLower = 1 - rangePct;
                let pctUpper = rangePct;
                let color = {
                    r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
                    g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
                    b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
                };
                return 'rgba(' + [color.r, color.g, color.b].join(',') + ',0.8)';
                // or output as hex if preferred
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
