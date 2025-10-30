import { useCreateAnnualLeaveMutation } from '@/entities/annualLeave/model/useCreateAnnualLeaveMutation';
import type { TAnnualLeaveType } from '@/entities/annualLeave/types/annualLeaveData';
import { useNavigate } from '@tanstack/react-router';
import { useForm, type SubmitHandler } from 'react-hook-form';

interface CreateAnnualLeaveFormValues {
  requestDate: string;
  annualLeaveType: TAnnualLeaveType;
}

export const useCreateAnnualLeave = () => {
  const navigate = useNavigate();
  const { mutate, isSuccess } = useCreateAnnualLeaveMutation();

  const {
    handleSubmit,
    register,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<CreateAnnualLeaveFormValues>({
    mode: 'onSubmit',
    defaultValues: { requestDate: '', annualLeaveType: 'ALL_DAY' },
  });

  const createAnnualLeave: SubmitHandler<CreateAnnualLeaveFormValues> = (data) => {
    mutate(data);
  };

  return {
    register,
    errors,
    onSubmit: handleSubmit(createAnnualLeave),
  };
};
