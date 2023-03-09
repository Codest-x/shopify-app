import {useAuthenticatedFetch} from './useAuthenticatedFetch';
import {useMemo} from 'react';
import {useQuery, UseQueryOptions} from 'react-query';

export const useAppQuery = ({
  url,
  fetchInit = {},
  reactQueryOptions,
}: {
  url: string;
  fetchInit?: RequestInit;
  reactQueryOptions?: Omit<
    UseQueryOptions<any, unknown, any, string>,
    'queryFn' | 'queryKey'
  >;
}) => {
  const authenticatedFetch = useAuthenticatedFetch();
  const fetch = useMemo(() => {
    return async () => {
      const response = await authenticatedFetch(url, fetchInit);
      return response.json();
    };
  }, [url, JSON.stringify(fetchInit)]);

  return useQuery(url, fetch, {
    ...reactQueryOptions,
    refetchOnWindowFocus: false,
  });
};
