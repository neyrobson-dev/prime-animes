import axios from 'axios';

const api = axios.create({
  baseURL: 'https://appanimeplus.tk',
});

export default api;
