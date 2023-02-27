import axiosRequest from './index';

const config = {
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
    'Content-Type': 'Accept',
  },
};

export const registerUser = async data => {
  const url = 'auth/register';
  return await axiosRequest.post(url, data, config);
};

export const loginUser = async data => {
  const url = 'auth/login';

  return await axiosRequest.post(url, data);
};

