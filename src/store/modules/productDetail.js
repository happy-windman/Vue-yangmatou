import { CHANGEINVENTORY, SETINVENTORY } from './action-types'
import store from 'store'
const state = {
    all: [],
    currentProduct: { ...store.get('currentProduct') }
}
const mutations = {
    [SETINVENTORY](state, product) {
        state.currentProduct = { ...product }
        store.set('currentProduct', state.currentProduct)
    }
}

export default {
    namespaced: true,
    state,
    mutations,

  }