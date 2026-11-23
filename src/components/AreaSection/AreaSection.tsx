'use client';

import React from 'react';
import { useLocation } from '@/context/LocationContext';

const AreaSection: React.FC = () => {
  const { currentDistrict, setDistrictById, allDistricts } = useLocation();

  return (
    <div className="area-section">
      <div className="location">
        <img src="/img/2-location.gif" alt="" />
        <h3>{currentDistrict.name}</h3>
      </div>
      <div className="area-selection">
        <select
          value={currentDistrict.id}
          onChange={(e) => setDistrictById(e.target.value)}
          className="district-select"
          aria-label="Select Bangladesh District"
        >
          {allDistricts.map((district) => (
            <option key={district.id} value={district.id}>
              {district.name} ({district.bnName})
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AreaSection;
