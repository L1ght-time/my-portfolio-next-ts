import { PropsWithChildren } from 'react';

import { NavBar } from './NavBar';
import { Sidebar } from './Sidebar';

export const MainLayout = ({ children }: PropsWithChildren) => (
  <div className="flex">
    <Sidebar />
    <div className="flex flex-col w-full">
      <NavBar />
      <div className="p-5 w-full h-full bg-neutral-200">{children}</div>
    </div>
  </div>
);
