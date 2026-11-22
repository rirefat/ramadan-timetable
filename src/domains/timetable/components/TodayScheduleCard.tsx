'use client';

import React from 'react';
import { TodayScheduleInfo } from '@/domains/timetable/types/timetable';
import { Moon, Sunrise, Sunset, Clock, CalendarDays } from 'lucide-react';

interface TodayScheduleCardProps {
  scheduleInfo: TodayScheduleInfo;
  currentTimeString: string;
}

export const TodayScheduleCard: React.FC<TodayScheduleCardProps> = ({
  scheduleInfo,
  currentTimeString,
}) => {
  return (
    <div className="bg-white/95 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl p-5 shadow-xl border border-white/20 dark:border-slate-800 text-slate-800 dark:text-slate-100 flex flex-col justify-between h-full">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            <CalendarDays className="w-4 h-4" />
            <span>Today's Schedule</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <Clock className="w-3.5 h-3.5" />
            <span>{currentTimeString}</span>
          </div>
        </div>

        {/* Date & Ramadan day display */}
        <div className="my-4 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-600 to-indigo-600 text-white shadow-md shadow-brand-500/25 mb-2">
            {scheduleInfo.ramadanDay ? (
              <span className="font-mono text-2xl font-black">
                {String(scheduleInfo.ramadanDay).padStart(2, '0')}
              </span>
            ) : (
              <Moon className="w-7 h-7" />
            )}
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {scheduleInfo.ramadanDay ? `${scheduleInfo.ramadanDay} Ramadan` : 'Ramadan Kareem'}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {scheduleInfo.dateFormatted} • {scheduleInfo.dayName}
          </p>
        </div>
      </div>

      {/* Timing Tiles */}
      <div className="grid grid-cols-3 gap-2.5 pt-2">
        <div className="bg-slate-50 dark:bg-slate-800/80 rounded-xl p-3 text-center border border-slate-100 dark:border-slate-700/60">
          <div className="flex items-center justify-center text-amber-500 mb-1">
            <Sunrise className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Sehri
          </span>
          <p className="font-mono font-bold text-sm sm:text-base text-slate-800 dark:text-slate-100 mt-0.5">
            {scheduleInfo.sehri}
          </p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/80 rounded-xl p-3 text-center border border-slate-100 dark:border-slate-700/60">
          <div className="flex items-center justify-center text-sky-500 mb-1">
            <Sunrise className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Fajr
          </span>
          <p className="font-mono font-bold text-sm sm:text-base text-slate-800 dark:text-slate-100 mt-0.5">
            {scheduleInfo.fajar}
          </p>
        </div>

        <div className="bg-brand-50/80 dark:bg-brand-950/40 rounded-xl p-3 text-center border border-brand-200/50 dark:border-brand-800/60">
          <div className="flex items-center justify-center text-brand-600 dark:text-brand-400 mb-1">
            <Sunset className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-medium text-brand-700 dark:text-brand-300 uppercase tracking-wider">
            Iftar
          </span>
          <p className="font-mono font-bold text-sm sm:text-base text-brand-800 dark:text-brand-200 mt-0.5">
            {scheduleInfo.ifter}
          </p>
        </div>
      </div>
    </div>
  );
};
