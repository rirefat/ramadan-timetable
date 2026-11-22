'use client';

import React from 'react';
import { AUTHENTIC_DUAS } from '../data/duas';
import { DuaCard } from './DuaCard';
import { Sparkles } from 'lucide-react';

export const DuasList: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-brand-500" />
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
            Essential Duas
          </h3>
        </div>
        <span className="text-xs text-slate-400">
          {AUTHENTIC_DUAS.length} Authentic Prayers
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {AUTHENTIC_DUAS.map((dua) => (
          <DuaCard key={dua.id} dua={dua} />
        ))}
      </div>
    </div>
  );
};
