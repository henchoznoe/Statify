import TabItem from './TabItem.tsx';
import { statsModeTabs, statsPeriodTabs } from '../../constants/stats/stats-tab.ts';

type Props = {
  statsMode: number;
  setStatsMode: (index: number) => void;
  setStatsPeriod: (index: number) => void;
}

const Tabs = ({statsMode, setStatsMode, setStatsPeriod}: Props) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex justify-center w-full">
          <TabItem tabs={statsModeTabs}
                   statsMode={statsMode}
                   onChange={(index: number) => setStatsMode(index + 1)}
          />
        </div>
        <div className="flex justify-center w-full">
          <TabItem tabs={statsPeriodTabs}
                   onChange={(index: number) => setStatsPeriod(index + 1)}
          />
        </div>
      </div>
    </>
  );
};

export default Tabs;