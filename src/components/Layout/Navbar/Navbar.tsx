import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';

import { ProfileImage } from '@/components/Layout/Navbar/ProfileImage';
import { useNavbarStore } from '@/components/Layout/Navbar/Navbar.store';
import { ListItem } from '@/components/Layout/Navbar/ListItem';
import { model } from 'src/components/Layout/Navbar/Navbar.constants';

export function Navbar() {
  const { isOpen, setOpen } = useNavbarStore();

  const handleSwitch = () => {
    setOpen();
  };

  const computedWidth = isOpen ? 'w-64' : 'w-24';

  return (
    <nav
      className={`flex flex-col justify-between bg-gray-50 ${computedWidth} h-screen text-gray-900 border-r-1 border-gray-300 transition-[width]`}
    >
      <div className="px-4">
        <ProfileImage />
        <div className="mt-5 mb-4">
          <ul>
            {model.map((item) => (
              <ListItem key={item.name} {...item} />
            ))}
          </ul>
        </div>
      </div>

      <button
        className="flex justify-center w-full border-t border-gray-100 p-4 hover:bg-gray-100"
        onClick={handleSwitch}
      >
        {isOpen ? <RxDoubleArrowLeft /> : <RxDoubleArrowRight />}
      </button>
    </nav>
  );
}
