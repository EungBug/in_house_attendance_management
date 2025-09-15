import clsx from 'clsx';

interface Props {
  type?: 'button' | 'submit' | 'reset';
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button = ({ type = 'button', text, onClick, className }: Props) => {
  return (
    <button
      type={type}
      className={clsx(
        'btn flex h-12 items-center justify-center rounded-xl',
        'bg-secondary hover:bg-[#A8D823] active:bg-[#A8D823] disabled:bg-[#E0E0E0]',
        'text-lg font-bold text-accent disabled:text-[#909090]',
        className,
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
