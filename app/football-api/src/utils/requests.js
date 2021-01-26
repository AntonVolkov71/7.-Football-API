import axios from 'axios';

const AXIOS = axios.create();
const proxy = 'https://thingproxy.freeboard.io/fetch/';

const handleResult = (res) => (res.status === 200 ? res.data : Promise.reject(res.status));

const handleError = (err) => {
  throw new Error(err);
};

export default {
  async getAreas() {
    return AXIOS.get(`${proxy}https://api.football-data.org/v2/areas/2267`)
      .then(handleResult)
      .catch(handleError);
  },
  async getQuery(query) {
    return AXIOS.get(`${proxy}https://api.football-data.org/v2/${query}`)
      .then(handleResult)
      .catch(handleError);
  },

};
