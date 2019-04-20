import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: '#0F4C5C',
    accent: {
      base: '#171736',
      darken1: '#000022',
      lighten1: '#A2A2AE'
    },
    secondary: colors.amber.darken3,
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  },
  options: {
    customProperties: true
  }
})
