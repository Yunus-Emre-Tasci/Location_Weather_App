// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

import axios from "axios"
import { useEffect, useState } from "react"
import { usePosition } from "use-position"
import HavaDurumu from "./components/HavaDurumu"

const App=()=>{
    const [weather, setWeather] = useState()
    const {latitude,longitude}=usePosition()

    const getWeatherData=async(lat,lon)=>{
        const key=process.env.REACT_APP_WEATHER_API_KEY
        const lang=navigator.language.split("-")[0]
        console.log(lang)
        try {
            const {
                data
            } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&units=metric
`)
            setWeather(data)
        } catch (error) {
            alert("Hata oluştu")
            
        }
    } 

    useEffect(()=>{
        latitude && longitude&& getWeatherData(latitude,longitude)

    }, [latitude, longitude])

    console.log(latitude,longitude,weather);

    return (
        <div className = "h-screen flex flex-col items-center justify-center mt-4">
            <h1 className="p-4 text-gray text-3xl">Hava Durumu</h1>
            <HavaDurumu weather={weather} />
        </div>
    )
}

export default App