<script>
import {Bubble} from 'vue-chartjs'
import moment from 'moment'

let percentColors = [
    { pct: 0.0, color: { r: 239, g: 73, b: 66 } },
    { pct: 0.5, color: { r: 255, g: 203, b: 74 } },
    { pct: 1.0, color: { r: 74, g: 195, b: 74 } } ];

export default {
  extends: Bubble,
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
            return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
            // or output as hex if preferred
    }
  },
  mounted () {
    //console.log(moment(new Date('2019-06-12 12:46:16.187')).format('M/DD h:mmA'));
    this.renderChart({
        //labels: ['t1', 't2', 't3', 't4', 't5', 't6', 't7'],
        //x=time, y=tweet volume, r=tweet volume, backgroundColor: sentiment
        datasets: [
          {
            backgroundColor: this.getColor(.50),
            data: [{
              x: moment(new Date('2019-06-12 12:40:16.187')),
              y: 2563838,
              r: 32
            }]
          },
          {
            backgroundColor: this.getColor(.62),
            data: [{
              x: moment(new Date('2019-06-12 13:00:37.050')),
              y: 2618977,
              r: 34
            }]
          },
          {
            backgroundColor: this.getColor(.89),
            data: [{
              x: moment(new Date('2019-06-12 13:20:01.907')),
              y: 2626350,
              r: 34
            }]
          }
        ]
      }, {
      responsive: true,
      maintainAspectRatio: true,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            displayFormats: this.$datefmt
          },
          scaleLabel: {
            display: true,
            fontSize: 14,
            fontStyle:'bold',
            labelString: "Time",
          },
          ticks: {
            suggestedMax: moment(new Date('2019-06-13 15:46:16.187'))
          }                    
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            fontSize: 14,
            fontStyle:'bold',
            labelString: "Tweet Volume",
          }          
        }]        
      }
    })
  }
}
</script>

