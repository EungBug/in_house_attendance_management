import { useAuthStore } from '@/entities/auth/model/useAuthStore';
import BottomTab from '@/shared/ui/BottomTab';
import CommonModal from '@/shared/ui/CommonModal';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

function RootLayout() {
  return (
    <div className='flex h-screen flex-col'>
      <main className='mb-15 flex-1 overflow-y-auto'>
        <Outlet />
      </main>
      <BottomTab />

      <CommonModal />
    </div>
  );
}

export const Route = createFileRoute('/_auth')({
  beforeLoad: async ({ location }) => {
    const { isAuthenticated } = useAuthStore.getState();

    if (!isAuthenticated) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: RootLayout,
});
