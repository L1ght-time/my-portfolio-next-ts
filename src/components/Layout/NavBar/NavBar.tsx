import { modelMenuItems } from './NavBar.constants';

export const NavBar = () => {
  return (
    <div className="bg-gray-50 px-4">
      <nav className="flex justify-end items-center w-full h-16">
        <ul className="flex justify-between gap-5">
          {modelMenuItems.map(({ id, Component }) => (
            <Component key={id} />
          ))}
        </ul>
      </nav>
    </div>
  );
};
