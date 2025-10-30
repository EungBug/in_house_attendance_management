export type TAnnualLeaveType = 'ALL_DAY' | 'HALF_AM' | 'HALF_PM';
export const ANNUAL_LEAVE_TYPE_NAME: Record<TAnnualLeaveType, string> = {
  ALL_DAY: '연차',
  HALF_AM: '오전 반차',
  HALF_PM: '오후 반차',
};

export interface AnnualLeaveSection {
  date: string;
  list: AnnualLeaveData[];
}

export interface AnnualLeaveData {
  id: number;
  userId: number;
  userName: string;
  annualLeaveTypeName: string;
  annualLeaveType: TAnnualLeaveType;
  date: string;
  startTime: string;
  endTime: string;
}

export interface CreateAnnualLeave {
  requestDate: string;
  annualLeaveType: TAnnualLeaveType;
}
