import clsx from 'clsx';

interface Props {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  error?: string;
}

const PwdInput = ({ value, onChange, placeholder, error }: Props) => {
  return (
    <div className='w-full'>
      <label className='input h-[44px] rounded-[8px] border-none bg-white py-2 text-sm caret-primary shadow-none ring-0 placeholder:text-[#909090]'>
        <input
          type='password'
          value={value}
          onChange={(event) => onChange?.(event.currentTarget.value)}
          placeholder={placeholder}
        />
      </label>

      <div
        className={clsx(
          'visible mt-1 self-end text-right text-xs text-red-300',
          error ? 'visible' : 'invisible',
        )}
      >
        {error}
      </div>
    </div>
  );
};

export default PwdInput;
