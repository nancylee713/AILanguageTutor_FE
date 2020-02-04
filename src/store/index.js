import Vue from 'vue';
import Vuex from 'vuex';
import AudioRecorder from 'vue-audio-recorder'


Vue.use(Vuex);
Vue.use(AudioRecorder)

export default new Vuex.Store({
  state: {
    user: null
  },
  getters: {
    getUser: state => { return state.user}
  },
  mutations: {
    SET_USER (state, user) {
      state.user = user
    }
  },
  actions: {
    setUser({commit}, user) {
      commit('SET_USER', user)
    }
  },
  modules: {
  },
});
