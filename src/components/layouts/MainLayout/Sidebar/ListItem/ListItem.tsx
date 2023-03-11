import { FC } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import { useLayoutStore } from '@/store';

import { IListItemProps } from './ListItem.types';

export const ListItem: FC<IListItemProps> = ({ name, path, Icon, isActive }) => {
  const { isOpen } = useLayoutStore();

  return (
    <li>
      <Link href={path} className={clsx('rounded-xl', { active: isActive })}>
        <span className="min-w-30">
          <Icon size={30} />
        </span>
        {isOpen && <span>{name}</span>}
      </Link>
    </li>
  );
};
