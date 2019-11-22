import Vue from 'vue'
import Vuex from 'vuex'
import store from 'store' 
import { CHANGEINVENTORY, SETINVENTORY } from './action-types'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    all: [],
    currentProduct: {...store.get('currentProduct')}
  },
  mutations: {
    [SETINVENTORY](state, product) {
        state.currentProduct = { ...product }
        store.set('currentProduct', state.currentProduct)
    }
  },
  actions: {
    // [CHANGEINVENTORY]({commit},{id}){
    //   commit(SETINVENTORY,{id})
    // }
  },
  modules: {
  }
})
