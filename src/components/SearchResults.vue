<template>
    <div>
        <span v-for="trend in trends" :key="trend.id">
            <div class="sr-container">
                <div>
                    <div class="tag">{{trend.name}}</div>                    
                </div>
                <div class="r-row">
                    <div style="flex:60%;">
                        <v-sparkline :value="trend.prices" color="#DE3442" line-width="5" padding="8"></v-sparkline> 
                    </div>  
                    <div style="flex:40%;">                 
                        <button type="button" style="width:95px;font-size:20px;" v-on:click.prevent="error" class="btn btn-danger btn-sm">{{trend.price}}</button>
                    </div>
                </div>
                <div class="r-row">
                    <div style="flex:50%;">
                        <div class="shares">1200000</div>
                    </div>  
                    <div style="flex:50%;text-align: right;">                 
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
      trends:[{key:1, name:"#rosieteddyharrison",prices:[200,675,410,390,310,460,250,240],price:'$1.00'},
              {key:2, name:"#thisisfuckingcorny",prices:[200,675,410,390,310,460,250,240],price:'$1.00'}]
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
