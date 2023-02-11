import { PropsWithChildren } from 'react';
import { Navbar } from '@/components/Layout/Navbar';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};
