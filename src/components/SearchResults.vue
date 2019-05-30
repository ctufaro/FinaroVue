<template>
    <span>
        <div class="searchcolumn-header">
            <input class="form-control searchtext" v-model="searchTxt" type="text" placeholder="Search.." aria-label="Search">
        </div>
        <div class="btn-group w-100 searchcolumn-filters" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-outline-secondary">Trading</button>
            <button type="button" class="btn btn-outline-secondary">Popular</button>
        </div>
        <div class="searchcolumn-table">
            <span v-for="trend in trends" :key="trend.Id">
                <div class="sr-container">
                    <div>
                        <div class="tag text-secondary">{{trend.Name}}</div>                    
                    </div>
                    <div class="r-row">
                        <div>
                            <!-- :auto-draw="true" :auto-draw-duration="1000" -->
                            <v-sparkline :value="trend.Prices" :color="trend.Color =='success' ? '#63C394' : '#EF4139'" line-width="4" padding="1" :fill="false"  :smooth="true" ></v-sparkline> <!--:gradient="trend.Gradient"-->
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
            <div class="noresults" :style="[this.trends.length > 0 ? {'display':'none'} : {'display':'block'}]">
                0 results found, click here to add &nbsp;&nbsp;<button type="button" class="btn btn-outline-success btn-circle btn-lg"><i class="fas fa-plus"></i></button>
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

export default {
    name: 'SearchResults',
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
            this.$router.push({ name: 'Price Chart'});
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
        }
    },
    watch:{
        searchTxt: function(val) {
            this.trends = this.savedTrends.filter(w => this.strClean(w.Name).startsWith(val.trim().toLowerCase()));
        }
    },
    created: function(){
        this.$parent.showLoader = true;
        this.axios.get(`${this.$hostname}/api/trends`).then(response => {
            this.trends = response.data;
            this.savedTrends = this.trends;
        });
    },
    updated: function(){        
        this.$parent.showLoader = false;
    }
}
</script>

<style src="../../src/assets/css/searchresults.css"></style>
