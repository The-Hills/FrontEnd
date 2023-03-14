import axiosRequest from '.';

export const createBooking = async data => {
  console.log('dataPUT', data);
  const url = '/booking';
  return await axiosRequest.post(url, data);
};

export const fetchBookingData = async () => {
  const url = '/booking';
  return await axiosRequest.get(url);
};

export const createPayment = async data => {
  const url = '/payment/create_payment_url';
  return await axiosRequest.post(url, data);
};
