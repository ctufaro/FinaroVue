<template>    
    <v-toolbar :fixed="this.isMobile()" color="white" flat :dense=false >
        <v-avatar size="35" @click="$emit('toggleSidebar')">
            <img src="@/assets/images/avatar-chris.jpg" alt="Chris">
        </v-avatar>
        <v-toolbar-title class="page-title text-secondary ml-2">{{this.$route.name}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon class="text-secondary" @click.prevent="showSearch=!showSearch" v-if="this.$route.name=='Trends'">
            <v-icon>fas fa-search</v-icon>
        </v-btn>
        <AddTrendButton v-if="this.$route.name=='Trends'"/>
        <v-btn icon class="text-secondary" v-if="this.$route.name=='Trends'">
            <v-icon>fas fa-user-friends</v-icon>
        </v-btn>        
        <div v-if="showSearch">
            <v-toolbar fixed color="white" flat :dense=false>
                <v-btn icon @click.prevent="showSearch=!showSearch">
                    <v-icon>fas fa-chevron-left</v-icon>
                </v-btn>
                    <v-text-field solo label="Search..." v-model="searchTxt" :flat=true :clearable=true></v-text-field>
            </v-toolbar>
        </div>    
    </v-toolbar>
</template>

<script>
import uiMixin from '@/mixins/uimixin.js'
import {eventBus} from '@/eventbus.js'
import AddTrendButton from '@/components/AddTrendButton.vue'

export default {
    name: 'TopMenu',
    data: () => ({
        showSearch:false,
        searchTxt:''
    }),    
    mixins: [uiMixin],
    components: { 
        AddTrendButton
    },
    watch: {
        '$route' () {
            this.showSearch=false;
        },
        searchTxt(val){
            eventBus.$emit('searchTextChanged',val)
        }
    }    
}
</script>

<style>
.v-toolbar__content{
    border-bottom-width: .01em !important;
    border-bottom-color: rgb(211, 215, 219) !important;
    border-bottom-style: solid;
}
.v-label{
    font-size:22px !important;
}
.v-input{
    font-size:22px !important;
    padding:0px!important;
    margin: 0px!important
}
.v-input__slot{
    margin: 0px!important
}
</style>
