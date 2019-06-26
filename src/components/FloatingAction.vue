<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" :fullscreen="this.isMobile()" hide-overlay transition="dialog-bottom-transition" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="#63C394" :fixed="true" dark fab bottom right v-on="on" class="bottom-float">
          <v-icon>add</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="rt-title">
          <span class="page-title text-secondary">Add Trend</span>
        </v-card-title>
        <div class="order-form" style="padding:16px;">
            <div>
                <div class="line-title">Trend Name</div>
                <input class="text-line w-100" v-model="trendName" />
            </div>        
            <div style="padding-top:32px;">
                <div class="btn-group w-100 searchcolumn-filters" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-outline-success btn-rnd" style="margin-right:30px;width:10%;" @click="dialog=false">Close</button>
                    <button type="button" class="btn btn-outline-success btn-rnd" @click="saveTrend">Add Trend</button>
                </div>
            </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import uiMixin from '@/mixins/uimixin.js'

export default {
    name:"FloatingAction",
    mixins:[uiMixin],
    data: () => ({
      dialog:false,
      trendName:''      
    }),
    methods:{
      saveTrend(){
        this.axios.post(`${this.$hostname}/api/trends/user`,
        {
            userId: 1,
            trendName: this.trendName                      
        }).then(()=>{                
            this.$swal({type: 'success',title: 'Success!',text: 'Trend Created!'});
            this.trendName = '';
            //this.dialog = false;            
        });
      }
    },
    created(){
        const el = document.createElement('div');
        el.setAttribute('data-app', true);
        document.body.appendChild(el);
    }
}
</script>

<style src="@/assets/css/orderform.css"></style>

<style>
/*MOBILE*/
@media (max-width: 768px) {
.bottom-float {
    margin-bottom:53px;
  }
}
</style>