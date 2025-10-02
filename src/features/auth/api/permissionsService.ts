import { createApiService } from '@/lib/createApiService';
import { createServerApi } from '@/lib/serverApi';
import { ApplicationService } from '../types/ApplicationService';

const apiInstance = createServerApi();
export const permissionsService = createApiService<ApplicationService>(
  apiInstance,
  'ApplicationServices'
);
