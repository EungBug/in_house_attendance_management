import { useAuthStore } from '@/entities/auth/model/useAuthStore';
import BottomTab from '@/shared/ui/BottomTab';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

function RootLayout() {
  return (
    <div className='flex h-screen flex-col'>
      <main className='flex-1'>
        <Outlet />
      </main>
      <BottomTab />
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
