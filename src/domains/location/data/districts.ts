import { DistrictOffset } from '../types/location';

/**
 * Bangladesh 64 Districts with Islamic Foundation timing offsets (in minutes) relative to Dhaka base.
 */
export const BANGLADESH_DISTRICTS: DistrictOffset[] = [
  // --- DHAKA DIVISION ---
  { id: 'dhaka', nameEn: 'Dhaka', nameBn: 'ঢাকা', division: 'Dhaka', sehriOffset: 0, ifterOffset: 0 },
  { id: 'gazipur', nameEn: 'Gazipur', nameBn: 'গাজীপুর', division: 'Dhaka', sehriOffset: 0, ifterOffset: 0 },
  { id: 'narayanganj', nameEn: 'Narayanganj', nameBn: 'নারায়ণগঞ্জ', division: 'Dhaka', sehriOffset: 0, ifterOffset: -1 },
  { id: 'munshiganj', nameEn: 'Munshiganj', nameBn: 'মুন্সীগঞ্জ', division: 'Dhaka', sehriOffset: 0, ifterOffset: 0 },
  { id: 'manikganj', nameEn: 'Manikganj', nameBn: 'মানিকগঞ্জ', division: 'Dhaka', sehriOffset: 1, ifterOffset: 1 },
  { id: 'narsingdi', nameEn: 'Narsingdi', nameBn: 'নরসিংদী', division: 'Dhaka', sehriOffset: -2, ifterOffset: -2 },
  { id: 'tangail', nameEn: 'Tangail', nameBn: 'টাঙ্গাইল', division: 'Dhaka', sehriOffset: 2, ifterOffset: 1 },
  { id: 'kishoreganj', nameEn: 'Kishoreganj', nameBn: 'কিশোরগঞ্জ', division: 'Dhaka', sehriOffset: -2, ifterOffset: -3 },
  { id: 'faridpur', nameEn: 'Faridpur', nameBn: 'ফরিদপুর', division: 'Dhaka', sehriOffset: 2, ifterOffset: 2 },
  { id: 'madaripur', nameEn: 'Madaripur', nameBn: 'মাদারীপুর', division: 'Dhaka', sehriOffset: 1, ifterOffset: 1 },
  { id: 'gopalganj', nameEn: 'Gopalganj', nameBn: 'গোপালগঞ্জ', division: 'Dhaka', sehriOffset: 3, ifterOffset: 2 },
  { id: 'shariatpur', nameEn: 'Shariatpur', nameBn: 'শরীয়তপুর', division: 'Dhaka', sehriOffset: 0, ifterOffset: 0 },
  { id: 'rajbari', nameEn: 'Rajbari', nameBn: 'রাজবাড়ী', division: 'Dhaka', sehriOffset: 3, ifterOffset: 3 },

  // --- CHATTOGRAM DIVISION ---
  { id: 'chattogram', nameEn: 'Chattogram', nameBn: 'চট্টগ্রাম', division: 'Chattogram', sehriOffset: -5, ifterOffset: -5 },
  { id: 'coxs-bazar', nameEn: "Cox's Bazar", nameBn: 'কক্সবাজার', division: 'Chattogram', sehriOffset: -6, ifterOffset: -6 },
  { id: 'cumilla', nameEn: 'Cumilla', nameBn: 'কুমিল্লা', division: 'Chattogram', sehriOffset: -3, ifterOffset: -3 },
  { id: 'feni', nameEn: 'Feni', nameBn: 'ফেনী', division: 'Chattogram', sehriOffset: -4, ifterOffset: -4 },
  { id: 'brahmanbaria', nameEn: 'Brahmanbaria', nameBn: 'ব্রাহ্মণবাড়িয়া', division: 'Chattogram', sehriOffset: -3, ifterOffset: -3 },
  { id: 'chandpur', nameEn: 'Chandpur', nameBn: 'চাঁদপুর', division: 'Chattogram', sehriOffset: -1, ifterOffset: -1 },
  { id: 'noakhali', nameEn: 'Noakhali', nameBn: 'নোয়াখালী', division: 'Chattogram', sehriOffset: -3, ifterOffset: -3 },
  { id: 'lakshmipur', nameEn: 'Lakshmipur', nameBn: 'লক্ষ্মীপুর', division: 'Chattogram', sehriOffset: -2, ifterOffset: -2 },
  { id: 'rangamati', nameEn: 'Rangamati', nameBn: 'রাঙ্গামাটি', division: 'Chattogram', sehriOffset: -7, ifterOffset: -7 },
  { id: 'bandarban', nameEn: 'Bandarban', nameBn: 'বান্দরবান', division: 'Chattogram', sehriOffset: -7, ifterOffset: -7 },
  { id: 'khagrachhari', nameEn: 'Khagrachhari', nameBn: 'খাগড়াছড়ি', division: 'Chattogram', sehriOffset: -6, ifterOffset: -6 },

  // --- SYLHET DIVISION ---
  { id: 'sylhet', nameEn: 'Sylhet', nameBn: 'সিলেট', division: 'Sylhet', sehriOffset: -7, ifterOffset: -6 },
  { id: 'moulvibazar', nameEn: 'Moulvibazar', nameBn: 'মৌলভীবাজার', division: 'Sylhet', sehriOffset: -6, ifterOffset: -5 },
  { id: 'habiganj', nameEn: 'Habiganj', nameBn: 'হবিগঞ্জ', division: 'Sylhet', sehriOffset: -5, ifterOffset: -4 },
  { id: 'sunamganj', nameEn: 'Sunamganj', nameBn: 'সুনামগঞ্জ', division: 'Sylhet', sehriOffset: -6, ifterOffset: -5 },

  // --- RAJSHAHI DIVISION ---
  { id: 'rajshahi', nameEn: 'Rajshahi', nameBn: 'রাজশাহী', division: 'Rajshahi', sehriOffset: 7, ifterOffset: 6 },
  { id: 'bogura', nameEn: 'Bogura', nameBn: 'বগুড়া', division: 'Rajshahi', sehriOffset: 4, ifterOffset: 3 },
  { id: 'pabna', nameEn: 'Pabna', nameBn: 'পাবনা', division: 'Rajshahi', sehriOffset: 4, ifterOffset: 4 },
  { id: 'sirajganj', nameEn: 'Sirajganj', nameBn: 'সিরাজগঞ্জ', division: 'Rajshahi', sehriOffset: 3, ifterOffset: 2 },
  { id: 'naogaon', nameEn: 'Naogaon', nameBn: 'নওগাঁ', division: 'Rajshahi', sehriOffset: 6, ifterOffset: 5 },
  { id: 'natore', nameEn: 'Natore', nameBn: 'নাটোর', division: 'Rajshahi', sehriOffset: 5, ifterOffset: 5 },
  { id: 'chapainawabganj', nameEn: 'Chapainawabganj', nameBn: 'চাঁপাইনবাবগঞ্জ', division: 'Rajshahi', sehriOffset: 9, ifterOffset: 8 },
  { id: 'joypurhat', nameEn: 'Joypurhat', nameBn: 'জয়পুরহাট', division: 'Rajshahi', sehriOffset: 5, ifterOffset: 4 },

  // --- KHULNA DIVISION ---
  { id: 'khulna', nameEn: 'Khulna', nameBn: 'খুলনা', division: 'Khulna', sehriOffset: 4, ifterOffset: 3 },
  { id: 'jashore', nameEn: 'Jashore', nameBn: 'যশোর', division: 'Khulna', sehriOffset: 6, ifterOffset: 5 },
  { id: 'satkhira', nameEn: 'Satkhira', nameBn: 'সাতক্ষীরা', division: 'Khulna', sehriOffset: 6, ifterOffset: 5 },
  { id: 'kushtia', nameEn: 'Kushtia', nameBn: 'কুষ্টিয়া', division: 'Khulna', sehriOffset: 5, ifterOffset: 5 },
  { id: 'bagerhat', nameEn: 'Bagerhat', nameBn: 'বাগেরহাট', division: 'Khulna', sehriOffset: 3, ifterOffset: 2 },
  { id: 'chuadanga', nameEn: 'Chuadanga', nameBn: 'চুয়াডাঙ্গা', division: 'Khulna', sehriOffset: 6, ifterOffset: 6 },
  { id: 'jhenaidah', nameEn: 'Jhenaidah', nameBn: 'ঝিনাইদহ', division: 'Khulna', sehriOffset: 5, ifterOffset: 5 },
  { id: 'magura', nameEn: 'Magura', nameBn: 'মাগুরা', division: 'Khulna', sehriOffset: 4, ifterOffset: 3 },
  { id: 'meherpur', nameEn: 'Meherpur', nameBn: 'মেহেরপুর', division: 'Khulna', sehriOffset: 7, ifterOffset: 6 },
  { id: 'narail', nameEn: 'Narail', nameBn: 'নড়াইল', division: 'Khulna', sehriOffset: 4, ifterOffset: 3 },

  // --- BARISHAL DIVISION ---
  { id: 'barishal', nameEn: 'Barishal', nameBn: 'বরিশাল', division: 'Barishal', sehriOffset: 1, ifterOffset: 1 },
  { id: 'patuakhali', nameEn: 'Patuakhali', nameBn: 'পটুয়াখালী', division: 'Barishal', sehriOffset: 1, ifterOffset: 1 },
  { id: 'bhola', nameEn: 'Bhola', nameBn: 'ভোলা', division: 'Barishal', sehriOffset: -1, ifterOffset: -1 },
  { id: 'pirojpur', nameEn: 'Pirojpur', nameBn: 'পিরোজপুর', division: 'Barishal', sehriOffset: 2, ifterOffset: 2 },
  { id: 'barguna', nameEn: 'Barguna', nameBn: 'বরগুনা', division: 'Barishal', sehriOffset: 2, ifterOffset: 2 },
  { id: 'jhalokati', nameEn: 'Jhalokati', nameBn: 'ঝালকাঠি', division: 'Barishal', sehriOffset: 2, ifterOffset: 1 },

  // --- RANGPUR DIVISION ---
  { id: 'rangpur', nameEn: 'Rangpur', nameBn: 'রংপুর', division: 'Rangpur', sehriOffset: 4, ifterOffset: 2 },
  { id: 'dinajpur', nameEn: 'Dinajpur', nameBn: 'দিনাজপুর', division: 'Rangpur', sehriOffset: 6, ifterOffset: 4 },
  { id: 'kurigram', nameEn: 'Kurigram', nameBn: 'কুড়িগ্রাম', division: 'Rangpur', sehriOffset: 2, ifterOffset: 0 },
  { id: 'gaibandha', nameEn: 'Gaibandha', nameBn: 'গাইবান্ধা', division: 'Rangpur', sehriOffset: 2, ifterOffset: 1 },
  { id: 'nilphamari', nameEn: 'Nilphamari', nameBn: 'নীলফামারী', division: 'Rangpur', sehriOffset: 5, ifterOffset: 3 },
  { id: 'panchagarh', nameEn: 'Panchagarh', nameBn: 'পঞ্চগড়', division: 'Rangpur', sehriOffset: 8, ifterOffset: 5 },
  { id: 'thakurgaon', nameEn: 'Thakurgaon', nameBn: 'ঠাকুরগাঁও', division: 'Rangpur', sehriOffset: 8, ifterOffset: 5 },
  { id: 'lalmonirhat', nameEn: 'Lalmonirhat', nameBn: 'লালমনিরহাট', division: 'Rangpur', sehriOffset: 3, ifterOffset: 1 },

  // --- MYMENSINGH DIVISION ---
  { id: 'mymensingh', nameEn: 'Mymensingh', nameBn: 'ময়মনসিংহ', division: 'Mymensingh', sehriOffset: 1, ifterOffset: -1 },
  { id: 'jamalpur', nameEn: 'Jamalpur', nameBn: 'জামালপুর', division: 'Mymensingh', sehriOffset: 3, ifterOffset: 1 },
  { id: 'netrokona', nameEn: 'Netrokona', nameBn: 'নেত্রকোণা', division: 'Mymensingh', sehriOffset: -1, ifterOffset: -3 },
  { id: 'sherpur', nameEn: 'Sherpur', nameBn: 'শেরপুর', division: 'Mymensingh', sehriOffset: 2, ifterOffset: 0 },
];

export const DEFAULT_DISTRICT = BANGLADESH_DISTRICTS[0]; // Dhaka
