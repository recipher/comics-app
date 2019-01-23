import axios from 'axios';

const HOST = 'http://localhost:4000';

const fetch = (url, query) => {
  return axios.get(`${HOST}${url}`, { params: query }).then(response => {
    return response.data;
  });
};

const api = {
  comics: (characters) => fetch('/comics', { characters }).then(data => data.comics),
  characters: () => fetch('/characters').then(data => data.characters),
};

export default api;
