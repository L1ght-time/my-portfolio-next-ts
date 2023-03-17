import { nanoid } from 'nanoid';

import clockwise from '@/assets/clockwise.jpeg';
import cleveroad from '@/assets/cleveroad.jpeg';
import civenty from '@/assets/civenty.jpeg';
import { IEmploymentHistory } from '@/types/IEmploymentHistory';

export const employmentHistory: ReadonlyArray<IEmploymentHistory> = [
  {
    id: nanoid(),
    company: {
      image: clockwise,
      title: 'Clockwise Software',
    },
    position: 'Frontend Developer',
    period: {
      start: '2021-10-25T09',
      end: '2023-02-25T09',
    },
    responsibilities: [{ id: nanoid(), responsibility: 'cross-browser markup' }],
    technologyStack: [{ id: nanoid(), tag: 'Javascript' }],
  },
  {
    id: nanoid(),
    company: {
      image: cleveroad,
      title: 'Cleveroad',
    },
    position: 'Frontend Developer',
    period: {
      start: '2021-02-25T09',
      end: '2021-10-25T09',
    },
    responsibilities: [{ id: nanoid(), responsibility: 'cross-browser markup' }],
    technologyStack: [{ id: nanoid(), tag: 'Javascript' }],
  },
  {
    id: nanoid(),
    company: {
      image: civenty,
      title: 'Civenty',
    },
    position: 'Frontend Developer',
    period: {
      start: '2019-06-25T09',
      end: '2020-01-25T09',
    },
    responsibilities: [{ id: nanoid(), responsibility: 'cross-browser markup' }],
    technologyStack: [{ id: nanoid(), tag: 'Javascript' }],
  },
] as const;
