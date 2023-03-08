import { nanoid } from 'nanoid';

import civenty from '@/assets/civenty.jpeg';
import { IEmploymentHistoryProps } from '@/pages/about/EmploymentHistory/EmploymentHistory.types';

export interface IAboutData {
  employmentHistory: ReadonlyArray<IEmploymentHistoryProps>;
}

export const about = {
  employmentHistory: [
    {
      id: nanoid(),
      company: {
        id: 0,
        image: civenty,
        title: 'Civenty',
      },
      position: 'Frontend Developer',
      period: {
        start: 'June 2019',
        end: 'January 2020',
      },
      responsibilities: [{ id: nanoid(), responsibility: 'cross-browser markup' }],
      technologyStack: [{ id: nanoid(), tag: 'Javascript' }],
    },
  ],
} as const;
