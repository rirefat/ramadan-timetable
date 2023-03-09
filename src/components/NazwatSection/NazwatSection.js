import React from 'react';
import useData from '../../Hooks/useData';
import Schedule from '../Schedule/Schedule';
import './NazwatSection.css';

const NazwatSection = () => {
    const [scheduleData, setScheduleData] = useData();

    let nazwat = scheduleData.filter((singleData) => {
        return singleData.category === "nazwat";
    })

    return (
        <div className='main-div'>
            <h2>10 Days Of Nazwat</h2>
            <div className="headings">
                <h3>Ramadan</h3>
                <h3>Date</h3>
                <h3>Day</h3>
                <h3>Sehri</h3>
                <h3>Iftar</h3>
            </div>
            <div className="schedules">
                {
                    nazwat.map(schedule => <Schedule key={schedule.serial} schedule={schedule}></Schedule>)
                }
            </div>
        </div>
    );
};

export default NazwatSection;