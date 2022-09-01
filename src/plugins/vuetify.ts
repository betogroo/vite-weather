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
    secondary: '#1D4944',
    'secondary-darken-1': '#112C29',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00'
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
