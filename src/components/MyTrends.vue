<template>
    <v-container fluid>
        <v-layout column>
            <v-card>
                <v-card-text>
                    <v-flex class="mb-4">
                        <v-avatar size="96" class="mr-4">
                            <img src="@/assets/images/avatar-chris-main.jpg" alt="Avatar">
                        </v-avatar>                        
                    </v-flex>
                    <span class="font-weight-bold text-secondary" style="font-size:20px;">Christopher Tufaro</span>
                </v-card-text>
                <v-expansion-panel>
                    <v-expansion-panel-content v-for="(item,i) in ['Ordered Trends','Sold Trends','Awards','Friends']" :key="i">
                        <template v-slot:header>
                            <div><strong>{{item}}</strong></div>
                        </template>
                        <v-card>
                            <v-card-text></v-card-text>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name:"MyTrends"
}
</script>

<style>
.v-expansion-panel{
    -webkit-box-shadow: none;
    box-shadow: none;
}
</style>
