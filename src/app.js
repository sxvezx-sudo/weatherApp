import { getWeather } from "./service/weatherService.js"
import { renderWeather } from "./ui/weatherUi.js"

const searchInput = document.querySelector(".search-input");

searchInput.addEventListener("keyup", async (e) => {
    if(e.key !== "Enter") {
        return
    }

    const cityName = searchInput.value.trim();

    try {
        const weather = await getWeather(cityName);
        renderWeather(weather);
    } catch (error) {
        console.log(error) 
    }
})