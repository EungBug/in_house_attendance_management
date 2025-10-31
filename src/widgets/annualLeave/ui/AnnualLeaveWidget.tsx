import AnnualLeaveSummaryBoard from '@/entities/annualLeave/ui/AnnualLeaveSummaryBoard';
import useDisclosure from '@/shared/lib/hooks/useDisclosure';
import 'react-calendar/dist/Calendar.css';
import { useAnnualLeaveModel } from '../model/useAnnualLeaveModel';
import AnnualLeaveCalendar from './AnnualLeaveCalendar';
import AnnualLeaveList from './AnnualLeaveList';
import CreateAnnualLeaveModal from './CreateAnnualLeaveModal';

const AnnualLeaveWidget = () => {
  const {
    year,
    summary,
    selectedDate,
    setSelectedDate,
    onChangeMonth,
    section,
    listBySelected,
    onClickDelete,
  } = useAnnualLeaveModel();

  const [isOpenModal, { open, close }] = useDisclosure();

  return (
    <div className='px-5 py-6'>
      <div className='mb-5'>
        <div className='mb-4 flex items-center justify-between'>
          <div className='text-xl font-bold'>{`${year}년 휴가 현황`}</div>
          <button className='btn btn-sm btn-primary' onClick={open}>
            휴가 등록하기
          </button>
        </div>
        <AnnualLeaveSummaryBoard summary={summary} />
      </div>

      <AnnualLeaveCalendar
        selectedDate={selectedDate}
        onChangeDate={setSelectedDate}
        onChangeMonth={onChangeMonth}
        section={section}
      />

      <AnnualLeaveList date={selectedDate} list={listBySelected} onClickDelete={onClickDelete} />

      {isOpenModal && <CreateAnnualLeaveModal isOpen={isOpenModal} close={close} />}
    </div>
  );
};

export default AnnualLeaveWidget;
