import Vue from 'vue'
import VueKeynote from 'vue-keynote';
import App from './App.vue'

Vue.use(VueKeynote);

new Vue({
  el: '#app',
  render: h => h(App)
})
