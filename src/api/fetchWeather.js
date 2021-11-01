import axios from "axios";

const url = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "ebb83afd67528cf88394a7dfc887906a";

export const fetchWeather = async (query) => {
    const data = await axios.get(url, {
        params: {
            q: query,
            units: "metric",
            appid: API_KEY,
        },
    });
    console.log(data.data, "data");
    return data;
};
