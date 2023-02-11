import { FC } from 'react';
import Link from 'next/link';
import { BiHome } from 'react-icons/bi';

import { IProps } from '@/components/Layout/Navbar/ListItem';

export const ListItem: FC<IProps> = ({ name, path, Icon }) => {
  return (
    <li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
      <Icon size={20} />
      <Link href={path}>
        <span className="ml-2">{name}</span>
      </Link>
    </li>
  );
};
