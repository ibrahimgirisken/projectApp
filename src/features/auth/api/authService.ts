import axios from '@/lib/axiosClient';
import { LoginDto, AuthResponse } from '../types/auth';

export const login = async (data: LoginDto): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>('/Auth/Login', data);
  return response.data;
};
