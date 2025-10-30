import type { TAnnualLeaveType } from '../../types/annualLeaveData';

export interface AnnualLeaveSummaryRes {
  year: number;
  entitlementDays: number;
  carriedOverDays: number;
  extraGrantedDays: number;
  usedDays: number;
  remainingDays: number;
}

export interface AnnualLeaveListRes {
  id: number;
  userId: number;
  userName: string;
  date: string;
  startTime: string;
  endTime: string;
  annualLeaveType: TAnnualLeaveType;
}
