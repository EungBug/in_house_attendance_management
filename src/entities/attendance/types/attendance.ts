export type TAttendanceType = 'CLOCK-IN' | 'CLOCK-OUT';

export type TWorkingStatus = 'BEFORE' | 'WORKING' | 'DONE';

export interface TodayAttendance {
  clockIn: Date | null;
  clockOut: Date | null;
  status: TWorkingStatus;
}
