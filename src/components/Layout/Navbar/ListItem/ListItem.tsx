import { FC } from 'react';
import Link from 'next/link';
import { IProps } from '@/components/Layout/Navbar/ListItem/ListItem.types';
export const ListItem: FC<IProps> = ({ name, path, icon }) => {
  return (
    <li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
      <span>
        <svg className="fill-current h-5 w-5 " viewBox="0 0 24 24">
          <path
            d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
                        4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
                        4h4v-4h-4M4 8h4V4H4v4z"
          ></path>
        </svg>
      </span>
      <Link href="/">
        <span className="ml-2">Dashboard</span>
      </Link>
    </li>
  );
};
