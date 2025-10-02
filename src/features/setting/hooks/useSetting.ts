import { createQueryHooks } from '@/lib/api/createQueryHooks';
import { settingService } from '../api/settingService';

export const {
  useAll: useSettings,
  useByLang: useSettingByLang,
  useUpdate: useUpdateSetting,
  useCreate: useCreateSetting,
  useById: useSettingById,
} = createQueryHooks('setting', settingService);
