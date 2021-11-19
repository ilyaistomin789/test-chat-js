import axios from 'axios';

axios.defaults.baseURL = window.location.origin;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  if (config.headers) config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export default axios;
