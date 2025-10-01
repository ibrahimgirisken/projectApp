import { createApiService } from '@/lib/api/createApiService';
import { createServerApi } from '@/lib/api/serverApi';
import { Category } from '../types/category';

const apiInstance = createServerApi(); // token’lı axios
export const categoryService = createApiService<Category>(apiInstance, 'categories');
