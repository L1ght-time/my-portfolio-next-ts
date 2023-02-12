import { FC } from 'react';
import Link from 'next/link';

import { IProps } from '@/components/Layout/Navbar/ListItem';

export const ListItem: FC<IProps> = ({ name, path, Icon }) => {
  return (
    <li className="text-black  hover:bg-gray-800 rounded rounded-lg hover:text-white font-bold">
      <Link href={path} className="flex flex-row px-4 py-4">
        <Icon size={20} />
        <span className="ml-2">{name}</span>
      </Link>
    </li>
  );
};
