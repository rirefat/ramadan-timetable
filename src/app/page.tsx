import React from 'react';
import TopBanner from '@/components/TopBanner/TopBanner';
import MainBody from '@/components/MainBody/MainBody';
import Footer from '@/components/Footer/Footer';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import { SCHEDULE_DATA } from '@/data/scheduleData';
import { DOA_DATA } from '@/data/doaData';

export default function Home() {
  return (
    <div className='main-container'>
      <TopBanner scheduleData={SCHEDULE_DATA} />
      <MainBody scheduleData={SCHEDULE_DATA} doaData={DOA_DATA} />
      <Footer />
      
      <ScrollToTop />
    </div>
  );
}
