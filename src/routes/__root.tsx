import { createRootRoute, Outlet } from '@tanstack/react-router';
import { ToastContainer } from 'react-toastify';

export const Route = createRootRoute({
  component: () => (
    <>
      <ToastContainer position='top-center' autoClose={3000} draggable />
      <Outlet />
    </>
  ),
});
