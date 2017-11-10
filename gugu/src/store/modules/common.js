/**
 * Created by gan on 2017/11/9.
 */
import * as type from '../types'

//公共


const state={
    loadding:false
};

const getters={
  loadding:(state)=>state.loadding
};

const actions={};

const mutations={
   [type.SHOW_LOADDNG_SUCCESS](state){
     state.loadding=true
   },
  [type.SHOW_LOADDNG_FAIL](state){
    state.loadding=false
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
