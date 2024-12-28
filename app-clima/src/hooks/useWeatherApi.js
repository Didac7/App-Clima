import { useState } from "react";
import { getWeatherData } from "../api/weatherApi";

export const useWeatherApi = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({ error: false, message: "" });
    const [clima, setClima] = useState({
        city: "",
        country: "",
        temp: "",
        condition: "",
        icon: "",
        conditionText: "",
    });

    const fetchWeather = async (city) => {
        setLoading(true);
        setError({ error: false, message: "" });

        try {
            const weatherData = await getWeatherData(city);
            setClima(weatherData);
        } catch (error) {
            setError({ error: true, message: error.message });
        } finally {
            setLoading(false);
        }
    };

    return { clima, loading, error, fetchWeather };
};