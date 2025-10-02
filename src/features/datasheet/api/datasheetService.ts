import { createApiService } from '@/lib/api/createApiService';
import { createServerApi } from '@/lib/api/serverApi';
import { Datasheet } from '../types/datasheet';

const apiInstance = createServerApi(); // token’lı axios
export const datasheetService = createApiService<Datasheet>(apiInstance, 'datasheets');
