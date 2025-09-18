import logo from '@/assets/logo.png';
import logoKr from '@/assets/logo_kr.png';
import RegisterForm from '@/features/register/ui/RegisterForm';
import { createFileRoute } from '@tanstack/react-router';

export const RouteComponent = () => {
  return (
    <div className='flex h-screen flex-col items-center bg-primary'>
      <div className='my-[60px] flex flex-col items-center gap-2'>
        <img src={logo} alt='LOGO' className='aspect-[34/44] w-[34px] sm:w-auto' />

        <img src={logoKr} alt='에코카우' className='aspect-[176/44] w-[176px] sm:w-auto' />
        <span className='text-lg font-bold text-accent'>회원가입</span>
      </div>

      <RegisterForm />
    </div>
  );
};

export const Route = createFileRoute('/register')({
  component: RouteComponent,
});
