import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'pages/home.vue'
import details from 'pages/details.vue'

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
    path: '/details',
    name: 'details',
    component: details
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router