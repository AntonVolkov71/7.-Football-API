import requests from '../utils/requests';

export default ({
  state: {
    areas: '',
  },
  mutations: {
    setAreas(state, areas) {
      state.areas = areas;
    },
  },
  actions: {
    async fetchAreas({ commit }) {
      try {
        await requests.getAreas()
          .then((res) => {
            commit('setAreas', res.childAreas);
          });
      } catch (error) {
        commit('serError', error);
      }
    },
  },
  getters: {
    areas: (s) => s.areas,
  },
});
