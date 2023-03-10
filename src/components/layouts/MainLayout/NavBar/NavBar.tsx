import { LanguageDropdown } from '@/components/layouts/MainLayout/NavBar/LanguageDropdown';
import { ThemeDropdown } from '@/components/layouts/MainLayout/NavBar/ThemeDropdown';

export const NavBar = () => {
  return (
    <div className="bg-gray-50 px-4">
      <nav className="flex justify-end items-center w-full h-16">
        <div className="flex justify-between gap-5">
          <LanguageDropdown />
          <ThemeDropdown />
        </div>
      </nav>
    </div>
  );
};
