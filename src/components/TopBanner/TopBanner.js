import React, { useState } from 'react';
import './TopBanner.css';
import redDot from '../../img/2-red-dot.gif';
import { FcAlarmClock } from 'react-icons/fc';

const TopBanner = () => {
    const [time, setTime] = useState('');
    const [day, setDay] = useState('');
    const [date, setDate] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    setInterval(() => {
        let date = new Date();

        let time = date.toLocaleTimeString();
        let day = date.getDay();
        let currentDate = date.getDate();
        let currentMonth = date.getMonth();
        let currentYear = date.getFullYear();

        setTime(time);
        setDay(dayList[day]);
        setDate(currentDate);
        setMonth(monthList[currentMonth]);
        setYear(currentYear);
    });
    
    return (
        <div className='top-banner'>
            <div className="top-left">
                <div className="current-time-section">
                    <h4 className='current-time'>{time}</h4>
                    <img src={redDot} alt="" />
                </div>
                <h1>Ramadan Kareem</h1>
                <h3>SAHRI AND IFTER TIME SCHEDULE</h3>
                <p>"O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous" <strong>-- Surat Al-Baqarah 2:183</strong></p>
            </div>
            <div className="top-right">
                <h1>Today's Schedule</h1>
                <div className="main">
                    <div className="today">
                        <h2>01</h2>
                        <h3>Ramadan</h3>
                        <p>{date} {month} {year}</p>
                        <p>{day}</p>
                    </div>

                    <div className="todays-schedule">
                        <p>Sehri - <span className="time">00:00 AM</span></p>
                        <p>Sunrise - <span className="time">00:00 AM</span></p>
                        <p>Iftar - <span className="time">00:00 AM</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;