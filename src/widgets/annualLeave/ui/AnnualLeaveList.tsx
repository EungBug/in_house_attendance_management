import type { AnnualLeaveData } from '@/entities/annualLeave/types/annualLeaveData';
import { useAuthStore } from '@/entities/auth/model/useAuthStore';
import clsx from 'clsx';
import { format, parse } from 'date-fns';
import { ko } from 'date-fns/locale';
import { TbPlaneDeparture, TbTrash } from 'react-icons/tb';

interface AnnualLeaveListProps {
  date: Date;
  list: AnnualLeaveData[];
  onClickDelete: (id: number) => void;
}

const AnnualLeaveList = ({ date, list, onClickDelete }: AnnualLeaveListProps) => {
  const { userId } = useAuthStore();

  return list.length > 0 ? (
    <div className='mt-2 flex flex-col gap-2 rounded-2xl bg-gray-100 p-4'>
      {list.map((data) => {
        const itemColor =
          data.annualLeaveType === 'ALL_DAY'
            ? 'bg-red-400'
            : data.annualLeaveType === 'HALF_AM'
              ? 'bg-amber-300'
              : 'bg-blue-300';

        const isMine = data.userId == userId;

        return (
          <div className='flex h-14 items-center gap-1 rounded-lg bg-white px-2 font-sans drop-shadow-md'>
            <button
              className={clsx(
                'flex size-7 items-center justify-center rounded-md',
                isMine ? 'hover:bg-red-100' : '',
              )}
              disabled={!isMine}
              onClick={() => onClickDelete(data.id)}
            >
              {isMine ? (
                <TbTrash className='text-red-400' />
              ) : (
                <TbPlaneDeparture className='text-primary' />
              )}
            </button>

            <div className={clsx('mr-1 h-5 w-1 rounded-sm', itemColor)} />
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
