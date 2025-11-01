/*

CityForecast.jsx: Component to display the forecast for the selected city.

*/

import { useEffect, useState, useRef } from 'react';

// define mock data to simulate weather details
const weatherData = {
    "New York": {
        summary: "Sunny, 25°C",
        details: "Clear skies throughout the day with mild temperatures.",
    },
    London: {
        summary: "Cloudy, 18°C",
        details: "Overcast with occasional light rain in the afternoon.",
    },
    Tokyo: {
        summary: "Rainy, 22°C",
        details: "Continuous rain expected throughout the day.",
    },
};

const CityForecast = ({ selectedCity }) => {

    const [forecast, setForecast] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const detailsRef = useRef(null);

    useEffect(() => {
        if (selectedCity) {
            setIsLoading(true);
            setTimeout(() => {
                setForecast(weatherData[selectedCity]);
                setIsLoading(false);
            }, 1000);
        }
    }, [selectedCity]);

    const handleViewDetails = () => {
        if (detailsRef.current) {
            detailsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    if (!selectedCity) {
        return <p>Please select a city.</p>;
    }

    if (isLoading) {
        return <p className="loading">Loading forecast...</p>;
    }

    if (!forecast) {
        return <p>No forecast available.</p>;
    }

    return (
        <div className="forecast-details">
            <div>
                <h2>Forecast for {selectedCity}</h2>
                <p>{forecast.summary}</p>
                <button onClick={handleViewDetails}>View Details</button>
            </div>

            <div ref={detailsRef}>
                <p>{forecast.details}</p>
            </div>
        </div>
    )
}

export default CityForecast;