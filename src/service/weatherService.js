import { getCity } from "../api/geocoding.js";
import { getTemperature } from "../api/weather.js";

export async function getWeather(cityName) {
    const city =  await getCity(cityName); 
    const latitude = city.results[0].latitude
    const longitude = city.results[0].longitude
    const weather = await getTemperature(latitude, longitude)
    return weather
}