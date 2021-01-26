import requests from '../utils/requests';

export default ({
  state: {
    choiceCountries: '',
    leagues: '',
    competitions: '',
  },
  mutations: {
    setLeagues(state, leagues) {
      state.leagues = leagues;
    },
    setChoiceCountries(state, choiceCountries) {
      state.choiceCountries = choiceCountries;
    },
    setCompetitions(state, competitions) {
      state.competitions = competitions;
    },
  },
  actions: {
    async getLeagues({ state, commit }, id) {
      commit('setLeagues', id);

      const choiceCountries = await requests.getQuery(`/areas/${id}`);
      const { childAreas } = choiceCountries;
      commit('setChoiceCountries', childAreas);

      const { competitions } = await requests.getQuery('competitions');

      const competitionsCountry = competitions.filter((el) => {
        const coincidences = state.choiceCountries.find((country) => country.id === el.area.id);
        return coincidences ? el : null;
      });
      commit('setCompetitions', competitionsCountry);
    },
  },
  getters: {
    leagues: (s) => s.leagues,
    choiceCountries: (s) => s.choiceCountries,
    competitions: (s) => s.competitions,
  },
});
