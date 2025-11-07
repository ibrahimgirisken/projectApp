import { createQueryHooks } from '@/lib/api/createQueryHooks';
import { categoryService } from '../api/categoryService';

export const {
  useAll: useCategories,
  useById: useCategoryById,
  useCreate: useCreateCategory,
  useUpdate: useUpdateCategory,
} = createQueryHooks('categories', categoryService);
