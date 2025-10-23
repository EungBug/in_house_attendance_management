import clsx from 'clsx';
import { format, parse } from 'date-fns';
import { useState, type InputHTMLAttributes } from 'react';
import { DayPicker } from 'react-day-picker';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  error?: string;
}

const DatePickerInput = ({ value, onChange, placeholder, error, ...rest }: Props) => {
  const [date, setDate] = useState<Date | undefined>(
    value ? parse(value, 'yyyy-MM-dd', new Date()) : undefined,
  );

  return (
    <div className='w-full'>
      <>
        <label className='input h-[44px] w-full rounded-[8px] border-none bg-white py-2 text-sm caret-primary shadow-none ring-0 placeholder:text-[#909090]'>
          <input
            {...rest}
            type='button'
            className='text-left'
            value={date ? format(date, 'yyyy-MM-dd') : undefined}
            onChange={onChange}
            placeholder={placeholder}
            popoverTarget='rdp-popover'
            style={{ anchorName: '--rdp' } as React.CSSProperties}
          />
        </label>

        <div
          popover='auto'
          id='rdp-popover'
          className='dropdown'
          style={{ positionAnchor: '--rdp' } as React.CSSProperties}
        >
          <DayPicker
            className='react-day-picker'
            mode='single'
            selected={date}
            onSelect={setDate}
          />
        </div>
      </>

      <div
        className={clsx(
          'visible mt-1 self-end text-right text-xs text-[#FF1818]',
          error ? 'visible' : 'invisible',
        )}
      >
        {error}
      </div>
    </div>
  );
};

export default DatePickerInput;
