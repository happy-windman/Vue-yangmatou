import {SETCOMMUNITYDETAIL} from './action-types'
import store from 'store'
const state = {
    currentNote:{ ...store.get('currentNote') }
}

const mutations={
    [SETCOMMUNITYDETAIL](state,note){
        state.currentNote = {...note}
        store.set('currentNote', state.currentNote)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
  }