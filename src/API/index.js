import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ROOT_URL =
  'http://ec2-54-95-102-134.ap-northeast-1.compute.amazonaws.com/api/';

const axiosRequest = axios.create({
  baseURL: ROOT_URL,
});

axiosRequest.interceptors.request.use(
  async config => {
    console.log('config.baseURL => ', config);
    const accessToken = await AsyncStorage.getItem('token');
    if (accessToken) {
      config.headers.Authorization = `bearer ${JSON.stringify(accessToken)}`;
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
