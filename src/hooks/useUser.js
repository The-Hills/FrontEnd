import {getUIdAsync} from '../utils/StorageUtils';
import {createKidProfile, getUserInfoById} from '../API/user.api';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
const fetchUser = async () => {
  const uid = await getUIdAsync();
  const res = await getUserInfoById(uid);
  return res;
};

export const useUserQuery = () => useQuery(['user'], fetchUser);

// KID

export const useCreateKidInfo = () => {
  const queryClient = useQueryClient();
  return useMutation(createKidProfile, {
    onSuccess: data => {
      queryClient.setQueriesData(['kid', data]);
    },
  });
};
