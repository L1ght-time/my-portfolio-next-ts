import { MdKeyboardArrowDown } from 'react-icons/md';
import { useCallback, useEffect } from 'react';

import { useLocaleStore } from '@/store';
import {
  DropDown,
  DropDownButton,
  DropDownContent,
  DropDownIcon,
  DropDownItem,
  DropDownLabel,
} from '@/components/shared/DropDown';
import { TLocalesKeys } from '@/i18n';

import { modelLanguages } from './LanguageDropdown.constants';

export const LanguageDropdown = () => {
  const { locale, setLocale } = useLocaleStore();

  const handleClick = useCallback((name: TLocalesKeys) => {
    setLocale(name);
    localStorage.setItem('locale', name);
  }, []);

  useEffect(() => {
    const cachedLocale = localStorage.getItem('locale');

    if (cachedLocale) {
      setLocale(cachedLocale as TLocalesKeys);
    }
  }, []);

  return (
    <DropDown>
      <DropDownLabel className="btn m-1">
        {locale}
        <DropDownIcon className="ml-1">
          <MdKeyboardArrowDown />
        </DropDownIcon>
      </DropDownLabel>
      <DropDownContent>
        {modelLanguages.map(({ id, name }) => (
          <DropDownItem key={id}>
            <DropDownButton onClick={() => handleClick(name)}>{name.toUpperCase()}</DropDownButton>
          </DropDownItem>
        ))}
      </DropDownContent>
    </DropDown>
  );
};
