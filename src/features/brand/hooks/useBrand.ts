import { createQueryHooks } from '@/lib/api/createQueryHooks';
import { brandService } from '../api/brandService';

export const {
  useAll: useBrands,
  useById: useBrandById,
  useByLang: useBrandsByLang,
  useCreate: useCreateBrand,
  useUpdate: useUpdateBrand,
} = createQueryHooks('brands', brandService);
