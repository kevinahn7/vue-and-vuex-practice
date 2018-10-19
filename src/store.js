import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "My title",
    links: [
      'http://google.com',
      'http://github.com',
      'http://youtube.com'
    ]
  },
  mutations: {

  },
  actions: {

  }
})
