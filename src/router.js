import Vue from 'vue'
import Router from 'vue-router'
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
      path: '/data',
      name: 'Trend Data',
      component: TrendData,
      children: [
        { 
          name:'Seven Day',
          path: '/sevenday',
          component: SevenDay
        },
        {
          path: '/tweetcloud',
          component: TweetCloud
        },
        {
          path: '/hot',
          component: Hot
        }        
      ]
    },
    {
      path: '/order',
      name: 'Order Form',
      component: OrderForm
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
