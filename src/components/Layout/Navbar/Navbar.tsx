import { ListItem } from '@/components/Layout/Navbar/ListItem';
import { model } from '@/components/Layout/Navbar/Navbar.constants';
import { ProfileImage } from '@/components/Layout/Navbar/ProfileImage';

export function Navbar() {
  return (
    <nav className="flex flex-col bg-gray-50 w-64 h-screen px-4 text-gray-900 border-r-1 border-gray-300">
      <ProfileImage />
      <div className="mt-5 mb-4">
        <ul>
          {model.map((item) => (
            <ListItem key={item.name} {...item} />
          ))}
        </ul>
      </div>
    </nav>
  );
}
