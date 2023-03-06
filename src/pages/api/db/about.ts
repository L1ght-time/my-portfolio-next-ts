import { nanoid } from 'nanoid';

import IEmploymentHistoryProps from '@/pages/about/EmploymentHistory';
import civenty from '@/assets/civenty.jpeg';

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
        start: 'июнь 2019 г',
        end: 'янв. 2020 г',
      },
      responsibilities: [{ id: nanoid(), responsibility: 'cross-browser markup' }],
      technologyStack: [{ id: nanoid(), tag: 'Javascript' }],
    },
  ],
} as const;
