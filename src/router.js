import Vue from 'vue'
import Router from 'vue-router'
import Community from './components/Community.vue'
import SearchResults from './components/SearchResults.vue'
import TrendData from './components/TrendData.vue'
import OrderForm from './components/OrderForm.vue'
import PriceVol from './components/PriceVol.vue'
import TweetVol from './components/TweetVol.vue'


Vue.use(Router)

//DONT CHANGE ROUTE NAMES
export default new Router({
  routes: [
    {
      path: '/community',
      name: 'Community',
      components: {
        secondpane:Community
      }
    },     
    {
      path: '/search',
      name: 'Trend Search',
      components: {
        secondpane:SearchResults
      }
    },    
    {
      path: '/data',
      name: 'Trend Data',
      components: {
        secondpane:SearchResults,
        thirdpane:TrendData
      },
      children: [
        { 
          name:'Price Chart',
          path: '/pricevol',
          components: {
            trendviews:PriceVol
          }
        },
        {
          path: '/tweetvol',
          components: {
            trendviews:TweetVol
          }
        }
      ]
    },
    {
      path: '/order',
      name: 'Order Form',
      components: {
        secondpane:SearchResults,
        thirdpane:OrderForm
      }
    }
    //,        
    //{
      //path: '/about',
      //name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    //}
  ]
})
