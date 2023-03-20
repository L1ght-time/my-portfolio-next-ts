import { FC } from 'react';
import Image from 'next/image';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { useRouter } from 'next/router';

import { ICompany } from '@/types/IEmploymentHistory';

export const EmploymentDetailHead: FC<Omit<ICompany, 'title'>> = ({ image }) => {
  const router = useRouter();

  return (
    <div className="flex justify-between">
      <Image src={image} className="w-16 h-16 rounded-xl" alt="" />
      <button onClick={router.back}>
        <MdOutlineKeyboardArrowLeft fontSize={36} />
      </button>
    </div>
  );
};
