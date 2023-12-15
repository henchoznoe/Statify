import { Tab } from "@headlessui/react";
import { StatsModeType, StatsPeriodType } from '../../constants/stats/stats-tab.ts';
import { cn } from '../../utils/classNames.ts';

type Props = {
  statsMode?: number;
  tabs: StatsPeriodType[] | StatsModeType[];
  onChange: (index: number) => void;
}

const TabItem = ({ statsMode, tabs, onChange }: Props) => {
  return (
    <>
      <Tab.Group onChange={onChange} selectedIndex={statsMode && statsMode-1}>
        <Tab.List className="flex space-x-1 rounded-xl bg-gray-200 p-1 w-full md:w-1/2 mx-6">
          {tabs.map((tab: StatsModeType | StatsPeriodType) => (
            <Tab
              key={tab.id}
              className={({ selected }) =>
                cn(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 outline-none truncate',
                  selected ? 'bg-white text-gray-700 shadow' : 'text-gray-700 hover:bg-white/[0.42]'
                )
              }
            >
              {tab.label}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </>
  );
};

export default TabItem;