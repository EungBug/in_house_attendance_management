import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY_ATTENDANCE } from './queryKey';
import { fetchTodayAttendance } from '../api/attendanceService';
import { mapResToTodayAttendance } from '../lib/mappers';

export const useFetchTodayAttendanceQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEY_ATTENDANCE.TODAY],
    queryFn: async () => mapResToTodayAttendance(await fetchTodayAttendance()),
  });
};
