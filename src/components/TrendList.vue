<template>
    <span>
        <v-tabs fixed-tabs height="40" light slider-color="#EF4139" color="transparent" style="padding:5px 15px 5px 15px !important;">
            <v-tab @click="sift('trending')">Trending</v-tab>
            <v-tab @click="sift('mytrends')">My Trends</v-tab>
        </v-tabs>
        <div class="searchcolumn-table">
            <span v-for="trend in trends" :key="trend.Id">
                <div class="sr-container">
                    <div>
                        <div class="tag">{{trend.Name}}</div>                    
                    </div>
                    <div class="r-row">
                        <div class="axis">
                            <!-- :auto-draw="true" :auto-draw-duration="1000" -->
                            <v-sparkline :value="trend.Prices" :color="trend.Gains == true ? '#63C394' : '#EF4139'" line-width="4" :padding="0" :fill="false" :smooth="25" :autoLineWidth="true" ></v-sparkline> 
                        </div>  
                        <div style="text-align: right;">                 
                            <button type="button" v-on:click.prevent="rowSelect(trend)" :class="trend.Gains == true ? 'btn btn-outline-success btn-sm' : 'btn btn-outline-danger btn-sm'">{{trend.PriceText}}</button>
                        </div>
                    </div>
                    <div class="r-row">
                        <div>
                            <div class="shares">{{trend.TweetVolume}}</div>
                        </div>  
                        <div style="text-align: right;">                 
                            <div>
                                <i :class="trend.Notify ? 'fas fa-bell icn-fill' : 'far fa-bell'" @click="notifSelect(trend);"></i>
                                <i :class="trend.Faved ? 'fas fa-star icn-fill' : 'far fa-star'" @click="favSelect(trend);"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </span>
            <div class="noresults" v-if="this.trends.length == 0 && this.searchText!==null && this.searchText.length > 0">
                0 results found
            </div>
        </div>        
    </span>    
</template>

<script>
import uiMixin from '@/mixins/uimixin.js'
import {eventBus} from '@/eventbus.js'

export default {
    name: 'TrendList',
    mixins: [uiMixin],
    components: {
    },
    data: () => ({
      searchText:'',
      trends:[],
      savedTrends:[]
    }),
    methods: {
        success: function(){
                this.$swal({
                type: 'success',
                title: 'Success!',
                text: 'Excellent Work!'
            });
        },
        rowSelect: function(trend){
            this.$emit('trendClick',trend);
            this.$router.push({ path: '/pricevol', params: {selectedTrend: trend }});
        },
        notifSelect: function(trend){
            trend.Notify = !trend.Notify;
        }, 
        favSelect: function(trend){
            trend.Faved = !trend.Faved;
        },                 
        error: function(){
            this.$swal({type: 'error', title: 'Error!', text: 'Oy vey!'});            
        },
        toastTopEnd: function() {
            this.$swal({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                type: 'success',
                title: 'Who am ?',
                text: this.trends.price
            });
        },
        strClean:function(str){
            if(str.startsWith("#")){
                str = str.substring(1);
            }
            return str.trim().toLowerCase()
        },
        sift(selection){
            let url = `${this.$hostname}/api/trends/filter`
            let loader = this.showLoader();
            url =(selection === 'mytrends') ? `${url}/${this.$store.getters.vxUser.id}` : `${url}/0`
            this.axios.get(url).then(response => {
                this.trends = response.data;
                this.savedTrends = this.trends;
            }).then(()=>{
                this.hideLoader(loader);
            });
        }
    },
    created: function(){
        let loader = this.showLoader();       
        this.axios.get(`${this.$hostname}/api/trends/filter/0`).then(response => {
            this.trends = response.data;
            this.savedTrends = this.trends;
        }).then(()=>{
            this.hideLoader(loader);
        });
    },
    mounted: function(){        
        eventBus.$on('searchTextChanged',(val)=>{
            if(val!==null){
                this.searchText = val;
                this.trends = this.savedTrends.filter(w => this.strClean(w.Name).startsWith(val.trim().toLowerCase()));
            } else {
                this.trends = this.savedTrends;
            }
            
        })       
    },
    beforeDestroy(){
        eventBus.$off('content-type-saving');
    }
}
</script>

<style src="../../src/assets/css/trendlist.css"></style>
