import { groupBy } from 'lodash';
import type { AnnualLeaveListRes } from '../api/types/response';
import {
  ANNUAL_LEAVE_TYPE_NAME,
  type AnnualLeaveData,
  type AnnualLeaveSection,
} from '../types/annualLeaveData';

export const mapToSection = (res: AnnualLeaveListRes[]): AnnualLeaveSection[] => {
  return Object.entries(groupBy(res, (item) => item.date)).map(([key, list]) => ({
    date: key,
    list: list.map((item) => mapToAnnualLeaveData(item)),
  }));
};

const mapToAnnualLeaveData = (res: AnnualLeaveListRes): AnnualLeaveData => {
  return {
    id: res.id,
    userId: res.userId,
    userName: res.userName,
    startTime: res.startTime,
    endTime: res.endTime,
    date: res.date,
    annualLeaveTypeName: ANNUAL_LEAVE_TYPE_NAME[res.annualLeaveType],
    annualLeaveType: res.annualLeaveType,
  };
};
