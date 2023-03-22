import axiosRequest from '.';
//  User
export const getUserInfoById = async id => {
  return await axiosRequest.get(id);
};

export const updateUser = async data => {
  const url = `${data.id}`;
  return await axiosRequest.patch(url, data);
};

// driver
export const getDriverInfoById = async id => {
  const url = `driver/${id}`;
  return await axiosRequest.get(url, id);
};

export const  updateDriver = async data => {
  const url = `driver/${data.id}`;
  return await axiosRequest.put(url, data);
};

//  KID
export const createKidProfile = async data => {
  const url = 'kid/';
  return await axiosRequest.post(url, data);
};

export const updateKid = async data => {
  const url = 'kid/';
  return await axiosRequest.patch(url, data);
};

export const deleteKid = async id => {
  const url = `kid/${id}`;
  return await axiosRequest.delete(url, id);
};
