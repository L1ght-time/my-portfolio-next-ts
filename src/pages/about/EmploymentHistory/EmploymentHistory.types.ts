interface ICompany {
  path: string;
  title: string;
}

interface IPeriod {
  start: string;
  end: string;
}

interface IResponsibilities {
  id: string;
  item: string;
}

interface ITechnologyStack {
  id: string;
  tag: string;
}
export default interface IEmploymentHistoryProps {
  id: string;
  company: ICompany;
  position: string;
  period: IPeriod;
  responsibilities: ReadonlyArray<IResponsibilities>;
  technologyStack: ReadonlyArray<ITechnologyStack>;
}
