import { createClockIn } from '@/entities/attendance/api/attendanceService';
import { QUERY_KEY_ATTENDANCE } from '@/entities/attendance/model/queryKey';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { toast } from 'react-toastify';

export const useClcokInMutation = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createClockIn,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [QUERY_KEY_ATTENDANCE.TODAY] });
      toast.success('출근 완료! 오늘 하루를 잘 버텨봐요..!');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleClickClockIn = useCallback(() => {
    if (isPending) return;

    mutate();
  }, [isPending]);

  return handleClickClockIn;
};
