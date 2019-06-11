<script>
import {Bubble} from 'vue-chartjs'

gitlet percentColors = [
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
    this.renderChart({
      //labels: ['t1', 't2', 't3', 't4', 't5', 't6', 't7'],
      //x=time, y=sentiment, r=tweet volume, backgroundColor: should reflect sentiment
      datasets: [
        {
          backgroundColor: this.getColor(.98),
          data: [{x:40,y:.98,r:22}]
        },{
          backgroundColor: this.getColor(.87),
          data: [{x:10,y:.87,r:22}]
        },{
          backgroundColor: this.getColor(.0),
          data: [{x:5,y:.0,r:22}]
        },{
          backgroundColor: this.getColor(.21),
          data: [{x:33,y:.21,r:22}]
        },{
          backgroundColor: this.getColor(.37),
          data: [{x:27,y:.37,r:22}]
        },{
          backgroundColor: this.getColor(.8),
          data: [{x:9,y:.8,r:22}]
        },{

          backgroundColor: this.getColor(.44),
          data: [{x:15,y:.5,r:22}]
        }
      ]
    }, {responsive: true, maintainAspectRatio: true, legend: {display: false}})

  }
}
</script>

