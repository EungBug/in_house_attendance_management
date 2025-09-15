import AttendanceButtons from '@/widgets/home/attendance/buttons/ui/AttendanceButtons';
import { useAttendanceSummaryModel } from '@/widgets/home/attendance/summary/model/useAttendanceSummaryModel';
import TodayAttendanceSummary from '@/widgets/home/attendance/summary/ui/TodayAttendanceSummary';
import { createFileRoute } from '@tanstack/react-router';

const RouteComponent = () => {
  const vm = useAttendanceSummaryModel();

  return (
    <div className='flex h-full flex-col items-center justify-between bg-white p-5'>
      <TodayAttendanceSummary
        userName={vm.userName}
        clockInTime={vm.todayRecord.clockIn}
        clockOutTime={vm.todayRecord.clockOut}
        status={vm.status}
      />

      {vm.isWorkDone ? (
        <div className='py-4 text-xl'>오늘 근무를 완료했어요</div>
      ) : (
        <div className='w-full sm:max-w-sm'>
          <AttendanceButtons
            clockInTime={vm.todayRecord.clockIn}
            clockOutTime={vm.todayRecord.clockOut}
          />
        </div>
      )}
    </div>
  );
};

export const Route = createFileRoute('/_auth/')({
  component: RouteComponent,
});
