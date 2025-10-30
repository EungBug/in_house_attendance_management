import type { AnnualLeaveSummary } from '../types/annualLeaveSummary';

interface Props {
  summary?: AnnualLeaveSummary;
}

const AnnualLeaveSummaryBoard = ({ summary }: Props) => {
  return (
    <div className='flex gap-2'>
      <div className='card flex flex-1 flex-col gap-2 bg-white px-1 py-3 text-center drop-shadow-sm'>
        <span className='text-xs'>총 지급 휴가</span>
        <span className='h-[2px] w-3/4 self-center bg-gray-200' />
        <span className='font-semibold text-black'>{summary?.totalCount ?? '-'}</span>
      </div>

      <div className='card flex flex-1 flex-col gap-2 bg-white px-1 py-3 text-center drop-shadow-sm'>
        <span className='text-xs'>사용 휴가</span>
        <span className='h-[2px] w-3/4 self-center bg-gray-200' />
        <span className='font-semibold text-gray-300'>{summary?.usedCount ?? '-'}</span>
      </div>

      <div className='card flex flex-1 flex-col gap-2 bg-white px-1 py-3 text-center drop-shadow-sm'>
        <span className='text-xs'>잔여 휴가</span>
        <span className='h-[2px] w-3/4 self-center bg-gray-200' />
        <span className='font-semibold text-primary'>{summary?.remainingCount ?? '-'}</span>
      </div>
    </div>
  );
};

export default AnnualLeaveSummaryBoard;
