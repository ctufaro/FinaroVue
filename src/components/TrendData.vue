<template>
    <div>
        <div class="trnd-price">{{this.price}}</div>
        <div class="trnd-txt">{{this.name}}</div>
        <div>
            <v-sparkline :show-labels="true" :value="this.prices" :color="this.color" line-width="1" padding="8" :auto-draw="true" :auto-draw-duration="1000"></v-sparkline> 
        </div>
        <div style="padding-top:32px;">
            <div class="btn-group w-100 searchcolumn-filters" role="group" aria-label="Basic example">
                <button type="button" @click.prevent="$router.push('order')" class="btn btn-primary">BUY</button>
                <div style="width:200px;"></div>
                <button type="button" @click.prevent="$router.push('order')" class="btn btn-info">SELL</button>
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
