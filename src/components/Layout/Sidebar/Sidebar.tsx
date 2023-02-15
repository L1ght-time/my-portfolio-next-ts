import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';
import clsx from 'clsx';

import { ListItem } from '@/components/Layout/Sidebar/ListItem';
import { useLayoutStore } from '@/store';
import { ProfileImage } from '@/components/shared';

import { model } from './Sidebar.constants';

export function Sidebar() {
  const { isOpen, setOpen } = useLayoutStore();

  return (
    <nav
      className={clsx(
        'flex flex-col justify-between bg-gray-50 w-24 h-screen text-gray-900 border-r-1 border-gray-300 transition-[width]',
        { ['w-64']: isOpen },
      )}
    >
      <div className="px-4">
        <div className="flex flex-wrap mt-8">
          <ProfileImage />
        </div>
        <div className="mt-5 mb-4">
          <ul>
            {model.map((item) => (
              <ListItem key={item.name} {...item} />
            ))}
          </ul>
        </div>
      </div>

      <button className="flex justify-center w-full border-t border-gray-100 p-4 hover:bg-gray-100" onClick={setOpen}>
        {isOpen ? <RxDoubleArrowLeft /> : <RxDoubleArrowRight />}
      </button>
    </nav>
  );
}
