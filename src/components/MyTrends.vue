<template>
    <span>
        <v-container fluid style="padding-left:15px !important;">
            <v-layout column>
                <v-flex class="mt-2">
                    <v-avatar size="96" class="mr-4">
                        <img src="@/assets/images/avatar-chris-main.jpg" alt="Avatar">
                    </v-avatar>
                </v-flex>
                <span class="font-weight-bold text-secondary mt-2" style="font-size:20px;">Christopher Tufaro</span>
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
    name:"MyTrends"
}
</script>

<style>
.v-expansion-panel{
    -webkit-box-shadow: none;
    box-shadow: none;
}
</style>
