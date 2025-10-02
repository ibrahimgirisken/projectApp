import { createApiService } from '@/lib/api/createApiService';
import { createServerApi } from '@/lib/api/serverApi';
import { ApplicationService } from '../types/ApplicationService';

const apiInstance = createServerApi();
export const permissionsService = createApiService<ApplicationService>(
  apiInstance,
  'ApplicationServices'
);
