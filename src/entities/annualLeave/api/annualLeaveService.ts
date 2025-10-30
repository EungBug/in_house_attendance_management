import { apiClient } from '@/shared/lib/api/apiClient';
import type { AnnualLeaveCreateReq } from './types/request';
import type { AnnualLeaveListRes, AnnualLeaveSummaryRes } from './types/response';

// 휴가 summary 조회
export const fetchAnnualLeaveSummary = async (): Promise<AnnualLeaveSummaryRes> => {
  const res = await apiClient.get('/annual-leave/count');
  return res.data;
};

// 날짜별 휴가 조회
export const fetchAnnualLeaveListByDate = async (date: string): Promise<AnnualLeaveListRes[]> => {
  const res = await apiClient.get(`/annual-leave/date/${date}`);
  return res.data;
};

// 휴가 등록
export const createAnnualLeave = async (data: AnnualLeaveCreateReq): Promise<boolean> => {
  const res = await apiClient.post('/annual-leave', data);
  return res.data;
};
