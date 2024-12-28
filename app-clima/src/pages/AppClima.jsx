import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useWeatherApi } from "../hooks/useWeatherApi";
import { Form } from "../components/Form";
import { WeatherInfo } from "../components/WeatherInfo";

export const AppClima = () => {
    const [city, setCity] = useState("");
    const { clima, loading, error, fetchWeather } = useWeatherApi();

    const [background, setBackground] = useState(''); // Para almacenar el fondo dinámico

    useEffect(() => {
        if (clima.conditionText) {
            switch (clima.conditionText.toLowerCase()) {
                case 'soleado':
                    setBackground('url(https://png.pngtree.com/background/20230519/original/pngtree-cartoon-sun-in-a-sunny-landscape-picture-image_2666701.jpg)'); // Ruta de la imagen de fondo soleado
                    break;
                case 'parcialmente nublado':
                    setBackground('url(https://aforisticamente.com/wp-content/uploads/2018/03/nubes3a.jpg)'); // Ruta de la imagen de fondo nublado
                    break;
                case 'lluvia  moderada a intervalos':
                    setBackground('url(https://thumbs.dreamstime.com/b/paisaje-de-dibujos-animados-con-pozo-piedra-y-lluvia-vector-viejo-agua-potable-en-la-colina-verde-el-tiempo-lluvioso-verano-214182372.jpg)'); // Ruta de la imagen de fondo lluvioso
                    break;
                default:
                    setBackground(''); // Fondo por defecto
                    break;
            }
        }
    }, [clima.conditionText]); // Se ejecuta cada vez que cambie la condición climática

    const onSubmit = (evento) => {
        evento.preventDefault();
        fetchWeather(city);
    };

    return (
        <Container 
            maxWidth="xs" 
            sx={{ mt: 2, backgroundImage: background, backgroundSize: 'cover', minHeight: '100vh' }}
        >
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
