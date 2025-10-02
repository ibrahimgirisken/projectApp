import { createApiService } from '@/lib/api/createApiService';
import { createServerApi } from '@/lib/api/serverApi';
import { Module } from '../types/module';

const apiInstance = createServerApi(); // token’lı axios
export const moduleService = createApiService<Module>(apiInstance, 'modules');
