export interface District {
  id: string;
  name: string;
  bnName: string;
  division: string;
  lat: number;
  lng: number;
  sehriOffset: number; // minutes relative to Dhaka base (positive = add, negative = subtract)
  ifterOffset: number; // minutes relative to Dhaka base (positive = add, negative = subtract)
}

/**
 * All 64 Districts of Bangladesh with coordinates and Islamic Foundation minute offsets relative to Dhaka.
 */
export const BANGLADESH_DISTRICTS: District[] = [
  // Dhaka Division
  { id: 'dhaka', name: 'Dhaka', bnName: 'ঢাকা', division: 'Dhaka', lat: 23.8103, lng: 90.4125, sehriOffset: 0, ifterOffset: 0 },
  { id: 'gazipur', name: 'Gazipur', bnName: 'গাজীপুর', division: 'Dhaka', lat: 23.9999, lng: 90.4203, sehriOffset: 0, ifterOffset: 0 },
  { id: 'narayanganj', name: 'Narayanganj', bnName: 'নারায়ণগঞ্জ', division: 'Dhaka', lat: 23.6238, lng: 90.5000, sehriOffset: 0, ifterOffset: -1 },
  { id: 'munshiganj', name: 'Munshiganj', bnName: 'মুন্সীগঞ্জ', division: 'Dhaka', lat: 23.5422, lng: 90.5305, sehriOffset: 0, ifterOffset: 0 },
  { id: 'manikganj', name: 'Manikganj', bnName: 'মানিকগঞ্জ', division: 'Dhaka', lat: 23.8617, lng: 90.0003, sehriOffset: 1, ifterOffset: 1 },
  { id: 'narsingdi', name: 'Narsingdi', bnName: 'নরসিংদী', division: 'Dhaka', lat: 23.9322, lng: 90.7154, sehriOffset: -2, ifterOffset: -2 },
  { id: 'tangail', name: 'Tangail', bnName: 'টাঙ্গাইল', division: 'Dhaka', lat: 24.2513, lng: 89.9167, sehriOffset: 2, ifterOffset: 1 },
  { id: 'kishoreganj', name: 'Kishoreganj', bnName: 'কিশোরগঞ্জ', division: 'Dhaka', lat: 24.4449, lng: 90.7766, sehriOffset: -2, ifterOffset: -3 },
  { id: 'faridpur', name: 'Faridpur', bnName: 'ফরিদপুর', division: 'Dhaka', lat: 23.6071, lng: 89.8429, sehriOffset: 2, ifterOffset: 2 },
  { id: 'madaripur', name: 'Madaripur', bnName: 'মাদারীপুর', division: 'Dhaka', lat: 23.1641, lng: 90.1897, sehriOffset: 1, ifterOffset: 1 },
  { id: 'gopalganj', name: 'Gopalganj', bnName: 'গোপালগঞ্জ', division: 'Dhaka', lat: 23.0051, lng: 89.8266, sehriOffset: 3, ifterOffset: 2 },
  { id: 'shariatpur', name: 'Shariatpur', bnName: 'শরীয়তপুর', division: 'Dhaka', lat: 23.2423, lng: 90.4348, sehriOffset: 0, ifterOffset: 0 },
  { id: 'rajbari', name: 'Rajbari', bnName: 'রাজবাড়ী', division: 'Dhaka', lat: 23.7574, lng: 89.6445, sehriOffset: 3, ifterOffset: 3 },

  // Chattogram Division
  { id: 'chattogram', name: 'Chattogram', bnName: 'চট্টগ্রাম', division: 'Chattogram', lat: 22.3569, lng: 91.7832, sehriOffset: -5, ifterOffset: -5 },
  { id: 'coxs-bazar', name: "Cox's Bazar", bnName: 'কক্সবাজার', division: 'Chattogram', lat: 21.4272, lng: 92.0058, sehriOffset: -6, ifterOffset: -6 },
  { id: 'cumilla', name: 'Cumilla', bnName: 'কুমিল্লা', division: 'Chattogram', lat: 23.4682, lng: 91.1788, sehriOffset: -3, ifterOffset: -3 },
  { id: 'feni', name: 'Feni', bnName: 'ফেনী', division: 'Chattogram', lat: 23.0186, lng: 91.3966, sehriOffset: -4, ifterOffset: -4 },
  { id: 'brahmanbaria', name: 'Brahmanbaria', bnName: 'ব্রাহ্মণবাড়িয়া', division: 'Chattogram', lat: 23.9571, lng: 91.1119, sehriOffset: -3, ifterOffset: -3 },
  { id: 'chandpur', name: 'Chandpur', bnName: 'চাঁদপুর', division: 'Chattogram', lat: 23.2333, lng: 90.6667, sehriOffset: -1, ifterOffset: -1 },
  { id: 'noakhali', name: 'Noakhali', bnName: 'নোয়াখালী', division: 'Chattogram', lat: 22.8696, lng: 91.0998, sehriOffset: -3, ifterOffset: -3 },
  { id: 'lakshmipur', name: 'Lakshmipur', bnName: 'লক্ষ্মীপুর', division: 'Chattogram', lat: 22.9425, lng: 90.8412, sehriOffset: -2, ifterOffset: -2 },
  { id: 'rangamati', name: 'Rangamati', bnName: 'রাঙ্গামাটি', division: 'Chattogram', lat: 22.7324, lng: 92.2985, sehriOffset: -7, ifterOffset: -7 },
  { id: 'bandarban', name: 'Bandarban', bnName: 'বান্দরবান', division: 'Chattogram', lat: 22.1953, lng: 92.2184, sehriOffset: -7, ifterOffset: -7 },
  { id: 'khagrachhari', name: 'Khagrachhari', bnName: 'খাগড়াছড়ি', division: 'Chattogram', lat: 23.1193, lng: 91.9847, sehriOffset: -6, ifterOffset: -6 },

  // Sylhet Division
  { id: 'sylhet', name: 'Sylhet', bnName: 'সিলেট', division: 'Sylhet', lat: 24.8949, lng: 91.8687, sehriOffset: -7, ifterOffset: -6 },
  { id: 'moulvibazar', name: 'Moulvibazar', bnName: 'মৌলভীবাজার', division: 'Sylhet', lat: 24.4829, lng: 91.7774, sehriOffset: -6, ifterOffset: -5 },
  { id: 'habiganj', name: 'Habiganj', bnName: 'হবিগঞ্জ', division: 'Sylhet', lat: 24.3749, lng: 91.4155, sehriOffset: -5, ifterOffset: -4 },
  { id: 'sunamganj', name: 'Sunamganj', bnName: 'সুনামগঞ্জ', division: 'Sylhet', lat: 25.0658, lng: 91.3950, sehriOffset: -6, ifterOffset: -5 },

  // Rajshahi Division
  { id: 'rajshahi', name: 'Rajshahi', bnName: 'রাজশাহী', division: 'Rajshahi', lat: 24.3636, lng: 88.6241, sehriOffset: 7, ifterOffset: 6 },
  { id: 'bogura', name: 'Bogura', bnName: 'বগুড়া', division: 'Rajshahi', lat: 24.8465, lng: 89.3770, sehriOffset: 4, ifterOffset: 3 },
  { id: 'pabna', name: 'Pabna', bnName: 'পাবনা', division: 'Rajshahi', lat: 24.0064, lng: 89.2372, sehriOffset: 4, ifterOffset: 4 },
  { id: 'sirajganj', name: 'Sirajganj', bnName: 'সিরাজগঞ্জ', division: 'Rajshahi', lat: 24.4534, lng: 89.7008, sehriOffset: 3, ifterOffset: 2 },
  { id: 'naogaon', name: 'Naogaon', bnName: 'নওগাঁ', division: 'Rajshahi', lat: 24.7936, lng: 88.9318, sehriOffset: 6, ifterOffset: 5 },
  { id: 'natore', name: 'Natore', bnName: 'নাটোর', division: 'Rajshahi', lat: 24.4206, lng: 88.9324, sehriOffset: 5, ifterOffset: 5 },
  { id: 'chapainawabganj', name: 'Chapainawabganj', bnName: 'চাঁপাইনবাবগঞ্জ', division: 'Rajshahi', lat: 24.5965, lng: 88.2775, sehriOffset: 9, ifterOffset: 8 },
  { id: 'joypurhat', name: 'Joypurhat', bnName: 'জয়পুরহাট', division: 'Rajshahi', lat: 25.1012, lng: 89.0277, sehriOffset: 5, ifterOffset: 4 },

  // Khulna Division
  { id: 'khulna', name: 'Khulna', bnName: 'খুলনা', division: 'Khulna', lat: 22.8456, lng: 89.5403, sehriOffset: 4, ifterOffset: 3 },
  { id: 'jashore', name: 'Jashore', bnName: 'যশোর', division: 'Khulna', lat: 23.1664, lng: 89.2081, sehriOffset: 6, ifterOffset: 5 },
  { id: 'satkhira', name: 'Satkhira', bnName: 'সাতক্ষীরা', division: 'Khulna', lat: 22.7185, lng: 89.0705, sehriOffset: 6, ifterOffset: 5 },
  { id: 'kushtia', name: 'Kushtia', bnName: 'কুষ্টিয়া', division: 'Khulna', lat: 23.9013, lng: 89.1205, sehriOffset: 5, ifterOffset: 5 },
  { id: 'bagerhat', name: 'Bagerhat', bnName: 'বাগেরহাট', division: 'Khulna', lat: 22.6516, lng: 89.7859, sehriOffset: 3, ifterOffset: 2 },
  { id: 'chuadanga', name: 'Chuadanga', bnName: 'চুয়াডাঙ্গা', division: 'Khulna', lat: 23.6402, lng: 88.8418, sehriOffset: 6, ifterOffset: 6 },
  { id: 'jhenaidah', name: 'Jhenaidah', bnName: 'ঝিনাইদহ', division: 'Khulna', lat: 23.5450, lng: 89.1539, sehriOffset: 5, ifterOffset: 5 },
  { id: 'magura', name: 'Magura', bnName: 'মাগুরা', division: 'Khulna', lat: 23.4873, lng: 89.4199, sehriOffset: 4, ifterOffset: 3 },
  { id: 'meherpur', name: 'Meherpur', bnName: 'মেহেরপুর', division: 'Khulna', lat: 23.7622, lng: 88.6318, sehriOffset: 7, ifterOffset: 6 },
  { id: 'narail', name: 'Narail', bnName: 'নড়াইল', division: 'Khulna', lat: 23.1725, lng: 89.5127, sehriOffset: 4, ifterOffset: 3 },

  // Barishal Division
  { id: 'barishal', name: 'Barishal', bnName: 'বরিশাল', division: 'Barishal', lat: 22.7010, lng: 90.3535, sehriOffset: 1, ifterOffset: 1 },
  { id: 'patuakhali', name: 'Patuakhali', bnName: 'পটুয়াখালী', division: 'Barishal', lat: 22.3596, lng: 90.3299, sehriOffset: 1, ifterOffset: 1 },
  { id: 'bhola', name: 'Bhola', bnName: 'ভোলা', division: 'Barishal', lat: 22.6859, lng: 90.6481, sehriOffset: -1, ifterOffset: -1 },
  { id: 'pirojpur', name: 'Pirojpur', bnName: 'পিরোজপুর', division: 'Barishal', lat: 22.5841, lng: 89.9720, sehriOffset: 2, ifterOffset: 2 },
  { id: 'barguna', name: 'Barguna', bnName: 'বরগুনা', division: 'Barishal', lat: 22.0953, lng: 90.1121, sehriOffset: 2, ifterOffset: 2 },
  { id: 'jhalokati', name: 'Jhalokati', bnName: 'ঝালকাঠি', division: 'Barishal', lat: 22.6406, lng: 90.1987, sehriOffset: 2, ifterOffset: 1 },

  // Rangpur Division
  { id: 'rangpur', name: 'Rangpur', bnName: 'রংপুর', division: 'Rangpur', lat: 25.7439, lng: 89.2752, sehriOffset: 4, ifterOffset: 2 },
  { id: 'dinajpur', name: 'Dinajpur', bnName: 'দিনাজপুর', division: 'Rangpur', lat: 25.6217, lng: 88.6355, sehriOffset: 6, ifterOffset: 4 },
  { id: 'kurigram', name: 'Kurigram', bnName: 'কুড়িগ্রাম', division: 'Rangpur', lat: 25.8054, lng: 89.6362, sehriOffset: 2, ifterOffset: 0 },
  { id: 'gaibandha', name: 'Gaibandha', bnName: 'গাইবান্ধা', division: 'Rangpur', lat: 25.3288, lng: 89.5406, sehriOffset: 2, ifterOffset: 1 },
  { id: 'nilphamari', name: 'Nilphamari', bnName: 'নীলফামারী', division: 'Rangpur', lat: 25.9318, lng: 88.8560, sehriOffset: 5, ifterOffset: 3 },
  { id: 'panchagarh', name: 'Panchagarh', bnName: 'পঞ্চগড়', division: 'Rangpur', lat: 26.3411, lng: 88.5542, sehriOffset: 8, ifterOffset: 5 },
  { id: 'thakurgaon', name: 'Thakurgaon', bnName: 'ঠাকুরগাঁও', division: 'Rangpur', lat: 26.0337, lng: 88.4617, sehriOffset: 8, ifterOffset: 5 },
  { id: 'lalmonirhat', name: 'Lalmonirhat', bnName: 'লালমনিরহাট', division: 'Rangpur', lat: 25.9923, lng: 89.2847, sehriOffset: 3, ifterOffset: 1 },

  // Mymensingh Division
  { id: 'mymensingh', name: 'Mymensingh', bnName: 'ময়মনসিংহ', division: 'Mymensingh', lat: 24.7471, lng: 90.4203, sehriOffset: 1, ifterOffset: -1 },
  { id: 'jamalpur', name: 'Jamalpur', bnName: 'জামালপুর', division: 'Mymensingh', lat: 24.9375, lng: 89.9378, sehriOffset: 3, ifterOffset: 1 },
  { id: 'netrokona', name: 'Netrokona', bnName: 'নেত্রকোণা', division: 'Mymensingh', lat: 24.8709, lng: 90.7279, sehriOffset: -1, ifterOffset: -3 },
  { id: 'sherpur', name: 'Sherpur', bnName: 'শেরপুর', division: 'Mymensingh', lat: 25.0205, lng: 90.0153, sehriOffset: 2, ifterOffset: 0 }
];

export const DEFAULT_DISTRICT = BANGLADESH_DISTRICTS[0]; // Dhaka
