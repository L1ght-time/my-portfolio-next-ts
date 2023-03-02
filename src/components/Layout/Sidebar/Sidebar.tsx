import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';
import clsx from 'clsx';
import { useRouter } from 'next/router';

import { ListItem } from '@/components/Layout/Sidebar/ListItem';
import { useLayoutStore } from '@/store';
import { ProfileImage } from '@/components/shared';

import { model } from './Sidebar.constants';

export function Sidebar() {
  const { isOpen, toggleOpen } = useLayoutStore();
  const { route } = useRouter();
  return (
    <nav
      className={clsx(
        'flex flex-col justify-between w-24 h-screen text-gray-900 border-r-[1px] border-gray-300 transition-[width]',
        { 'w-64': isOpen },
      )}
    >
      <div className="px-4">
        <div className="flex flex-wrap mt-4">
          <ProfileImage />
        </div>
        <div className="mt-5 mb-4">
          <ul className="flex flex-col gap-y-1.5">
            {model.map((item) => (
              <ListItem key={item.name} isActive={route === item.path} {...item} />
            ))}
          </ul>
        </div>
      </div>

      <button
        className="flex justify-center w-full border-t border-gray-100 p-4 hover:bg-gray-100"
        onClick={toggleOpen}
      >
        {isOpen ? <RxDoubleArrowLeft /> : <RxDoubleArrowRight />}
      </button>
    </nav>
  );
}
