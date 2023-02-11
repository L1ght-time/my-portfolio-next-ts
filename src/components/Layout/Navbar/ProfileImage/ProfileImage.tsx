import Image from 'next/image';

import profile from '@/assets/profile.jpg';

export const ProfileImage = () => {
  return (
    <div className="flex flex-wrap mt-8">
      <div className="w-1/2">
        <Image src={profile} className="mx-auto w-20 h-20 rounded-full" alt="" />
      </div>
    </div>
  );
};
