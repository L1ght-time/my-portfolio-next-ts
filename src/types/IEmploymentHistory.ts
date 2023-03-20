import { StaticImageData } from 'next/image';

interface ICompany {
  image: StaticImageData;
  title: string;
}

interface IPeriod {
  start: string;
  end: string;
}

interface IResponsibilities {
  id: string;
  responsibility: string;
}

interface ITechnologyStack {
  id: string;
  tag: string;
}

export interface IEmploymentHistory {
  id: string;
  company: ICompany;
  position: string;
  period: IPeriod;
  responsibilities: ReadonlyArray<IResponsibilities>;
  technologyStack: ReadonlyArray<ITechnologyStack>;
}
