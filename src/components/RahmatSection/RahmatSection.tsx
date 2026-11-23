import React from 'react';
import Schedule from '../Schedule/Schedule';
import { ScheduleItem } from '@/types';

interface SectionProps {
  scheduleData: ScheduleItem[];
}

const RahmatSection: React.FC<SectionProps> = ({ scheduleData }) => {
  const rahmat = scheduleData.filter((singleData) => {
    return singleData.category === "rahmat";
  });

  return (
    <div className='main-div'>
      <h2>10 Days Of Rahmat</h2>
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
            rahmat.map(schedule => <Schedule key={schedule.serial} schedule={schedule} />)
          }
        </div>
      </div>
    </div>
  );
};

export default RahmatSection;
