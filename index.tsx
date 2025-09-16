/* 
This is the main screen of the Weather Explorer App built with React Native.
It allows users to search for weather by city name or use their current location.

Key Features:
- City search with suggestions
- Current location weather retrieval
- Displays current weather, hourly, and daily forecast
- Temperature unit toggle (Celsius/Fahrenheit)
- Dark/light theme toggle
- Recent search history with ability to clear

Below, each part of the code is commented for clarity.
*/
import React, { useEffect, useRef, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import {
  Text,
  View,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Animated,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';
import { SafeAreaView } from 'react-native-safe-area-context';
import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-toast-message';
import { getWeather } from '@/api/weather';
import { getCoordinatesForCity } from '@/api/geocode';
import { lightStyles, darkStyles } from './styles';

const STORAGE_KEY = 'search_history';

export default function HomeScreen() {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [useFahrenheit, setUseFahrenheit] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;
  const backgroundAnim = useRef(new Animated.Value(0)).current;
  const emojiAnim = useRef(new Animated.Value(0)).current;

  // Load search history from local storage when the app starts
useEffect(() => {
    loadHistory();
  }, []);

  // Animate background color when switching between light and dark mode
useEffect(() => {
    Animated.timing(backgroundAnim, {
      toValue: darkMode ? 1 : 0,
      duration: 600,
      useNativeDriver: false,
    }).start();
  }, [darkMode]);

  // Animate the weather card appearance when weather data is loaded
useEffect(() => {
    if (weather) {
      fadeAnim.setValue(0);
      slideAnim.setValue(30);
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [weather]);

  // Convert temperature from Celsius to Fahrenheit if the user chooses that option
function convert(tempC: number) {
    return useFahrenheit
      ? `${((tempC * 9) / 5 + 32).toFixed(1)}°F`
      : `${tempC.toFixed(1)}°C`;
  }

  // Return an emoji based on the weather condition code
function getWeatherEmoji(code: number): string {
    if (code >= 0 && code <= 3) return '☀️';
    if (code >= 45 && code <= 48) return '🌫';
    if (code >= 51 && code <= 67) return '🌦';
    if (code >= 71 && code <= 77) return '❄️';
    if (code >= 80 && code <= 82) return '🌧';
    if (code >= 95) return '⛈';
    return '⛅';
  }

  // Load the search history from AsyncStorage
async function loadHistory() {
    const saved = await AsyncStorage.getItem(STORAGE_KEY);
    if (saved) setHistory(JSON.parse(saved));
  }

  // Save a new city to the search history, limiting the list to 5 unique entries
async function saveToHistory(newCity: string) {
    let updated = [newCity, ...history.filter((c) => c.toLowerCase() !== newCity.toLowerCase())];
    if (updated.length > 5) updated = updated.slice(0, 5);
    setHistory(updated);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }

  // Clear the search history from AsyncStorage
async function clearHistory() {
    await AsyncStorage.removeItem(STORAGE_KEY);
    setHistory([]);
  }

  // Fetch and display weather data for a given city name
async function searchCityWeather(cityName: string) {
    const netInfo = await NetInfo.fetch();
    if (!netInfo.isConnected) {
      Toast.show({ type: 'error', text1: 'Offline', text2: 'You are not connected to the internet.' });
      return;
    }
    Keyboard.dismiss();
    setLoading(true);
    setWeather(null);
    setSuggestions([]);

    const coords = await getCoordinatesForCity(cityName);
    if (!coords) {
      Toast.show({ type: 'error', text1: 'Oops!', text2: 'City not found. Try another one.' });
      setLoading(false);
      return;
    }

    const data = await getWeather(coords.lat, coords.lon);
    if (!data) {
      Toast.show({ type: 'error', text1: 'API Error', text2: 'Failed to fetch weather data.' });
      setLoading(false);
      return;
    }

    setWeather({ ...data, date: new Date(), cityName, country: coords.country });
    setLoading(false);
    await saveToHistory(cityName);
    setCity('');
  }

  // Use the device's current GPS location to get weather data
async function useCurrentLocation() {
    const netInfo = await NetInfo.fetch();
    if (!netInfo.isConnected) {
      Toast.show({ type: 'error', text1: 'Offline', text2: 'You are not connected to the internet.' });
      return;
    }
    setLoading(true);
    setWeather(null);

    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Toast.show({ type: 'error', text1: 'Permission Denied', text2: 'Location access is required.' });
        setLoading(false);
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      const data = await getWeather(latitude, longitude);
      setWeather({ ...data, date: new Date(), cityName: 'Current Location', country: '' });
      setLoading(false);
      await saveToHistory('Current Location');
    } catch (e) {
      Toast.show({ type: 'error', text1: 'Location Error', text2: 'Could not get your current location.' });
      setLoading(false);
    }
  }

  // Handle input change and fetch city suggestions from OpenStreetMap
async function handleInputChange(text: string) {
    setCity(text);
    setSuggestions([]);

    if (text.length < 2) return;

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=8&q=${encodeURIComponent(text)}`
      );
      const data = await response.json();

      const filtered = data.filter(
        (item: any) =>
          (item.type === 'city' || item.type === 'administrative') &&
          (item.class === 'place' || item.class === 'boundary')
      );

      const names = filtered.map((item: any) => {
        const city = item.address.city || item.address.town || item.address.village || '';
        const country = item.address.country || '';
        return city && country ? `${city}, ${country}` : city || country;
      });

      const unique = Array.from(new Set(names));
      setSuggestions(unique);
    } catch (error) {
      console.error('City suggestion error:', error);
    }
  }

  // Interpolate background color animation based on dark mode setting
const interpolatedBackground = backgroundAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [lightStyles.container.backgroundColor, darkStyles.container.backgroundColor],
  });

  // Choose appropriate styles based on whether dark mode is enabled
// Get screen dimensions for responsive scaling
  const { width, height } = useWindowDimensions();
  const styles = darkMode ? darkStyles : lightStyles;

  return (
    <Animated.View style={{ flex: 1, backgroundColor: interpolatedBackground }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          <Text style={styles.header} accessible accessibilityLabel="App header, Weather Finder" allowFontScaling={true}>🌤 Weather Finder</Text>

          <View style={styles.searchBox}>
            <TextInput accessible accessibilityLabel="City search input" allowFontScaling={true}
              style={styles.input}
              value={city}
              onChangeText={handleInputChange}
              placeholder="Search city"
              placeholderTextColor={darkMode ? '#aaa' : '#666'}
            />
            <TouchableOpacity style={styles.searchButton} onPress={() => searchCityWeather(city)}>
              <Text style={styles.searchText} accessible accessibilityLabel="Search icon" allowFontScaling={true}>🔍</Text>
            </TouchableOpacity>
          </View>

          {suggestions.length > 0 && (
            <View style={styles.suggestionBox}>
              {suggestions.map((sug, index) => (
                <TouchableOpacity key={index} onPress={() => searchCityWeather(sug)}>
                  <Text
                    style={[
                      styles.suggestionItem,
                      index === suggestions.length - 1 && { borderBottomWidth: 0 },
                    ]}
                  >
                    {sug}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          <TouchableOpacity style={styles.locationButton} onPress={useCurrentLocation}>
            <Text style={styles.locationText} accessible accessibilityLabel="Use My Location button" allowFontScaling={true}>📍 Use My Location</Text>
          </TouchableOpacity>

          <View style={styles.switchRow}>
            <TouchableOpacity onPress={() => setUseFahrenheit(!useFahrenheit)} style={styles.circleToggle}>
              <Text style={styles.circleToggleText} allowFontScaling={true}>{useFahrenheit ? '°F' : '°C'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                Animated.sequence([
                  Animated.timing(emojiAnim, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                  }),
                  Animated.timing(emojiAnim, {
                    toValue: 0,
                    duration: 0,
                    useNativeDriver: true,
                  }),
                ]).start(() => setDarkMode(!darkMode));
              }}
              style={styles.circleToggle}
            >
              <Animated.Text
                style={[
                  styles.circleToggleText,
                  {
                    transform: [
                      {
                        rotate: emojiAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: ['0deg', '360deg'],
                        }),
                      },
                      {
                        scale: emojiAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, 1.5],
                        }),
                      },
                    ],
                  },
                ]}
              >
                {darkMode ? '🌙' : '☀️'}
              </Animated.Text>
            </TouchableOpacity>
          </View>

          {history.length > 0 && (
            <View style={styles.historySection}>
              <Text style={styles.sectionTitle}>Recent Searches:</Text>
              {history.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => searchCityWeather(item)}>
                  <Text style={styles.historyItem} allowFontScaling={true}>{item}</Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity style={styles.clearButton} onPress={clearHistory}>
                <Text style={styles.clearButtonText} allowFontScaling={true}>Clear Search History</Text>
              </TouchableOpacity>
            </View>
          )}

          {loading && <ActivityIndicator size="large" color="#00f" style={{ marginTop: 20 }} />}

          {weather && (
            <Animated.View style={[styles.card, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
              <Text style={styles.city}>
                {weather.cityName}
                {weather.country ? `, ${weather.country}` : ''}
              </Text>
              <Text style={styles.temp}>
                {getWeatherEmoji(weather.weatherCode)} {convert(weather.temperature)}
              </Text>
              <Text style={styles.datetime}>{weather.date.toLocaleString()}</Text>

              <View style={styles.detailsRow}>
                <Text style={styles.detail}>💧 Humidity: {weather.humidity}%</Text>
                <Text style={styles.detail}>💨 Wind: {weather.windSpeed} m/s</Text>
           
              </View>

              <Text style={styles.sectionTitle}>Today</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.forecastScroll}>
                {weather.hourly?.map((h: any, i: number) => (
                  <View key={i} style={styles.hourCard}>
                    <Text style={styles.forecastDate}>{h.hour}</Text>
                    <Text style={styles.forecastEmoji}>{getWeatherEmoji(h.code)}</Text>
                    <Text style={styles.forecastTemp}>{convert(h.temp)}</Text>
                  </View>
                ))}
              </ScrollView>

              <Text style={styles.sectionTitle}>7-Day Forecast</Text>
              {weather.forecast.dates.map((date: string, i: number) => (
                <View key={i} style={styles.dayCard}>
                  <View style={styles.dayCardLeft}>
                    <Text style={styles.dayLabel}>
                      {new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}
                    </Text>
                    <Text style={styles.forecastEmoji}>
                      {getWeatherEmoji(weather.forecast.codes[i])}
                    </Text>
                  </View>
                  <Text style={[styles.dayTemp, { fontWeight: 'bold' }]}>
                    {convert(weather.forecast.minTemps[i])} / {convert(weather.forecast.maxTemps[i])}
                  </Text>
                </View>
              ))}
            </Animated.View>
          )}
        </ScrollView>
        <Toast />
      </SafeAreaView>
    </Animated.View>
  );
}

// Note: Add `accessible`, `accessibilityLabel`, and `allowFontScaling` props on all Touchable/Text components for full accessibility.
