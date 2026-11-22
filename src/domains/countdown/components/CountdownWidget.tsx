'use client';

import React from 'react';
import { TodayScheduleInfo } from '@/domains/timetable/types/timetable';
import { Timer, Utensils, Sunrise } from 'lucide-react';

interface CountdownWidgetProps {
  scheduleInfo: TodayScheduleInfo;
  countdown: {
    hours: number;
    minutes: number;
    seconds: number;
    isPast: boolean;
  };
}

export const CountdownWidget: React.FC<CountdownWidgetProps> = ({ scheduleInfo, countdown }) => {
  const isTargetSehri = scheduleInfo.nextEvent === 'sehri';
  const eventLabel = isTargetSehri ? 'Time Left for Sehri End' : 'Time Left for Iftar';
  const targetTime = isTargetSehri ? scheduleInfo.sehri : scheduleInfo.ifter;

  if (scheduleInfo.nextEvent === 'none') {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-brand-600 to-indigo-700 text-white rounded-2xl p-4 shadow-lg shadow-brand-500/15 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0">
          {isTargetSehri ? (
            <Sunrise className="w-6 h-6 text-amber-300" />
          ) : (
            <Utensils className="w-6 h-6 text-emerald-300" />
          )}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-white/80">
              Next Fasting Event
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>
          <h4 className="text-lg font-bold text-white flex items-center gap-2">
            {eventLabel} <span className="text-sm font-normal text-white/70">({targetTime})</span>
          </h4>
        </div>
      </div>

      <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
        <Timer className="w-4 h-4 text-white/70 mr-1" />
        <div className="flex items-baseline gap-1">
          <span className="font-mono text-2xl font-black text-white">
            {String(countdown.hours).padStart(2, '0')}
          </span>
          <span className="text-xs text-white/60">h</span>
        </div>
        <span className="font-mono text-xl font-bold text-white/60">:</span>
        <div className="flex items-baseline gap-1">
          <span className="font-mono text-2xl font-black text-white">
            {String(countdown.minutes).padStart(2, '0')}
          </span>
          <span className="text-xs text-white/60">m</span>
        </div>
        <span className="font-mono text-xl font-bold text-white/60">:</span>
        <div className="flex items-baseline gap-1">
          <span className="font-mono text-2xl font-black text-emerald-300">
            {String(countdown.seconds).padStart(2, '0')}
          </span>
          <span className="text-xs text-emerald-300/80">s</span>
        </div>
      </div>
    </div>
  );
};
