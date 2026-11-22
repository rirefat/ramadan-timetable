export type Division =
  | 'Dhaka'
  | 'Chattogram'
  | 'Rajshahi'
  | 'Khulna'
  | 'Barishal'
  | 'Sylhet'
  | 'Rangpur'
  | 'Mymensingh';

export interface DistrictOffset {
  id: string;
  nameEn: string;
  nameBn: string;
  division: Division;
  sehriOffset: number; // minutes relative to Dhaka base (positive = add, negative = subtract)
  ifterOffset: number; // minutes relative to Dhaka base (positive = add, negative = subtract)
}
