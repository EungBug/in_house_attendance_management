import { createClockOut } from '@/entities/attendance/api/attendanceService';
import { QUERY_KEY_ATTENDANCE } from '@/entities/attendance/model/queryKey';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { toast } from 'react-toastify';

export const useClockOutMutation = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createClockOut,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [QUERY_KEY_ATTENDANCE.TODAY] });
      toast.success('퇴근 완료! 오늘 하루 고생했어요!');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleClickClockOut = useCallback(() => {
    if (isPending) return;

    mutate();
  }, [isPending]);

  return handleClickClockOut;
};
