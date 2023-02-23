import { FC } from 'react';
import Link from 'next/link';

import { useLayoutStore } from '@/store';

import { IProps } from './ListItem.types';

export const ListItem: FC<IProps> = ({ name, path, Icon }) => {
  const { isOpen } = useLayoutStore();

  return (
    <li className="text-black hover:bg-gray-800 rounded rounded-lg hover:text-white font-bold">
      <Link href={path} className="flex items-center flex-row px-4 py-4">
        <span className="min-w-30">
          <Icon size={30} />
        </span>
        {isOpen && <span className="ml-2">{name}</span>}
      </Link>
    </li>
  );
};
