import React from 'react'

const HavaDurumu = ({
        weather
    }) => {

  if(!weather){
    return <p>Yükleniyor...</p>
  }
        
  return (
    <div className='bg-blue-300 p-3 container mx-auto'>
        <h3>Şehir: {weather.name} </h3>
        <h4>Gökyüzü Durumu: {weather.weather.map(data=>data.description).join(", ").toUpperCase()} </h4>
        <p> {weather.main.temp}℃ </p>
        <p> {new Date(weather.dt*1000).toLocaleDateString()} </p>
    </div>
  )
}

export default HavaDurumu