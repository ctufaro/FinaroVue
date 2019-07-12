import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    selectedTrend:{name:null, price: null, color:null, changeIn:null, priceHistory:[], dateHistory:[]},
    trendVolSent:{tweetVolume:[], loadDate:[], avgSentiment:[]}
  },
  mutations: {
    changeTrend (state, trend) {
        state.selectedTrend.name = trend.Name;
        state.selectedTrend.price = trend.PriceText;
        state.selectedTrend.color = trend.Gains == true? "#63C394" : "#EF4139";
        state.selectedTrend.changeIn = trend.ChangeIn;
    },
    changeTrendHistory (state, trendHis) {
        state.selectedTrend.priceHistory = trendHis.Prices;
        state.selectedTrend.dateHistory = trendHis.Times;
    },
    changeTrendVol (state, trendVol) {
        state.trendVolSent.tweetVolume = trendVol.TweetVolume;
        state.trendVolSent.loadDate = trendVol.LoadDate;
        state.trendVolSent.avgSentiment = trendVol.AvgSentiment;
    }
  },
  getters: {
    vxTrend: state => state.selectedTrend,
    vxTrendVol: state => state.trendVolSent
  }
})