import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {
  createBooking,
  createPayment,
  fetchBookingData,
  getPrice,
  getVehicle,
} from '../../API/booking.api';

export const useBooking = () => {
  const queryClient = useQueryClient();
  return useMutation(createBooking, {
    onSuccess: data => {
      queryClient.setQueriesData(['bookings', data]);
    },
  });
};

export const usePayment = () => {
  const queryClient = useQueryClient();
  return useMutation(createPayment, {
    onSuccess: data => {
      queryClient.setQueriesData(['payment', data]);
    },
  });
};

export const useGetPrice = () => {
  const queryClient = useQueryClient();
  return useMutation(getPrice, {
    onSuccess: data => {
      queryClient.setQueriesData(['price', data]);
    },
  });
};

export const useVehicale = () => useQuery(['vehicle'], getVehicle);

export const useBookingData = () => useQuery(['booking'], fetchBookingData);
