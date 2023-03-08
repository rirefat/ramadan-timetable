import React, { useState } from 'react';
import './TopBanner.css';

const TopBanner = () => {
    const [time, setTime]=useState('')
    setInterval(() => {
        let date = new Date();
        let time = date.toLocaleTimeString();

        setTime(time)
    },1000);

    return (
        <div className='top-banner'>
            <div className="top-left">
                <h4>{time}</h4>
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
                        <p>25 March 2023</p>
                        <p>Sunday</p>
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