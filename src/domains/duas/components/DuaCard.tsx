'use client';

import React, { useState } from 'react';
import { DuaItem } from '../types/dua';
import { Copy, Check, BookOpen } from 'lucide-react';

interface DuaCardProps {
  dua: DuaItem;
}

export const DuaCard: React.FC<DuaCardProps> = ({ dua }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const text = `${dua.titleEn}\n\n${dua.arabic}\n\nTransliteration: ${dua.transliteration}\n\nTranslation: ${dua.translationEn}\n\nSource: ${dua.reference}`;
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all">
      <div className="flex items-start justify-between gap-3 mb-3 pb-3 border-b border-slate-100 dark:border-slate-800">
        <div>
          <span className="text-[11px] font-semibold tracking-wider uppercase text-brand-600 dark:text-brand-400">
            Dua #{dua.serial}
          </span>
          <h4 className="text-base font-bold text-slate-800 dark:text-slate-100">
            {dua.titleEn}
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{dua.titleBn}</p>
        </div>

        <button
          onClick={handleCopy}
          className="p-2 rounded-lg text-slate-400 hover:text-brand-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          title="Copy Dua"
          aria-label="Copy Dua text"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>

      <p className="text-xs text-slate-600 dark:text-slate-300 mb-3 italic">
        {dua.descriptionEn}
      </p>

      {/* Arabic Calligraphy Typography */}
      <div className="bg-brand-50/50 dark:bg-slate-800/50 rounded-xl p-4 my-3 text-right">
        <p
          dir="rtl"
          lang="ar"
          className="font-arabic text-xl sm:text-2xl leading-relaxed text-slate-900 dark:text-slate-100 font-semibold tracking-wide"
        >
          {dua.arabic}
        </p>
      </div>

      {/* Transliteration */}
      <div className="mb-2">
        <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block mb-0.5">
          Transliteration
        </span>
        <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
          {dua.transliteration}
        </p>
      </div>

      {/* Translation */}
      <div className="mb-3">
        <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block mb-0.5">
          Meaning
        </span>
        <p className="text-xs text-slate-600 dark:text-slate-400">{dua.translationEn}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{dua.translationBn}</p>
      </div>

      {/* Reference Badge */}
      <div className="flex items-center gap-1.5 text-[11px] text-slate-400 pt-2 border-t border-slate-50 dark:border-slate-800/60">
        <BookOpen className="w-3.5 h-3.5 text-brand-500" />
        <span>Source: {dua.reference}</span>
      </div>
    </div>
  );
};
