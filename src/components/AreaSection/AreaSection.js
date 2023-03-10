import React from 'react';
import './AreaSection.css';
import locationImg from '../../img/2-location.gif';

const AreaSection = () => {
    return (
        <div className="area-section">
            <div className="location">
                <img src={locationImg} alt="" />
                <h3>Dhaka</h3>
            </div>
            <div className="area-selection">
                {/* <SelectLocation></SelectLocation> */}
            </div>
        </div>
    );
};

export default AreaSection;