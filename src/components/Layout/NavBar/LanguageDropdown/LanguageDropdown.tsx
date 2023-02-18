import { MdKeyboardArrowDown } from 'react-icons/md';

import {
  DropDown,
  DropDownButton,
  DropDownContent,
  DropDownContentItem,
  DropDownIcon,
} from '@/components/shared/DropDown/DropDown';
import { useLayoutStore } from '@/store';

const model = [
  { id: 1, name: 'Ukrainian' },
  { id: 2, name: 'English' },
];
export const LanguageDropdown = () => {
  const { language, setLanguage } = useLayoutStore();

  console.log({ language });
  return (
    <DropDown>
      <DropDownButton className="btn m-1">
        {language}
        <DropDownIcon className="ml-1">
          <MdKeyboardArrowDown />
        </DropDownIcon>
      </DropDownButton>
      <DropDownContent>
        <DropDownContentItem>
          {model.map(({ id, name }) => (
            <DropDownButton key={id} onClick={() => setLanguage(name)}>
              {name}
            </DropDownButton>
          ))}
        </DropDownContentItem>
      </DropDownContent>
    </DropDown>
  );
};
