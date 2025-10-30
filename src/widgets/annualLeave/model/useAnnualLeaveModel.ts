import { useAnnualLeaveListQuery } from '@/entities/annualLeave/model/useAnnualLeaveListQuery';
import { useAnnualLeaveSummaryQuery } from '@/entities/annualLeave/model/useAnnualLeaveSummaryQuery';
import { format } from 'date-fns';
import { useEffect, useMemo, useState } from 'react';

export const useAnnualLeaveModel = () => {
  const { data: summary, isLoading } = useAnnualLeaveSummaryQuery();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { setDate, data: section } = useAnnualLeaveListQuery(format(new Date(), 'yyyy-MM-dd'));
  const [activeMonthDate, setActiveMonthDate] = useState(new Date());

  useEffect(() => {
    console.log(format(activeMonthDate, 'yyyy-MM-dd'));
    setDate(format(activeMonthDate, 'yyyy-MM-dd'));
  }, [activeMonthDate]);

  const listBySelected = useMemo(() => {
    return (section ?? [])
      .filter((data) => data.date === format(selectedDate, 'yyyy-MM-dd'))
      .flatMap((data) => data.list);
  }, [section, selectedDate]);

  return {
    year: summary?.year ?? new Date().getFullYear,
    summary,
    selectedDate,
    setSelectedDate,
    onChangeMonth: setActiveMonthDate,
    section: section || [],
    listBySelected,
  };
};
