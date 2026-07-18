import axios from 'axios';

const apiclient = axios.create({
  baseURL: 'http://192.168.31.77:5000/api/',
});

apiclient.interceptors.request.use(
  async config => {
    const token = 'hi';

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default apiclient;
