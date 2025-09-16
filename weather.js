
// This function fetches weather data with caching and retry logic for resilience.

const weatherCache = {};

async function fetchWithRetry(url, retries = 3) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    if (retries > 0) {
      return await fetchWithRetry(url, retries - 1);
    } else {
      throw err;
    }
  }
}

export async function getWeather(lat, lon) {
  const cacheKey = `${lat},${lon}`;
  if (weatherCache[cacheKey]) {
    return weatherCache[cacheKey];
  }

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,weather_code&timezone=auto`;
    const data = await fetchWithRetry(url);

    const now = new Date();
    const currentHour = now.getHours();
    const hourly = [];

    for (let i = 0; i < data.hourly.time.length; i++) {
      const time = new Date(data.hourly.time[i]);
      if (time.getDate() === now.getDate() && time.getHours() >= currentHour && hourly.length < 12) {
        hourly.push({
          hour: time.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true }),
          temp: data.hourly.temperature_2m[i],
          code: data.hourly.weather_code[i]
        });
      }
    }

    const result = {
      temperature: data.current.temperature_2m,
      humidity: data.current.relative_humidity_2m,
      weatherCode: data.current.weather_code,
      windSpeed: data.current.wind_speed_10m,
      forecast: {
        maxTemps: data.daily.temperature_2m_max,
        minTemps: data.daily.temperature_2m_min,
        codes: data.daily.weather_code,
        dates: data.daily.time
      },
      hourly
    };

    weatherCache[cacheKey] = result; // Cache result
    return result;
  } catch (error) {
    console.error("Weather API error:", error);
    return null;
  }
}
