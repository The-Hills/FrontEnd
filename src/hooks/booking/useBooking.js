import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {
  createBooking,
  createPayment,
  fetchBookingData,
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

export const useBookingData = () => useQuery(['booking'], fetchBookingData);
