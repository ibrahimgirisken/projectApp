import { createQueryHooks } from '@/lib/api/createQueryHooks';
import { datasheetService } from '../api/datasheetService';

export const {
  useAll: useDatasheets,
  useByLang: useDatasheetsByLang,
  useCreate: useCreateDatasheet,
  useUpdate: useUpdateDatasheet,
  useById: useDatasheetById,
} = createQueryHooks('datasheets', datasheetService);
