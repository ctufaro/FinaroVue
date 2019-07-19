<template>
    <span>
        <v-container fluid style="padding-left:15px !important;">
            <v-layout column>
                <div class="mt-2" style="display:flex;">
                    <v-avatar size="96" class="mr-4">
                        <img :src="avatar" alt="Avatar">
                    </v-avatar>
                    <div>
                        <div class="port-txt text-secondary">PORTFOLIO</div>
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
        <v-expansion-panel>
            <v-expansion-panel-content v-for="(item,i) in ['Ordered Trends','Sold Trends','Awards','Friends']" :key="i">
                <template v-slot:header>
                    <div><strong>{{item}}</strong></div>
                </template>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </span>
</template>

<script>
export default {
    name: "MyTrends",
    data: () => ({
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

<style scoped>

.bal{
    letter-spacing: -1px;
}

.v-expansion-panel{
    -webkit-box-shadow: none;
    box-shadow: none;
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
</style>
