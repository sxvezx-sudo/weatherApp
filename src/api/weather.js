export async function getTempurature(city) {
    try {
        const latitude = city.results[0].latitude;
        const longitude = city.results[0].longitude;
        const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&hourly=temperature_2m`;
        const response = await fetch(API_URL);
        if(!response.ok) {
            throw new Error("Failed to fetch tempurature")
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
        throw error
    }
}