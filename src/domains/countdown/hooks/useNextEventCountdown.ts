'use client';

import { useMemo } from 'react';
import { useMonotonicClock } from './useMonotonicClock';
import { AdjustedTimetableEntry } from '@/domains/timetable/types/timetable';
import { getTodaySchedule } from '@/domains/timetable/services/timetableService';
import { formatCountdown } from '@/core/utils/time';

export function useNextEventCountdown(timetable: AdjustedTimetableEntry[]) {
  const currentTime = useMonotonicClock(1000);

  const scheduleInfo = useMemo(() => {
    return getTodaySchedule(timetable, currentTime);
  }, [timetable, currentTime]);

  const countdown = useMemo(() => {
    return formatCountdown(scheduleInfo.msToNextEvent);
  }, [scheduleInfo.msToNextEvent]);

  return {
    currentTime,
    scheduleInfo,
    countdown,
  };
}
