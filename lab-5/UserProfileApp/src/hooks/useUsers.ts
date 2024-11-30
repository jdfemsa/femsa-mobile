import { useEffect, useState } from 'react';

import { getUsers } from '../services/ApiService';
import { getData } from '../services/StorageService';
import type { UserModel } from '../types/response.types';

export function useUsers() {
  const [users, setUsers] = useState<UserModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    const fetchedUsers = await getUsers();

    if (fetchedUsers) {
      setUsers(fetchedUsers);
    }
  };

  useEffect(() => {
    setLoading(true);

    getData<UserModel[]>('users')
      .then(storedUsers => {
        if (!storedUsers) {
          fetchData();
        } else {
          setUsers(storedUsers);
        }
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { users, loading, error };
}
