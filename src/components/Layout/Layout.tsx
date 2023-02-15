import { PropsWithChildren } from 'react';

import { Sidebar } from '@/components/Layout/Sidebar';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-5 w-full bg-neutral-200">{children}</div>
    </div>
  );
};
