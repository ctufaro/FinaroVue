<template>
    <div>
        <v-tabs fixed-tabs light>
            <v-tab>7-Day</v-tab>
            <v-tab>Tweet Cloud</v-tab>
            <v-tab>Hot</v-tab>
        </v-tabs>
        <div class="trnd-txt" slot="header">{{this.name}}</div>
        <div class="trnd-price">{{this.price}}</div>        
        <div>
            <v-sparkline :label-size="14" :labels="['5/1','5/2','5/3','5/4','5/5','5/7','5/8','5/9']" :show-labels="true" :value="this.prices" :color="this.color" line-width="1" padding="8" :auto-draw="true" :auto-draw-duration="1000"></v-sparkline> 
        </div>
        <div class="stats">
            <span class="stats-header">Stats</span>
        </div>
        <div>
            <div class="btn-group w-100 searchcolumn-filters" role="group" aria-label="Basic example">
                <button type="button" @click.prevent="$router.push('order')" class="btn btn-primary btn-lg">BUY</button>
                <div style="width:80px;"></div>
                <button type="button" @click.prevent="$router.push('order')" class="btn btn-warning btn-lg">SELL</button>
            </div>
        </div>        
    </div>
</template>

<script>
export default {
    name:'TrendData',
    computed: {
        name: function () {            
            return this.$parent.$parent.selectedTrend.name;
        },
        price: function () {            
            return this.$parent.$parent.selectedTrend.price;
        },
        prices: function () {            
            return this.$parent.$parent.selectedTrend.prices;
        },        
        color: function () {            
            return this.$parent.$parent.selectedTrend.color;
        } 
    }    
}
</script>

<style>

</style>
