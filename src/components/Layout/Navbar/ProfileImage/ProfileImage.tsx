import Image from 'next/image';

import profile from '@/assets/profile.jpg';

export const ProfileImage = () => {
  return (
    <div className="flex flex-wrap mt-8">
      <div className="w-64">
        <Image src={profile} className={`w-16 h-16 rounded-full`} alt="" />
      </div>
    </div>
  );
};
