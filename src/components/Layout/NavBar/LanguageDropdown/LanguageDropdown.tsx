import { MdKeyboardArrowDown } from 'react-icons/md';

import { useLayoutStore } from '@/store';
import {
  DropDown,
  DropDownButton,
  DropDownContent,
  DropDownIcon,
  DropDownItem,
  DropDownLabel,
} from '@/components/shared/DropDown';
import { LOCALES } from '@/i18n';

import { modelLanguages } from './LanguageDropdown.constants';

export const LanguageDropdown = () => {
  const { language, setLocale, setLanguage } = useLayoutStore();

  const handleClick = (name: string) => {
    setLanguage(name);
    setLocale(LOCALES[name.toUpperCase() as keyof typeof LOCALES]);
  };

  return (
    <DropDown>
      <DropDownLabel className="btn m-1">
        {language}
        <DropDownIcon className="ml-1">
          <MdKeyboardArrowDown />
        </DropDownIcon>
      </DropDownLabel>
      <DropDownContent>
        {modelLanguages.map(({ id, name }) => (
          <DropDownItem key={id}>
            <DropDownButton onClick={() => handleClick(name)}>{name}</DropDownButton>
          </DropDownItem>
        ))}
      </DropDownContent>
    </DropDown>
  );
};
