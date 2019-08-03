<template>
    <v-dialog v-model="show" :fullscreen="this.isMobile()" hide-overlay transition="dialog-bottom-transition" width="500">
        <v-card>
            <v-card-title class="pb-0">
                <v-icon @click="show=false">fas fa-times</v-icon>
                <v-spacer></v-spacer>
                <div class="page-title text-secondary">{{buysell}} some shares</div>
            </v-card-title>
            <div class="order-form">
                <v-alert :value="true" :color="buysell=='buy'?'#63C394':'#EF4139'" class="order-details">
                    <span class="lbl">balance</span>
                    <div class="balance">
                        <span class="value">{{this.$store.getters.vxUser.balance}}</span>
                        <span class="unit">TDX</span>
                    </div>
                    <!--Please enter the amount of shares you wish to {{buysell}} before placing order.-->
                </v-alert>
                <div class="trnd-txt mt-1 mb-0">{{name}}</div>
                <v-container fluid grid-list-md pa-2>
                    <v-layout wrap>
                        <v-flex v-for="card in cards" :key="card.title" v-bind="{ [`xs${card.flex}`]: true }">
                            <v-card @click.prevent="testOrder">
                                <v-img :src="card.src" class="white--text" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                                    <v-card-title class="fill-height align-end pr-0">
                                        <div style="width:100%;background-color: rgba(0,0,0,0.3);">
                                            <span style="font-size:16px;font-weight:bold;">{{card.title}}</span>
                                        </div>
                                    </v-card-title>
                                </v-img>
                                <!--
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn icon>
                                        <h3>{{`${Math.floor(Math.random() * (100 - 0 + 1)) + 0}`}}</h3>
                                    </v-btn>
                                </v-card-actions>
                                -->
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
                <!--
                <div>
                    <div class="line-title">Price</div>
                    <input class="text-line w-100" min="0" readonly="true" v-model="price"/>
                </div>
                <div>
                    <div class="line-title">Shares<span v-if="buysell=='sell' && ownedshares > 0"><v-chip color="#CCC" @click.prevent="shares=ownedshares">{{ownedshares}}</v-chip></span></div>
                    <input type="tel" class="text-line w-100" min="0" placeholder="0" v-model="shares" />
                </div>
                <div>
                    <div class="line-title">Cost</div>
                    <input class="text-line w-100" min="0" readonly="true" v-model="cost"/>
                </div>        
                <div style="padding-top:32px;">
                    <div :class="this.isMobile() ? 'btn-group w-100 fixed-bottom' : 'btn-group w-100 searchcolumn-filters'" style="height:10%;" role="group" aria-label="Basic example">
                        <button type="button" :loading="loading" :class="`btn btn-${this.buysell=='buy'?`success`:`danger`} btn-rnd`" style="text-transform:capitalize;" @click.prevent="placeOrder">
                            <h5 v-if="!loading">Place {{buysell}} Order</h5>
                            <v-progress-circular indeterminate color="white" v-if="loading"></v-progress-circular>
                        </button>
                    </div>
                </div>
                -->
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
import uiMixin from '@/mixins/uimixin.js'

export default {
    name: 'OrderFrom',
    mixins: [uiMixin],
    props: ['visible', 'buysell'],
    data: () => ({
        shares: null,
        ownedshares: 0,
        loading: false,
        cards: [{
                title: '10 Shares',
                src: 'https://image.flaticon.com/icons/svg/138/138292.svg',
                flex: 6
            },
            {
                title: '100 Shares',
                src: 'https://image.flaticon.com/icons/svg/138/138255.svg',
                flex: 6
            },
            {
                title: '1000 Shares',
                src: 'https://www.flaticon.com/premium-icon/icons/svg/733/733186.svg',
                flex: 6
            },
            {
                title: '10000 Shares',
                src: 'https://image.flaticon.com/icons/svg/1327/1327029.svg',
                flex: 6
            },            
        ],
    }),
    computed: {
        show: {
            get() {
                return this.visible;
            },
            set(value) {
                if (!value) {
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
        cost: function () {
            var result = (parseFloat(this.shares) * parseFloat(this.price)).toFixed(2)
            if (isNaN(result))
                return 0
            return (parseFloat(this.shares) * parseFloat(this.price)).toFixed(2);
        }
    },
    watch: {
        visible(val) {
            this.resetForm();
            if (val)
                this.formJustOpened();
        }
    },
    methods: {
        placeOrder() {
            this.loading = true;
            this.axios.post(`${this.$hostname}/api/orders/new`, {
                userId: this.$store.getters.vxUser.id,
                trendId: this.$store.getters.vxTrend.id,
                trendName: this.$store.getters.vxTrend.name,
                tradeTypeId: (this.buysell == 'buy') ? 1 : 2,
                price: this.price,
                quantity: (this.shares == null) ? 0 : this.shares
            }).then((response) => {
                this.$store.commit('setUserBalance', parseFloat(response.data));
                this.resetForm();
                this.getUserShareCount();
                this.$swal({
                    type: 'success',
                    title: 'Success!',
                    text: 'Your Order Has Been Placed',
                    showConfirmButton: false
                });
                this.loading = false;
            }).catch(error => {
                this.$swal({
                    type: 'error',
                    title: error.response.data.title,
                    text: error.response.data.message,
                    showConfirmButton: false
                });
                this.loading = false;
            });
        },
        testOrder(){
            this.$swal({
                type: 'success',
                title: 'Success!',
                text: 'Your Order Has Been Placed',
                showConfirmButton: false
            });
            this.show=false; //closes the dialog pop-up
            this.$parent.$parent.$parent.slideIn = false; //closes the pane (mobile)
            this.$router.push('portfolio'); //navigate to portfolio
        },
        resetForm() {
            this.shares = null;
        },
        formJustOpened() {
            this.getUserShareCount();
        },
        getUserShareCount() {
            let userId = parseInt(this.$store.getters.vxUser.id);
            this.axios.get(`${this.$hostname}/api/trends/user/count/${userId}/${this.name.replace("#", "%23")}`).then(response => {
                this.ownedshares = parseFloat(response.data);
            });
        }
    },
    created() {
        const el = document.createElement('div');
        el.setAttribute('data-app', true);
        document.body.appendChild(el);
    }
}
</script>

<style scoped src="../../src/assets/css/orderform.css"></style>
