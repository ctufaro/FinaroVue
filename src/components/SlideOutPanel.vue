<template>
    <div>
        <nav id="sidebar" :class="{ active: isActive }">
            <div class="sidebar-header profile">
                <div style="flex:40%;">
                    <a href='/'>
                        <img src="@/assets/images/avatar-chris-main.jpg" style="width:65px;padding-left:5px;"/>
                    </a>
                </div>
                <div style="flex:60%;">
                    <a href='/' id="sidebar-logo">
                        <img src="@/assets/images/trndxlogo-white.png" style="width:145px;padding-left:25px;"/>
                    </a>
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
                    <router-link to="/myfeed" @click.native="toggleSidebar();">My Feed</router-link>
                </li>                               
                <li>
                    <router-link to="/mytrends" @click.native="toggleSidebar();">My Trends<span class="float-right circle">22</span></router-link>
                </li>
                <li>
                    <router-link to="/notifications" @click.native="toggleSidebar();">Notifications</router-link>
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
        <v-btn :fixed="true" icon bottom left to="/settings" @click.native="exit();" style="margin-left:50px">
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
        exit() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) { /* Firefox */
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE/Edge */
                document.msExitFullscreen();
            }           
        }        
    }
}
</script>

<style>
/*
.slideout-panel .slideout-wrapper .slideout {
    transition: all 0.5s ease !important;;
    transition-delay: 50ms !important;
}
*/
</style>
