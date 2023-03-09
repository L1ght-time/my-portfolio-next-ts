interface IDiffPeriodProps {
  months: number;
}

export const getAmountOfPeriod = ({ months }: IDiffPeriodProps): string | null => {
  if (!months) {
    return null;
  }

  const monthsAmount = months + 1;

  const monthsAmountMoreYear = ((monthsAmount + 1) / 12).toFixed(1);

  if (monthsAmount < 12) {
    return `${monthsAmount.toFixed(1)} months`;
  }

  if (months === 12) {
    return `${(monthsAmount / 12).toFixed(0)} year`;
  }

  return `${monthsAmountMoreYear} years`;
};
