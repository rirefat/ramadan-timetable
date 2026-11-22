import React from 'react';
import AreaSection from '../AreaSection/AreaSection';
import RahmatSection from '../RahmatSection/RahmatSection';
import MagfiratSection from '../MagfiratSection/MagfiratSection';
import NazwatSection from '../NazwatSection/NazwatSection';
import Doa from '../Doa/Doa';
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
          {
            doaData.map(singleDoa => <Doa key={singleDoa.serial} singleDoa={singleDoa} />)
          }
        </div>
      </div>
    </div>
  );
};

export default MainBody;
