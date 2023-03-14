import {getUIdAsync} from '../utils/StorageUtils';
import {
  createKidProfile,
  getDriverInfoById,
  getUserInfoById,
  updateDriver,
} from '../API/user.api';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
const fetchUser = async () => {
  const uid = await getUIdAsync();
  const res = await getUserInfoById(uid);
  return res;
};

export const useUserQuery = () => useQuery(['user'], fetchUser);

// driver
const fetchDriver = async () => {
  const uid = await getUIdAsync();
  const res = await getDriverInfoById(uid);
  return res;
};

export const useDriverQuery = () => useQuery(['driver'], fetchDriver);

export const useUpdateDriver = () => {
  const queryClient = useQueryClient();
  return useMutation(updateDriver, {
    onSuccess: (id, data) => {
      queryClient.setQueriesData(['driver', id, data]);
      queryClient.invalidateQueries({queryKey: ['driver']});
    },
  });
};

// KID

export const useCreateKidInfo = () => {
  const queryClient = useQueryClient();
  return useMutation(createKidProfile, {
    onSuccess: data => {
      queryClient.setQueriesData(['kid', data]);
      queryClient.invalidateQueries({queryKey: ['user']});
    },
  });
};
