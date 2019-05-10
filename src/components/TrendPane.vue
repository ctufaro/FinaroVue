<template>
    <div>
        <div style="display:flex;">            
            <button type="button" class="back-chevron" v-on:click="$emit('close');">
                <span aria-hidden="true"><i class="fas fa-chevron-left"></i></span>                
            </button> 
            <span class="page-name">{{this.$route.name}}</span>           
        </div>
        <router-view />                    
    </div>    
</template>

<script>
export default {
    name: 'TrendPane'  
}
</script>

<style src="../../src/assets/css/trendpane.css"></style>
