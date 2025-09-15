import { useAuthStore } from '@/entities/auth/model/useAuthStore';
import { createFileRoute, redirect } from '@tanstack/react-router';

import logo from '@/assets/logo.png';
import logoKr from '@/assets/logo_kr.png';
import LoginForm from '@/features/login/ui/LoginForm';

const RouteComponent = () => {
  return (
    <div className='flex h-screen flex-col items-center bg-primary'>
      <div className='my-[60px] flex flex-col items-center gap-2'>
        <img src={logo} alt='LOGO' className='aspect-[34/44] w-[34px] sm:w-auto' />

        <img src={logoKr} alt='에코카우' className='aspect-[176/44] w-[176px] sm:w-auto' />
        <span className='text-lg font-bold text-accent'>출퇴근용</span>
      </div>

      {/* FORM */}
      <LoginForm />
    </div>
  );
};

export const Route = createFileRoute('/login')({
  beforeLoad: async () => {
    const { isAuthenticated } = useAuthStore.getState();
    if (isAuthenticated) {
      throw redirect({
        to: '/',
        replace: true,
      });
    }
  },
  component: RouteComponent,
});
