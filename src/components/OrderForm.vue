<template>
<v-dialog v-model="show" :fullscreen="this.isMobile()" hide-overlay transition="dialog-bottom-transition" width="500">
    <v-card>
    <v-card-title>
        <v-icon @click="show=false">fas fa-times</v-icon>
        <v-spacer></v-spacer>
        <div class="page-title text-secondary">Order Form</div>
    </v-card-title>
    <div class="order-form">
        <div>
            <div class="line-title">Price</div>
            <div class="text-line">
                <input type="tel" min="0" style="width:75%;text-align:right;" placeholder="$0" v-mask="'#########'" />
                <span >.</span>
                <input type="tel" min="0" @focus="$event.target.select()" style="width:50px;" class="three-border" placeholder="00" v-mask="'##'" />
            </div>
        </div>
        <div>
            <div class="line-title">Shares</div>
            <input type="tel" class="text-line w-100" min="0" placeholder="0" v-mask="'############'" />
        </div>
        <div>
            <div class="line-title">Cost</div>
            <input class="text-line w-100" min="0" readonly="true" value="$100.50"/>
        </div>        
        <div style="padding-top:32px;">
            <div class="btn-group w-100 searchcolumn-filters" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-outline-success btn-rnd">Place Order</button>
            </div>
        </div>
    </div>
    </v-card>
</v-dialog>    
</template>

<script>
import uiMixin from '@/mixins/uimixin.js'

export default {
    name: 'OrderFrom',
    mixins:[uiMixin],
    props: ['visible'],
    computed:{
        show:{
            get(){
                return this.visible;
            },
            set(value){
                if(!value){
                    this.$emit('close');
                }
            }
        }
    },    
    created(){
        const el = document.createElement('div');
        el.setAttribute('data-app', true);
        document.body.appendChild(el);
    }
}
</script>

<style scoped src="../../src/assets/css/orderform.css"></style>
