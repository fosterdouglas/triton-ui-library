
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker'
import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css'

import VueQuill from 'vue-quill'

import './styles.scss'

const datepickerOptions = {
  colors: {
    selected: '#3B3B3B',
    inRange: '#717171',
    selectedText: '#fff',
    text: '#3B3B3B',
    inRangeBorder: '#3B3B3B',
    disabled: '#fff',
    hoveredInRange: '#9a9a9a'
  }
}

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueQuill)
Vue.use(AirbnbStyleDatepicker, datepickerOptions)
