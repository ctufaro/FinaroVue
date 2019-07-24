<template>
<v-dialog v-model="show" :fullscreen="this.isMobile()" hide-overlay transition="dialog-bottom-transition" width="500">
    <v-card>
    <v-card-title class="pb-0">
        <v-icon @click="show=false">fas fa-times</v-icon>
        <v-spacer></v-spacer>
        <div class="page-title text-secondary">{{buysell}} Order Form</div>        
    </v-card-title>
    <div class="order-form">        
        <v-alert :value="true" :color="buysell=='buy'?'#63C394':'#EF4139'" class="order-details">
        <span class="lbl">balance</span>
        <div class="balance">            
            <span class="value">{{this.$store.getters.vxUser.balance}}</span>
            <span class="unit">TDX</span>
        </div><!--Please enter the amount of shares you wish to {{buysell}} before placing order.-->
        </v-alert>        
        <div class="trnd-txt mt-3 mb-1">{{name}}</div>
        <div>
            <div class="line-title">Price</div>
            <input class="text-line w-100" min="0" readonly="true" v-model="price"/>
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
                <button type="button" :class="`btn btn-${this.buysell=='buy'?`success`:`danger`} btn-rnd`" style="text-transform:capitalize;" @click.prevent="placeOrder"><h5>Place {{buysell}} Order</h5></button>
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
            //this.show=false;
            this.axios.post(`${this.$hostname}/api/orders/new`,
            {
                userId:this.$store.getters.vxUser.id,
                trendId:this.$store.getters.vxTrend.id,
                trendName:this.$store.getters.vxTrend.name,
                tradeTypeId: (this.buysell=='buy') ? 1 : 2,
                price:this.price,
                quantity: (this.shares==null) ? 0:this.shares           
            }).then((response) =>{
                this.$store.commit('setUserBalance',parseFloat(response.data));
                this.resetForm();
                this.$swal({type: 'success',title: 'Success!',text: 'Your Order Has Been Placed',allowOutsideClick: false});                       
            }).catch(error => {
                this.$swal({type: 'error',title: error.response.data.title, text: error.response.data.message});
            });
            
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
