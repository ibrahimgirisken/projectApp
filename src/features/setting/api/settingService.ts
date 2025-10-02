import { createApiService } from '@/lib/api/createApiService';
import { createServerApi } from '@/lib/api/serverApi';
import { Setting } from '../types/setting';

const apiInstance = createServerApi();
export const settingService = createApiService<Setting>(apiInstance, 'Settings');
