'use client';

import React, { useState, useEffect } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { RiErrorWarningFill } from 'react-icons/ri';
import { ScheduleItem } from '@/types';

interface TopBannerProps {
  scheduleData: ScheduleItem[];
}

const TopBanner: React.FC<TopBannerProps> = ({ scheduleData }) => {
  const [time, setTime] = useState('');
  const [day, setDay] = useState('');
  const [date, setDate] = useState<number | string>('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState<number | string>('');

  const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString());
      setDay(dayList[d.getDay()]);
      setDate(d.getDate());
      setMonth(monthList[d.getMonth()]);
      setYear(d.getFullYear());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const now = new Date();
  const yearNum = now.getFullYear();
  const monthNum = now.getMonth() + 1;
  const dateNum = now.getDate();
  const todayISO = `${yearNum}-${String(monthNum).padStart(2, '0')}-${String(dateNum).padStart(2, '0')}`;
  const shortDateM_D_Y = `${monthNum}/${dateNum}/${yearNum}`;

  const today = scheduleData.filter((singleData) => {
    return singleData.shortDate === shortDateM_D_Y ||
           singleData.shortDate === todayISO ||
           singleData.shortDate === now.toLocaleDateString();
  });

  const ramadanSerial = today[0]?.serial;
  const sehri = today[0]?.sehri;
  const fajar = today[0]?.fajar;
  const ifter = today[0]?.ifter;

  return (
    <div className='top-banner'>
      <div className="top-left">
        <div className="current-time-section">
          <h4 className='current-time'>{time}</h4>
          <img src="/img/2-red-dot.gif" alt="" />
        </div>
        <h1>Ramadan Kareem</h1>
        <h3>SAHRI AND IFTER TIME SCHEDULE</h3>
        <p>"O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous" <strong>-- Surat Al-Baqarah 2:183</strong></p>
      </div>
      <div className="top-right">
        <h1>Today's Schedule</h1>
        <div className="main">
          <div className="today">
            <h2>{ramadanSerial ? ramadanSerial : <BsFillMoonStarsFill />}</h2>
            <h3>Ramadan</h3>
            <p>{date} {month} {year}</p>
            <p>{day}</p>
          </div>

          <div className="todays-schedule">
            <p>Sehri - <span className="time">{sehri ? sehri : <RiErrorWarningFill />}</span></p>
            <p>Fajar - <span className="time sunrise-time">{fajar ? fajar : <RiErrorWarningFill />}</span></p>
            <p>Iftar - <span className="time">{ifter ? ifter : <RiErrorWarningFill />}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
