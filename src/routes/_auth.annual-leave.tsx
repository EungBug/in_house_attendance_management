import AnnualLeaveWidget from '@/widgets/annualLeave/ui/AnnualLeaveWidget';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/annual-leave')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <AnnualLeaveWidget />
    </>
  );
}
