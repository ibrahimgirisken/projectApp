import { createQueryHooks } from '@/lib/api/createQueryHooks';
import { permissionsService } from '../api/permissionsService';

export const {
  useAll: usePermissions,
  useAllSingle: usePermissionsSingle,
  useById: usePermissionById,
  useByLang: usePermissionByLang,
  useCreate: useCreatePermission,
  useUpdate: useUpdatePermission,
} = createQueryHooks('permissions', permissionsService);
