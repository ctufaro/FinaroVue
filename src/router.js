import Vue from 'vue'
import Router from 'vue-router'
import MyFeed from './components/MyFeed.vue'
import MyFeedTrend from './components/MyFeedTrend.vue'
import SearchResults from './components/SearchResults.vue'
import Settings from './components/Settings.vue'
import MyTrends from './components/MyTrends.vue'
import TrendData from './components/TrendData.vue'
import OrderForm from './components/OrderForm.vue'
import PriceVol from './components/PriceVol.vue'
import TweetVol from './components/TweetVol.vue'
import TrendFad from './components/TrendFad.vue'

Vue.use(Router)

//DONT CHANGE ROUTE NAMES
export default new Router({
  routes: [
    {
      path: '/myfeed',
      name: 'My Feed',
      components: {
        secondpane:MyFeed
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
      path: '/settings',
      name: 'Settings',
      components: {
        secondpane:Settings
      }
    },
    {
      path: '/mytrends',
      name: 'My Trends',
      components: {
        secondpane:MyTrends
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
        },
        {
          path: '/trendfad',
          components: {
            trendviews:TrendFad
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
    },
    {
      path: '/myfeedtrend',
      name: 'My Feed Trend',
      components: {
        secondpane:MyFeed,
        thirdpane:MyFeedTrend
      },
      props: true
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
