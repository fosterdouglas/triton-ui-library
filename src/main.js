
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker'
import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css'

import './styles.scss'

const datepickerOptions = {
  colors: {
    selected: '#E9B71E',
    inRange: '#66e2da',
    selectedText: '#fff',
    text: '#3B3B3B',
    inRangeBorder: '#33dacd',
    disabled: '#fff',
    hoveredInRange: '#DBDBDB'
  }
}

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(AirbnbStyleDatepicker, datepickerOptions)
