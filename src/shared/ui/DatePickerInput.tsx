import clsx from 'clsx';
import { format, parse } from 'date-fns';
import { useEffect, useLayoutEffect, useRef, useState, type InputHTMLAttributes } from 'react';
import { DayPicker } from 'react-day-picker';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value?: string; // 'yyyy-MM-dd'
  onChange?: React.ChangeEventHandler<HTMLInputElement>; // RHF에서 넘어오는 onChange
  placeholder?: string;
  error?: string;
  className?: string;
}

const DatePickerInput = ({
  value,
  onChange,
  placeholder,
  error,
  className,
  name,
  ...rest
}: Props) => {
  const [date, setDate] = useState<Date | undefined>(
    value ? parse(value, 'yyyy-MM-dd', new Date()) : undefined,
  );
  const [open, setOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  // RHF 값 업데이트
  useEffect(() => {
    if (!onChange) return;
    const formatted = date ? format(date, 'yyyy-MM-dd') : '';
    const event = {
      target: { name, value: formatted },
    } as unknown as React.ChangeEvent<HTMLInputElement>;
    onChange(event);
  }, [date, name, onChange]);

  const display = date ? format(date, 'yyyy-MM-dd') : '';

  // popover 열릴 때 위치 계산
  const positionPopover = () => {
    const btn = buttonRef.current;
    const pop = popoverRef.current;
    if (!btn || !pop) return;

    const rect = btn.getBoundingClientRect();
    const gap = 8;
    // 최소 너비를 인풋과 동일하게
    pop.style.minWidth = `${rect.width}px`;
    // 뷰포트 기준 고정 포지셔닝
    pop.style.position = 'fixed';
    pop.style.left = `${rect.left}px`;
    pop.style.top = `${rect.bottom + gap}px`;
    pop.style.zIndex = '2000';
  };

  // open 변경 시 위치 지정 + 이벤트 구독
  useLayoutEffect(() => {
    const pop = popoverRef.current;
    if (!pop) return;

    if (open) {
      positionPopover();
      // 열기
      if (!pop.matches(':popover-open')) pop.showPopover();

      const onScrollOrResize = () => positionPopover();
      window.addEventListener('scroll', onScrollOrResize, true);
      window.addEventListener('resize', onScrollOrResize);

      const onDocDown = (e: MouseEvent) => {
        if (!wrapperRef.current) return;
        const isInside =
          wrapperRef.current.contains(e.target as Node) || pop.contains(e.target as Node);
        if (!isInside) {
          setOpen(false);
        }
      };
      document.addEventListener('mousedown', onDocDown);

      return () => {
        window.removeEventListener('scroll', onScrollOrResize, true);
        window.removeEventListener('resize', onScrollOrResize);
        document.removeEventListener('mousedown', onDocDown);
      };
    } else {
      // 닫기
      if (pop.matches(':popover-open')) pop.hidePopover();
    }
  }, [open]);

  return (
    <div className='w-full' ref={wrapperRef}>
      <label
        className={clsx(
          'input flex h-[44px] w-full items-center rounded-[8px] border border-solid bg-white py-2 text-sm caret-primary shadow-none ring-0 placeholder:text-[#909090]',
          className,
        )}
      >
        {/* 표시용 버튼 */}
        <button
          ref={buttonRef}
          type='button'
          className='w-full text-left outline-none'
          aria-haspopup='dialog'
          aria-expanded={open}
          aria-controls='rdp-popover'
          onClick={() => setOpen((v) => !v)}
        >
          {display || <span className='text-[#909090]'>{placeholder}</span>}
        </button>

        {/* 실제 폼 값 (register용) */}
        <input {...rest} name={name} type='hidden' value={display} readOnly />
      </label>

      {/* 네이티브 Popover */}
      <div
        id='rdp-popover'
        ref={popoverRef}
        popover='manual'
        role='dialog'
        className='mt-2 !min-w-fit rounded-lg border bg-white p-2 shadow-lg'
        // ESC로 닫힘 처리 (UA가 기본 처리하지만 상태 동기화)
        onKeyDown={(e) => {
          if (e.key === 'Escape') setOpen(false);
        }}
      >
        <DayPicker
          className='react-day-picker border-none'
          mode='single'
          selected={date}
          onSelect={(d) => {
            setDate(d);
            setOpen(false);
          }}
        />
      </div>

      <div
        className={clsx(
          'mt-1 self-end text-right text-xs text-[#FF1818]',
          error ? 'visible' : 'invisible',
        )}
      >
        {error}
      </div>
    </div>
  );
};

export default DatePickerInput;
