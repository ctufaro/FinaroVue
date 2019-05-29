<template>
    <div class="order-form">    
        <div>
            <div class="line-title">Price</div>
            <div class="text-line">
                <input type="tel" min="0" style="width:75%;text-align:right;" placeholder="$0" v-mask="'#########'" v-model="price"/>
                <span >.</span>
                <input type="tel" min="0" @focus="$event.target.select()" style="width:50px;" class="three-border" placeholder="00" v-mask="'##'" v-model="cents"/>
            </div>
        </div>
        <div>
            <div class="line-title">Shares</div>
            <input type="tel" class="text-line w-100" min="0" placeholder="0" v-mask="'############'" v-model="shares"/>
        </div>
        <div>
            <div class="line-title">Cost</div>
            <input class="text-line w-100" min="0" readonly="true" value="$100.50"/>
        </div>        
        <div style="padding-top:32px;">
            <div class="btn-group w-100 searchcolumn-filters" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-outline-success btn-rnd">Place Order</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: 'OrderFrom',
    data: () => ({
      price:'',
      cents:'',
      shares:''
    })
}
</script>

<style scoped src="../../src/assets/css/orderform.css"></style>
