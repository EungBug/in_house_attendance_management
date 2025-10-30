import type { TAnnualLeaveType } from '../../types/annualLeaveData';

export interface AnnualLeaveCreateReq {
  requestDate: string;
  annualLeaveType: TAnnualLeaveType;
}
