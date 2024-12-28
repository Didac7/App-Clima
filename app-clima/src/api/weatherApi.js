
const API_WEATHER = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}`;

export const getWeatherData = async (city) => {
    if (!city.trim()) throw { message: "El campo ciudad es obligatorio" };

    const res = await fetch(`${API_WEATHER}&q=${city}&lang=es`);
    const data = await res.json();

    if (data.error) throw { message: data.error.message };

    return {
        city: data.location.name,
        country: data.location.country,
        temp: data.current.temp_c,
        condition: data.current.condition.code,
        icon: data.current.condition.icon,
        conditionText: data.current.condition.text,
    };
};