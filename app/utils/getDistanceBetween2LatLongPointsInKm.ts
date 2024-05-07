export function getDistanceBetween2LatLongPointsInKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number {
  const radiusOfEarthInKm = 6371
  const dLat = degrees2Radians(lat2 - lat1)
  const dLon = degrees2Radians(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degrees2Radians(lat1)) *
      Math.cos(degrees2Radians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
   // Distance in km
  return radiusOfEarthInKm * c
}

function degrees2Radians(deg: number): number {
  return deg * (Math.PI / 180)
}
