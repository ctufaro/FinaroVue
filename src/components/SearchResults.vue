<template>
    <div>
        <div class="flex-grid tricker-cont">
            <div class="col">
                <div class="tricker">AAPL</div>
                <div class="shares">120 SHARES</div>
            </div>
            <div class="col">
            <v-sparkline :value="value" color="#0079FF" line-width="5" padding="16"></v-sparkline>
            </div>
            <div class="col">
                <button type="button" v-on:click.prevent="success" class="btn btn-primary btn-sm">$105.67</button>
            </div>
        </div>
        <div class="flex-grid tricker-cont">
            <div class="col">
                <div class="tricker">AAPL</div>
                <div class="shares">120 SHARES</div>
            </div>
            <div class="col">
                <v-sparkline :value="value" color="#DE3442" line-width="5" padding="16"></v-sparkline>
            </div>
            <div class="col">
                <button type="button" v-on:click.prevent="error" class="btn btn-danger btn-sm">$105.67</button>
            </div>
        </div>
        <div class="flex-grid tricker-cont">
            <div class="col">
                <div class="tricker">AAPL</div>
                <div class="shares">120 SHARES</div>
            </div>
            <div class="col">
                <v-sparkline :value="value" color="#0079FF" line-width="5" padding="16"></v-sparkline>
            </div>
            <div class="col">
                <button type="button" v-on:click.prevent="toastTopEnd" class="btn btn-primary btn-sm">$105.67</button>
            </div>
        </div>
        <div class="flex-grid tricker-cont">
            <div class="col">
                <div class="tricker">AAPL</div>
                <div class="shares">120 SHARES</div>
            </div>
            <div class="col">
                <v-sparkline :value="value" color="#DE3442" line-width="5" padding="16"></v-sparkline>
            </div>
            <div class="col">
                <button type="button" class="btn btn-danger btn-sm">$105.67</button>
            </div>
        </div>
        <div class="flex-grid tricker-cont">
            <div class="col">
                <div class="tricker">AAPL</div>
                <div class="shares">120 SHARES</div>
            </div>
            <div class="col">
            <v-sparkline :value="value" color="#0079FF" line-width="5" padding="16"></v-sparkline>
            </div>
            <div class="col">
                <button type="button" class="btn btn-primary btn-sm">$105.67</button>
            </div>
        </div>
        <div class="flex-grid tricker-cont">
            <div class="col">
                <div class="tricker">AAPL</div>
                <div class="shares">120 SHARES</div>
            </div>
            <div class="col">
                <v-sparkline :value="value" color="#DE3442" line-width="5" padding="16"></v-sparkline>
            </div>
            <div class="col">
                <button type="button" class="btn btn-danger btn-sm">$105.67</button>
            </div>
        </div>
        <div class="flex-grid tricker-cont">
            <div class="col">
                <div class="tricker">AAPL</div>
                <div class="shares">120 SHARES</div>
            </div>
            <div class="col">
                <v-sparkline :value="value" color="#0079FF" line-width="5" padding="16"></v-sparkline>
            </div>
            <div class="col">
                <button type="button" class="btn btn-primary btn-sm">$105.67</button>
            </div>
        </div>
        <div class="flex-grid tricker-cont">
            <div class="col">
                <div class="tricker">AAPL</div>
                <div class="shares">120 SHARES</div>
            </div>
            <div class="col">
                <v-sparkline :value="value" color="#DE3442" line-width="5" padding="16"></v-sparkline>
            </div>
            <div class="col">
                <button type="button" class="btn btn-danger btn-sm">$105.67</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'SearchResults',
    data: () => ({
      balls:true,
      value: [200,675,410,390,310,460,250,240]
    }),
    methods: {
        success: function(){
                this.$swal({
                type: 'success',
                title: 'Success!',
                text: 'Excellent Work!'
            });
        },
        error: function(){
                this.$swal({
                type: 'error',
                title: 'Error!',
                text: 'Oy vey!'
            });
        },
        toastTopEnd() {
            this.$swal({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                type: 'success',
                title: 'Who am ?',
                text: `I'm a pop-up!`
            });
        }
    }
}
</script>

<style src="../../src/assets/css/searchresults.css"></style>
