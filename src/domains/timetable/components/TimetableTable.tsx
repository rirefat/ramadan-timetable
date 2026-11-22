'use client';

import React, { useState } from 'react';
import { AdjustedTimetableEntry, AshraCategory } from '../types/timetable';
import { Sparkles, HeartHandshake, ShieldCheck, Calendar } from 'lucide-react';
import { getTodayISO } from '@/core/utils/time';

interface TimetableTableProps {
  timetable: AdjustedTimetableEntry[];
}

export const TimetableTable: React.FC<TimetableTableProps> = ({ timetable }) => {
  const [activeTab, setActiveTab] = useState<'all' | AshraCategory>('all');
  const todayISO = getTodayISO();

  const filtered = activeTab === 'all'
    ? timetable
    : timetable.filter((entry) => entry.category === activeTab);

  const tabs: Array<{ id: 'all' | AshraCategory; label: string; icon: React.ReactNode }> = [
    { id: 'all', label: 'All 30 Days', icon: <Calendar className="w-4 h-4" /> },
    { id: 'rahmat', label: '1-10: Rahmat (Mercy)', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'magfirat', label: '11-20: Magfirat (Forgiveness)', icon: <HeartHandshake className="w-4 h-4" /> },
    { id: 'najat', label: '21-30: Najat (Salvation)', icon: <ShieldCheck className="w-4 h-4" /> },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-6 shadow-sm border border-slate-100 dark:border-slate-800">
      {/* Ashra Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-100 dark:border-slate-800">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 font-semibold text-xs uppercase tracking-wider border-b border-slate-100 dark:border-slate-700/60">
            <tr>
              <th scope="col" className="px-4 py-3.5">Ramadan</th>
              <th scope="col" className="px-4 py-3.5">Date</th>
              <th scope="col" className="px-4 py-3.5">Day</th>
              <th scope="col" className="px-4 py-3.5 text-amber-600 dark:text-amber-400 font-bold">Sehri End</th>
              <th scope="col" className="px-4 py-3.5 text-sky-600 dark:text-sky-400 font-bold">Fajr</th>
              <th scope="col" className="px-4 py-3.5 text-brand-600 dark:text-brand-400 font-bold">Iftar</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
            {filtered.map((entry) => {
              const isToday = entry.dateISO === todayISO;
              return (
                <tr
                  key={entry.serial}
                  className={`transition-colors ${
                    isToday
                      ? 'bg-brand-50/80 dark:bg-brand-950/40 font-semibold text-brand-950 dark:text-brand-100 ring-1 ring-inset ring-brand-500/30'
                      : 'hover:bg-slate-50/80 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-200'
                  }`}
                >
                  <td className="px-4 py-3.5 flex items-center gap-2">
                    <span
                      className={`inline-flex items-center justify-center w-7 h-7 rounded-lg text-xs font-mono font-bold ${
                        isToday
                          ? 'bg-brand-600 text-white shadow-sm'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {String(entry.serial).padStart(2, '0')}
                    </span>
                    {isToday && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500 text-white uppercase">
                        Today
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap text-xs sm:text-sm">
                    {entry.dateFormatted}
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap text-xs text-slate-500 dark:text-slate-400">
                    {entry.day}
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap font-mono font-bold text-amber-700 dark:text-amber-300">
                    {entry.adjustedSehri}
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap font-mono font-semibold text-sky-700 dark:text-sky-300">
                    {entry.adjustedFajar}
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap font-mono font-bold text-brand-600 dark:text-brand-300">
                    {entry.adjustedIfter}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
