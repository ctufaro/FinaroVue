<template>
    <div class="settings-pane">
        <div class="setting">
            <p>Load Trends</p>
            <div>
                <button type="button" class="btn btn-outline-success btn-rnd" @click.prevent="loadTrends">Run It!</button>
            </div>
        </div>        
        <div class="setting">
            <p>Delete All Trends</p>
            <div>
                <button type="button" class="btn btn-outline-success btn-rnd" @click.prevent="deleteTrends">Run It!</button>
            </div>
        </div>
        <div class="setting">
            <p>Delete All Buy/Sell Orders</p>
            <div>
                <button type="button" class="btn btn-outline-success btn-rnd" @click.prevent="deleteOrders">Run It!</button>
            </div>
        </div>        
        <div class="setting">
            <p>Clear Cache</p>
            <div>
                <button type="button" class="btn btn-outline-success btn-rnd" @click.prevent="pageRefresh">Run It!</button>
            </div>
        </div>                        
    </div>
</template>

<script>
import uiMixin from '@/mixins/uimixin.js'

export default {
    name: 'Settings',
    mixins: [uiMixin],
    data: () => ({
      price:'',
    }),
    methods:{
        loadTrends(){
            let loader = this.showLoader();
            this.axios.get(`${this.$hostname}/api/utils/trends/load`)
            .then(() => {
                this.hideLoader(loader);
                this.$swal({type: 'success',title: 'Success!',text: 'Trends Loaded'});
            })
            .catch(error => {
                this.hideLoader(loader);
                this.$swal({type: 'error',title: 'Error!',text: error});
            }); 
        },
        deleteTrends(){
            let loader = this.showLoader();
            this.axios.get(`${this.$hostname}/api/utils/trends/clear`)
            .then(() => {
                this.hideLoader(loader);
                this.$swal({type: 'success',title: 'Success!',text: 'Trends Deleted'});
            })
            .catch(error => {
                this.hideLoader(loader);
                this.$swal({type: 'error',title: 'Error!',text: error});
            });             
        },
        deleteOrders(){
            let loader = this.showLoader();
            this.axios.get(`${this.$hostname}/api/utils/orders/clear`)
            .then(() => {
                this.hideLoader(loader);
                this.$swal({type: 'success',title: 'Success!',text: 'Orders Deleted'});
            })
            .catch(error => {
                this.hideLoader(loader);
                this.$swal({type: 'error',title: 'Error!',text: error});
            });             
        },        
        pageRefresh(){
            document.location.reload();
            this.$swal({type: 'success',title: 'Success!',text: 'Page Refreshing'});
        }
    }
}
</script>


<style scoped src="../../src/assets/css/settings.css"></style>
