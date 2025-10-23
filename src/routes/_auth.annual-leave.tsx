import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/annual-leave')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_auth/annual-leave"!</div>;
}
