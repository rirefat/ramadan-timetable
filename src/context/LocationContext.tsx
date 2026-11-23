'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { District, BANGLADESH_DISTRICTS, DEFAULT_DISTRICT } from '@/data/districtsData';
import { findNearestDistrict } from '@/utils/timeOffset';

interface LocationContextType {
  currentDistrict: District;
  setDistrictById: (districtId: string) => void;
  allDistricts: District[];
  isDetecting: boolean;
  detectedAutomatically: boolean;
  detectLocation: () => void;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

const STORAGE_KEY = 'ramadan_timetable_district_id';

export function LocationProvider({ children }: { children: ReactNode }) {
  const [currentDistrict, setCurrentDistrict] = useState<District>(DEFAULT_DISTRICT);
  const [isDetecting, setIsDetecting] = useState<boolean>(true);
  const [detectedAutomatically, setDetectedAutomatically] = useState<boolean>(false);

  const detectLocation = () => {
    if (typeof window !== 'undefined' && 'geolocation' in navigator) {
      setIsDetecting(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          if (latitude >= 20 && latitude <= 27 && longitude >= 87 && longitude <= 94) {
            const nearest = findNearestDistrict(latitude, longitude);
            if (nearest) {
              setCurrentDistrict(nearest);
              setDetectedAutomatically(true);
              try {
                localStorage.setItem(STORAGE_KEY, nearest.id);
              } catch {
                // ignore
              }
            }
          }
          setIsDetecting(false);
        },
        (error) => {
          console.log('Geolocation not permitted or unavailable:', error.message);
          setIsDetecting(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 8000,
        }
      );
    } else {
      setIsDetecting(false);
    }
  };

  useEffect(() => {
    // 1. Check local storage first
    try {
      const savedId = localStorage.getItem(STORAGE_KEY);
      if (savedId) {
        const found = BANGLADESH_DISTRICTS.find((d) => d.id === savedId);
        if (found) {
          setCurrentDistrict(found);
        }
      }
    } catch {
      // ignore
    }

    // 2. Initial auto-detection
    detectLocation();
  }, []);

  const setDistrictById = (districtId: string) => {
    const found = BANGLADESH_DISTRICTS.find((d) => d.id === districtId);
    if (found) {
      setCurrentDistrict(found);
      setDetectedAutomatically(false);
      try {
        localStorage.setItem(STORAGE_KEY, found.id);
      } catch {
        // ignore
      }
    }
  };

  return (
    <LocationContext.Provider
      value={{
        currentDistrict,
        setDistrictById,
        allDistricts: BANGLADESH_DISTRICTS,
        isDetecting,
        detectedAutomatically,
        detectLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation(): LocationContextType {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
}
