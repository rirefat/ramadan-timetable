/**
 * Core Time Utilities
 * Handles timezone-resilient time calculations, offset additions, and ISO date parsing.
 */

export interface ParsedTime {
  hours: number;
  minutes: number;
}

/**
 * Parses time strings in "H:MM AM/PM" or "HH:MM" format to 24h hours and minutes.
 */
export function parseTimeString(timeStr: string): ParsedTime {
  const clean = timeStr.trim().toUpperCase();
  const isPM = clean.includes('PM');
  const isAM = clean.includes('AM');
  const numbersOnly = clean.replace(/[^0-9:]/g, '');
  const [hoursStr, minutesStr] = numbersOnly.split(':');

  let hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);

  if (isPM && hours < 12) {
    hours += 12;
  } else if (isAM && hours === 12) {
    hours = 0;
  }

  return { hours, minutes };
}

/**
 * Adds minute offset to a time string and returns formatted 12-hour string (e.g. "5:04 AM")
 */
export function applyMinuteOffset(timeStr: string, offsetMinutes: number): string {
  const { hours, minutes } = parseTimeString(timeStr);
  const totalMinutes = (hours * 60 + minutes + offsetMinutes + 1440) % 1440;

  let newHours = Math.floor(totalMinutes / 60);
  const newMinutes = totalMinutes % 60;
  const period = newHours >= 12 ? 'PM' : 'AM';

  if (newHours > 12) newHours -= 12;
  if (newHours === 0) newHours = 12;

  const paddedMinutes = newMinutes < 10 ? `0${newMinutes}` : `${newMinutes}`;
  return `${newHours}:${paddedMinutes} ${period}`;
}

/**
 * Converts a date and time string into an exact epoch timestamp in milliseconds.
 */
export function getEpochTimestamp(dateISO: string, timeStr: string): number {
  const { hours, minutes } = parseTimeString(timeStr);
  const [year, month, day] = dateISO.split('-').map(Number);
  // Month is 0-indexed in JS Date
  const d = new Date(year, month - 1, day, hours, minutes, 0, 0);
  return d.getTime();
}

/**
 * Formats milliseconds remaining into { hours, minutes, seconds }
 */
export function formatCountdown(msRemaining: number): {
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
} {
  if (msRemaining <= 0) {
    return { hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  const totalSeconds = Math.floor(msRemaining / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { hours, minutes, seconds, isPast: false };
}

/**
 * Returns current date in local YYYY-MM-DD format (locale-independent)
 */
export function getTodayISO(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
