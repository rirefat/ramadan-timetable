'use client';

import { useState, useEffect } from 'react';

/**
 * High-precision, leak-free monotonic clock hook.
 * Uses a single managed setInterval with proper cleanup to prevent memory leaks and thread locks.
 */
export function useMonotonicClock(intervalMs: number = 1000): Date {
  const [currentTime, setCurrentTime] = useState<Date>(() => new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, intervalMs);

    return () => {
      clearInterval(timerId);
    };
  }, [intervalMs]);

  return currentTime;
}
