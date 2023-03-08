import { nanoid } from 'nanoid';
import { DateTime } from 'luxon';

import clockwise from '@/assets/clockwise.jpeg';
import cleveroad from '@/assets/cleveroad.jpeg';
import civenty from '@/assets/civenty.jpeg';
import { IEmploymentHistoryProps } from '@/components/pages/About/EmploymentHistory';

export interface IAboutData {
  employmentHistory: ReadonlyArray<IEmploymentHistoryProps>;
}

export const about = {
  employmentHistory: [
    {
      id: nanoid(),
      company: {
        image: clockwise,
        title: 'Clockwise Software',
      },
      position: 'Frontend Developer',
      period: {
        start: DateTime.fromISO('2021-10-25T09'),
        end: DateTime.fromISO('2023-02-25T09'),
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
        start: DateTime.fromISO('2021-02-25T09'),
        end: DateTime.fromISO('2021-10-25T09'),
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
        start: DateTime.fromISO('2019-06-25T09'),
        end: DateTime.fromISO('2020-01-25T09'),
      },
      responsibilities: [{ id: nanoid(), responsibility: 'cross-browser markup' }],
      technologyStack: [{ id: nanoid(), tag: 'Javascript' }],
    },
  ],
} as const;
