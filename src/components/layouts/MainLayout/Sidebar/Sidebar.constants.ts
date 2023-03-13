import { BiHome } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';

import { IListItemProps } from './ListItem';

export const model: ReadonlyArray<IListItemProps> = [
  {
    name: 'Dashboard',
    path: '/',
    Icon: BiHome,
  },
  {
    name: 'About',
    path: '/about',
    Icon: CgProfile,
  },
] as const;
