import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createAnnualLeave } from '../api/annualLeaveService';
import { QUERY_KEY_ANNUAL_LEAVE } from './queryKey';

export const useCreateAnnualLeaveMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createAnnualLeave,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [QUERY_KEY_ANNUAL_LEAVE.LIST_BY_DATE] });
      await queryClient.invalidateQueries({ queryKey: [QUERY_KEY_ANNUAL_LEAVE.SUMMARY] });
    },
  });
};
