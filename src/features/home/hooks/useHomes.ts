import { createQueryHooks } from '@/lib/api/createQueryHooks';
import { homeService } from '../api/homeService';

export const {
  useAll: useHomes,
  useByLang: useHomesByLang,
  useById: useHomeById,
  useCreate: useCreateHome,
  useUpdate: useUpdateHome,
} = createQueryHooks('homes', homeService);
