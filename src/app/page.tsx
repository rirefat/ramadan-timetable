'use client';

import React, { useMemo } from 'react';
import { useLocationContext } from '@/domains/location/context/LocationContext';
import { getAdjustedTimetable } from '@/domains/timetable/services/timetableService';
import { useNextEventCountdown } from '@/domains/countdown/hooks/useNextEventCountdown';
import { TopBanner } from '@/shared/components/TopBanner';
import { CountdownWidget } from '@/domains/countdown/components/CountdownWidget';
import { DistrictSelector } from '@/domains/location/components/DistrictSelector';
import { TimetableTable } from '@/domains/timetable/components/TimetableTable';
import { DuasList } from '@/domains/duas/components/DuasList';
import { Footer } from '@/shared/components/Footer';
import { ScrollToTopButton } from '@/shared/components/ScrollToTopButton';

export default function HomePage() {
  const { selectedDistrict } = useLocationContext();

  // Compute timetable adjusted for the selected district
  const adjustedTimetable = useMemo(() => {
    return getAdjustedTimetable(selectedDistrict);
  }, [selectedDistrict]);

  // Hook providing monotonic ticking clock and active countdown
  const { currentTime, scheduleInfo, countdown } = useNextEventCountdown(adjustedTimetable);

  const currentTimeString = useMemo(() => {
    return currentTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  }, [currentTime]);

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-8">
      {/* Hero Banner with Live Clock and Today's Schedule Card */}
      <TopBanner
        scheduleInfo={scheduleInfo}
        currentTimeString={currentTimeString}
      />

      {/* Live Fasting Event Countdown Bar */}
      <div className="mb-6">
        <CountdownWidget scheduleInfo={scheduleInfo} countdown={countdown} />
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: District selector + Timetable Table */}
        <section className="lg:col-span-8 space-y-6">
          <DistrictSelector />
          <TimetableTable timetable={adjustedTimetable} />
        </section>

        {/* Right Column: Supplications & Duas */}
        <aside className="lg:col-span-4">
          <DuasList />
        </aside>
      </div>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll to Top button */}
      <ScrollToTopButton />
    </main>
  );
}
