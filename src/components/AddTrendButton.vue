<template>
  <div class="text-xs-center">
    <v-btn icon class="text-secondary mr-1">
      <v-icon>fas fa-plus-circle</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" :fullscreen="this.isMobile()" hide-overlay transition="dialog-bottom-transition" width="500">
      <v-card>
        <v-card-title>
          <v-icon @click="dialog=false">fas fa-times</v-icon>
          <v-spacer></v-spacer>
          <div class="page-title text-secondary">Add Trend</div>
        </v-card-title>
        <div class="order-form" style="padding:16px;">
            <div>
                <div class="line-title">Trend Name</div>
                <input class="text-line w-100" v-model="trendName" />
            </div>        
            <div style="padding-top:32px;">
                <div class="btn-group w-100 searchcolumn-filters" role="group" aria-label="Basic example">
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
    name:"AddTrendButton",
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
        });
      },
      openDialog(){
        this.dialog=true;
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
