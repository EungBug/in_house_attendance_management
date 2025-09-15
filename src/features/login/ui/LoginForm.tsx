import Button from '@/shared/ui/Button';
import Input from '@/shared/ui/Input';
import PwdInput from '@/shared/ui/PwdInput';
import { useLogin } from '../model/useLogin';

const LoginForm = () => {
  const { register, errors, onSubmit } = useLogin();

  return (
    <form className='w-full px-[30px] sm:max-w-sm' onSubmit={onSubmit}>
      <div className='flex w-full flex-col items-center gap-2'>
        <Input
          {...register('email', {
            required: '이메일을 입력해주세요',
            pattern: {
              value: /^\S+@\S+$/i,
              message: '이메일 형식이 올바르지 않습니다',
            },
          })}
          placeholder='회사 이메일을 입력해주세요'
          error={errors?.email?.message?.toString()}
        />

        <PwdInput
          {...register('password', {
            required: '비밀번호를 입력해주세요',
          })}
          placeholder='비밀번호를 입력해주세요'
          error={errors?.password?.message?.toString()}
        />
      </div>

      <Button text='입장하기' className='mt-6 w-full' type='submit' />
    </form>
  );
};

export default LoginForm;
