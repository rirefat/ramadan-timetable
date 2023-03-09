import React from 'react';
import './Schedule.css';

const Schedule = (props) => {
    const {serial, date, day, sehri, ifter}=props.schedule;
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