'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { DistrictOffset } from '../types/location';
import { BANGLADESH_DISTRICTS, DEFAULT_DISTRICT } from '../data/districts';

interface LocationContextType {
  selectedDistrict: DistrictOffset;
  setDistrictById: (districtId: string) => void;
  allDistricts: DistrictOffset[];
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

const STORAGE_KEY = 'ramadan_timetable_district_id';

export function LocationProvider({ children }: { children: ReactNode }) {
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictOffset>(DEFAULT_DISTRICT);

  useEffect(() => {
    try {
      const savedId = localStorage.getItem(STORAGE_KEY);
      if (savedId) {
        const found = BANGLADESH_DISTRICTS.find((d) => d.id === savedId);
        if (found) {
          setSelectedDistrict(found);
        }
      }
    } catch {
      // LocalStorage not accessible (SSR or restricted browser)
    }
  }, []);

  const setDistrictById = (districtId: string) => {
    const found = BANGLADESH_DISTRICTS.find((d) => d.id === districtId);
    if (found) {
      setSelectedDistrict(found);
      try {
        localStorage.setItem(STORAGE_KEY, found.id);
      } catch {
        // Ignore storage write errors
      }
    }
  };

  return (
    <LocationContext.Provider
      value={{
        selectedDistrict,
        setDistrictById,
        allDistricts: BANGLADESH_DISTRICTS,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export function useLocationContext(): LocationContextType {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocationContext must be used within a LocationProvider');
  }
  return context;
}
