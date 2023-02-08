import axios from 'axios';
export const BASE_URL = '';

export const getUser = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};
export const postUser = async (email, password) => {
  return await axios.post(BASE_URL, {email, password});
};
export const deleteUser = async ({id}) => {
  return await axios.delete(`${BASE_URL}/${id}`, id);
};
