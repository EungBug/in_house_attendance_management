import type { AnnualLeaveData } from '@/entities/annualLeave/types/annualLeaveData';
import clsx from 'clsx';
import { format, parse } from 'date-fns';
import { ko } from 'date-fns/locale';

interface AnnualLeaveListProps {
  date: Date;
  list: AnnualLeaveData[];
}

const AnnualLeaveList = ({ date, list }: AnnualLeaveListProps) => {
  return list.length > 0 ? (
    <div className='mt-2 rounded-2xl bg-gray-100 p-4'>
      {list.map((data) => {
        const itemColor =
          data.annualLeaveType === 'ALL_DAY'
            ? 'bg-red-400'
            : data.annualLeaveType === 'HALF_AM'
              ? 'bg-amber-300'
              : 'bg-blue-300';

        return (
          <div className='mb-2 flex h-14 items-center gap-2 rounded-lg bg-white px-2 font-sans drop-shadow-md'>
            <div className={clsx('h-5 w-1 rounded-sm', itemColor)} />
            <div className='flex flex-1 items-center gap-1 font-medium text-black'>
              {data.userName}
              <span className='text-sm text-gray-500'>{` (${data.annualLeaveTypeName})`}</span>
            </div>
            <div className='flex flex-col gap-0.5 text-xs font-medium text-gray-800'>
              <span>
                {format(parse(data.startTime, 'HH:mm', new Date()), 'a hh:mm', { locale: ko })}
              </span>

              <span>
                {format(parse(data.endTime, 'HH:mm', new Date()), 'a hh:mm', { locale: ko })}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  ) : null;
};

export default AnnualLeaveList;
