<template>
    <div>
        <div class="trnd-price">{{this.price}}</div>
        <div class="trnd-txt">{{this.name}}</div>
        <button type="button" @click.prevent="$router.push('order')" class="btn btn-primary btn-sm">BUY</button>
    </div>
</template>

<script>
export default {
    name:'TrendData',
    computed: {
        name: function () {            
            return (this.$parent.$parent.selectedTrend.name === null) ? ' ' : this.$parent.$parent.selectedTrend.name;
        },
        price: function () {            
            return (this.$parent.$parent.selectedTrend.price === null) ? ' ' : this.$parent.$parent.selectedTrend.price;
        }        
    }
}
</script>

<style>

</style>
