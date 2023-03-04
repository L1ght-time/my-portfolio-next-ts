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
        id: 0,
        title: 'Civenty',
      },
      position: 'Frontend Developer',
      period: {
        start: 'июнь 2019 г',
        end: 'янв. 2020 г',
      },
      responsibilities: [{ id: nanoid(), item: 'cross-browser markup' }],
      technologyStack: [{ id: nanoid(), tag: 'Javascript' }],
    },
  ],
} as const;
