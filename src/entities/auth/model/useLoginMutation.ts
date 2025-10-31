import { useMutation } from '@tanstack/react-query';
import { login } from '../api/authService';
import { useAuthStore } from './useAuthStore';

export const useLoginMutation = () => {
  const { login: saveLoginInfo } = useAuthStore();

  return useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }) =>
      login({ email, password }),
    onSuccess: (res) => {
      saveLoginInfo({
        userId: res.id,
        userName: res.name,
        accessToken: res.accessToken,
      });
    },
  });
};
