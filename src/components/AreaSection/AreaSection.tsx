'use client';

import React from 'react';
import { useLocation } from '@/context/LocationContext';
import DistrictDropdown from './DistrictDropdown';

const AreaSection: React.FC = () => {
  const { currentDistrict } = useLocation();

  return (
    <div className="area-section">
      <div className="location">
        <img src="/img/2-location.gif" alt="Current Location" />
        <h3>{currentDistrict.name}</h3>
      </div>
      <div className="area-selection">
        <DistrictDropdown />
      </div>
    </div>
  );
};

export default AreaSection;
