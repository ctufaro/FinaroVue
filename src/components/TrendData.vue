<template>
    <div>
        <v-tabs fixed-tabs light slider-color="#EF4139">
            <v-tab to="/pricevol">Price Chart</v-tab>
            <v-tab to="/tweetvol">Tweets</v-tab>
            <!--<v-tab to="/hot">Hot</v-tab>-->
        </v-tabs>
        <br>
        <div class="trnd-txt">{{this.name}}</div>
        <div class="trnd-price">{{this.price}}</div>        
        <div>
            <router-view name="trendviews"/>            
        </div>
        <div class="stats">
            <div class="stats-header">Stats</div>
            <div class="text-secondary stat-row">OPEN
                <div class="stat-row-data">215.77</div>
            </div><hr>
            <div class="text-secondary stat-row">OPEN
                <div class="stat-row-data">215.77</div>
            </div><hr>
            <div class="text-secondary stat-row">OPEN
                <div class="stat-row-data">215.77</div>
            </div><hr>                                   
        </div>
        <div>
            <div class="btn-group w-100 searchcolumn-filters" role="group" aria-label="Basic example">
                <button type="button" @click.prevent="$router.push('order')" class="btn btn-outline-success btn-lg btn-rnd">BUY</button>
                <div style="width:80px;"></div>
                <button type="button" @click.prevent="$router.push('order')" class="btn btn-outline-danger btn-lg btn-rnd">SELL</button>
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

<style src="../../src/assets/css/trenddata.css"></style>
