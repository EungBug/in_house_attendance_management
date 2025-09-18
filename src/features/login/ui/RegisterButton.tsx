import clsx from 'clsx';

interface Props {
  onClick: () => void;
}

const RegisterButton = ({ onClick }: Props) => {
  return (
    <button
      className={clsx(
        'btn h-12 w-full rounded-xl border-white shadow-none btn-outline',
        'text-lg font-semibold text-white',
        'hover:bg-white hover:text-primary active:bg-white active:text-primary',
      )}
      onClick={onClick}
    >
      회원가입
    </button>
  );
};

export default RegisterButton;
