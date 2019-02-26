import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import router from './routes'
import VueCookie from 'vue-cookie'
import VueSessionStorage from 'vue-sessionstorage'
import YmapPlugin from 'vue-yandex-maps'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueCookie)
Vue.use(VueSessionStorage)



const options = { // you may define your apiKey, lang and version or skip this.
  apiKey: 'xxx', // '' by default
  lang: 'ru_RU', // 'ru_RU' by default
  version: '2.1' // '2.1' by default
}
Vue.use(YmapPlugin, options)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})

