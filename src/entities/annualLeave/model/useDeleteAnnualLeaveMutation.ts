import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteAnnualLeaveById } from '../api/annualLeaveService';
import { QUERY_KEY_ANNUAL_LEAVE } from './queryKey';

export const useDeleteAnnualLeaveMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteAnnualLeaveById,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [QUERY_KEY_ANNUAL_LEAVE.LIST_BY_DATE] });
      await queryClient.invalidateQueries({ queryKey: [QUERY_KEY_ANNUAL_LEAVE.SUMMARY] });
    },
  });
};
