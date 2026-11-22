'use client';

import React from 'react';
import { useLocationContext } from '../context/LocationContext';
import { MapPin, Navigation } from 'lucide-react';

export const DistrictSelector: React.FC = () => {
  const { selectedDistrict, setDistrictById, allDistricts } = useLocationContext();

  return (
    <div className="bg-white/95 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center shrink-0">
          <MapPin className="w-5 h-5 text-brand-500" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg">
              {selectedDistrict.nameEn} ({selectedDistrict.nameBn})
            </h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-300 font-medium">
              {selectedDistrict.division}
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Sehri:{' '}
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              {selectedDistrict.sehriOffset >= 0 ? `+${selectedDistrict.sehriOffset}` : selectedDistrict.sehriOffset}m
            </span>{' '}
            • Iftar:{' '}
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              {selectedDistrict.ifterOffset >= 0 ? `+${selectedDistrict.ifterOffset}` : selectedDistrict.ifterOffset}m
            </span>{' '}
            rel. to Dhaka
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="district-select" className="sr-only">
          Select District
        </label>
        <div className="relative w-full sm:w-auto">
          <select
            id="district-select"
            value={selectedDistrict.id}
            onChange={(e) => setDistrictById(e.target.value)}
            className="w-full sm:w-56 appearance-none bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-xl py-2 pl-3.5 pr-8 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all cursor-pointer"
          >
            {allDistricts.map((district) => (
              <option key={district.id} value={district.id}>
                {district.nameEn} ({district.nameBn})
              </option>
            ))}
          </select>
          <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
            <Navigation className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
};
