import { FC } from 'react';
import Link from 'next/link';

import { IProps } from '@/components/Layout/Navbar/ListItem';

export const ListItem: FC<IProps> = ({ name, path, Icon }) => {
  return (
    <li className="text-gray-100  border-gray-300 hover:text-black hover:bg-gray-300 hover:font-bold rounded rounded-lg">
      <Link href={path} className="flex flex-row px-4 py-4">
        <Icon size={20} />
        <span className="ml-2">{name}</span>
      </Link>
    </li>
  );
};
