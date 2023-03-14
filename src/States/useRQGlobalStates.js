import {QueryClient, useQuery} from '@tanstack/react-query';
import {queryClient} from '../../App';

// const client = new QueryClient();

const useRQGlobalState = (key, initialData) => [
  useQuery([key], () => initialData, {enabled: false, initialData}).data,
  value => {
    queryClient.setQueriesData([key], value);
    // client.getQueriesData([value]);
  },
];
export default useRQGlobalState;
