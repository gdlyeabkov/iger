import { useEffect, useState } from 'react'
function City(props) {
  let requestInterval = null
  const [city, setCity] = useState({
    name: "moscow",
    temp: 0,
    deg: 0,
    gust: 0,
    main: '',
    icon: '01d',
    pressure: 0,
    clouds: 0,
    mintemp: 0,
    maxtemp: 0,
    speed: 0
  })
  const [once, setOnce] = useState(true)
  const [isError, setIsError] = useState(false)
  const API_KEY = "d0ba9a627f3560066c08577dfdadd967"
  var updatedCity = {}
  async function fetchCity(){
    if(!isError){
      const responseAsJSON = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.currentCity}&appid=${API_KEY}&units=metric`)
      .then((response) => {
        setIsError(false)
        return response.json()
      })
      .catch((e) => {
        setIsError(true)
      })
      //  локализация осадков
      let precipitation = "Дождь"
      switch(responseAsJSON.weather[0].main){
        case "Clouds":
          precipitation = "Облачно"
        break
        case "Clear":
          precipitation = "Ясно"
        break
        case "Rain":
          precipitation = "Дождь"
        break
      }
      //задаём новый город для отображения погоды
      updatedCity = {
        name: responseAsJSON.name,
        temp: responseAsJSON.main.temp,
        deg: responseAsJSON.wind.deg,
        gust: responseAsJSON.wind.gust,
        main: precipitation,
        icon: responseAsJSON.weather[0].icon,
        pressure: responseAsJSON.main.pressure,
        clouds: responseAsJSON.clouds.all,
        mintemp: responseAsJSON.main.temp_min,
        maxtemp: responseAsJSON.main.temp_max,
        speed: responseAsJSON.wind.speed
      }
      setCity(updatedCity)
    }
  }
  function timerWork(clearTimer = false){
    if(clearTimer){
      clearInterval(requestInterval)
    } 
    requestInterval = setInterval(() => { 
      fetchCity()
    }, 60000)
    if(clearTimer){
      fetchCity()
    }
  }
  useEffect(async () => {
    timerWork(true)
  }, [props.currentCity])
  useEffect(async () => {
    timerWork()
  }, [once])
  return (
    <div>
      {
      isError 
      ?
        <div className="bg bg-danger text-white">Произошла ошибка</div>
      :
        <div></div>
      }
      <div className="card bg bg-info" style={{ 'margin': 'auto', 'maxWidth': '48rem' }}>
        <div className="card-body">
          <h5 className="card-title">{ city.name }</h5>
          <p className="card-text">Температура: { city.temp } ℃</p>
          <p className="card-text">Направление ветра: { city.deg }°</p>
          <p className="card-text">Облачность: { city.clouds }%</p>
          <p className="card-text">Давление: { city.pressure } мм рт. ст.</p>
          <p className="card-text">Скорость ветра: { city.speed } метр/сек.</p>
          <p className="card-text">Минимальная температура: { city.mintemp } ℃</p>
          <p className="card-text">Максимальная температура: { city.maxtemp } ℃</p>
          <span className="card-link">Сила ветра: { city.gust } баллов</span>
          <span className="card-link">Осадки: { city.main }</span>
          <div>
            <img src={ "http://openweathermap.org/img/wn/" + city.icon + '@2x.png' } width="30px" height="30px"/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default City;
