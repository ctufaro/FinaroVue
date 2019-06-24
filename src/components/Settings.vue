<template>
    <div class="settings-pane">
        <div class="setting">
            <p>Load Trends</p>
            <div>
                <button type="button" class="btn btn-outline-success btn-rnd" @click.prevent="loadTrends">Execute Command</button>
            </div>
        </div>        
        <div class="setting">
            <p>Delete All Trends</p>
            <div>
                <button type="button" class="btn btn-outline-success btn-rnd" @click.prevent="deleteTrends">Execute Command</button>
            </div>
        </div>
        <div class="setting">
            <p>Clear Cache</p>
            <div>
                <button type="button" class="btn btn-outline-success btn-rnd" @click.prevent="pageRefresh">Execute Command</button>
            </div>
        </div>                        
    </div>
</template>

<script>
export default {
    name: 'Settings',
    data: () => ({
      price:'',
    }),
    methods:{
        loadTrends(){
            this.axios.get(`${this.$hostname}/api/trends/load/new`)
            .then(() => {
                this.$swal({type: 'success',title: 'Success!',text: 'Trends Loaded'});
            })
            .catch(error => {
                this.$swal({type: 'error',title: 'Error!',text: error});
            }); 
        },
        deleteTrends(){
            this.axios.get(`${this.$hostname}/api/trends/clear`)
            .then(() => {
                this.$swal({type: 'success',title: 'Success!',text: 'Trends Deleted'});
            })
            .catch(error => {
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
