<template>    
    <v-toolbar fixed color="white" flat :dense=false v-if="this.isMobile()" >
        <v-avatar size="35" @click="$emit('toggleSidebar')">
            <img src="@/assets/images/avatar-chris.gif" alt="Chris">
        </v-avatar>
        <v-toolbar-title class="page-title text-secondary ml-2">{{this.$route.name}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon class="text-secondary">
            <v-icon>fas fa-search</v-icon>
        </v-btn>
        <AddTrendButton/>             
    </v-toolbar>
</template>

<script>
import uiMixin from '@/mixins/uimixin.js'
import AddTrendButton from '@/components/AddTrendButton.vue'

export default {
    name: 'TopMenu',
    mixins: [uiMixin],
    components: { 
        AddTrendButton
    }
}
</script>

<style>
.v-toolbar__content{
    border-bottom-width: .01em !important;
    border-bottom-color: rgb(211, 215, 219) !important;
    border-bottom-style: solid;
}
</style>
