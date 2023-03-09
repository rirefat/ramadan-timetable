import React, { useEffect, useState } from 'react';
import useData from '../../Hooks/useData';
import RahmatSection from '../RahmatSection/RahmatSection';
import './MainBody.css';

const MainBody = () => {
    const {data, setData}= useData();
    
    return (
        <div className='main-body'>
            <div className="left-section">
                <RahmatSection></RahmatSection>
            </div>
            <div className="right-section">Right Section</div>
        </div>
    );
};

export default MainBody;