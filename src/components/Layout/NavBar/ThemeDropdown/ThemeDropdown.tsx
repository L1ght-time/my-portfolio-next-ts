import { MdKeyboardArrowDown } from 'react-icons/md';
import { useCallback, useEffect } from 'react';

import { useThemeStore } from '@/store';
import {
  DropDown,
  DropDownButton,
  DropDownContent,
  DropDownIcon,
  DropDownItem,
  DropDownLabel,
} from '@/components/shared/DropDown';
import { TThemesKeys } from '@/theme/constants';

import { modelThemes } from './ThemeDropdown.constants';

export const ThemeDropdown = () => {
  const { theme, setTheme } = useThemeStore();

  const handleClick = useCallback((name: TThemesKeys) => {
    setTheme(name);
    localStorage.setItem('theme', name);
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    const cachedTheme = localStorage.getItem('theme');

    return () => {
      setTheme(cachedTheme as TThemesKeys);
      document.body.setAttribute('data-theme', theme);
    };
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
            <DropDownButton onClick={() => handleClick(name)}>{name.toUpperCase()}</DropDownButton>
          </DropDownItem>
        ))}
      </DropDownContent>
    </DropDown>
  );
};
