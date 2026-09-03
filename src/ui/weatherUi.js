export function renderWeather(weather) {
    const tempurature = document.querySelector(".temperature")

    const hourlyData = weather.hourly.time.map((time, index) => ({
        time,
        temp: weather.hourly.temperature_2m[index]
    }
))
    const currentTemp = weather.current.temperature_2m

    // HOURLY //
    const hourlyDays = hourlyData.slice(0, 24)

    const hourlyLists = document.querySelector(".hourly-lists");

    hourlyLists.innerHTML = "";

    console.log(hourlyDays)

    hourlyDays.forEach(({ time, temp }) => {
        const hourlyItem = document.createElement("li")
        const hourlyTime = document.createElement("span")
        const hourlyTemp = document.createElement("span")
        const hourlyIcon = document.createElement("img")

        hourlyItem.classList.add("hourly-item");
        hourlyTime.classList.add("hourly");
        hourlyIcon.classList.add("weather-icon", "weather-icon__sm");
        hourlyTemp.classList.add("tempurature", "tempurature__sm");

        hourlyIcon.setAttribute("src", "./assets/icon/clouds.svg")
        
        const hour = new Date(time).getHours();

        hourlyTime.textContent =
        `${hour.toString().padStart(2, "0")}:00`;

        hourlyTemp.textContent = `${temp}°`;

        hourlyItem.append(
            hourlyTime,
            hourlyIcon,
            hourlyTemp
        );
        hourlyLists.append(hourlyItem);
    });
    
    tempurature.textContent = `${currentTemp}°`
}