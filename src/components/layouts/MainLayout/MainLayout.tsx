import { PropsWithChildren } from 'react';

import { Sidebar } from '@/components/layouts/MainLayout/Sidebar';
import { NavBar } from '@/components/layouts/MainLayout/NavBar';

export const MainLayout = ({ children }: PropsWithChildren) => {
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
