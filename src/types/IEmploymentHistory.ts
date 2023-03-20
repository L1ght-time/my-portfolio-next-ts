import { StaticImageData } from 'next/image';

export interface ICompany {
  image: StaticImageData;
  title: string;
}

export interface IPeriod {
  start: string;
  end: string;
}

export interface IResponsibilities {
  id: string;
  responsibility: string;
}

export interface ITechnologyStack {
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
