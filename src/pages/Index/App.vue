<template>
    <span>
        <vue-headful title="trndx - own the trend" description="" />
        <v-toolbar dense fixed flat color="transparent">
            <v-spacer></v-spacer>
            <div>
                <v-btn class="grey darken-3 white--text menu-btn" v-on:click="goTo('/exchange.html#/search', $event)">Visit Exchange</v-btn>
                <v-btn class="grey darken-3 white--text menu-btn" v-on:click.prevent="domesomething()">Sign Up</v-btn>
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
            <v-footer dark height="auto" fixed>
                <v-card class="flex" flat tile>
                    <v-card-actions class="grey darken-3 justify-center">
                        &copy;2019 — <strong>trndx</strong>
                    </v-card-actions>
                </v-card>
            </v-footer>
        </div>
    </span>
</template>

<script>
export default {
    methods:{
        domesomething:function(){
        this.$swal({
            type: 'success',
            title: 'Success!',
            text: 'Excellent Work!'
        });      
    },
    goTo:function(url, event){
        event.preventDefault();
        document.location.href = url;
    }
  }
}
</script>

<style src="@/assets/css/index.css"></style>



