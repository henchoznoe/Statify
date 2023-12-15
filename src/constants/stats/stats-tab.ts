export type StatsModeType = {
  id: number;
  label: string;
}

export const statsModeTabs: StatsModeType[] = [
  {
    id: 1,
    label: 'Tracks'
  },
  {
    id: 2,
    label: 'Artists'
  },
  /*{
    id: 3,
    label: 'Genres'
  },*/
];

export type StatsPeriodType = {
  id: number;
  label: string;
}

export const statsPeriodTabs: StatsPeriodType[] = [
  {
    id: 1,
    label: 'Last month'
  },
  {
    id: 2,
    label: 'Last 6 months'
  },
  {
    id: 3,
    label: 'All time'
  },
];