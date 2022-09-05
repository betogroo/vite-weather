import axios from 'axios'
import { ref } from 'vue'
const useCityList = () => {
  const savedCities = ref([])
  const getCities = async () => {
    if (localStorage.getItem('savedCities')) {
      savedCities.value = JSON.parse(localStorage.getItem('savedCities'))
    }
    const requests: any[] = []
    savedCities.value.forEach((city) => {
      requests.push(
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${city.coords.lat}&lon=${city.coords.lng}&units=metric&lang=pt_br&appid=be3cef53311400c687dc269e6894e693`
        )
      )
    })
    const weatherData = await Promise.all(requests)

    weatherData.forEach((value, index) => {
      savedCities.value[index].weather = value.data
    })
  }
  return { savedCities, getCities }
}

export default useCityList
