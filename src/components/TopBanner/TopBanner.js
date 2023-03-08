import React from 'react';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <div className='top-banner'>
            <div className="top-left">
                <h1>Ramadan Kareem</h1>
                <h3>SAHRI AND IFTER TIME SCHEDULE</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa numquam nemo quisquam! Aperiam incidunt modi veniam laborum nihil perferendis ipsum.</p>
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
                        <p>Sehri - 00:00 AM</p>
                        <p>Sunrise - 00:00 AM</p>
                        <p>Iftar - 00:00 AM</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;