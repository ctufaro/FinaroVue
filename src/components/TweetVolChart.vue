<script>
import {Bar} from 'vue-chartjs'
//import moment from 'moment'

let percentColors = [
    { pct: 0.0, color: { r: 239, g: 73, b: 66 } },
    { pct: 0.5, color: { r: 255, g: 203, b: 74 } },
    { pct: 1.0, color: { r: 74, g: 195, b: 74 } } ];

export default {
  extends: Bar,
  data () {
    return {
      datacollection: {
        //Data to be represented on x-axis
        labels: ['6/12 12:40', '6/12 13:40', '6/12 14:40', '6/12 15:40', '6/12 16:40', '6/12 17:40'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: [this.getColor(.50),this.getColor(.62),this.getColor(.89),this.getColor(.99),this.getColor(.19),this.getColor(.02)],
            //pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: [2563838,2618977,2626350,2618977,2626350,2563838]
          }
        ]
      },
      //Chart.js options that controls the appearance of the chart
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              callback: function(value) {               
                if(value >= 1000000){
                  return (value/1000000)+'m';
                }
                else if (value >= 1000){
                  return (value/1000)+'k';
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
              fontStyle:'bold',
              labelString: "Tweet Volume",
            }            
          }],
          xAxes: [ {
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
    }
  },  
  methods:{
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
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}
</script>

