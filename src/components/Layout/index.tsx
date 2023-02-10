import Navbar from '@/components/Layout/Navbar';
import { PropsWithChildren } from 'react';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};
