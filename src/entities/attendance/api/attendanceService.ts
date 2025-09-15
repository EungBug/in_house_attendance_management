import { apiClient } from '@/shared/lib/api/apiClient';
import type { AttendanceRecordRes, TodayAttendanceRes } from './types/response';

// 출근
export const createClockIn = async (): Promise<AttendanceRecordRes> => {
  const res = await apiClient.post('/attendance/clock-in');
  return res.data;
};

// 퇴근
export const createClockOut = async (): Promise<AttendanceRecordRes> => {
  const res = await apiClient.post('/attendance/clock-out');
  return res.data;
};

// 오늘 근태
export const fetchTodayAttendance = async (): Promise<TodayAttendanceRes> => {
  const res = await apiClient.get('/attendance/today');
  return res.data;
};
