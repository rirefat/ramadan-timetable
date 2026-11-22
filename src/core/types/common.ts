export type Locale = 'en' | 'bn';
export type Theme = 'light' | 'dark' | 'system';

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}
