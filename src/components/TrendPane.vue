<template>
    <div>
        <div class="header">            
            <button type="button" class="back-chevron" v-on:click="$emit('goback');">
                <span aria-hidden="true"><i class="fas fa-chevron-left"></i></span>                
            </button>
            <div style="margin-left:auto;">
                {{this.$route.query.name}}
            </div>
        </div>
        <transition name="router-anim" :enter-active-class="this.transitionIn">
            <router-view name="thirdpane"/>                    
        </transition>
    </div>    
</template>

<script>
export default {
    name: 'TrendPane',
    props: ['selectedTrend'],   
    data () {
        return {
            transitionIn: '',
        }
    },    
    watch: {
        '$route' (to) {         
            if(to.path == '/order' || to.path == '/myfeedtrend'){
                this.transitionIn = "animated fadeInRight";
            } else {
                this.transitionIn = "animated fadeInRight";
            }            
        }               
    }    
}
</script>

<style src="../../src/assets/css/trendpane.css"></style>
