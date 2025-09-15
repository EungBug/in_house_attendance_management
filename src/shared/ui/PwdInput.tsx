import IcoInvisible from '@/assets/icons/ico_invisible.svg?react';
import IcoVisible from '@/assets/icons/ico_visible.svg?react';
import clsx from 'clsx';
import React, { type InputHTMLAttributes } from 'react';
import useDisclosure from '../lib/hooks/useDisclosure';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  error?: string;
}

const PwdInput = ({ value, onChange, placeholder, error, ...rest }: Props) => {
  const [visible, { toggle }] = useDisclosure();

  return (
    <div className='w-full'>
      <label className='input h-[44px] w-full rounded-[8px] border-none bg-white py-2 text-sm caret-primary shadow-none ring-0 placeholder:text-[#909090]'>
        <input
          {...rest}
          type={visible ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete='off'
        />
        {!visible ? (
          <IcoVisible onClick={toggle} className='text-[#909090]' />
        ) : (
          <IcoInvisible onClick={toggle} className='text-[#909090]' />
        )}
      </label>

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

export default PwdInput;
