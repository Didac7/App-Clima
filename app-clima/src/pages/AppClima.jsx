import { Container, Typography } from "@mui/material";
import { useState } from "react";
import { useWeatherApi } from "../hooks/useWeatherApi";
import { Form } from "../components/Form";
import { WeatherInfo } from "../components/WeatherInfo";

export const AppClima = () => {
    const [city, setCity] = useState("");
    const { clima, loading, error, fetchWeather } = useWeatherApi();

    const onSubmit = (evento) => {
        evento.preventDefault();
        fetchWeather(city);
    };

    return (
        <Container maxWidth="xs" sx={{ mt: 2 }}>
            <Typography variant="h3" component="h1" align="center" gutterBottom>
                Clima App
            </Typography>

            <Form
                city={city}
                setCity={setCity}
                onSubmit={onSubmit}
                loading={loading}
                error={error}
            />

            <WeatherInfo clima={clima} />

            <Typography textAlign="center" sx={{ mt: 2, fontSize: "10px" }}>
                Powered by:{" "}
                <a href="https://www.weatherapi.com/" title="Weather API">
                    WeatherAPI.com
                </a>
            </Typography>
        </Container>
    );
};
