import axios, { type AxiosError } from 'axios';

import { storeData } from './StorageService';
import type { UserModel } from '../types/response.types';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = async ({
  queryName = '',
}: { queryName?: string } = {}) => {
  try {
    const { data } = await axios.get<UserModel[]>(
      `${BASE_URL}${queryName ? `?q=${queryName}` : ''}`,
    );

    await storeData('users', data);

    return data;
  } catch (err) {
    throw new Error((err as AxiosError).message);
  }
};
