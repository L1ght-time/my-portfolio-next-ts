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

import { modelLanguages } from './LanguageDropdown.constants';

export const LanguageDropdown = () => {
  const { language, setLanguage } = useLayoutStore();

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
            <DropDownButton onClick={() => setLanguage(name)}>{name}</DropDownButton>
          </DropDownItem>
        ))}
      </DropDownContent>
    </DropDown>
  );
};
