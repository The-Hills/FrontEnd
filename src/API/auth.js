import axiosRequest from ".";

export const  regiserUser = async data => {
  const url = 'auth/register';
  return await axiosRequest.post(url, data);
};
export const registerDriver = async data => {
  const url = 'auth/register/driver';
  return await axiosRequest.post(url, data, config);
};

export const loginUser = async data => {
  const url = 'auth/login';
  return await axiosRequest.post(url, data);
};
export const loginDriver = async data => {
  const url = 'auth/login/driver';
  return await axiosRequest.post(url, data);
};
