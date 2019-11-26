import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'pages/home.vue'
import details from 'pages/details.vue'
import community from 'pages/community.vue'
import communityDetail from 'pages/communityDetail.vue'
import communityList from 'pages/communityList.vue'
import car from 'pages/car.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/details/:id',
    name: 'details',
    component: details,
  },
  {
    path: '/community',
    name: 'community',
    component:community, 
    redirect:'/community/communityList',
    children:[
      {
        path:'communityList',
        name:'communityList',
        component:communityList
      },
      {
        path:'communityDetail/:id',
        name:'communityDetail',
        component:communityDetail,
      },    
  ]
  },
  {
    path:'/car',
    name:'car',
    component:car
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
