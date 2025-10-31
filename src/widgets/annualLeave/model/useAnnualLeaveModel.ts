import { useAnnualLeaveListQuery } from '@/entities/annualLeave/model/useAnnualLeaveListQuery';
import { useAnnualLeaveSummaryQuery } from '@/entities/annualLeave/model/useAnnualLeaveSummaryQuery';
import { useDeleteAnnualLeaveMutation } from '@/entities/annualLeave/model/useDeleteAnnualLeaveMutation';
import { useModalStore } from '@/shared/model/useModalStore';
import { format } from 'date-fns';
import { useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

export const useAnnualLeaveModel = () => {
  const { openModal } = useModalStore();
  const { data: summary, isLoading } = useAnnualLeaveSummaryQuery();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { setDate, data: section } = useAnnualLeaveListQuery(format(new Date(), 'yyyy-MM-dd'));
  const [activeMonthDate, setActiveMonthDate] = useState(new Date());
  const { mutate: deleteMutate, error, isSuccess } = useDeleteAnnualLeaveMutation();

  useEffect(() => {
    error && toast.error(error.message);
  }, [error]);

  useEffect(() => {
    isSuccess && toast.success('휴가 등록을 취소했어요.');
  }, [isSuccess]);

  useEffect(() => {
    setDate(format(activeMonthDate, 'yyyy-MM-dd'));
  }, [activeMonthDate]);

  const listBySelected = useMemo(() => {
    return (section ?? [])
      .filter((data) => data.date === format(selectedDate, 'yyyy-MM-dd'))
      .flatMap((data) => data.list);
  }, [section, selectedDate]);

  const handleDeleteAnnualLeave = (id: number) => {
    openModal({
      title: '휴가 삭제',
      content: '등록된 휴가를 삭제하시겠습니까?',
      confirm: '삭제',
      onClickConfirm: () => deleteMutate(id),
      cancel: '취소',
    });
  };

  return {
    year: summary?.year ?? new Date().getFullYear,
    summary,
    selectedDate,
    setSelectedDate,
    onChangeMonth: setActiveMonthDate,
    section: section || [],
    listBySelected,
    onClickDelete: handleDeleteAnnualLeave,
  };
};
