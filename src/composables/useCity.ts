/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { ref } from 'vue'
import { RouteLocationRaw } from 'vue-router'
type SearchResults = any
const mapboxAPIKEY =
  'pk.eyJ1IjoiYmV0b2dyb28iLCJhIjoiY2w3YXV4dnF4MGprajN5cWZheHViMWFwYSJ9.b6PseWAMngHc6ua_DfvRtQ'
const queryTimeout = ref()
const mapboxSearchResults = ref<SearchResults | null>(null)
const searchError = ref(false)
const savedCities = ref([])
const useCity = () => {
  const searchText = ref<string>('')

  const getSearchResults = () => {
    clearTimeout(queryTimeout.value)
    queryTimeout.value = setTimeout(async () => {
      if (searchText.value !== '') {
        try {
          const result = await axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText.value}.json?access_token=${mapboxAPIKEY}&types=place`
          )
          mapboxSearchResults.value = result.data.features
        } catch (err) {
          searchError.value = true
        }
        return
      }
      mapboxSearchResults.value = null
    }, 300)
  }

  const resetSearchResults = () => {
    mapboxSearchResults.value = null
  }

  const makeRoute = (item: SearchResults) => {
    const [city, state] = item.place_name.trim().split(',')
    const route: RouteLocationRaw = {
      name: 'CityView',
      params: { state: state.trim(), city: city },
      query: {
        lat: item.geometry.coordinates[1],
        lng: item.geometry.coordinates[0],
        preview: 'true'
      }
    }
    return route
  }

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

  return {
    searchText,
    mapboxSearchResults,
    searchError,
    savedCities,
    getSearchResults,
    makeRoute,
    resetSearchResults,
    getCities
  }
}

export default useCity
