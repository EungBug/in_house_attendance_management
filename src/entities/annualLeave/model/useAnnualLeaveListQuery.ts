import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { fetchAnnualLeaveListByDate } from '../api/annualLeaveService';
import { mapToSection } from '../lib/mappers';
import { QUERY_KEY_ANNUAL_LEAVE } from './queryKey';

export const useAnnualLeaveListQuery = (initDate: string) => {
  const [date, setDate] = useState(initDate);

  const query = useQuery({
    queryKey: [QUERY_KEY_ANNUAL_LEAVE.LIST_BY_DATE, date],
    queryFn: async () => mapToSection(await fetchAnnualLeaveListByDate(date)),
    placeholderData: keepPreviousData,
  });

  return {
    setDate,
    ...query,
  };
};
