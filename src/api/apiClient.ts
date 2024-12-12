import axios, { AxiosInstance, ParamsSerializerOptions } from 'axios';
import qs from 'qs';

import { API_URL, API_KEY } from '../constants/api';

const client: AxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  paramsSerializer: (params: ParamsSerializerOptions) =>
    qs.stringify(params, { encode: false, arrayFormat: 'brackets' }),
});

client.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      api_key: API_KEY,
      format: 'json',
    };

    return config;
  },
  (error) => {
    console.log('Request Error:', error.response?.data || error.message);

    return Promise.reject(error);
  },
);

client.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log('Response Error:', error.response?.data || error.message);

    return Promise.reject(error);
  },
);

export default client;
