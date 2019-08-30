import Vue from 'vue'
import Router from 'vue-router'
import MyFeed from './components/MyFeed.vue'
import MyFeedTrend from './components/MyFeedTrend.vue'
import TrendList from './components/TrendList.vue'
import Settings from './components/Settings.vue'
import Notifications from './components/Notifications.vue'
import Portfolio from './components/Portfolio.vue'
import TrendData from './components/TrendData.vue'
import PriceVol from './components/PriceVol.vue'
import TweetVol from './components/TweetVol.vue'
import TrendFad from './components/TrendFad.vue'
import Account from './components/Account.vue'
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import Team from './components/Team.vue'

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
      name: 'Trends',
      components: {
        secondpane:TrendList
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
      path: '/account',
      name: 'My Account',
      components: {
        secondpane:Account
      }
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      components: {
        secondpane:Portfolio
      }
    },
    {
      path: '/notifications',
      name: 'Notifications',
      components: {
        secondpane:Notifications
      }
    },               
    {
      path: '/data',
      name: 'Trend Data',
      components: {
        secondpane:TrendList,
        thirdpane:TrendData
      },
      children: [
        { 
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
      path: '/myfeedtrend',
      name: 'My Feed Trend',
      components: {
        secondpane:MyFeed,
        thirdpane:MyFeedTrend
      },
      props: true
    },
    {
      path: '/home',
      name: 'Home',
      components: {
        indexpane:Home
      }
    },  
    {
      path: '/contact',
      name: 'Contact',
      components: {
        indexpane:Contact
      }
    },
    {
      path: '/team',
      name: 'Team',
      components: {
        indexpane:Team
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
  ],
  scrollBehavior() {
      return {x: 0, y: 0}
  }
})
