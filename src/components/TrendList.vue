<template>
    <span>
        <div class="searchcolumn-header" style="display:none;">
            <input class="form-control searchtext" v-model="searchTxt" type="text" placeholder="Search.." aria-label="Search">
        </div>
        <v-tabs fixed-tabs height="40" light slider-color="#EF4139" color="transparent" style="padding:0px 15px 5px 15px !important;">
            <v-tab @click="filter('trending')">Trending</v-tab>
            <v-tab @click="filter('community')">Community</v-tab>
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
                            <v-sparkline :value="trend.Prices" :color="trend.Color =='success' ? '#63C394' : '#EF4139'" line-width="4" :padding="0" :fill="false" :smooth="25" :autoLineWidth="true" ></v-sparkline> <!--:gradient="trend.Gradient"-->
                        </div>  
                        <div style="text-align: right;">                 
                            <button type="button" v-on:click.prevent="rowSelect(trend)" :class="trend.CSS">{{trend.PriceText}}</button>
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
            <div class="noresults" v-if="this.trends.length == 0 && this.searchTxt.length > 0">
                0 results found - Add this trend
            </div>
        </div>        
    </span>    
</template>

<script>

/*
const xxx = [ {key:1, name:"#rosieteddyharrison",prices:[200,675,410,390,310,460,250,240],price:'$227.00',color:'#DE3442', class:'btn btn-danger btn-sm', gradient:['#DE3442','#e66570'], trendvol:1000, notif:false, fav:false},
                    {key:2, name:"#thisisfuckingcorny",prices:[390,123,250,390,460,675,250,390],price:'$13.00',color:'#0079FF', class:'btn btn-primary btn-sm', gradient:['#0079FF','#4da0ff'], trendvol:1234, notif:false, fav:false },
                    {key:3, name:"#chrisisprettycool",prices:[1,2,3,4,50,600,7,100],price:'$1.50',color:'#0079FF', class:'btn btn-primary btn-sm', gradient:['#0079FF','#4da0ff'], trendvol:1122, notif:false , fav:false},
                    {key:4, name:"#releasethehounds",prices:[390,123,250,390,460,675,250,390],price:'$56.00',color:'#DE3442', class:'btn btn-danger btn-sm', gradient:['#DE3442','#e66570'], trendvol:2211, notif:false, fav:false },
                  ];
*/                  

import uiMixin from '@/mixins/uimixin.js'

export default {
    name: 'TrendList',
    mixins: [uiMixin],
    components: {
        
    },
    data: () => ({
      searchTxt:'',
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
        filter(selection){
            let url = `${this.$hostname}/api/trends/filter`
            let loader = this.showLoader();
            url =(selection === 'community') ? `${url}/1` : `${url}/0`
            this.searchTxt = '';                
            this.axios.get(url).then(response => {
                this.trends = response.data;
                this.savedTrends = this.trends;
            }).then(()=>{
                this.hideLoader(loader);
            });
        }
    },
    watch:{
        searchTxt: function(val) {
            this.trends = this.savedTrends.filter(w => this.strClean(w.Name).startsWith(val.trim().toLowerCase()));
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
    updated: function(){        
        
    }
}
</script>

<style src="../../src/assets/css/trendlist.css"></style>
