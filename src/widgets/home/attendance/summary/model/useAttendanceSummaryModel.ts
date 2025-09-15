import { getTodayRecord } from '@/entities/attendance/lib/getTodayRecord';
import { useFetchTodayAttendanceQuery } from '@/entities/attendance/model/useFetchTodayAttendanceQuery';
import { useAuthStore } from '@/entities/auth/model/useAuthStore';
import { useMemo } from 'react';

export const useAttendanceSummaryModel = () => {
  const { userName } = useAuthStore();
  const { data } = useFetchTodayAttendanceQuery();

  const todayRecord = useMemo(() => getTodayRecord(data), [data]);

  const status = useMemo(() => data?.status ?? 'BEFORE', [data]);

  return {
    userName,
    todayRecord,
    status,
    isWorkDone: status === 'DONE',
  };
};
