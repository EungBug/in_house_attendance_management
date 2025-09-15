import { useAuthStore } from '@/entities/auth/model/useAuthStore';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { ToastContainer } from 'react-toastify';

function RootLayout() {
  return (
    <div className='flex h-screen'>
      <main className='flex-1'>
        <Outlet />
        <ToastContainer position='top-center' autoClose={3000} draggable />
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
