import axios from 'axios';
import {getAccessTokenAsync} from '../utils/StorageUtils';

const ROOT_URL =
  'http://ec2-18-179-22-58.ap-northeast-1.compute.amazonaws.com/api/';

const axiosRequest = axios.create({
  baseURL: ROOT_URL,
});

axiosRequest.interceptors.request.use(
  async config => {
    // console.log('config.baseURL => ', config);
    const accessToken = await getAccessTokenAsync();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

axiosRequest.interceptors.response.use(
  response => {
    return response;
  },
  (error = {}) => {
    console.log('💩: error', error);
  },
);

export default axiosRequest;
