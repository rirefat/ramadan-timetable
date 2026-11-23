export interface ScheduleItem {
  serial: number;
  category: 'rahmat' | 'magfirat' | 'nazwat';
  date: string;
  shortDate: string;
  day: string;
  sehri: string;
  fajar: string;
  ifter: string;
}

export interface DoaItem {
  serial: number;
  title: string;
  description: string;
  arabic_doa: string;
  transliteration: string;
  translate: string;
  translate_bn?: string;
  tag?: 'fasting' | 'iftar' | 'istighfar';
}
