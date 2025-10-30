import { useQuery } from '@tanstack/react-query';
import { fetchAnnualLeaveSummary } from '../api/annualLeaveService';
import type { AnnualLeaveSummary } from '../types/annualLeaveSummary';
import { QUERY_KEY_ANNUAL_LEAVE } from './queryKey';

export const useAnnualLeaveSummaryQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEY_ANNUAL_LEAVE.SUMMARY],
    queryFn: async (): Promise<AnnualLeaveSummary> => {
      const summary = await fetchAnnualLeaveSummary();
      return {
        year: summary.year,
        totalCount: summary.entitlementDays + summary.carriedOverDays + summary.extraGrantedDays,
        usedCount: summary.usedDays,
        remainingCount: summary.remainingDays,
      };
    },
  });
};
