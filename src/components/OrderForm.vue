<template>
<v-dialog v-model="show" :fullscreen="this.isMobile()" hide-overlay transition="dialog-bottom-transition" width="500">
    <v-card>
    <v-card-title class="pb-0">
        <v-icon @click="show=false">fas fa-times</v-icon>
        <v-spacer></v-spacer>
        <div class="page-title text-secondary">Order Form</div>        
    </v-card-title>
    <div class="order-form">
        <v-alert icon="new_releases" :value="true" color="#63C394" class="order-details">You are <strong>{{buysell}}ing</strong> the trend below. Please enter the amount of shares you wish to {{buysell}} before placing order.</v-alert>
        <div class="trnd-txt mt-3 mb-1">{{name}}</div>
        <div>
            <div class="line-title">Price</div>
            <input class="text-line w-100" min="0" readonly="true" v-model="price"/>
            <!--
            <div class="text-line">
                <input type="tel" min="0" style="width:75%;text-align:right;" placeholder="$0" v-mask="'#########'" />
                <span >.</span>
                <input type="tel" min="0" @focus="$event.target.select()" style="width:50px;" class="three-border" placeholder="00" v-mask="'##'" />
            </div>
            -->
        </div>
        <div>
            <div class="line-title">Shares</div>
            <input type="tel" class="text-line w-100" min="0" placeholder="0" v-model="shares" />
        </div>
        <div>
            <div class="line-title">Cost</div>
            <input class="text-line w-100" min="0" readonly="true" v-model="cost"/>
        </div>        
        <div style="padding-top:32px;">
            <div :class="this.isMobile() ? 'btn-group w-100 fixed-bottom' : 'btn-group w-100 searchcolumn-filters'" style="height:10%;" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-success btn-rnd" @click.prevent="placeOrder"><h5>Place Order</h5></button>
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
    props: ['visible','buysell'],
    data: () => ({
        shares: null
    }),    
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
        },
        name: function () {            
            return this.$store.getters.vxTrend.name;
        },
        price: function () {            
            return parseFloat(this.$store.getters.vxTrend.price).toFixed(2);
        },     
        color: function () {            
            return this.$store.getters.vxTrend.color;
        },
        change: function () {            
            return this.$store.getters.vxTrend.changeIn;
        },
        cost: function(){
            var result = (parseFloat(this.shares) * parseFloat(this.price)).toFixed(2)
            if(isNaN(result))
                return 0
            return (parseFloat(this.shares) * parseFloat(this.price)).toFixed(2);
        }         
    },
    watch:{
        visible(){
            this.resetForm();
        }
    },
    methods:{
        placeOrder(){
            this.show=false;
            // WHEN RETURNED FROM CALL, SHOW SWEETALERT SUCCESS/ERROR
            this.$swal({type: 'success',title: 'Success!',text: 'Your Order Has Been Placed',allowOutsideClick: false});                       
            //console.log(`Price: ${this.price} Shares: ${this.shares} Cost: ${this.cost} Buy/Sell: ${this.buysell} User: ${this.$store.getters.vxUser.id}`);
        },
        resetForm(){
            this.shares = null;
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
