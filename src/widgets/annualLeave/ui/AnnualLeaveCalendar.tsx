import type { AnnualLeaveSection } from '@/entities/annualLeave/types/annualLeaveData';
import clsx from 'clsx';
import { format } from 'date-fns';
import { useMemo } from 'react';
import Calendar from 'react-calendar';
import type { TileArgs, TileContentFunc, Value } from 'react-calendar/dist/shared/types.js';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';

interface AnnualLeaveCalendarProps {
  selectedDate: Date;
  onChangeDate: (date: Date) => void;
  onChangeMonth: (date: Date) => void;
  section: AnnualLeaveSection[];
}

const AnnualLeaveCalendar = ({
  selectedDate,
  onChangeDate,
  onChangeMonth,
  section,
}: AnnualLeaveCalendarProps) => {
  const tileContent: TileContentFunc = useMemo(() => {
    return function ({ date, view }: TileArgs) {
      if (view === 'month' && date) {
        const dataList = section
          .filter((d) => d.date === format(date, 'yyyy-MM-dd'))
          .flatMap((d) => d.list);

        return (
          <div className='flex items-center justify-center gap-0.5'>
            {dataList.slice(0, 5).map((item) => {
              const itemColor =
                item.annualLeaveType === 'ALL_DAY'
                  ? 'bg-red-400'
                  : item.annualLeaveType === 'HALF_AM'
                    ? 'bg-amber-300'
                    : 'bg-blue-300';
              return <div className={clsx(itemColor, 'size-1 rounded-full')} />;
            })}
          </div>
        );
      }
      return <div></div>;
    };
  }, [section]);

  return (
    <div className='calendar'>
      <Calendar
        locale='ko-KR'
        formatDay={(_locale, date) => format(date, 'd')}
        minDetail='year'
        prevLabel={<TbChevronLeft />}
        prev2Label={null}
        nextLabel={<TbChevronRight />}
        next2Label={null}
        tileContent={tileContent}
        calendarType='gregory'
        value={selectedDate}
        onChange={(date: Value) => onChangeDate(date as Date)}
        onClickMonth={(value) => onChangeDate(value)}
        onActiveStartDateChange={({ activeStartDate, view }) => {
          if (view === 'month') {
            activeStartDate && onChangeMonth(activeStartDate);
          }
        }}
      />
    </div>
  );
};

export default AnnualLeaveCalendar;
