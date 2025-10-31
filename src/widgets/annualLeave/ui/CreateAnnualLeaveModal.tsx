import DatePickerInput from '@/shared/ui/DatePickerInput';
import { TbX } from 'react-icons/tb';
import Modal from 'react-modal';
import { useCreateAnnualLeave } from '../model/useCreateAnnualLeave';

interface CreateAnnualLeaveModalProps {
  isOpen: boolean;
  close: () => void;
}

const CreateAnnualLeaveModal = ({ isOpen, close }: CreateAnnualLeaveModalProps) => {
  const { register, errors, onSubmit, isButtonDisabled } = useCreateAnnualLeave(close);

  return (
    <Modal
      isOpen={isOpen}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          width: '100%',
          height: '100vh',
          zIndex: 10,
          position: 'fixed',
          top: 0,
          left: 0,
        },
        content: {
          width: '90%',
          height: '66%',
          zIndex: 150,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '12px',
          boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
          backgroundColor: 'white',
          justifyContent: 'center',
          overflow: 'auto',
        },
      }}
    >
      <div className='relative flex h-full flex-col'>
        <div className='flex items-center justify-between'>
          <h2 className='text-xl font-semibold'>휴가 등록</h2>
          <button onClick={close}>
            <TbX className='text-2xl' />
          </button>
        </div>

        <form onSubmit={onSubmit} className='mt-5 flex flex-1 flex-col justify-between'>
          <div>
            <>
              <label className='mb-1 inline-block font-sans font-medium'>휴가일</label>

              <DatePickerInput
                {...register('requestDate', {
                  required: '날짜를 입력해주세요',
                })}
                placeholder='날짜를 입력해주세요'
                error={errors?.requestDate?.message?.toString()}
                className='!border border-solid'
              />
            </>

            <>
              <label className='mt-4 mb-1 inline-block font-sans font-medium'>휴가 유형</label>
              <div className='flex gap-4 font-sans'>
                <label className='flex items-center gap-2 font-medium'>
                  <input
                    type='radio'
                    value='ALL_DAY'
                    defaultChecked
                    className='radio border-primary radio-sm checked:text-primary'
                    {...register('annualLeaveType', { required: '휴가 유형을 선택하세요.' })}
                  />
                  연차
                </label>

                <label className='flex items-center gap-2 font-medium'>
                  <input
                    type='radio'
                    value='HALF_AM'
                    className='radio border-primary radio-sm checked:text-primary'
                    {...register('annualLeaveType', { required: '휴가 유형을 선택하세요.' })}
                  />
                  오전 반차
                </label>

                <label className='flex items-center gap-2 font-medium'>
                  <input
                    type='radio'
                    value='HALF_PM'
                    className='radio border-primary radio-sm checked:text-primary'
                    {...register('annualLeaveType', { required: '휴가 유형을 선택하세요.' })}
                  />
                  오후 반차
                </label>
              </div>
            </>
          </div>

          <button className='btn w-full btn-primary' disabled={isButtonDisabled}>
            등록하기
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default CreateAnnualLeaveModal;
