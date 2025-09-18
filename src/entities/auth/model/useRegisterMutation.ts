import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { register } from '../api/authService';

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: register,
    onSuccess: () => {
      toast.success('회원가입을 성공했어요!');
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message ?? '회원가입을 실패했어요');
    },
  });
};
