import { Box, Typography } from "@mui/material";

export const WeatherInfo = ({ clima }) => {
    if (!clima.city) return null;

    return (
        <Box sx={{ mt: 2, display: "grid", gap: 2, textAlign: "center" }}>
            <Typography>
                {clima.city}, {clima.country}
            </Typography>
            <Box
                component="img"
                alt={clima.conditionText}
                src={clima.icon}
                sx={{ margin: "0 auto" }}
            />
            <Typography variant="h5" component="h3">
                {clima.temp} °C
            </Typography>
            <Typography variant="h6" component="h4">
                {clima.conditionText}
            </Typography>
        </Box>
    );
};