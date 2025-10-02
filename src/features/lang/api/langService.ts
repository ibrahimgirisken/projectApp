import { createApiService } from '@/lib/api/createApiService';
import { createServerApi } from '@/lib/api/serverApi';
import { Lang } from '../types/lang';

const apiInstance = createServerApi();
export const langService = createApiService<Lang>(apiInstance, 'langs');
