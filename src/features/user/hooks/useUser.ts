import { userService } from '../api/userService';
import { createQueryHooks } from '@/lib/api/createQueryHooks';

export const {
  useAll: useUsers,
  useCreate: useCreateUser,
  useUpdate: useUpdateUser,
  useById: useUserById,
  useParamsData: useUserByParams,
} = createQueryHooks('Users', userService);
