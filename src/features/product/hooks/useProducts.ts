import { productService } from '@/features/product/api/productService';
import { createQueryHooks } from '@/lib/api/createQueryHooks';

export const {
  useAll: useProducts,
  useById: useProductById,
  useByLang: useProductsByLang,
  useCreate: useCreateProduct,
  useUpdate: useUpdateProduct,
  useByUrlAndLang: useProductsBySlugAndLang,
} = createQueryHooks('products', productService);
