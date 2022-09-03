import axios from 'axios'
const useWeather = () => {
  const getWeatherData = async (currentRoute: any) => {
    const route = currentRoute
    try {
      const weatherData = await axios.get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${route.query.lat}&lon=${route.query.lng}&units=metric&lang=pt_br&appid=be3cef53311400c687dc269e6894e693`
      )
      // cal current date & time
      const localOffset = new Date().getTimezoneOffset() * 60000
      const utc = weatherData.data.current.dt * 1000 + localOffset
      weatherData.data.currentTime =
        utc + 1000 * weatherData.data.timezone_offset
      // cal hourly weather offset
      weatherData.data.hourly.forEach(
        (hour: { dt: number; currentTime: number }) => {
          const utc = hour.dt * 1000 + localOffset
          hour.currentTime = utc + 1000 * weatherData.data.timezone_offset
        }
      )
      return weatherData.data
    } catch (err) {
      console.log(err)
    }
  }
  return { getWeatherData }
}

export default useWeather
