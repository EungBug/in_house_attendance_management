import { useRegisterMutation } from '@/entities/auth/model/useRegisterMutation';
import { useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';

interface RegisterFormValues {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  hiredAt: string;
}

export const useRegister = () => {
  const navigate = useNavigate();
  const { mutate, isSuccess } = useRegisterMutation();

  const {
    handleSubmit,
    register,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    mode: 'onSubmit',
    defaultValues: { email: '', password: '', passwordConfirm: '', name: '', hiredAt: undefined },
  });

  const registerByEmail: SubmitHandler<RegisterFormValues> = async (data) => {
    if (data.password !== data.passwordConfirm) {
      setError('passwordConfirm', { message: '비밀번호가 일치하지 않습니다' });
    }
    clearErrors();
    mutate({
      email: data.email,
      name: data.name,
      password: data.password,
      hiredAt: data.hiredAt,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate({
        to: '/login',
        replace: true,
      });
    }
  }, [isSuccess]);

  return {
    register,
    errors,
    onSubmit: handleSubmit(registerByEmail),
  };
};
