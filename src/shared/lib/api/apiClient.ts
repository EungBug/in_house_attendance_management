import { useAuthStore } from '@/entities/auth/model/useAuthStore';
import axios, { AxiosError } from 'axios';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    delete config.headers.Authorization;
  }

  return config;
});

apiClient.interceptors.response.use(
  (config) => config,
  (error: AxiosError) => {
    const { response } = error;
    if (response?.status === 401) {
      if (response?.config.url?.includes('login')) {
        return Promise.reject(error.response?.data);
      } else {
        // 토큰 만료
        useAuthStore.getState().logout();
      }
    }

    return Promise.reject(error.response?.data ?? error);
  },
);
