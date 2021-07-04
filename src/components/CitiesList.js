import { useState, useEffect } from 'react'
import City from './City';
function CitiesList() {
  const [cityName, setCityName] = useState("moscow")
  const [cities, setCities] = useState([
    {
      name: "Moscow",
      temp: 0,
      deg: 0,
      gust: 0,
      main: 0,
      icon: '01n'
    },
    {
      name: "Kyiv",
      temp: 0,
      deg: 0,
      gust: 0,
      main: 0,
      icon: '01n'
    },
    {
      name: "Minsk",
      temp: 0,
      deg: 0,
      gust: 0,
      main: 0,
      icon: '01n'
    },
    {
      name: "Krasnoyarsk",
      temp: 0,
      deg: 0,
      gust: 0,
      main: 0,
      icon: '01n'
    },
    {
      name: "Ufa",
      temp: 0,
      deg: 0,
      gust: 0,
      main: 0,
      icon: '01n'
    },
    {
      name: "Tyumen",
      temp: 0,
      deg: 0,
      gust: 0,
      main: 0,
      icon: '01n'
    },
    {
      name: "Novosibirsk",
      temp: 0,
      deg: 0,
      gust: 0,
      main: 0,
      icon: '01n'
    },
    {
      name: "Sochi",
      temp: 0,
      deg: 0,
      gust: 0,
      main: 0,
      icon: '01n'
    },
    {
      name: "Ekaterinburg",
      temp: 0,
      deg: 0,
      gust: 0,
      main: 0,
      icon: '01n'
    },
    {
      name: "Kazan",
      temp: 0,
      deg: 0,
      gust: 0,
      main: 0,
      icon: '01n'
    }
  ])
  return (
    <div>
      <City currentCity={ cityName } />
      {
        cities.map((city) => {
          return (
            <div style={{"height": "10px",'float': 'left', 'margin': '50px 15px' }} key={city.name}>
              {/*
                устанавливаем текущий город на новый и делаем запрос в том случае если текущий выбранный город отличается от того который был выбран до этого
              */}
              <div onClick={ () => {
                if(city.name !== cityName){
                  setCityName(city.name)
                }
              }} style={{ 'cursor': 'pointer', 'width': '18rem' }}
              className="bg bg-dark card">
                <div className="card-body">
                  <h5 className="card-title">{ city.name }</h5>  
                </div>
              </div>
            </div>
          )
        })
      }
    </div>    
  );
}
export default CitiesList;
