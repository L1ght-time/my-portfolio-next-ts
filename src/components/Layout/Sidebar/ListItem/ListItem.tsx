import { FC } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import { useLayoutStore } from '@/store';

import { IProps } from './ListItem.types';

export const ListItem: FC<IProps> = ({ name, path, isActive, Icon }) => {
  const { isOpen } = useLayoutStore();

  return (
    <li
      className={clsx(`text-black rounded rounded-lg font-bold transition-colors`, {
        'hover:bg-gray-700 hover:text-white': !isActive,
        'bg-gray-800 text-white font-bold': isActive,
      })}
    >
      <Link href={path} className="flex items-center flex-row px-4 py-4">
        <span className="min-w-30">
          <Icon size={30} />
        </span>
        {isOpen && <span className="ml-2">{name}</span>}
      </Link>
    </li>
  );
};
