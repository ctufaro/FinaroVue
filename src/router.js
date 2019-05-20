import Vue from 'vue'
import Router from 'vue-router'
import MyFeed from './components/MyFeed.vue'
import SearchResults from './components/SearchResults.vue'
import TrendData from './components/TrendData.vue'
import OrderForm from './components/OrderForm.vue'
import SevenDay from './components/SevenDay.vue'
import TweetCloud from './components/TweetCloud.vue'
import Hot from './components/Hot.vue'

Vue.use(Router)

//DONT CHANGE ROUTE NAMES
export default new Router({
  routes: [
    {
      path: '/',
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
      path: '/data',
      name: 'Trend Data',
      components: {
        secondpane:SearchResults,
        thirdpane:TrendData
      },
      children: [
        { 
          name:'Seven Day',
          path: '/sevenday',
          components: {
            trendviews:SevenDay
          }
        },
        {
          path: '/tweetcloud',
          components: {
            trendviews:TweetCloud
          }
        },
        {
          path: '/hot',
          components: {
            trendviews:Hot
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
