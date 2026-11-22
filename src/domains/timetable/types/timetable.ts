export type AshraCategory = 'rahmat' | 'magfirat' | 'najat';

export interface BaseTimetableEntry {
  serial: number;
  category: AshraCategory;
  dateISO: string;       // "YYYY-MM-DD" for exact matching
  dateFormatted: string; // e.g. "2 March 2025"
  day: string;           // "Sunday", "Monday", etc.
  sehri: string;         // Base Dhaka time e.g. "5:04 AM"
  fajar: string;         // Base Dhaka time e.g. "5:05 AM"
  ifter: string;         // Base Dhaka time e.g. "6:02 PM"
}

export interface AdjustedTimetableEntry extends BaseTimetableEntry {
  adjustedSehri: string;
  adjustedFajar: string;
  adjustedIfter: string;
}

export interface TodayScheduleInfo {
  ramadanDay: number | null;
  isRamadan: boolean;
  dateFormatted: string;
  dayName: string;
  sehri: string;
  fajar: string;
  ifter: string;
  sehriEpoch: number;
  ifterEpoch: number;
  nextEvent: 'sehri' | 'ifter' | 'none';
  msToNextEvent: number;
}
