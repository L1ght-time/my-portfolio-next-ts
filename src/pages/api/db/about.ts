import { nanoid } from 'nanoid';

import IEmploymentHistoryProps from '@/pages/about/EmploymentHistory';

export interface IAboutData {
  title: string;
  employmentHistory: ReadonlyArray<IEmploymentHistoryProps>;
}
export const about: IAboutData = {
  title: 'ABOUT',
  employmentHistory: [
    {
      id: nanoid(),
      company: {
        path: '@/assets/civenty.jpg',
        title: 'Civenty',
      },
      position: 'Frontend Developer',
      period: {
        start: '',
        end: '',
      },
      responsibilities: [{ id: nanoid(), item: '' }],
      technologyStack: [{ id: nanoid(), tag: '' }],
    },
  ],
} as const;
