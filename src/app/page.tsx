'use client';

import React, { useMemo } from 'react';
import TopBanner from '@/components/TopBanner/TopBanner';
import MainBody from '@/components/MainBody/MainBody';
import Footer from '@/components/Footer/Footer';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import { SCHEDULE_DATA } from '@/data/scheduleData';
import { DOA_DATA } from '@/data/doaData';
import { useLocation } from '@/context/LocationContext';
import { applyOffset } from '@/utils/timeOffset';

export default function Home() {
  const { currentDistrict } = useLocation();

  const calibratedSchedule = useMemo(() => {
    return SCHEDULE_DATA.map((item) => ({
      ...item,
      sehri: applyOffset(item.sehri, currentDistrict.sehriOffset),
      fajar: applyOffset(item.fajar, currentDistrict.sehriOffset),
      ifter: applyOffset(item.ifter, currentDistrict.ifterOffset),
    }));
  }, [currentDistrict]);

  return (
    <div className='main-container'>
      <TopBanner scheduleData={calibratedSchedule} />
      <MainBody scheduleData={calibratedSchedule} doaData={DOA_DATA} />
      <Footer />
      
      <ScrollToTop />
    </div>
  );
}
