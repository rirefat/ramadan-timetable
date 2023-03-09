import React, { useState } from 'react';
import './CardToday.css';

const CardToday = () => {
    const [day, setDay] = useState('');
    const [date, setDate] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let todaysDate = new Date();

    let currentday = todaysDate.getDay();
    let currentDate = todaysDate.getDate();
    let currentMonth = todaysDate.getMonth();
    let currentYear = todaysDate.getFullYear();
    
    setDay(dayList[currentday]);
    setDate(currentDate);
    setMonth(monthList[currentMonth]);
    setYear(currentYear);

    return (
        <div>
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
    );
};

export default CardToday;