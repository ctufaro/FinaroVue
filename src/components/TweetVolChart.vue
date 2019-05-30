<script>
import {Bubble} from 'vue-chartjs'

export default {
  extends: Bubble,
  mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#63C394',
          data: [{x:40,y:39,r:10}]
        },{
          label: 'Data Two',
          backgroundColor: '#EF4139',
          data: [{x:10,y:2,r:12}]
        }
      ]
    }, {responsive: true, maintainAspectRatio: true})

  }
}
</script>

