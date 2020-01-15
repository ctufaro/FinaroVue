import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export const store = new Vuex.Store({  
  state: {
    selectedTrend:{id:null,name:null, price: null, pricetxt:null, color:null, changeIn:null, priceHistory:[], dateHistory:[]},
    trendVolSent:{tweetVolume:[], loadDate:[], avgSentiment:[]},
    user:{id:null, username:null, balance:null, email:null, avatar:null, isloggedin:false, isnewuser:null},
    snackBar:{show:false, type:'', text:'', position:''}
  },
  plugins: [createPersistedState()],
  mutations: {
    changeTrend (state, trend) {
        state.selectedTrend.id = trend.Id;
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
        state.user.id = null;
        state.user.username = null; 
        state.user.balance = null; 
        state.user.email = null; 
        state.user.avatar = null; 
        state.user.isnewuser = null;
        state.user.isloggedin = null;
        state.selectedTrend.id = null;
        state.selectedTrend.name = null;
        state.selectedTrend.price = null
        state.selectedTrend.pricetxt = null;
        state.selectedTrend.color = null;
        state.selectedTrend.changeIn = null;      
        state.selectedTrend.priceHistory = []; 
        state.selectedTrend.dateHistory = [];
        state.snackBar.show = false;
        state.snackBar.type = '';
        state.snackBar.text = '';
        state.snackBar.position = '';
        state.trendVolSent.tweetVolume = [];
        state.trendVolSent.loadDate = [];
        state.trendVolSent.avgSentiment = [];
    },
    setUserBalance(state,balance){
        state.user.balance = balance;
    },
    openSnack(state,snack){
        state.snackBar.show = true;
        state.snackBar.type = snack.type;
        state.snackBar.text = snack.text;
        state.snackBar.position = snack.position;
    },
    closeSnack(state){
        state.snackBar.show = false;
    }
  },
  getters: {
    vxUser: state => state.user,
    vxTrend: state => state.selectedTrend,
    vxTrendVol: state => state.trendVolSent,
    vxSnackBar: state => state.snackBar
  }
})