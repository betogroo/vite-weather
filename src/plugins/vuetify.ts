// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify, ThemeDefinition } from 'vuetify'

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#247BA0',
    'primary-darken-1': '#0F3343',
    secondary: '#29665F',
    'secondary-darken-1': '#112C29',
    error: '#B00020',
    info: '#99B2DD',
    success: '#4CAF50',
    warning: '#D3B38D'
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme
    }
  }
})
