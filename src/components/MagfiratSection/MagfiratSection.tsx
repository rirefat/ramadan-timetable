import React from 'react';
import Schedule from '../Schedule/Schedule';
import { ScheduleItem } from '@/types';

interface SectionProps {
  scheduleData: ScheduleItem[];
}

const MagfiratSection: React.FC<SectionProps> = ({ scheduleData }) => {
  const magfirat = scheduleData.filter((singleData) => {
    return singleData.category === "magfirat";
  });

  return (
    <div className='main-div'>
      <h2 className='section-title'>10 Days Of Magfirat</h2>
      <div className="schedule-table-wrap">
        <div className="headings">
          <h3 className="col-roza">
            <span className="heading-full">Ramadan</span>
            <span className="heading-short">Roza</span>
          </h3>
          <h3 className="col-date">Date</h3>
          <h3 className="col-day">Day</h3>
          <h3 className="col-sehri">Sehri</h3>
          <h3 className="col-ifter">Iftar</h3>
        </div>
        <div className="schedules">
          {
            magfirat.map(schedule => <Schedule key={schedule.serial} schedule={schedule} />)
          }
        </div>
      </div>
    </div>
  );
};

export default MagfiratSection;
