<template>
    <div>        
        <v-tabs fixed-tabs light slider-color="#EF4139">
            <v-tab to="/pricevol">Price Chart</v-tab>
            <v-tab to="/tweetvol">Tweets</v-tab>
            <v-tab to="/trendfad">Fad Chart</v-tab>
            <!--<v-tab to="/hot">Hot</v-tab>-->
        </v-tabs>
        <br>

        <div class="trnd-txt">{{this.name}}</div>
        <div class="trnd-price">{{this.price}}            
            <div class="trnd-change" :style="[this.change != 0 ? {'color':this.color} : {'color':'black'}]">({{this.change}}%)
                <span v-if="this.change < 0"><i class="fas fa-arrow-down"></i></span>
                <span v-if="this.change > 0"><i class="fas fa-arrow-up"></i></span>
            </div>            
        </div>        
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
                <button type="button" @click.prevent="openDialog=true" class="btn btn-outline-success btn-lg btn-rnd">BUY</button>
                <div style="width:80px;"></div>
                <button type="button" @click.prevent="openDialog=true" class="btn btn-outline-danger btn-lg btn-rnd">SELL</button>
            </div>
        </div> 
        <OrderForm :visible="openDialog" @close="openDialog=false"/>       
    </div>
</template>

<script>
import OrderForm from '@/components/OrderForm.vue'

export default {
    name:'TrendData',
    data: () => ({        
        openDialog:false
    }),
    components: {
        OrderForm
    },    
    computed: {
        name: function () {            
            return this.$store.getters.vxTrend.name;
        },
        price: function () {            
            return this.$store.getters.vxTrend.pricetxt;
        },     
        color: function () {            
            return this.$store.getters.vxTrend.color;
        },
        change: function () {            
            return this.$store.getters.vxTrend.changeIn;
        } 
    }
}
</script>

<style src="../../src/assets/css/trenddata.css"></style>
