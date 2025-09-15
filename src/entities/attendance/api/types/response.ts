export interface AttendanceRecordRes {
  id: number;
  userId: number;
  occurredAt: string;
  createdAt: string;
  attendanceType: string;
  localDate: string;
}

export interface TodayAttendanceRes {
  clockIn: string | null;
  clockOut: string | null;
}
