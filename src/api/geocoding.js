export async function getCity(cityName) {
    try {
        const API_URL = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`
        const response = await fetch(API_URL)
        if(!response.ok) {
            throw new Error("Failed to fetch city")
        }
        const data = await response.json()
        return data;
    } catch (error) {
        console.log(error)
        throw error
    }
}