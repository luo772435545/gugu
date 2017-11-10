/**
 * Created by gan on 2017/11/9.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import index from './modules/index'
import common from './modules/common'

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    index:index,
    common:common
  }
})
