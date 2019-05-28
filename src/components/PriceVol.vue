<template>
    <div>
        <!--<v-sparkline :label-size="14" :labels="['5/1','5/2','5/3','5/4','5/5','5/7','5/8','5/9']" :show-labels="true" :value="this.prices" :color="this.color" line-width="1" padding="8" :auto-draw="true" :auto-draw-duration="1000"></v-sparkline>-->
        <PriceVolChart/>
    </div>
</template>

<script>
import PriceVolChart from '@/components/PriceVolChart.vue'

export default {
    name:'PriceVol',
    components: {PriceVolChart},
    computed: {
        prices: function () {            
            return this.$parent.$parent.$parent.selectedTrend.prices;
        },        
        color: function () {            
            return this.$parent.$parent.$parent.selectedTrend.color;
        } 
    }    
}
</script>

<style>

</style>
