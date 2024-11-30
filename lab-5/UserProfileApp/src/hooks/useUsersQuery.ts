import { useQuery } from '@tanstack/react-query';

import { getUsers } from '../services/ApiService';

export function useUsersQuery({ queryString }: { queryString: string }) {
  const query = useQuery({
    queryKey: ['users', { queryString }],
    queryFn: () => getUsers({ queryName: queryString }),
    retry: 3,
  });

  return query;
}
