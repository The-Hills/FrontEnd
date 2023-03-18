import axiosRequest from '.';

export const createBooking = async data => {
  // console.log('dataPUT', data);
  const url = '/booking';
  return await axiosRequest.post(url, data);
};

export const fetchBookingDataVehicle = async vehicleType => {
  const url = `/booking/getbooking/${vehicleType}`;
  return await axiosRequest.get(url);
};
export const fetchBookingData = async () => {
  const url = `/booking`;
  return await axiosRequest.get(url);
};

export const createPayment = async data => {
  console.log('dataPay', data);

  const url = '/payment/create_payment_url';
  return await axiosRequest.post(url, data);
};

export const getPrice = async data => {
  const url = '/booking/getprice';
  return await axiosRequest.get(url, data);
};

export const getVehicle = async () => {
  const url = '/vehicle/vehicletype';
  return (await axiosRequest.get(url)).data;
};

export const acceptBooking = async ({id, data}) => {
  console.log('id', id, 'data', data);
  const url = `/booking/acceptbooking/${id}`;
  return await axiosRequest.post(url, data);
};
