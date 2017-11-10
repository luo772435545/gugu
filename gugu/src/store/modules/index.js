/**
 * Created by gan on 2017/11/9.
 */
import axios from 'axios'
import * as type  from '../types'

const state={
    navItems:'',
    banner:''
};

const getters={
    banner:(state)=>state.banner
};

const actions={
  getNavList({commit},payload){
      axios.get('http://localhost:3400/getNavList').then(function (res) {
        if(res.data!=''){
          commit(type.SET_NAV_DATA,res.data.data)
        }
      })
  },
  getBannerList({commit}){
    axios.get('http://localhost:3400/getBanner').then(function (res) {
      if(res.data!=''){
        commit(type.GET_BANNERLIST,res.data.data)
      }
    })
  }
};

const mutations={
  [type.SET_NAV_DATA](state,payload){
    state.navItems=payload
  },
  [type.GET_BANNERLIST](state,payload){
    state.banner=payload
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
