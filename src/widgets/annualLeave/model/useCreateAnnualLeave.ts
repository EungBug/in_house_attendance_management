import { useCreateAnnualLeaveMutation } from '@/entities/annualLeave/model/useCreateAnnualLeaveMutation';
import type { TAnnualLeaveType } from '@/entities/annualLeave/types/annualLeaveData';
import { useCallback, useEffect, useMemo } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';

interface CreateAnnualLeaveFormValues {
  requestDate: string;
  annualLeaveType: TAnnualLeaveType;
}

export const useCreateAnnualLeave = (close: () => void) => {
  const { mutate, isSuccess, error, isPending } = useCreateAnnualLeaveMutation();

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<CreateAnnualLeaveFormValues>({
    mode: 'onSubmit',
    defaultValues: { requestDate: '', annualLeaveType: 'ALL_DAY' },
  });

  useEffect(() => {
    if (isSuccess) {
      close();
      toast.success('휴가가 등록되었습니다.');
    }
  }, [isSuccess]);

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  const createAnnualLeave: SubmitHandler<CreateAnnualLeaveFormValues> = useCallback(
    (data) => {
      if (isPending) return;
      mutate(data);
    },
    [isPending],
  );

  const isButtonDisabled = useMemo(() => {
    return Boolean(watch().annualLeaveType && watch().requestDate);
  }, [watch]);

  return {
    register,
    errors,
    onSubmit: handleSubmit(createAnnualLeave),
    isButtonDisabled,
  };
};
