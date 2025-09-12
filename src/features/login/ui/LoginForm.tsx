import Button from '@/shared/ui/Button';
import Input from '@/shared/ui/Input';
import PwdInput from '@/shared/ui/PwdInput';
import { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  return (
    <div className='w-full px-[30px] sm:max-w-sm'>
      <div className='flex w-full flex-col items-center gap-2'>
        <Input
          value={email}
          onChange={setEmail}
          placeholder='회사 이메일을 입력해주세요'
          type='email'
        />

        <PwdInput
          placeholder='비밀번호를 입력해주세요'
          error='이메일 또는 비밀번호가 일치하지 않습니다.'
        />
      </div>

      <Button text='입장하기' onClick={() => {}} className='mt-6 w-full' />
    </div>
  );
};

export default LoginForm;
