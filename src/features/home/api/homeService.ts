import { createApiService } from '@/lib/api/createApiService';
import { createServerApi } from '@/lib/api/serverApi';
import { Home } from '../types/home';

const apiInstance = createServerApi();
export const homeService = createApiService<Home>(apiInstance, 'homes');
