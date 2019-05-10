<template>
    <div class="order-form">        
        <div>
            <div class="line-title">Price</div>
            <input type="text" class="text-line" maxlength="13" placeholder="$0.00"/>
        </div>
        <div>
            <div class="line-title">Shares</div>
            <input type="text" class="text-line" maxlength="13" placeholder="0"/>
        </div>
        <div style="padding-top:64px;">
            <div class="btn-group w-100 searchcolumn-filters" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary">Place Order</button>
                &nbsp;&nbsp;
                <button type="button" class="btn btn-warning">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped src="../../src/assets/css/orderform.css"></style>
