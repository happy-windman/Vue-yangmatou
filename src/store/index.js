import Vue from 'vue'
import Vuex from 'vuex'
import productDetail from './modules/productDetail'
import communityDetail from './modules/communityDetail'
import car from './modules/car'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  actions: {
  
  },
  modules: {
    productDetail,
    communityDetail,
    car
  }
})
