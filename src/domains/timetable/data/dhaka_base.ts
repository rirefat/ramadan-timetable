import { BaseTimetableEntry } from '../types/timetable';

/**
 * Standard Dhaka Base Timetable for Ramadan 1446 AH / 2025 CE
 * Sourced from Islamic Foundation Bangladesh
 * Ramadan Day 1: March 2, 2025 -> Day 30: March 31, 2025
 */
export const DHAKA_BASE_TIMETABLE_2025: BaseTimetableEntry[] = [
  // 1st Ashra: Rahmat (Days 1 - 10)
  { serial: 1, category: 'rahmat', dateISO: '2025-03-02', dateFormatted: '2 March 2025', day: 'Sunday', sehri: '5:04 AM', fajar: '5:05 AM', ifter: '6:02 PM' },
  { serial: 2, category: 'rahmat', dateISO: '2025-03-03', dateFormatted: '3 March 2025', day: 'Monday', sehri: '5:03 AM', fajar: '5:04 AM', ifter: '6:03 PM' },
  { serial: 3, category: 'rahmat', dateISO: '2025-03-04', dateFormatted: '4 March 2025', day: 'Tuesday', sehri: '5:02 AM', fajar: '5:03 AM', ifter: '6:03 PM' },
  { serial: 4, category: 'rahmat', dateISO: '2025-03-05', dateFormatted: '5 March 2025', day: 'Wednesday', sehri: '5:01 AM', fajar: '5:02 AM', ifter: '6:04 PM' },
  { serial: 5, category: 'rahmat', dateISO: '2025-03-06', dateFormatted: '6 March 2025', day: 'Thursday', sehri: '5:00 AM', fajar: '5:01 AM', ifter: '6:04 PM' },
  { serial: 6, category: 'rahmat', dateISO: '2025-03-07', dateFormatted: '7 March 2025', day: 'Friday', sehri: '4:59 AM', fajar: '5:00 AM', ifter: '6:05 PM' },
  { serial: 7, category: 'rahmat', dateISO: '2025-03-08', dateFormatted: '8 March 2025', day: 'Saturday', sehri: '4:58 AM', fajar: '4:59 AM', ifter: '6:05 PM' },
  { serial: 8, category: 'rahmat', dateISO: '2025-03-09', dateFormatted: '9 March 2025', day: 'Sunday', sehri: '4:57 AM', fajar: '4:58 AM', ifter: '6:06 PM' },
  { serial: 9, category: 'rahmat', dateISO: '2025-03-10', dateFormatted: '10 March 2025', day: 'Monday', sehri: '4:56 AM', fajar: '4:57 AM', ifter: '6:06 PM' },
  { serial: 10, category: 'rahmat', dateISO: '2025-03-11', dateFormatted: '11 March 2025', day: 'Tuesday', sehri: '4:55 AM', fajar: '4:56 AM', ifter: '6:06 PM' },

  // 2nd Ashra: Magfirat (Days 11 - 20)
  { serial: 11, category: 'magfirat', dateISO: '2025-03-12', dateFormatted: '12 March 2025', day: 'Wednesday', sehri: '4:54 AM', fajar: '4:55 AM', ifter: '6:07 PM' },
  { serial: 12, category: 'magfirat', dateISO: '2025-03-13', dateFormatted: '13 March 2025', day: 'Thursday', sehri: '4:53 AM', fajar: '4:54 AM', ifter: '6:07 PM' },
  { serial: 13, category: 'magfirat', dateISO: '2025-03-14', dateFormatted: '14 March 2025', day: 'Friday', sehri: '4:52 AM', fajar: '4:53 AM', ifter: '6:08 PM' },
  { serial: 14, category: 'magfirat', dateISO: '2025-03-15', dateFormatted: '15 March 2025', day: 'Saturday', sehri: '4:51 AM', fajar: '4:52 AM', ifter: '6:08 PM' },
  { serial: 15, category: 'magfirat', dateISO: '2025-03-16', dateFormatted: '16 March 2025', day: 'Sunday', sehri: '4:50 AM', fajar: '4:51 AM', ifter: '6:08 PM' },
  { serial: 16, category: 'magfirat', dateISO: '2025-03-17', dateFormatted: '17 March 2025', day: 'Monday', sehri: '4:49 AM', fajar: '4:50 AM', ifter: '6:09 PM' },
  { serial: 17, category: 'magfirat', dateISO: '2025-03-18', dateFormatted: '18 March 2025', day: 'Tuesday', sehri: '4:48 AM', fajar: '4:49 AM', ifter: '6:09 PM' },
  { serial: 18, category: 'magfirat', dateISO: '2025-03-19', dateFormatted: '19 March 2025', day: 'Wednesday', sehri: '4:47 AM', fajar: '4:48 AM', ifter: '6:10 PM' },
  { serial: 19, category: 'magfirat', dateISO: '2025-03-20', dateFormatted: '20 March 2025', day: 'Thursday', sehri: '4:46 AM', fajar: '4:47 AM', ifter: '6:10 PM' },
  { serial: 20, category: 'magfirat', dateISO: '2025-03-21', dateFormatted: '21 March 2025', day: 'Friday', sehri: '4:45 AM', fajar: '4:46 AM', ifter: '6:10 PM' },

  // 3rd Ashra: Najat (Days 21 - 30)
  { serial: 21, category: 'najat', dateISO: '2025-03-22', dateFormatted: '22 March 2025', day: 'Saturday', sehri: '4:44 AM', fajar: '4:45 AM', ifter: '6:11 PM' },
  { serial: 22, category: 'najat', dateISO: '2025-03-23', dateFormatted: '23 March 2025', day: 'Sunday', sehri: '4:43 AM', fajar: '4:44 AM', ifter: '6:11 PM' },
  { serial: 23, category: 'najat', dateISO: '2025-03-24', dateFormatted: '24 March 2025', day: 'Monday', sehri: '4:42 AM', fajar: '4:43 AM', ifter: '6:11 PM' },
  { serial: 24, category: 'najat', dateISO: '2025-03-25', dateFormatted: '25 March 2025', day: 'Tuesday', sehri: '4:41 AM', fajar: '4:42 AM', ifter: '6:12 PM' },
  { serial: 25, category: 'najat', dateISO: '2025-03-26', dateFormatted: '26 March 2025', day: 'Wednesday', sehri: '4:40 AM', fajar: '4:41 AM', ifter: '6:12 PM' },
  { serial: 26, category: 'najat', dateISO: '2025-03-27', dateFormatted: '27 March 2025', day: 'Thursday', sehri: '4:39 AM', fajar: '4:40 AM', ifter: '6:13 PM' },
  { serial: 27, category: 'najat', dateISO: '2025-03-28', dateFormatted: '28 March 2025', day: 'Friday', sehri: '4:38 AM', fajar: '4:39 AM', ifter: '6:13 PM' },
  { serial: 28, category: 'najat', dateISO: '2025-03-29', dateFormatted: '29 March 2025', day: 'Saturday', sehri: '4:36 AM', fajar: '4:37 AM', ifter: '6:14 PM' },
  { serial: 29, category: 'najat', dateISO: '2025-03-30', dateFormatted: '30 March 2025', day: 'Sunday', sehri: '4:35 AM', fajar: '4:36 AM', ifter: '6:14 PM' },
  { serial: 30, category: 'najat', dateISO: '2025-03-31', dateFormatted: '31 March 2025', day: 'Monday', sehri: '4:34 AM', fajar: '4:35 AM', ifter: '6:15 PM' },
];
