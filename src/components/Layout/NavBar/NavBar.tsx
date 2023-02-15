import React from 'react';
import clsx from 'clsx';

export const NavBar = () => {
  return (
    <div className="bg-gray-50 pt-8 px-4">
      <nav className={clsx('flex justify-end w-full h-16')}>
        <ul className="flex justify-between gap-5">
          <li>Theme</li>
          <li>Language</li>
        </ul>
      </nav>
    </div>
  );
};
