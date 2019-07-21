<template>
    <span class="animate fadeIn">
        <vue-headful title="trndx - own the trend" description="" />
        <v-toolbar dense fixed flat color="transparent">
            <v-spacer></v-spacer>
            <div>
                <v-btn class="menu-btn" style="display:none" outline flat v-on:click="goTo('/exchange.html#/search', $event)">Visit Exchange</v-btn>
                <v-btn class="menu-btn" outline flat @click.stop="dialog = true">Sign Up/In</v-btn>
            </div>
        </v-toolbar>
        <div>
            <v-app>
                <v-container bg fill-height grid-list-md text-xs-center>
                    <v-layout row wrap align-center>
                        <v-flex>
                            <div class="main-content animate bounceIn">
                                <img src="@/assets/images/trndxmainlogo-white.png" />
                            </div>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-app>
            <v-footer height="auto" fixed >
                <v-card class="flex" flat tile color="#6B757B">
                    <v-card-actions class="justify-center">
                        <span style="color:white">Copyright © 2019 <strong>trndx</strong></span>
                    </v-card-actions>
                </v-card>
            </v-footer>
        </div>
        <v-dialog v-model="dialog" max-width="550">
            <SignUpIn @close="redirect()" v-bind:touch-close="dialog"/>
        </v-dialog>
    </span>
</template>

<script>

import SignUpIn from '@/components/SignUpIn.vue'

export default {
    name:'Index',
    data: () => ({
        dialog: false
    }),
    components:{
        SignUpIn
    },
    methods:{
        doSomething:function(){
            this.$swal({
                type: 'success',
                title: 'Success!',
                text: 'Excellent Work!'
            });      
        },
        goTo:function(url, event){
            this.dialog = false;
            event.preventDefault();
            document.location.href = url;
        },
        redirect(){
            this.dialog = false;
            document.location.href = '/exchange.html#/search';
        }
    },
    mounted(){
        if(this.$store.getters.vxUser.isloggedin)
            document.location.href = '/exchange.html#/search';
    }
}
</script>

<style src="@/assets/css/index.css"></style>



