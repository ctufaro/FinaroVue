<template>
    <span>
        <v-container fluid class="port-header">
            <v-layout column>
                <div style="display:flex;">
                    <div>
                        <div class="port-txt text-secondary">PORTFOLIO VALUE</div>
                        <div class="port-val"><span class="bal">{{balance}}</span><span class="unit">TDX</span></div>
                    </div>
                </div>
            </v-layout>
        </v-container>
        <v-data-iterator :items="trends" hide-actions>
            <template v-slot:header>
                <div class="flex-container flex-pos tb-header" :class="{ 'sticky-header': sticky && isMobile()}">
                    <div>Trend</div>
                    <div>Holdings</div>
                    <div>Price</div>
                    <div>Alert</div>
                </div>
                <div style="padding-bottom:29px;" v-if="sticky && isMobile()"></div> 
            </template>            
            <template v-slot:item="props">
            <v-card>
                <v-card-text>
                    <div style="font-size:15px;font-weight:bold;background-color:#F4F6F7;" class="pa-1">{{ props.item.name }}</div>
                    <div class="flex-container flex-pos">        
                        <div>
                            <button type="button" :class="'btn btn-outline-success ml-3'">Sell</button>
                        </div>                
                        <div style="font-size:18px;text-align:right;">
                            <div>$31.24</div>
                            <div style="font-size:16px">2.00</div>
                        </div>
                        <div style="font-size:18px;font-weight:bold;text-align:right;">
                            <div>$15.62 <i style="color:#63C394;" class="fas fa-arrow-up"></i></div>
                            <div style="color:#63C394;font-size:16px">+3.59%</div>
                        </div>
                        <div style="font-size:20px;color:#6B757B;"><i class="far fa-bell pr-3"></i></div>                        
                    </div>                    
                </v-card-text>
            </v-card>
            </template>
        </v-data-iterator>
    </span>
</template>

<script>
import uiMixin from '@/mixins/uimixin.js'
export default {
    name: "Portfolio",
    mixins: [uiMixin],
    data: () => ({
        sticky:false,
        trends: [{name: '#StarbucksCoffee'},{name: '#BadHairDay'},{name: '#SomeRubbishTrend'},{name: '#ItsOverJohnny'},{name: '#GrabYourSchwartz'},{name: '#McDonalds'},{name: '#NYMets'},{name: '#AintYouASmarty'},{name: '#JohnBombAndHisMom'},{name: '#FinalCall'}]
    }),
    computed: {
        username: function () {            
            return this.$store.getters.vxUser.username;
        },
        balance: function () {
            var bal = this.$store.getters.vxUser.balance;
            return parseFloat(bal).toLocaleString('en');        
        },
        avatar: function () {
            return this.$store.getters.vxUser.avatar
        }
    },
    mounted:function(){
        var vm = this
        window.addEventListener('scroll', function(){
            var scrollPos = window.scrollY;
            if(scrollPos >= 72){
                vm.sticky = true;
            } else {
                vm.sticky = false;
            }
        })
    }
} 
</script>

<style>

.bal{
    letter-spacing: -1px;
}

.v-expansion-panel{
    -webkit-box-shadow: none;
    box-shadow: none;
}

.v-expansion-panel__header{
    padding:0px !important;
}

.port-header{
    padding:15px !important; 
    padding-bottom:0px !important; 
}

.port-txt{
    font-size:15;
}

.port-val{
    margin-top:-10px !important;
    font-size:36px;
}

.unit{
    font-weight:200;
    font-size:25px;
    padding-left:1px;
}

.flex-container {
    display: flex;
}

.flex-pos{
    justify-content: space-between;
    align-items: center;
}

.v-card__text{
    padding:0px 0px !important;
}

.v-expansion-panel__header{
    padding:5px 8px !important;
}

.v-sheet{
    border-radius: 0px;
}

.tb-header{
    padding:5px 8px !important;
    background-color:#6B757B;
    color:white;
    font-size:12px;
}

.sticky-header{
    position: fixed;
    z-index: 1;
    left: 0;
    right: 1px;
    margin-top: -72px;
}

</style>
