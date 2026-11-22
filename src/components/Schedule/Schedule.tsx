import React from 'react';
import { ScheduleItem } from '@/types';

interface ScheduleProps {
  schedule: ScheduleItem;
}

const Schedule: React.FC<ScheduleProps> = ({ schedule }) => {
  const { serial, date, day, sehri, ifter } = schedule;
  return (
    <div className='schedule'>
      <p>{serial} Ramadan</p>
      <p>{date}</p>
      <p>{day}</p>
      <p>{sehri}</p>
      <p>{ifter}</p>
    </div>
  );
};

export default Schedule;
