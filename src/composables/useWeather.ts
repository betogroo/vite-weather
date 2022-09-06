import router from '@/router'
import axios from 'axios'
import { uid } from 'uid'
import { ref } from 'vue'
import { LocationQueryValue } from 'vue-router'
const savedCities = ref<locationObj[]>([])
interface locationObj {
  id: string
  state: string | string[]
  city: string | string[]
  coords: {
    lat: LocationQueryValue | LocationQueryValue[]
    lng: LocationQueryValue | LocationQueryValue[]
  }
}
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

  const addCity = () => {
    const route = router.currentRoute.value
    if (localStorage.getItem('savedCities')) {
      savedCities.value = JSON.parse(localStorage.getItem('savedCities'))
    }
    const locationObj = {
      id: uid(),
      state: route.params.state,
      city: route.params.city,
      coords: {
        lat: route.query.lat,
        lng: route.query.lng
      }
    }
    savedCities.value.push(locationObj)
    localStorage.setItem('savedCities', JSON.stringify(savedCities.value))
    const query = Object.assign({}, route.query)
    delete query.preview
    query.id = locationObj.id
    router.replace({ query })
  }
  return { getWeatherData, addCity }
}

export default useWeather
