<template>
    <div>
        <v-tabs fixed-tabs light slider-color="blue">
            <v-tab to="/sevenday">7-Day</v-tab>
            <v-tab to="/tweetcloud">Tweet Cloud</v-tab>
            <v-tab to="/hot">Hot</v-tab>        
        </v-tabs>
        <br>
        <div class="trnd-txt">{{this.name}}</div>
        <div class="trnd-price">{{this.price}}</div>        
        <div>
            <router-view />            
        </div>
        <div class="stats">
            <span class="stats-header">Stats</span>
        </div>
        <div>
            <div class="btn-group w-100 searchcolumn-filters" role="group" aria-label="Basic example">
                <button type="button" @click.prevent="$router.push('order')" class="btn btn-primary btn-lg btn-rnd">BUY</button>
                <div style="width:80px;"></div>
                <button type="button" @click.prevent="$router.push('order')" class="btn btn-danger btn-lg btn-rnd">SELL</button>
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
