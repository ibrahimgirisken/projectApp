import { createApiService } from '@/lib/api/createApiService';
import { Brand } from '../types/brand';
import { createServerApi } from '@/lib/api/serverApi';

const apiInstance = createServerApi();
export const brandService = createApiService<Brand>(apiInstance, 'brands');
