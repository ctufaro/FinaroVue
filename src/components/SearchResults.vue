<template>
    <div>
        <span v-for="trend in trends" :key="trend.id">
            <div class="sr-container">
                <div>
                    <div class="tag">{{trend.name}}</div>                    
                </div>
                <div class="r-row">
                    <div>
                        <v-sparkline :value="trend.prices" :color="trend.color" line-width="4" :auto-draw="true" padding="8"></v-sparkline> 
                    </div>  
                    <div style="text-align: right;">                 
                        <button type="button" v-on:click.prevent="error" class="btn btn-danger btn-sm">{{trend.price}}</button>
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
    </div>
</template>

<script>

export default {
    name: 'SearchResults',
    data: () => ({
      balls:true,
      //value: [200,675,410,390,310,460,250,240],
      trends:[{key:1, name:"#rosieteddyharrison",prices:[200,675,410,390,310,460,250,240],price:'$1.00',color:'#DE3442'},
              {key:2, name:"#thisisfuckingcorny",prices:[390,123,250,390,460,675,250,390],price:'$1.00',color:'#0079FF'}]
    }),
    methods: {
        success: function(){
                this.$swal({
                type: 'success',
                title: 'Success!',
                text: 'Excellent Work!'
            });
        },
        error: function(){
                this.$swal({
                type: 'error',
                title: 'Error!',
                text: 'Oy vey!'
            });
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
        }
    }
}
</script>

<style src="../../src/assets/css/searchresults.css"></style>
