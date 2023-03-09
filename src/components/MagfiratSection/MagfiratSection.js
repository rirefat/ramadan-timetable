import React from 'react';
import useData from '../../Hooks/useData';
import Schedule from '../Schedule/Schedule';
import './MagfiratSection.css';

const MagfiratSection = () => {
    const [scheduleData, setScheduleData] = useData();

    let rahmat = scheduleData.filter((singleData) => {
        return singleData.category === "magfirat";
    })

    return (
        <div className='main-div'>
            <h2>10 Days Of Magfirat</h2>
            <div className="headings">
                <h3>Ramadan</h3>
                <h3>Date</h3>
                <h3>Day</h3>
                <h3>Sehri</h3>
                <h3>Iftar</h3>
            </div>
            <div className="schedules">
                {
                    rahmat.map(schedule => <Schedule key={schedule.serial} schedule={schedule}></Schedule>)
                }
            </div>
        </div>
    );
};

export default MagfiratSection;