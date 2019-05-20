<template>
    <div>
        <div style="display:flex;">            
            <button type="button" class="back-chevron" v-on:click="$emit('goback');">
                <span aria-hidden="true"><i class="fas fa-chevron-left"></i></span>                
            </button>            
        </div>
        <router-view name="thirdpane"/>                    
    </div>    
</template>

<script>
export default {
    name: 'TrendPane'  
}
</script>

<style src="../../src/assets/css/trendpane.css"></style>
