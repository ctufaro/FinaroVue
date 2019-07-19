import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export const store = new Vuex.Store({  
  state: {
    selectedTrend:{name:null, price: null, pricetxt:null, color:null, changeIn:null, priceHistory:[], dateHistory:[]},
    trendVolSent:{tweetVolume:[], loadDate:[], avgSentiment:[]},
    user:{id:null, username:null, balance:null, email:null, avatar:null, isloggedin:false, isnewuser:null}
  },
  plugins: [createPersistedState()],
  mutations: {
    changeTrend (state, trend) {
        state.selectedTrend.name = trend.Name;
        state.selectedTrend.price = trend.Price;
        state.selectedTrend.pricetxt = trend.PriceText;
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
    },
    setUserId(state, user){
        state.user.id = user.id;
        state.user.username = user.username;
        state.user.balance = user.balance;
        state.user.email = user.email;
        state.user.avatar = require(`@/assets/images/${user.avatar}`);
        state.user.isloggedin = user.isloggedin;
        state.user.isnewuser = user.isnewuser;
    },
    setUserLoggedOut(state){
        state.user.isloggedin = false;
    }
  },
  getters: {
    vxUser: state => state.user,
    vxTrend: state => state.selectedTrend,
    vxTrendVol: state => state.trendVolSent
  }
})