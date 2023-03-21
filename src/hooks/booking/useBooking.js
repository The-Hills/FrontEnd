import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {
  acceptBooking,
  completedBooking,
  createBooking,
  createPayment,
  fetchBookingData,
  getBooking,
  getPrice,
  getVehicle,
  pickupBooking,
} from '../../API/booking.api';

export const useBooking = () => {
  const queryClient = useQueryClient();
  return useMutation(createBooking, {
    onMutate: async data => {
      await queryClient.cancelQueries('booking');
      const prevData = queryClient.getQueryData(['booking']);

      queryClient.setQueryData(['booking'], prevData => ({
        ...prevData,
        data,
      }));
      return {prevData};
    },
    onSuccess: data => {
      queryClient.setQueriesData(['bookings', data]);
    },
    onError: (error, data, context) => {
      queryClient.setQueryData(['booking'], context.prevData);
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

const fetchBookingByVehicleType = async () => {
  const type = await getTypeAsync();
  const res = await fetchBookingData(type);
  return res;
};

export const useBookingData = () =>
  useQuery({
    queryKey: ['booking'],
    queryFn: fetchBookingData,
    refetchInterval: 1000,
  });

export const useAcceptBooking = () => {
  const queryClient = useQueryClient();
  return useMutation(acceptBooking, {
    onSuccess: (id, data) => {
      queryClient.setQueriesData(['accept', id, data]);
      queryClient.invalidateQueries(['booking']);
      queryClient.invalidateQueries(['bookingDetail']);
    },
  });
};

export const usePickupBooking = () => {
  const queryClient = useQueryClient();
  return useMutation(pickupBooking, {
    onSuccess: (id, data) => {
      queryClient.setQueriesData(['accept', id, data]);
      queryClient.invalidateQueries(['booking']);
      queryClient.invalidateQueries(['bookingDetail']);
    },
  });
};

export const usecompletedBooking = () => {
  const queryClient = useQueryClient();
  return useMutation(completedBooking, {
    onSuccess: (id, data) => {
      queryClient.setQueriesData(['accept', id, data]);
      queryClient.invalidateQueries(['booking']);
      queryClient.invalidateQueries(['bookingDetail']);
    },
  });
};

//
export const useBookingDetail = id => {
  return useQuery({
    queryKey: ['bookingDetail', id],
    queryFn: getBooking(id),
  });
};
