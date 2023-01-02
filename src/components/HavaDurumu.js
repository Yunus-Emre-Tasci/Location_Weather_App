import React from 'react'

const HavaDurumu = ({
        weather
    }) => {

  if(!weather){
    return <p>Yükleniyor...</p>
  }
        
  return (
    <div className='bg-blue-300 p-4 container mx-auto inline-flex flex-col justify-center items-center rounded-3xl shadow-2xl text-gray-800'>
        <h3><span>Konum:</span> {(weather.name).toUpperCase()} </h3>
        <h4><span>Gökyüzü Durumu:</span> {weather.weather.map(data=>data.description).join(", ").toUpperCase()} </h4>
        <p><span>Sıcaklık:</span> {weather.main.temp} ℃ </p>
        <p><span>Tarih:</span> {new Date(weather.dt*1000).toLocaleDateString()} </p>
    </div>
  )
}

export default HavaDurumu