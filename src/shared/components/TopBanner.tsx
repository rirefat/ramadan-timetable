'use client';

import React from 'react';
import { TodayScheduleCard } from '@/domains/timetable/components/TodayScheduleCard';
import { TodayScheduleInfo } from '@/domains/timetable/types/timetable';
import Image from 'next/image';

interface TopBannerProps {
  scheduleInfo: TodayScheduleInfo;
  currentTimeString: string;
}

export const TopBanner: React.FC<TopBannerProps> = ({ scheduleInfo, currentTimeString }) => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-950 via-[#060E32] to-[#0a235c] text-white shadow-2xl p-6 sm:p-10 mb-8 border border-white/10">
      {/* Decorative background image overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
        <Image
          src="/img/bg.jpg"
          alt="Ramadan Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left column: Hero Title & Quranic Ayah */}
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-brand-200 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>RAMADAN 1446 AH • 2025</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Ramadan Kareem
          </h1>

          <div className="inline-block bg-brand-500/30 backdrop-blur-md px-4 py-1.5 rounded-xl border border-brand-400/30">
            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-200">
              SEHRI & IFTAR TIME SCHEDULE
            </p>
          </div>

          <div className="bg-black/25 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/10 text-white/90">
            <blockquote className="text-sm sm:text-base italic leading-relaxed text-slate-200">
              "O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous."
            </blockquote>
            <cite className="block text-xs font-semibold text-brand-300 mt-2 not-italic">
              — Surah Al-Baqarah (2:183)
            </cite>
          </div>
        </div>

        {/* Right column: Today's Schedule Card */}
        <div className="lg:col-span-5 h-full">
          <TodayScheduleCard
            scheduleInfo={scheduleInfo}
            currentTimeString={currentTimeString}
          />
        </div>
      </div>
    </section>
  );
};
