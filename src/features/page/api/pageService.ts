import { createApiService } from '@/lib/api/createApiService';
import { createServerApi } from '@/lib/api/serverApi';
import { Page } from '../types/page';

const apiInstance = createServerApi(); // token’lı axios
export const pageService = createApiService<Page>(apiInstance, 'pages');
