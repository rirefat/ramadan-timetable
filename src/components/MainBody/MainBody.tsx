import React from 'react';
import AreaSection from '../AreaSection/AreaSection';
import RahmatSection from '../RahmatSection/RahmatSection';
import MagfiratSection from '../MagfiratSection/MagfiratSection';
import NazwatSection from '../NazwatSection/NazwatSection';
import DoaSection from '../Doa/DoaSection';
import { ScheduleItem, DoaItem } from '@/types';

interface MainBodyProps {
  scheduleData: ScheduleItem[];
  doaData: DoaItem[];
}

const MainBody: React.FC<MainBodyProps> = ({ scheduleData, doaData }) => {
  return (
    <div className='main-body'>
      <div className="left-section">
        <div className="location-single-column">
          <AreaSection />
        </div>
        <RahmatSection scheduleData={scheduleData} />
        <MagfiratSection scheduleData={scheduleData} />
        <NazwatSection scheduleData={scheduleData} />
      </div>

      <div className="right-section">
        <div className="location-double-column">
          <AreaSection />
        </div>

        <div className="doa-section">
          <DoaSection doaData={doaData} />
        </div>
      </div>
    </div>
  );
};

export default MainBody;
