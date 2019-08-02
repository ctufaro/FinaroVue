<template>
    <span>
        <v-container fluid style="padding-left:15px !important;">
            <v-layout column>
                <div class="mt-2" style="display:flex;">
                    <v-avatar size="96" class="mr-4">
                        <img :src="avatar" alt="Avatar">
                    </v-avatar>
                    <div>
                        <div class="port-txt text-secondary">PORTFOLIO VALUE</div>
                        <div class="port-val"><span class="bal">{{balance}}</span><span class="unit">TDX</span></div>
                        <div>
                            <v-icon color="#D6AF36">fas fa-trophy</v-icon>
                            <v-icon color="#D7D7D7">fas fa-trophy</v-icon>
                            <v-icon color="#A77044">fas fa-trophy</v-icon>
                        </div>
                    </div>
                </div>
                <span class="font-weight-bold text-secondary mt-2" style="font-size:20px;">{{username}}</span>
            </v-layout>
        </v-container>
        <v-data-iterator :items="trends" hide-actions>
            <template v-slot:header>
                <div class="flex-container flex-pos tb-header">
                    <div>Trend</div>
                    <div>Holdings</div>
                    <div>Price</div>
                    <div>Alert</div>
                </div> 
            </template>            
            <template v-slot:item="props">
            <v-card>
                <v-card-text>
                    <div style="font-size:15px;font-weight:bold;background-color:#F4F6F7;" class="pa-1">{{ props.item.name }}</div>
                    <div class="flex-container flex-pos">        
                        <div class="pr-5"><v-spacer></v-spacer></div>                
                        <div style="font-size:18px;text-align:right;">
                            <div>$10.00</div>
                            <div style="font-size:16px">1.00</div>
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
export default {
    name: "Portfolio",
    data: () => ({
        trends: [{name: '#StarbucksCoffee'},{name: '#BadHairDay'},{name: '#GrabYourSchwartz'},{name: '#McDonalds'},{name: '#NYMets'},{name: '#AintYouASmarty'},{name: '#JohnBombAndHisMom'},{name: '#FinalCall'}]
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

.v-icon{
    padding-left:7px;
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

</style>
