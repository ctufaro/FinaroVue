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
      value: [
        200,
        675,
        410,
        390,
        310,
        460,
        250,
        240
      ]
    })
}
</script>

<style src="../../src/assets/css/searchresults.css"></style>
