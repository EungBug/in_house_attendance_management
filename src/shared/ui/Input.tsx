import clsx from 'clsx';
import React, { type InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  error?: string;
}

const Input = ({ type = 'text', value, onChange, placeholder, error, ...rest }: Props) => {
  return (
    <div className='w-full'>
      <label className='input h-[44px] w-full rounded-[8px] border-none bg-white py-2 text-sm caret-primary shadow-none ring-0 placeholder:text-[#909090]'>
        <input {...rest} type={type} value={value} onChange={onChange} placeholder={placeholder} />
      </label>
      <div
        className={clsx(
          'visible mt-1 self-end text-right text-xs text-red-500',
          error ? 'visible' : 'invisible',
        )}
      >
        {error}
      </div>
    </div>
  );
};

export default Input;
