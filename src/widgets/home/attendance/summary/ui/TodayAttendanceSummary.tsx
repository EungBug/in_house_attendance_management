import type { TWorkingStatus } from '@/entities/attendance/types/attendance';
import clsx from 'clsx';

interface Props {
  userName?: string;
  clockInTime: string;
  clockOutTime: string;
  status: TWorkingStatus;
}

const TodayAttendanceSummary = ({ userName, clockInTime, clockOutTime, status }: Props) => {
  return (
    <div className='flex w-full flex-col items-center'>
      {userName ? (
        <p className='text-2xl font-bold text-primary'>{`${userName}님, 반갑습니다👋🏻`}</p>
      ) : (
        <p className='text-2xl font-bold text-gray-500'>{`로그인이 필요합니다.`}</p>
      )}

      <div className='mt-10 self-stretch'>
        <span className='text-center font-bold break-all whitespace-pre-line'>{`🕘 오늘의 근무`}</span>

        <div className='mt-2 flex flex-col gap-1'>
          {status === 'BEFORE' ? (
            <p className='text-gray-400'>근무 시작 전이에요.</p>
          ) : (
            <>
              <p>
                출근 시간 :{' '}
                <span className={clsx(clockInTime ? 'text-gray-800' : 'text-gray-400')}>
                  {clockInTime}
                </span>
              </p>
              <p>
                퇴근 시간 :{' '}
                <span className={clsx(clockOutTime ? 'text-gray-800' : 'text-gray-400')}>
                  {clockOutTime || '근무 중'}
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodayAttendanceSummary;
