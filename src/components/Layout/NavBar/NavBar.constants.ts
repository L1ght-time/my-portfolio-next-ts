import { LanguageDropdown } from './LanguageDropdown';
import { ThemeDropdown } from './ThemeDropdown';

export const modelMenuItems = [
  {
    id: 1,
    Component: LanguageDropdown,
  },
  {
    id: 2,
    Component: ThemeDropdown,
  },
] as const;
