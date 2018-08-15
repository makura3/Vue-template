import Vue from 'vue'
import Vuex from 'vuex'

import catStore from './store/modules/catStore'

Vue.use(Vuex)

// プロジェクトが成長した場合のことを考えてモジュールごとに切っておく
export default new Vuex.Store({
  modules: {
    catStore
  }
})
