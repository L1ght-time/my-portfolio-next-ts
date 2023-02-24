import { PropsWithChildren } from 'react';

import { Sidebar } from '@/components/Layout/Sidebar';
import { NavBar } from '@/components/Layout/NavBar';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <NavBar />
        <div className="p-5 w-full h-full bg-neutral-200">{children}</div>
      </div>
    </div>
  );
};
