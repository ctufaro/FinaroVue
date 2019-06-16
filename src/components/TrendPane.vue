<template>
    <div>
        <div style="display:flex;">            
            <button type="button" class="back-chevron" v-on:click="$emit('goback');">
                <span aria-hidden="true"><i class="fas fa-chevron-left"></i></span>                
            </button>
        </div>
        <transition name="router-anim" :enter-active-class="this.transitionIn" :leave-active-class="transitionOut">
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
            transitionOut: ''
        }
    },    
    watch: {
        '$route' (to) {         
            if(to.path == '/order'){
                this.transitionIn = "animated fadeInRight";
                this.transitionOut = "";
            } else {
                this.transitionIn = "animated fadeInRight";
                this.transitionOut = "";
            }            
        }               
    }    
}
</script>

<style src="../../src/assets/css/trendpane.css"></style>
