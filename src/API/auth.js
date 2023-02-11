import axios from 'axios';
export const BASE_URL = 'http://13.231.114.148/api';

const URL = 'http://ec2-54-95-102-134.ap-northeast-1.compute.amazonaws.com/';

export const authApi = axios.create({
  BASE_URL: BASE_URL,
});

export const signUp = async (email, password, fullName, phoneNumber) => {
  const response = await authApi.post('');
  return response.data;
};

