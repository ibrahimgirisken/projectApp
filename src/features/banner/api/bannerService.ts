import { createApiService } from '@/lib/api/createApiService';
import { createServerApi } from '@/lib/api/serverApi';
import { Banner } from '../types/banner';

const apiInstance = createServerApi();
export const bannerService = createApiService<Banner>(apiInstance, 'banners');
