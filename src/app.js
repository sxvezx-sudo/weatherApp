import { getWeather } from "./service/weatherService.js"
import { renderWeather } from "./ui/weatherUi.js"

const searchInput = document.querySelector(".search-input");

searchInput.addEventListener("keyup", async (e) => {
    if(e.key !== "Enter") {
        return
    }

    const cityName = searchInput.value.trim();
    if (!cityName) return;

    try {
        const weather = await getWeather(cityName);
        console.log(weather)
        renderWeather(weather);
    } catch (error) {
        console.log(error) 
    }
})