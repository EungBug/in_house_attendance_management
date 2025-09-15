import { useLoginMutation } from '@/entities/auth/model/useLoginMutation';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { useEffect } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';

interface LoginFormValues {
  email: string;
  password: string;
}

export const useLogin = () => {
  const navigate = useNavigate();
  const redirectTo = useSearch({ from: '/login' });
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<LoginFormValues>({
    mode: 'onSubmit',
    defaultValues: { email: '', password: '' },
  });

  const { mutate, isSuccess, error } = useLoginMutation();

  const login: SubmitHandler<LoginFormValues> = async (data) => {
    mutate(data);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(redirectTo ?? { to: '/', replace: true });
    }
  }, [isSuccess]);

  useEffect(() => {
    if (error) {
      setError('password', { message: error.message });
    }
  }, [error]);

  return {
    register,
    errors,
    onSubmit: handleSubmit(login),
  };
};
