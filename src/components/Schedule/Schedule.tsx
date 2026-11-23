import React from 'react';
import { ScheduleItem } from '@/types';

interface ScheduleProps {
  schedule: ScheduleItem;
}

const Schedule: React.FC<ScheduleProps> = ({ schedule }) => {
  const { serial, date, day, sehri, ifter } = schedule;

  // Short day: Wednesday -> Wed
  const shortDay = day ? day.slice(0, 3) : '';

  // Short date: 18 Feb 2026 -> 18 Feb
  const dateParts = date ? date.split(' ') : [];
  const shortDate = dateParts.length >= 2 ? `${dateParts[0]} ${dateParts[1]}` : date;

  return (
    <div className='schedule'>
      <p className="col-roza">
        <span className="roza-num">{serial}</span>
        <span className="roza-suffix"> Ramadan</span>
      </p>
      <p className="col-date">
        <span className="date-full">{date}</span>
        <span className="date-short">{shortDate}</span>
      </p>
      <p className="col-day">
        <span className="day-full">{day}</span>
        <span className="day-short">{shortDay}</span>
      </p>
      <p className="col-sehri">{sehri}</p>
      <p className="col-ifter">{ifter}</p>
    </div>
  );
};

export default Schedule;
