import { useAuthStore } from '@/entities/auth/model/useAuthStore';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

function RootLayout() {
  return (
    <div className='flex h-screen'>
      <main className='flex-1'>
        <Outlet />
      </main>
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
