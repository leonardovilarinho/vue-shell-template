import Vue from 'vue'
import Vuex from 'vuex'

// @ts-check
import state from './state'
import getters from './getters'
import actions from './actions'
import modules from './modules'
import mutations from './mutations'

Vue.use(Vuex)

/** @type {Store} */
export default new Vuex.Store({
  state,
  getters,
  actions,
  modules,
  mutations
})
