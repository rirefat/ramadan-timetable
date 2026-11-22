import { DHAKA_BASE_TIMETABLE_2025 } from '../data/dhaka_base';
import { AdjustedTimetableEntry, TodayScheduleInfo } from '../types/timetable';
import { DistrictOffset } from '@/domains/location/types/location';
import { applyMinuteOffset, getEpochTimestamp, getTodayISO } from '@/core/utils/time';

/**
 * Computes adjusted 30-day schedule for a given district.
 */
export function getAdjustedTimetable(district: DistrictOffset): AdjustedTimetableEntry[] {
  return DHAKA_BASE_TIMETABLE_2025.map((entry) => ({
    ...entry,
    adjustedSehri: applyMinuteOffset(entry.sehri, district.sehriOffset),
    adjustedFajar: applyMinuteOffset(entry.fajar, district.sehriOffset), // Fajr adjusts parallel to Sehri
    adjustedIfter: applyMinuteOffset(entry.ifter, district.ifterOffset),
  }));
}

/**
 * Resolves today's schedule and next fasting transition point.
 */
export function getTodaySchedule(
  timetable: AdjustedTimetableEntry[],
  currentDate: Date = new Date()
): TodayScheduleInfo {
  const todayISO = getTodayISO(currentDate);
  const nowMs = currentDate.getTime();

  const todayEntry = timetable.find((entry) => entry.dateISO === todayISO);

  if (!todayEntry) {
    // Fallback if current date is outside the Ramadan calendar (e.g. previewing Day 1)
    const firstDay = timetable[0];
    const sehriEpoch = getEpochTimestamp(firstDay.dateISO, firstDay.adjustedSehri);
    const ifterEpoch = getEpochTimestamp(firstDay.dateISO, firstDay.adjustedIfter);

    return {
      ramadanDay: null,
      isRamadan: false,
      dateFormatted: currentDate.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      dayName: currentDate.toLocaleDateString('en-US', { weekday: 'long' }),
      sehri: firstDay.adjustedSehri,
      fajar: firstDay.adjustedFajar,
      ifter: firstDay.adjustedIfter,
      sehriEpoch,
      ifterEpoch,
      nextEvent: 'none',
      msToNextEvent: 0,
    };
  }

  const sehriEpoch = getEpochTimestamp(todayEntry.dateISO, todayEntry.adjustedSehri);
  const ifterEpoch = getEpochTimestamp(todayEntry.dateISO, todayEntry.adjustedIfter);

  let nextEvent: 'sehri' | 'ifter' | 'none' = 'none';
  let msToNextEvent = 0;

  if (nowMs < sehriEpoch) {
    nextEvent = 'sehri';
    msToNextEvent = sehriEpoch - nowMs;
  } else if (nowMs < ifterEpoch) {
    nextEvent = 'ifter';
    msToNextEvent = ifterEpoch - nowMs;
  } else {
    // Past iftar today: next target is tomorrow's sehri
    const nextDayEntry = timetable.find((entry) => entry.serial === todayEntry.serial + 1);
    if (nextDayEntry) {
      const tomorrowSehriEpoch = getEpochTimestamp(nextDayEntry.dateISO, nextDayEntry.adjustedSehri);
      nextEvent = 'sehri';
      msToNextEvent = Math.max(0, tomorrowSehriEpoch - nowMs);
    }
  }

  return {
    ramadanDay: todayEntry.serial,
    isRamadan: true,
    dateFormatted: todayEntry.dateFormatted,
    dayName: todayEntry.day,
    sehri: todayEntry.adjustedSehri,
    fajar: todayEntry.adjustedFajar,
    ifter: todayEntry.adjustedIfter,
    sehriEpoch,
    ifterEpoch,
    nextEvent,
    msToNextEvent,
  };
}
