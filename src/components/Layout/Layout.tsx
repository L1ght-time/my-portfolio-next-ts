import { PropsWithChildren } from 'react';

import { Navbar } from '@/components/Layout/Navbar';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex">
      <Navbar />
      <div className="p-5 w-full">{children}</div>
    </div>
  );
};
