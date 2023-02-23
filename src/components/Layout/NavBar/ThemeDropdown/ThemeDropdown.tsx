import { MdKeyboardArrowDown } from 'react-icons/md';
import { useEffect } from 'react';

import { useThemeStore } from '@/store';
import {
  DropDown,
  DropDownButton,
  DropDownContent,
  DropDownIcon,
  DropDownItem,
  DropDownLabel,
} from '@/components/shared/DropDown';

import { modelThemes } from './ThemeDropdown.constants';

export const ThemeDropdown = () => {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <DropDown>
      <DropDownLabel className="btn m-1">
        {theme}
        <DropDownIcon className="ml-1">
          <MdKeyboardArrowDown />
        </DropDownIcon>
      </DropDownLabel>
      <DropDownContent>
        {modelThemes.map(({ id, name }) => (
          <DropDownItem key={id}>
            <DropDownButton onClick={() => setTheme(name)}>{name.toUpperCase()}</DropDownButton>
          </DropDownItem>
        ))}
      </DropDownContent>
    </DropDown>
  );
};
