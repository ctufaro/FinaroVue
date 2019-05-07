<template>
    <div>
        <button type="button" class="close" v-on:click="$emit('close');">
            <span aria-hidden="true"><i class="fas fa-times"></i></span>
        </button>
        <div class="trnd-price">{{this.selTrend.price}}</div>
        <div class="trnd-txt">{{this.selTrend.name}}</div>                        
    </div>    
</template>

<script>
export default {
    name: 'TrendPane',
    props: {
        selTrend: Object
    }
}
</script>

<style src="../../src/assets/css/trendpane.css"></style>
