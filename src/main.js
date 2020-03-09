
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker'
import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css'

import VueQuill from 'vue-quill'

import VueTheMask from 'vue-the-mask'

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
Vue.use(VueTheMask)
Vue.use(AirbnbStyleDatepicker, datepickerOptions)

//this code is showing/hiding the side bar on certain pages
$(window).on('popstate', function (e) {
    if( window.location !== '/#/Examples/UI-Test-Environment' || '/#/Examples/UI-Refresh-A' || '/#/Examples/UI-Refresh-B'){
      $( ".rsg--sidebar-4" ).removeClass( "designReferenceSidebar" );
      $( ".rsg--root-1" ).addClass( "rsg--hasSidebar-2" );
    } else {
      $( ".rsg--sidebar-4" ).addClass( "designReferenceSidebar" );
      $( ".rsg--root-1" ).removeClass( "rsg--hasSidebar-2" );
    }
});
