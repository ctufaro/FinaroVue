<template>
    <div class="panel">
        <nav id="sidebar" :class="{ active: isActive }">
            <div class="sidebar-header profile">
                <div style="flex:40%;" @click.prevent="toggleSidebar();$router.push('/account')">
                    <img :src="avatar" style="width:65px;padding-left:5px;"/>
                </div>
                <div style="flex:60%;">
                    <span id="sidebar-logo">
                        <img src="@/assets/images/trndxlogo-white.png" style="width:145px;padding-left:25px;"/>
                    </span>
                </div>
            </div>

            <ul class="list-unstyled components">
                <!--<li>
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">My stocks</a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="#">Home 1</a>
                        </li>
                        <li>
                            <a href="#">Home 2</a>
                        </li>
                        <li>
                            <a href="#">Home 3</a>
                        </li>
                    </ul>
                </li>-->                         
                <li>
                    <router-link to="/search" @click.native="toggleSidebar();">Trends</router-link>
                </li>
                <li>
                    <router-link to="/myfeed" @click.native="toggleSidebar();">Feed</router-link>
                </li>                               
                <li>
                    <router-link to="/portfolio" @click.native="toggleSidebar();">Portfolio</router-link>
                </li>
                <li>
                    <router-link to="/notifications" @click.native="toggleSidebar();">Notifications<span class="float-right circle">1</span></router-link>
                </li>                  
                <!--
                <li>
                    <a href="#">Wallet</a>
                </li>
                -->                                                                                            
            </ul>
        </nav>
        <v-btn :fixed="true" icon bottom left to="/settings" @click.native="toggleSidebar();">
            <v-icon color="#9FABB6">fas fa-cog</v-icon>
        </v-btn>
        <v-btn :fixed="true" icon bottom left @click="signOut('index.html#/home', $event)" style="margin-left:50px">
            <v-icon color="#9FABB6">fas fa-sign-out-alt</v-icon>
        </v-btn>              
    </div>
</template>

<script>
export default {
    name:'SlideOutPanel',
    props:{
        isActive:Boolean
    },
    data() {
        return {};
    },    
    methods: {
        closePanel() {
            this.$emit("closePanel");
        },
        toggleSidebar(){
            this.$emit("closePanel");
        },
        goTo:function(url, event){
            event.preventDefault();
            document.location.href = url;
        },
        signOut:function(url, event){
            localStorage.clear();
            this.$store.commit('setUserLoggedOut');
            event.preventDefault();
            document.location.href = url;
        }             
    },
    computed:{
        avatar: function () {
            return this.$store.getters.vxUser.avatar
        }
    } 
}
</script>

<style scoped>
.panel{
    background-color: #f4f7f9 !important;
    border-right-width: .01em;
    border-right-color: rgb(214, 214, 214);
    border-right-style: solid;
}
</style>
