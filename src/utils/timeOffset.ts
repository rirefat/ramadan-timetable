import { District, BANGLADESH_DISTRICTS, DEFAULT_DISTRICT } from '@/data/districtsData';

/**
 * Applies a minute offset to a 12-hour formatted time string (e.g., "5:12 AM" or "6:00 PM").
 */
export function applyOffset(timeStr: string, offset: number): string {
  if (!timeStr || offset === 0) return timeStr;

  const match = timeStr.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return timeStr;

  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const period = match[3].toUpperCase();

  let totalMinutes = (hours % 12) * 60 + minutes;
  if (period === 'PM') totalMinutes += 12 * 60;

  totalMinutes = (totalMinutes + offset + 1440) % 1440;

  let newHours = Math.floor(totalMinutes / 60);
  const newMinutes = totalMinutes % 60;
  const newPeriod = newHours >= 12 ? 'PM' : 'AM';

  newHours = newHours % 12;
  if (newHours === 0) newHours = 12;

  const paddedMinutes = newMinutes < 10 ? `0${newMinutes}` : `${newMinutes}`;
  return `${newHours}:${paddedMinutes} ${newPeriod}`;
}

/**
 * Calculates the great-circle distance between two geographic coordinates using the Haversine formula (in km).
 */
export function getDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Finds the nearest Bangladesh district given latitude and longitude.
 */
export function findNearestDistrict(lat: number, lng: number): District {
  let nearest = DEFAULT_DISTRICT;
  let minDistance = Infinity;

  for (const district of BANGLADESH_DISTRICTS) {
    const dist = getDistanceKm(lat, lng, district.lat, district.lng);
    if (dist < minDistance) {
      minDistance = dist;
      nearest = district;
    }
  }

  return nearest;
}
