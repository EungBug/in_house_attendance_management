import { useClcokInMutation } from '@/features/attendance/clockIn/useClockInMutation';
import { useClockOutMutation } from '@/features/attendance/clockOut/useClockOutMutation';
import clsx from 'clsx';

interface Props {
  clockInTime: string;
  clockOutTime: string;
}

const AttendanceButtons = ({ clockInTime, clockOutTime }: Props) => {
  const onClickClockIn = useClcokInMutation();
  const onClickClockOut = useClockOutMutation();

  return (
    <div className='flex w-full gap-3'>
      <button
        className={clsx(
          'flex flex-1 items-center justify-center rounded-xl bg-primary py-5 text-3xl font-bold text-white',
          'disabled:bg-[#E0E0E0] disabled:text-[#909090]',
          'active:bg-accent',
        )}
        disabled={!!clockInTime}
        onClick={onClickClockIn}
      >
        출근
      </button>

      <button
        className={clsx(
          'flex flex-1 items-center justify-center rounded-xl bg-secondary py-5 text-3xl font-bold text-primary',
          'disabled:bg-[#E0E0E0] disabled:text-[#909090]',
          'active:bg-[#A8D823]',
        )}
        disabled={!clockInTime || !!clockOutTime}
        onClick={onClickClockOut}
      >
        퇴근
      </button>
    </div>
  );
};

export default AttendanceButtons;
