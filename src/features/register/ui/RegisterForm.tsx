import Button from '@/shared/ui/Button';
import Input from '@/shared/ui/Input';
import PwdInput from '@/shared/ui/PwdInput';
import { useRegister } from '../model/useRegister';

const RegisterForm = () => {
  const { register, errors, onSubmit } = useRegister();

  return (
    <form className='w-full px-[30px] sm:max-w-sm' onSubmit={onSubmit}>
      <div className='flex w-full flex-col items-center gap-2'>
        <Input
          {...register('email', {
            required: '이메일을 입력해주세요',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@ecomap\.kr$/i,
              message: '이메일 형식이 올바르지 않습니다',
            },
          })}
          placeholder='회사 이메일을 입력해주세요'
          error={errors?.email?.message?.toString()}
        />

        <Input
          {...register('name', {
            required: '이름을 입력해주세요',
          })}
          placeholder='이름을 입력해주세요'
          error={errors?.name?.message?.toString()}
        />

        <PwdInput
          {...register('password', {
            required: '비밀번호를 입력해주세요',
            minLength: { value: 8, message: '8자 이상 입력해주세요' },
          })}
          placeholder='비밀번호를 입력해주세요'
          error={errors?.password?.message?.toString()}
        />

        <PwdInput
          {...register('passwordConfirm', {
            required: '비밀번호를 입력해주세요',
            minLength: { value: 8, message: '8자 이상 입력해주세요' },
          })}
          placeholder='비밀번호를 한번 더 입력해주세요'
          error={errors?.passwordConfirm?.message?.toString()}
        />
      </div>

      <Button text='회원가입' className='mt-6 w-full' type='submit' />
    </form>
  );
};

export default RegisterForm;
