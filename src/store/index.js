import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    enabled: true
  },
  mutations: {
    toggleEnabled (state) {
      // eslint-disable-next-line
      console.log('toggleEnabled')
      state.enabled = !state.enabled
    }
  },
  actions: {
  },
  modules: {
  }
})
