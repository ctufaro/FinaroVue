<template>
    <span>
    <v-container fluid>
            <v-layout column>
                <div class="mt-2" style="display:flex;">
                    <v-avatar size="96" class="mr-2">
                        <img :src="avatar" alt="Avatar">
                    </v-avatar>
                    <div>
                        <h4><span>{{username}}</span></h4>
                        <div>
                            <v-icon color="#D6AF36">fas fa-trophy</v-icon>
                            <v-icon color="#D7D7D7">fas fa-trophy</v-icon>
                            <v-icon color="#A77044">fas fa-trophy</v-icon>
                        </div>
                    </div>
                </div>
            </v-layout>
    </v-container>
    </span>    
</template>

<script>
export default {
    name:'Account',
    computed: {
        username: function () {            
            return this.$store.getters.vxUser.username;
        },
        avatar: function () {
            return this.$store.getters.vxUser.avatar
        }
    }   
}
</script>

<style>
.v-icon{
    padding-right:7px;
}
</style>
