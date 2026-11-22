import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 py-8 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          Ramadan Timetable & Fasting Schedule • 2025 / 1446 AH
        </p>
        <p>
          Developed with dedication by{' '}
          <a
            href="https://rirefat.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-600 dark:text-brand-400 hover:underline"
          >
            Rafiul Islam Refat
          </a>
        </p>
      </div>
    </footer>
  );
};
