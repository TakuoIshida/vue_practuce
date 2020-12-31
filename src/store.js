import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 2
  },
  getters:{
    doubleCount: state => state.count * 2,
  }
})