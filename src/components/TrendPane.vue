<template>
    <div>
        <button type="button" class="close" v-on:click="$emit('close');">
            <span aria-hidden="true"><i class="fas fa-times"></i></span>
        </button>
        <router-view />                    
    </div>    
</template>

<script>
export default {
    name: 'TrendPane'  
}
</script>

<style src="../../src/assets/css/trendpane.css"></style>
