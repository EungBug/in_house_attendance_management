import { format } from 'date-fns';
import type { TodayAttendance } from '../types/attendance';

export const getTodayRecord = (data?: TodayAttendance) => {
  if (!data)
    return {
      clockIn: '',
      clockOut: '',
    };

  const { clockIn, clockOut } = data;

  return {
    clockIn: formatOccurredAt(clockIn),
    clockOut: formatOccurredAt(clockOut),
  };
};

const formatOccurredAt = (date: Date | null) => (date ? format(date, 'HH시 mm분 ss초') : '');
