import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-animeplus.herokuapp.com/api',
  // 'http://172.28.2.24:8000/api',
  //'https://appanimeplus.tk',
});

export default api;
