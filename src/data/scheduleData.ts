import { ScheduleItem } from '@/types';

/**
 * Ramadan Schedule 2026 (1447 AH) for Dhaka, Bangladesh
 * Sourced from Islamic Foundation Bangladesh standards
 * Ramadan Day 1: 19 February 2026 (Thursday) -> Day 30: 20 March 2026 (Friday)
 */
export const SCHEDULE_DATA: ScheduleItem[] = [
  // 1st Ashra: 10 Days Of Rahmat (19 Feb - 28 Feb 2026)
  { serial: 1, category: "rahmat", date: "19 February 2026", shortDate: "2/19/2026", day: "Thursday", sehri: "5:12 AM", fajar: "5:13 AM", ifter: "5:58 PM" },
  { serial: 2, category: "rahmat", date: "20 February 2026", shortDate: "2/20/2026", day: "Friday", sehri: "5:11 AM", fajar: "5:12 AM", ifter: "5:58 PM" },
  { serial: 3, category: "rahmat", date: "21 February 2026", shortDate: "2/21/2026", day: "Saturday", sehri: "5:11 AM", fajar: "5:12 AM", ifter: "5:59 PM" },
  { serial: 4, category: "rahmat", date: "22 February 2026", shortDate: "2/22/2026", day: "Sunday", sehri: "5:10 AM", fajar: "5:11 AM", ifter: "5:59 PM" },
  { serial: 5, category: "rahmat", date: "23 February 2026", shortDate: "2/23/2026", day: "Monday", sehri: "5:09 AM", fajar: "5:10 AM", ifter: "6:00 PM" },
  { serial: 6, category: "rahmat", date: "24 February 2026", shortDate: "2/24/2026", day: "Tuesday", sehri: "5:08 AM", fajar: "5:09 AM", ifter: "6:00 PM" },
  { serial: 7, category: "rahmat", date: "25 February 2026", shortDate: "2/25/2026", day: "Wednesday", sehri: "5:08 AM", fajar: "5:09 AM", ifter: "6:01 PM" },
  { serial: 8, category: "rahmat", date: "26 February 2026", shortDate: "2/26/2026", day: "Thursday", sehri: "5:07 AM", fajar: "5:08 AM", ifter: "6:01 PM" },
  { serial: 9, category: "rahmat", date: "27 February 2026", shortDate: "2/27/2026", day: "Friday", sehri: "5:06 AM", fajar: "5:07 AM", ifter: "6:02 PM" },
  { serial: 10, category: "rahmat", date: "28 February 2026", shortDate: "2/28/2026", day: "Saturday", sehri: "5:05 AM", fajar: "5:06 AM", ifter: "6:02 PM" },

  // 2nd Ashra: 10 Days Of Magfirat (1 March - 10 March 2026)
  { serial: 11, category: "magfirat", date: "1 March 2026", shortDate: "3/1/2026", day: "Sunday", sehri: "5:05 AM", fajar: "5:06 AM", ifter: "6:03 PM" },
  { serial: 12, category: "magfirat", date: "2 March 2026", shortDate: "3/2/2026", day: "Monday", sehri: "5:04 AM", fajar: "5:05 AM", ifter: "6:03 PM" },
  { serial: 13, category: "magfirat", date: "3 March 2026", shortDate: "3/3/2026", day: "Tuesday", sehri: "5:03 AM", fajar: "5:04 AM", ifter: "6:04 PM" },
  { serial: 14, category: "magfirat", date: "4 March 2026", shortDate: "3/4/2026", day: "Wednesday", sehri: "5:02 AM", fajar: "5:03 AM", ifter: "6:04 PM" },
  { serial: 15, category: "magfirat", date: "5 March 2026", shortDate: "3/5/2026", day: "Thursday", sehri: "5:01 AM", fajar: "5:02 AM", ifter: "6:05 PM" },
  { serial: 16, category: "magfirat", date: "6 March 2026", shortDate: "3/6/2026", day: "Friday", sehri: "5:00 AM", fajar: "5:01 AM", ifter: "6:05 PM" },
  { serial: 17, category: "magfirat", date: "7 March 2026", shortDate: "3/7/2026", day: "Saturday", sehri: "4:59 AM", fajar: "5:00 AM", ifter: "6:06 PM" },
  { serial: 18, category: "magfirat", date: "8 March 2026", shortDate: "3/8/2026", day: "Sunday", sehri: "4:58 AM", fajar: "4:59 AM", ifter: "6:06 PM" },
  { serial: 19, category: "magfirat", date: "9 March 2026", shortDate: "3/9/2026", day: "Monday", sehri: "4:57 AM", fajar: "4:58 AM", ifter: "6:07 PM" },
  { serial: 20, category: "magfirat", date: "10 March 2026", shortDate: "3/10/2026", day: "Tuesday", sehri: "4:57 AM", fajar: "4:58 AM", ifter: "6:07 PM" },

  // 3rd Ashra: 10 Days Of Nazwat (11 March - 20 March 2026)
  { serial: 21, category: "nazwat", date: "11 March 2026", shortDate: "3/11/2026", day: "Wednesday", sehri: "4:56 AM", fajar: "4:57 AM", ifter: "6:07 PM" },
  { serial: 22, category: "nazwat", date: "12 March 2026", shortDate: "3/12/2026", day: "Thursday", sehri: "4:55 AM", fajar: "4:56 AM", ifter: "6:08 PM" },
  { serial: 23, category: "nazwat", date: "13 March 2026", shortDate: "3/13/2026", day: "Friday", sehri: "4:54 AM", fajar: "4:55 AM", ifter: "6:08 PM" },
  { serial: 24, category: "nazwat", date: "14 March 2026", shortDate: "3/14/2026", day: "Saturday", sehri: "4:53 AM", fajar: "4:54 AM", ifter: "6:09 PM" },
  { serial: 25, category: "nazwat", date: "15 March 2026", shortDate: "3/15/2026", day: "Sunday", sehri: "4:52 AM", fajar: "4:53 AM", ifter: "6:09 PM" },
  { serial: 26, category: "nazwat", date: "16 March 2026", shortDate: "3/16/2026", day: "Monday", sehri: "4:51 AM", fajar: "4:52 AM", ifter: "6:10 PM" },
  { serial: 27, category: "nazwat", date: "17 March 2026", shortDate: "3/17/2026", day: "Tuesday", sehri: "4:50 AM", fajar: "4:51 AM", ifter: "6:10 PM" },
  { serial: 28, category: "nazwat", date: "18 March 2026", shortDate: "3/18/2026", day: "Wednesday", sehri: "4:49 AM", fajar: "4:50 AM", ifter: "6:11 PM" },
  { serial: 29, category: "nazwat", date: "19 March 2026", shortDate: "3/19/2026", day: "Thursday", sehri: "4:48 AM", fajar: "4:49 AM", ifter: "6:11 PM" },
  { serial: 30, category: "nazwat", date: "20 March 2026", shortDate: "3/20/2026", day: "Friday", sehri: "4:47 AM", fajar: "4:48 AM", ifter: "6:12 PM" }
];
