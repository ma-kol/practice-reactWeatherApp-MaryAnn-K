/*

You will create a React application where:
1. The main page lists a few city options (e.g., "New York," "London," "Tokyo").
2. Clicking on a city displays the forecast for that city below the list.
3. The forecast component fetches mock weather data for the selected city
using useEffect when the city changes.
4. The application includes a button to scroll to the detailed weather section
using useRef.

App.jsx: Main component that manages the selected city and displays the
CityList and CityForecast components.

*/

import { useState } from 'react';
import './App.css';
import CityList from './components/CityList';
import CityForecast from './components/CityForecast';

function App() {

  const [selectedCity, setSelectedCity] = useState(null);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  }

  return (
    <>
      <h1 className="app-title">City Weather App</h1>
      <CityList citySelect={handleCitySelect} />
      <CityForecast selectedCity={selectedCity} />
    </>
  )
}

export default App;
