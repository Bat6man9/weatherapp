// This file contains styles for the app UI components.
import { StyleSheet } from 'react-native';

export const lightStyles = StyleSheet.create({
  // Main container that holds all the app content
container: {
    // Style for component: backgroundColor
backgroundColor: '#f2f2f2',
    // Style for component: alignItems
alignItems: 'center',
    // Style for component: padding
padding: 16,
  },
  // Title text at the top of the screen
header: {
    // Style for component: fontSize
fontSize: 24,
    // Style for component: fontWeight
fontWeight: 'bold',
    // Style for component: color
color: '#333',
    // Style for component: marginVertical
marginVertical: 12,
  },
  // Container for the search input and search button
searchBox: {
    // Style for component: flexDirection
flexDirection: 'row',
    // Style for component: marginBottom
marginBottom: 12,
  },
  // Text input field for entering city names
input: {
    // Style for component: flex
flex: 1,
    // Style for component: borderColor
borderColor: '#ccc',
    // Style for component: borderWidth
borderWidth: 1,
    // Style for component: borderRadius
borderRadius: 8,
    // Style for component: padding
padding: 10,
    // Style for component: backgroundColor
backgroundColor: '#fff',
    // Style for component: color
color: '#000',
  },
  // Button to trigger the city search
searchButton: {
    // Style for component: padding
padding: 10,
    // Style for component: marginLeft
marginLeft: 8,
    // Style for component: backgroundColor
backgroundColor: '#007bff',
    // Style for component: borderRadius
borderRadius: 8,
  },
  // Text inside the search button (e.g., magnifying glass)
searchText: {
    // Style for component: color
color: '#fff',
    // Style for component: fontSize
fontSize: 18,
  },
  // Button for using the user's current location
locationButton: {
    // Style for component: marginBottom
marginBottom: 10,
  },
  // Text inside the location button
locationText: {
    // Style for component: color
color: '#007bff',
    // Style for component: fontSize
fontSize: 16,
  },
  // Row layout for toggle switches (F/C and light/dark)
switchRow: {
    // Style for component: flexDirection
flexDirection: 'row',
    // Style for component: justifyContent
justifyContent: 'center',
    // Style for component: marginVertical
marginVertical: 12,
  },
  // Circular buttons for toggling units and themes
circleToggle: {
    // Style for component: padding
padding: 10,
    // Style for component: marginHorizontal
marginHorizontal: 10,
    // Style for component: borderRadius
borderRadius: 20,
    // Style for component: backgroundColor
backgroundColor: '#ddd',
  },
  // Emoji or text inside the toggle buttons
circleToggleText: {
    // Style for component: fontSize
fontSize: 16,
  },
  // Section displaying recent city search history
historySection: {
    // Style for component: marginVertical
marginVertical: 16,
    // Style for component: width
width: '100%',
  },
  // Title for each section (e.g., Recent Searches, Today)
sectionTitle: {
    // Style for component: fontWeight
fontWeight: 'bold',
    // Style for component: fontSize
fontSize: 16,
    // Style for component: marginBottom
marginBottom: 8,
    // Style for component: color
color: '#333',
  },
  // Individual item in search history
historyItem: {
    // Style for component: paddingVertical
paddingVertical: 4,
    // Style for component: fontSize
fontSize: 14,
    // Style for component: color
color: '#444',
  },
  // Button to clear the search history
clearButton: {
    // Style for component: marginTop
marginTop: 6,
  },
  // Text inside the clear history button
clearButtonText: {
    // Style for component: color
color: '#cc0000',
  },
  // Main card container for displaying weather information
card: {
    // Style for component: marginTop
marginTop: 16,
    // Style for component: backgroundColor
backgroundColor: '#fff',
    // Style for component: padding
padding: 16,
    // Style for component: borderRadius
borderRadius: 12,
    // Style for component: width
width: '100%',
    // Style for component: alignItems
alignItems: 'center',
  },
  // City name displayed in the weather card
city: {
    // Style for component: fontSize
fontSize: 22,
    // Style for component: fontWeight
fontWeight: 'bold',
    // Style for component: color
color: '#000',
  },
  // Main temperature display
temp: {
    // Style for component: fontSize
fontSize: 26,
    // Style for component: marginVertical
marginVertical: 8,
    // Style for component: color
color: '#000',
  },
  // Date and time when weather was last updated
datetime: {
    // Style for component: fontSize
fontSize: 14,
    // Style for component: color
color: '#666',
  },
  // Row layout for weather details (humidity, wind)
detailsRow: {
    // Style for component: marginTop
marginTop: 8,
    // Style for component: marginBottom
marginBottom: 16,
    // Style for component: alignItems
alignItems: 'center',
  },
  // Text for individual weather details
detail: {
    // Style for component: fontSize
fontSize: 14,
    // Style for component: color
color: '#444',
  },
  // Horizontal scroll area for hourly forecast
forecastScroll: {
    // Style for component: marginVertical
marginVertical: 12,
  },
  // Card showing weather for a specific hour
hourCard: {
    // Style for component: backgroundColor
backgroundColor: '#eee',
    // Style for component: borderRadius
borderRadius: 10,
    // Style for component: padding
padding: 10,
    // Style for component: marginRight
marginRight: 10,
    // Style for component: alignItems
alignItems: 'center',
  },
  // Time label inside hour forecast card
forecastDate: {
    // Style for component: fontSize
fontSize: 14,
    // Style for component: color
color: '#222',
  },
  // Temperature text in hourly forecast
forecastTemp: {
    // Style for component: fontSize
fontSize: 16,
    // Style for component: fontWeight
fontWeight: '600',
    // Style for component: color
color: '#000',
  },
  // Weather emoji inside forecast card
forecastEmoji: {
    // Style for component: fontSize
fontSize: 20,
  },
  // NEW 7-DAY CARD STYLES (LIGHT)
  // Card for each day in the 7-day forecast
dayCard: {
    // Style for component: flexDirection
flexDirection: 'row',
    // Style for component: alignItems
alignItems: 'center',
    // Style for component: justifyContent
justifyContent: 'space-between',
    // Style for component: backgroundColor
backgroundColor: '#f0f0f0',
    // Style for component: borderRadius
borderRadius: 10,
    // Style for component: paddingVertical
paddingVertical: 10,
    // Style for component: paddingHorizontal
paddingHorizontal: 16,
    // Style for component: marginBottom
marginBottom: 8,
  },
  // Left side of the day card with label and emoji
dayCardLeft: {
    // Style for component: flexDirection
flexDirection: 'row',
    // Style for component: alignItems
alignItems: 'center',
  },
  // Label for the day of the week
dayLabel: {
    // Style for component: fontSize
fontSize: 16,
    // Style for component: color
color: '#000',
    // Style for component: marginRight
marginRight: 10,
  },
  // Temperature display for min/max temps per day
dayTemp: {
    // Style for component: fontSize
fontSize: 16,
    // Style for component: color
color: '#000',
  },
  // Dropdown list for city name suggestions
suggestionBox: {
    // Style for component: backgroundColor
backgroundColor: '#fff',
    // Style for component: borderColor
borderColor: '#ccc',
    // Style for component: borderWidth
borderWidth: 1,
    // Style for component: borderRadius
borderRadius: 8,
    // Style for component: width
width: '100%',
    // Style for component: marginTop
marginTop: -8,
    // Style for component: marginBottom
marginBottom: 10,
    // Style for component: paddingHorizontal
paddingHorizontal: 10,
    // Style for component: paddingVertical
paddingVertical: 6,
    // Style for component: zIndex
zIndex: 1,
  },
  // Individual item in the suggestion list
suggestionItem: {
    // Style for component: paddingVertical
paddingVertical: 8,
    // Style for component: fontSize
fontSize: 15,
    // Style for component: color
color: '#333',
    // Style for component: borderBottomWidth
borderBottomWidth: 1,
    // Style for component: borderColor
borderColor: '#ddd',
  },
});

export const darkStyles = StyleSheet.create({
  // Main container that holds all the app content
container: {
    // Style for component: backgroundColor
backgroundColor: '#121212',
    // Style for component: alignItems
alignItems: 'center',
    // Style for component: padding
padding: 16,
  },
  // Title text at the top of the screen
header: {
    // Style for component: fontSize
fontSize: 24,
    // Style for component: fontWeight
fontWeight: 'bold',
    // Style for component: color
color: '#fafafa',
    // Style for component: marginVertical
marginVertical: 12,
  },
  // Container for the search input and search button
searchBox: {
    // Style for component: flexDirection
flexDirection: 'row',
    // Style for component: marginBottom
marginBottom: 12,
  },
  // Text input field for entering city names
input: {
    // Style for component: flex
flex: 1,
    // Style for component: borderColor
borderColor: '#555',
    // Style for component: borderWidth
borderWidth: 1,
    // Style for component: borderRadius
borderRadius: 8,
    // Style for component: padding
padding: 10,
    // Style for component: backgroundColor
backgroundColor: '#1e1e1e',
    // Style for component: color
color: '#fafafa',
  },
  // Button to trigger the city search
searchButton: {
    // Style for component: padding
padding: 10,
    // Style for component: marginLeft
marginLeft: 8,
    // Style for component: backgroundColor
backgroundColor: '#2196f3',
    // Style for component: borderRadius
borderRadius: 8,
  },
  // Text inside the search button (e.g., magnifying glass)
searchText: {
    // Style for component: color
color: '#fff',
    // Style for component: fontSize
fontSize: 18,
  },
  // Button for using the user's current location
locationButton: {
    // Style for component: marginBottom
marginBottom: 10,
  },
  // Text inside the location button
locationText: {
    // Style for component: color
color: '#90caf9',
    // Style for component: fontSize
fontSize: 16,
  },
  // Row layout for toggle switches (F/C and light/dark)
switchRow: {
    // Style for component: flexDirection
flexDirection: 'row',
    // Style for component: justifyContent
justifyContent: 'center',
    // Style for component: marginVertical
marginVertical: 12,
  },
  // Circular buttons for toggling units and themes
circleToggle: {
    // Style for component: padding
padding: 10,
    // Style for component: marginHorizontal
marginHorizontal: 10,
    // Style for component: borderRadius
borderRadius: 20,
    // Style for component: backgroundColor
backgroundColor: '#333',
  },
  // Emoji or text inside the toggle buttons
circleToggleText: {
    // Style for component: fontSize
fontSize: 16,
    // Style for component: color
color: '#fff',
  },
  // Section displaying recent city search history
historySection: {
    // Style for component: marginVertical
marginVertical: 16,
    // Style for component: width
width: '100%',
  },
  // Title for each section (e.g., Recent Searches, Today)
sectionTitle: {
    // Style for component: fontWeight
fontWeight: 'bold',
    // Style for component: fontSize
fontSize: 16,
    // Style for component: marginBottom
marginBottom: 8,
    // Style for component: color
color: '#fafafa',
  },
  // Individual item in search history
historyItem: {
    // Style for component: paddingVertical
paddingVertical: 4,
    // Style for component: fontSize
fontSize: 14,
    // Style for component: color
color: '#ccc',
  },
  // Button to clear the search history
clearButton: {
    // Style for component: marginTop
marginTop: 6,
  },
  // Text inside the clear history button
clearButtonText: {
    // Style for component: color
color: '#ff8a80',
  },
  // Main card container for displaying weather information
card: {
    // Style for component: marginTop
marginTop: 16,
    // Style for component: backgroundColor
backgroundColor: '#1f1f1f',
    // Style for component: padding
padding: 16,
    // Style for component: borderRadius
borderRadius: 12,
    // Style for component: width
width: '100%',
    // Style for component: alignItems
alignItems: 'center',
  },
  // City name displayed in the weather card
city: {
    // Style for component: fontSize
fontSize: 22,
    // Style for component: fontWeight
fontWeight: 'bold',
    // Style for component: color
color: '#fafafa',
  },
  // Main temperature display
temp: {
    // Style for component: fontSize
fontSize: 26,
    // Style for component: marginVertical
marginVertical: 8,
    // Style for component: color
color: '#fafafa',
  },
  // Date and time when weather was last updated
datetime: {
    // Style for component: fontSize
fontSize: 14,
    // Style for component: color
color: '#bbb',
  },
  // Row layout for weather details (humidity, wind)
detailsRow: {
    // Style for component: marginTop
marginTop: 8,
    // Style for component: marginBottom
marginBottom: 16,
    // Style for component: alignItems
alignItems: 'center',
  },
  // Text for individual weather details
detail: {
    // Style for component: fontSize
fontSize: 14,
    // Style for component: color
color: '#ccc',
  },
  // Horizontal scroll area for hourly forecast
forecastScroll: {
    // Style for component: marginVertical
marginVertical: 12,
  },
  // Card showing weather for a specific hour
hourCard: {
    // Style for component: backgroundColor
backgroundColor: '#2a2a2a',
    // Style for component: borderRadius
borderRadius: 10,
    // Style for component: padding
padding: 10,
    // Style for component: marginRight
marginRight: 10,
    // Style for component: alignItems
alignItems: 'center',
    // Style for component: borderColor
borderColor: '#444',
    // Style for component: borderWidth
borderWidth: 1,
  },
  // Time label inside hour forecast card
forecastDate: {
    // Style for component: fontSize
fontSize: 14,
    // Style for component: color
color: '#ccc',
  },
  // Temperature text in hourly forecast
forecastTemp: {
    // Style for component: fontSize
fontSize: 16,
    // Style for component: fontWeight
fontWeight: '600',
    // Style for component: color
color: '#fff',
  },
  // Weather emoji inside forecast card
forecastEmoji: {
    // Style for component: fontSize
fontSize: 20,
  },
  // NEW 7-DAY CARD STYLES (DARK)
  // Card for each day in the 7-day forecast
dayCard: {
    // Style for component: flexDirection
flexDirection: 'row',
    // Style for component: alignItems
alignItems: 'center',
    // Style for component: justifyContent
justifyContent: 'space-between',
    // Style for component: backgroundColor
backgroundColor: '#1e1e1e',
    // Style for component: borderRadius
borderRadius: 10,
    // Style for component: paddingVertical
paddingVertical: 10,
    // Style for component: paddingHorizontal
paddingHorizontal: 16,
    // Style for component: marginBottom
marginBottom: 8,
  },
  // Left side of the day card with label and emoji
dayCardLeft: {
    // Style for component: flexDirection
flexDirection: 'row',
    // Style for component: alignItems
alignItems: 'center',
  },
  // Label for the day of the week
dayLabel: {
    // Style for component: fontSize
fontSize: 16,
    // Style for component: color
color: '#eee',
    // Style for component: marginRight
marginRight: 10,
  },
  // Temperature display for min/max temps per day
dayTemp: {
    // Style for component: fontSize
fontSize: 16,
    // Style for component: color
color: '#fafafa',
  },
  // Dropdown list for city name suggestions
suggestionBox: {
    // Style for component: backgroundColor
backgroundColor: '#222',
    // Style for component: borderColor
borderColor: '#444',
    // Style for component: borderWidth
borderWidth: 1,
    // Style for component: borderRadius
borderRadius: 8,
    // Style for component: width
width: '100%',
    // Style for component: marginTop
marginTop: -8,
    // Style for component: marginBottom
marginBottom: 10,
    // Style for component: paddingHorizontal
paddingHorizontal: 10,
    // Style for component: paddingVertical
paddingVertical: 6,
    // Style for component: zIndex
zIndex: 1,
  },
  // Individual item in the suggestion list
suggestionItem: {
    // Style for component: paddingVertical
paddingVertical: 8,
    // Style for component: fontSize
fontSize: 15,
    // Style for component: color
color: '#eee',
    // Style for component: borderBottomWidth
borderBottomWidth: 1,
    // Style for component: borderColor
borderColor: '#333',
  },
});
