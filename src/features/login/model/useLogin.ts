import { useForm, type SubmitHandler } from 'react-hook-form';

interface LoginFormValues {
  email: string;
  password: string;
}

export const useLogin = () => {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<LoginFormValues>({
    mode: 'onSubmit',
    defaultValues: { email: '', password: '' },
  });

  const login: SubmitHandler<LoginFormValues> = async (data) => {
    console.log('login payload:', data);
  };

  return {
    register,
    errors,
    onSubmit: handleSubmit(login),
  };
};
