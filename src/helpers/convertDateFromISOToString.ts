import { DateTime } from 'luxon';

export const convertDateFromISOToString = (date: string): string => DateTime.fromISO(date).toString();
