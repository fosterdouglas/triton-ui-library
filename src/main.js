



import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueCookies from 'vue-cookies'


import './styles.scss'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueCookies)
Vue.use(require('vue-cookies'))

VueCookies.config('7d')
VueCookies.set('SameSite', 'none') //fix this
