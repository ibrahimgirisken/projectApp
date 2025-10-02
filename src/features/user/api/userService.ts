import { createApiService } from '@/lib/api/createApiService';
import { createServerApi } from '@/lib/api/serverApi';
import { UserResponse } from '../types/userResponse';

const apiInstance = createServerApi();
export const userService = createApiService<UserResponse>(apiInstance, 'Users');
