import { nanoid } from 'nanoid';

import { THEMES } from '@/theme/constants';

export const modelThemes = [
  { id: nanoid(), name: THEMES.light },
  { id: nanoid(), name: THEMES.dark },
] as const;
