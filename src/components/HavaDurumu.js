import React from 'react'

const HavaDurumu = ({
        weather
    }) => {

  if(!weather){
    return <p>Yükleniyor...</p>
  }
        
  return (
    <div className='bg-blue-300 p-4 container mx-auto inline-flex flex-col justify-center items-center rounded-3xl shadow-2xl'>
        <h3>Konum: {(weather.name).toUpperCase()} </h3>
        <h4>Gökyüzü Durumu: {weather.weather.map(data=>data.description).join(", ").toUpperCase()} </h4>
        <p>Sıcaklık: {weather.main.temp} ℃ </p>
        <p>Tarih: {new Date(weather.dt*1000).toLocaleDateString()} </p>
    </div>
  )
}

export default HavaDurumu