import { createApiService } from '@/lib/api/createApiService';
import { createServerApi } from '@/lib/api/serverApi';
import { TranslateKey } from '../types/translate';

const apiInstance = createServerApi(); 
export const translateService = createApiService<TranslateKey>(apiInstance, 'translations');
