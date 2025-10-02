import { createQueryHooks } from '@/lib/api/createQueryHooks';
import { langService } from '../api/langService';

export const {
  useAll: useLangs,
  useByLang: useLangsByLang,
  useCreate: useCreateLang,
  useUpdate: useUpdateLang,
  useById: useLangById,
} = createQueryHooks('langs', langService);
