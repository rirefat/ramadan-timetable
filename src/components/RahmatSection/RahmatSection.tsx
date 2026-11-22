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
      <div className="headings">
        <h3>Ramadan</h3>
        <h3>Date</h3>
        <h3>Day</h3>
        <h3>Sehri</h3>
        <h3>Iftar</h3>
      </div>
      <div className="schedules">
        {
          rahmat.map(schedule => <Schedule key={schedule.serial} schedule={schedule} />)
        }
      </div>
    </div>
  );
};

export default RahmatSection;
