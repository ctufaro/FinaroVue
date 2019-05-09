<template>
    <span>
        <div class="searchcolumn-header">
            <input class="form-control searchtext" v-model="searchTxt" type="text" placeholder="Search a trend" aria-label="Search">
        </div>
        <div class="btn-group w-100 searchcolumn-filters" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-outline-primary">Hot</button>
            <button type="button" class="btn btn-outline-primary">Trending</button>
        </div>
        <div class="searchcolumn-table">
            <span v-for="trend in trends" :key="trend.id">
                <div class="sr-container">
                    <div>
                        <div class="tag">{{trend.name}}</div>                    
                    </div>
                    <div class="r-row">
                        <div>
                            <!-- :auto-draw="true" :auto-draw-duration="1000" -->
                            <v-sparkline :value="trend.prices" :color="trend.color" line-width="4" padding="8"></v-sparkline> 
                        </div>  
                        <div style="text-align: right;">                 
                            <button type="button" v-on:click.prevent="rowSelect(trend)" :class="trend.class">{{trend.price}}</button>
                        </div>
                    </div>
                    <div class="r-row">
                        <div>
                            <div class="shares">1200000</div>
                        </div>  
                        <div style="text-align: right;">                 
                            <div>
                                <i class="far fa-bell"></i>
                                <i class="far fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </span>
            <div class="noresults" :style="[this.trends.length>0 ? {'display':'none'} : {'display':'block'}]">
                0 results found
            </div>
        </div>
    </span>    
</template>

<script>

const savedTrends=[ {key:1, name:"#rosieteddyharrison",prices:[200,675,410,390,310,460,250,240],price:'$227.00',color:'#DE3442', class:'btn btn-danger btn-sm'},
                    {key:2, name:"#thisisfuckingcorny",prices:[390,123,250,390,460,675,250,390],price:'$13.00',color:'#0079FF', class:'btn btn-primary btn-sm' },
                    {key:3, name:"#chrisisprettycool",prices:[1,2,3,4,50,600,7,100],price:'$1.50',color:'#0079FF', class:'btn btn-primary btn-sm' },
                    {key:4, name:"#releasethehounds",prices:[390,123,250,390,460,675,250,390],price:'$56.00',color:'#DE3442', class:'btn btn-danger btn-sm' },
                  ];

export default {
    name: 'SearchResults',
    data: () => ({
      searchTxt:'',
      trends:savedTrends
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
            this.$router.push({ name: 'data', params: { id: '123' } });
        },
        error: function(){
            this.$swal({type: 'error', title: 'Error!', text: 'Oy vey!'});            
        },
        toastTopEnd() {
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
    },
    watch:{
        searchTxt: function(val) {
            this.trends = savedTrends.filter(w => w.name.trim().toLowerCase().startsWith('#'+val.trim().toLowerCase()));
        }
    }    
}
</script>

<style src="../../src/assets/css/searchresults.css"></style>
