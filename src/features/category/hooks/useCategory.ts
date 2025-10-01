import { createQueryHooks } from '@/lib/api/createQueryHooks';
import { categoryService } from '../api/categoryService';

export const {
  useAll: useCategories,
  useById: useCategoryById,
  useByLang: useCategoryByLang,
  useCreate: useCreateCategory,
  useUpdate: useUpdateCategory,
  useByUrlAndLang: useCategoryByUrlAndLang,
} = createQueryHooks('categories', categoryService);
