import { createQueryHooks } from '@/lib/api/createQueryHooks';
import { bannerService } from '../api/bannerService';

export const {
  useAll: useBanner,
  useById: useBannerById,
  useByLang: useBannerByLang,
  useCreate: useCreateBanner,
  useUpdate: useUpdateBanner,
} = createQueryHooks('banners', bannerService);
