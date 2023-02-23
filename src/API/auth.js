import axios from 'axios';
export const BASE_URL = 'http://13.231.114.148/api';

export const URL = 'http://localhost:3000/api/';

export const authApi = axios.create({
  BASE_URL: BASE_URL,
});

export const signUp = async (email, password, fullName, phoneNumber) => {
  const response = await authApi.post('');
  return response.data;
};

