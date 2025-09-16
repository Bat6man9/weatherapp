
// This function fetches coordinates for a city name, with caching and error handling.

const geocodeCache = {}; // Simple in-memory cache

export async function getCoordinatesForCity(city) {
  const cacheKey = city.toLowerCase().trim();
  if (geocodeCache[cacheKey]) {
    return geocodeCache[cacheKey];
  }

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=${encodeURIComponent(city)}`
    );
    const data = await response.json();

    if (data.length === 0) return null;

    const result = {
      lat: parseFloat(data[0].lat),
      lon: parseFloat(data[0].lon),
      country: data[0]?.address?.country || ''
    };

    geocodeCache[cacheKey] = result; // Store in cache
    return result;
  } catch (error) {
    console.error('Geocoding error:', error);
    return null;
  }
}
