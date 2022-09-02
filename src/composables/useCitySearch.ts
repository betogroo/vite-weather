import axios from 'axios'
import { ref } from 'vue'
import { RouteLocationRaw } from 'vue-router'
const mapboxAPIKEY =
  'pk.eyJ1IjoiYmV0b2dyb28iLCJhIjoiY2w3YXV4dnF4MGprajN5cWZheHViMWFwYSJ9.b6PseWAMngHc6ua_DfvRtQ'
const queryTimeout = ref()
const mapboxSearchResults = ref()
const searchError = ref(false)
const useCitySearch = () => {
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

  const makeRoute = (item: any) => {
    const [city, state] = item.place_name.trim().split(',')
    const route: RouteLocationRaw = {
      name: 'CityView',
      params: { state: state.replaceAll(' ', ''), city: city },
      query: {
        lat: item.geometry.coordinates[1],
        lng: item.geometry.coordinates[0]
      }
    }
    return route
  }

  return {
    searchText,
    mapboxSearchResults,
    getSearchResults,
    makeRoute
  }
}

export default useCitySearch
