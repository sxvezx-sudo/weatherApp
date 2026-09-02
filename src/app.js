import { getCity } from "../api/geocoding.js";
import { getTempurature } from "../api/weather.js";

const searchInput = document.querySelector(".search-input")

searchInput.addEventListener("keyup", (e) => {
    const cityName = searchInput.value.trim();
    if(e.key === "Enter" && cityName) {
        return getCity(cityName)
            .then((city) => {
                getTempurature(city)
            })
            .then((temp) => {
                return renderTemp(temp);
            })
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }
})
