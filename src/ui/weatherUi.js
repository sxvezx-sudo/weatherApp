export function renderWeather(weather) {
    const tempurature = document.querySelector(".temperature")

    const currentTemp = weather.current.temperature_2m
    tempurature.textContent = currentTemp
}