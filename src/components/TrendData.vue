<template>
    <div>
        <div class="trnd-price">$123.45</div>
        <div class="trnd-txt">#gameofthrones</div>
        <button type="button" @click.prevent="$router.push('order')" class="btn btn-primary btn-sm">BUY</button>
    </div>
</template>

<script>
export default {
    name:'TrendData'
}
</script>

<style>

</style>
