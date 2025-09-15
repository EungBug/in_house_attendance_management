import { apiClient } from '@/shared/lib/api/apiClient';
import type { LoginReq } from './types/request';
import type { LoginRes } from './types/response';

// 로그인
export const login = async (req: LoginReq): Promise<LoginRes> => {
  const res = await apiClient.post('/auth/login', req);
  return res.data;
};
