import type { TodayAttendanceRes } from '../api/types/response';
import type { TodayAttendance } from '../types/attendance';
import { parseISO } from 'date-fns';

export const mapResToTodayAttendance = (res: TodayAttendanceRes): TodayAttendance => {
  return {
    clockIn: res.clockIn ? parseISO(res.clockIn) : null,
    clockOut: res.clockOut ? parseISO(res.clockOut) : null,
    status: res.clockIn && res.clockOut ? 'DONE' : res.clockIn ? 'WORKING' : 'BEFORE',
  };
};
