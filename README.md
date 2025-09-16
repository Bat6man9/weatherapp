Weather Explorer App
youssef sabry: 2023318

A mobile weather application built with React Native and TypeScript. This app allows users to search for current weather conditions by city name or get weather updates based on their current location.

🌟 Features

- 🔍 Search weather by city name
- 📍 Get current location’s weather using geolocation
- 🌡 View temperature, wind speed, humidity, and weather condition
- 🔄 Toggle between Celsius and Fahrenheit
- 🌓 Switch between light mode and dark mode
- 💾 Save and clear search history
- 📅 View a 5-day forecast with max/min temperatures

🛠 Technologies Used

- React Native
- TypeScript
- Expo
- Open-Meteo API – for weather data
- OpenStreetMap API – for geocoding
- Expo Location – for geolocation access
- AsyncStorage – for saving search history and preferences

📦 Required Packages

To ensure the app runs smoothly on any device, make sure the following packages are installed:

npm install
npx expo install expo-location
npm install @react-native-async-storage/async-storage
npm install axios
npm install react-native-dotenv

Additional packages you might need depending on your implementation:

npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated

▶️ How to Run the App

1. Download or clone the project
2. Open the project folder in a code editor (e.g., VS Code)
3. Install dependencies:

   npm install

4. Start the Expo server:

   npx expo start

5. Run the app on a physical device using the Expo Go app, or use an emulator.

📁 File Overview

- index.tsx – Main app screen and logic
- geocode.js – Converts city names to geographic coordinates
- weather.js – Fetches and formats weather data
- styles.ts – Contains styling and layout
- babel.config.js and tsconfig.json – Project configuration files

✅ Suggested Improvements

- Add error handling for:
  - Location access denied
  - No network connection
  - Invalid city names
- Use .env file to store API base URLs or keys (with react-native-dotenv)
- Display loading indicators while fetching data
- Add unit tests (e.g., with Jest) for utility functions like geocoding
- Use custom weather icons or illustrations
- Add persistent theme and unit preferences with AsyncStorage

👨‍💻 Created by

Youssef

## 🔧 Key Functions in `index.tsx`

- **HomeScreen()**: See inline comments in the source file for detailed explanation.
- **clearHistory()**: See inline comments in the source file for detailed explanation.
- **convert()**: See inline comments in the source file for detailed explanation.
- **getWeatherEmoji()**: See inline comments in the source file for detailed explanation.
- **handleInputChange()**: See inline comments in the source file for detailed explanation.
- **loadHistory()**: See inline comments in the source file for detailed explanation.
- **saveToHistory()**: See inline comments in the source file for detailed explanation.
- **searchCityWeather()**: See inline comments in the source file for detailed explanation.
- **useCurrentLocation()**: See inline comments in the source file for detailed explanation.

## 📦 Required Packages

To run this app, install the following packages:

```bash
npm install @react-native-async-storage/async-storage
npm install @react-native-community/netinfo
npm install react-native-toast-message
npx expo install expo-location
npx expo install react-native-reanimated react-native-gesture-handler react-native-safe-area-context react-native-screens
```

Make sure to run:

```bash
npx expo start -c
```

after installing to clear the cache.

## 🛠️ Full Setup Instructions

To set up this project from scratch on any machine, follow these steps:

```bash
# 1. Install Expo CLI globally
npm install -g expo-cli

# 2. Create a new Expo project (if starting fresh)
npx create-expo-app WeatherExplorer
cd WeatherExplorer

# 3. Start Expo dev server
npx expo start

# 4. Install AsyncStorage for saving search history
npx expo install @react-native-async-storage/async-storage

# 5. Install Toast for error/success messages
npm install react-native-toast-message

# 6. Install location services for GPS-based weather
npx expo install expo-location

# 7. Install SafeAreaView support for modern UI padding
npx expo install react-native-safe-area-context

# 8. Install Vector Icons (optional)
npx expo install react-native-vector-icons

# 9. Install Reanimated and Gesture Handler (for animations)
npx expo install react-native-reanimated react-native-gesture-handler

# 10. Install dayjs for formatting forecast dates
npm install dayjs

# 11. Install Open-Meteo API wrapper (optional, or use fetch directly)
npm install meteo

# 12. Enable @ path aliases for cleaner imports
npm install --save-dev babel-plugin-module-resolver

# 13. Create project folder structure (if not existing)
mkdir -p api components app
```
