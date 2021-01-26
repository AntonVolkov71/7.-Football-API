import Vue from 'vue';
import Vuex from 'vuex';
import areas from './areas';
import leagues from './leagues';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
  },
  modules: {
    areas, leagues,
  },
});
