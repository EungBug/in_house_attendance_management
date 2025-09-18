import { apiClient } from '@/shared/lib/api/apiClient';
import type { LoginReq, RegisterReq } from './types/request';
import type { LoginRes, RegisterRes } from './types/response';

// 회원가입
export const register = async (req: RegisterReq): Promise<RegisterRes> => {
  const res = await apiClient.post('/auth/register', req);
  return res.data;
};

// 로그인
export const login = async (req: LoginReq): Promise<LoginRes> => {
  const res = await apiClient.post('/auth/login', req);
  return res.data;
};
