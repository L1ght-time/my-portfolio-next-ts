import { ListItem } from '@/components/Layout/Navbar/ListItem';
import { model } from '@/components/Layout/Navbar/Navbar.constants';
import { ProfileImage } from '@/components/Layout/Navbar/ProfileImage';

export function Navbar() {
  return (
    <nav className="flex flex-col bg-purple-900 w-64 h-screen px-4 text-gray-900 border border-purple-900">
      <ProfileImage />
      <div className="mt-10 mb-4">
        <ul className="ml-4">
          {model.map((item) => (
            <ListItem key={item.name} {...item} />
          ))}
        </ul>
      </div>
    </nav>
  );
}
