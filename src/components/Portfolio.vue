<template>
    <div>
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
                    <div>Alert/Time</div>
                </div>
                <div style="padding-bottom:29px;" v-if="sticky && isMobile()"></div> 
            </template>            
            <template v-slot:item="props">
            <v-card>
                <v-card-text>
                    <div style="font-size:15px;background-color:#F4F6F7;" class="pa-1 flex-container flex-pos">
                        <div style="font-weight:bold;">{{ props.item.name }}</div>
                        <div style="font-size:smaller;"><TrendClock :dateprop="props.item.time"></TrendClock></div>
                    </div>
                    <div class="flex-container flex-pos">        
                        <div class="liquidate">
                            <button type="button" @click.prevent="addTrend(props.item)" :class="`btn ${props.item.selected ? 'btn-outline-success clicked': 'notclicked'}`">
                                <i class="fas fa-running"></i>
                            </button>
                        </div>                
                        <div style="font-size:18px;text-align:right;">
                            <div>$31.24</div>
                            <div style="font-size:16px">2.00</div>
                        </div>
                        <div style="font-size:18px;font-weight:bold;text-align:right;">
                            <div>$15.62 <i style="color:#63C394;" class="fas fa-arrow-up"></i></div>
                            <div style="color:#63C394;font-size:16px">+3.59%</div>
                        </div>
                        <div style="font-size:20px;color:#6B757B;">
                            <i class="far fa-bell pr-3"></i>
                        </div>                        
                    </div>
                    <div class="pa-0 pr-2 flex-container flex-pos-tm">
                        <div><strong>Time Bonus:</strong></div>
                    </div>                 
                </v-card-text>
            </v-card>
            </template>
        </v-data-iterator>
        <div style="position:relative; z-index:0;">
            <div v-if="this.count>0 && this.isMobile()" style="padding-bottom:50px;"></div>                 
            <div v-if="this.count>0" :class="this.isMobile() ? 'fixed-bottom btn-group mb-adj animate bounceIn' : 'btn-group w-100'" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-success btn-lg" style="border-radius:0;">Sell Off Trends ({{this.count}})</button>
                <button type="button" class="btn btn-secondary btn-lg" style="border-radius:0;" @click.prevent="clearTrends()">Clear Selections</button>
            </div>        
        </div>
    </div>
</template>

<script>
import uiMixin from '@/mixins/uimixin.js'
import TrendClock from '@/components/TrendClock.vue'

export default {
    name: "Portfolio",
    mixins: [uiMixin],    
    components:{
        TrendClock
    },    
    data: () => ({
        sticky:false,
        dump:new Map(),
        count:0,
        trends: [{name: '#StarbucksCoffee', bonus:1232234456456999, time:"2019-08-07T08:00:12", selected:false}
                ,{name: '#BadHairDay', bonus:1.23, time:"2019-08-07T00:08:44", selected:false}
                ,{name: '#SomeRubbishTrend', time:"2019-08-07T00:23:02", selected:false}
                ,{name: '#ItsOverJohnny', time:"2019-08-07T12:00:17", selected:false}
                ,{name: '#GrabYourSchwartz', time:"2019-08-07T00:05:36", selected:false}
                ,{name: '#McDonalds', time:"2019-08-07T08:00:42", selected:false}
                ,{name: '#NYMets', time:"2019-08-07T11:00:11", selected:false}
                ,{name: '#AintYouASmarty', time:"2019-08-06T00:00:01", selected:false}
                ,{name: '#JohnBombAndHisMom', time:"2019-08-05T00:00:05", selected:false}
                ,{name: '#FinalCall', time:"2019-08-02T20:00:47", selected:false}]
    }),
    methods:{
        addTrend(item){
            item.selected = !item.selected;
            if (this.dump.has(item.name)){
                this.dump.delete(item.name)
            } else {
                this.dump.set(item.name,item);
            }
            this.count = this.dump.size;
        },
        clearTrends(){
            this.dump.clear();
            this.count = 0;
            for (var t of this.trends) {
                t.selected = false;
            }
        }
    },
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

.flex-pos-tm{
    justify-content: flex-end;

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

.liquidate button{
    margin-left: 10px;
    padding: 2px 8px;
    margin-top:6px;
    margin-bottom:-6px;
}

.liquidate i{
    font-size:40px;
    margin-top:3px;
}

.bonus{
    background-color: #10A2BD;
    padding:1px 5px;
    margin-bottom:8px;
    border-radius: .25rem;
    color:white;
    font-size:smaller;
}

.mb-adj{
    margin-bottom:56px;
}

.mb-adj .btn{
    font-size:16px !important;
}

</style>
