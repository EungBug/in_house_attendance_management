import { useNavigate, useRouterState } from '@tanstack/react-router';
import clsx from 'clsx';
import { useCallback } from 'react';
import { TbCalendar, TbHome } from 'react-icons/tb';

const ROUTE = {
  HOME: '/',
  ANNUAL_LEAVE: '/annual-leave',
};

const BottomTab = () => {
  const navigate = useNavigate();
  const { location } = useRouterState();

  const { pathname } = location;

  const handleNavigate = useCallback(
    (route: string) => {
      if (pathname === route) return;
      navigate({
        to: route,
        replace: true,
      });
    },
    [pathname],
  );

  return (
    <div className='fixed bottom-0 flex h-15 w-full border-t border-t-gray-300 bg-white'>
      <button className='h-full w-full flex-1' onClick={() => handleNavigate(ROUTE.HOME)}>
        <div className='flex flex-col items-center justify-center gap-1'>
          <TbHome className={clsx('size-6', pathname === ROUTE.HOME && 'text-primary')} />
          <span className={clsx('text-sm', pathname === ROUTE.HOME && 'text-primary')}>홈</span>
        </div>
      </button>

      <div className='flex-1'>
        <button className='h-full w-full flex-1' onClick={() => handleNavigate(ROUTE.ANNUAL_LEAVE)}>
          <div className='flex flex-col items-center justify-center gap-1'>
            <TbCalendar
              className={clsx('size-6', pathname === ROUTE.ANNUAL_LEAVE && 'text-primary')}
            />
            <span className={clsx('text-sm', pathname === ROUTE.ANNUAL_LEAVE && 'text-primary')}>
              휴가
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default BottomTab;
