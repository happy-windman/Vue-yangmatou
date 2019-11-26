import { SETCAR, LOADCAR } from './action-types.js'
import store from 'store'
const state = {
    car: store.get('car') ? store.get('car') : []
}
const mutations = {
    [SETCAR](state, products) {
        state.car = store.get('car') ? store.get('car') : []
        let on = false
        let index
        let merge = false
        let add = false

        for (var i = 0; i < state.car.length; i++) {
            if (state.car[i].id == products.id) {
                on = true
                merge = true
                index = i
            }
            for (var j = 0; j < state.car[i].productList.length; j++) {
                if ((state.car[i].productList[j].productId === products.productList[0].productId) && (state.car[i].productList[j].categoryId === products.productList[0].categoryId)) {
                    state.car[i].productList[j].count += products.productList[0].count
                    on = true
                    add = true
                }
            }
        }
        if (merge && !add) {
            console.log(1)
            state.car[index].productList.push(products.productList[0])
        }
        if (!on) {
            state.car.push(products)
        }
        for(var i=0;i<state.car.length;i++)
        {   
            
            state.car[i].checkCount=state.car[i].productList.length
        }
        store.set('car', state.car)
    },
    [LOADCAR](state,car){
        state.car = car
        console.log(state.car)
        store.set('car',state.car)
    }
}



export default {
    namespaced: true,
    state,
    mutations,

}
