import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.filter('date', function(value){
  let date = new Date(value)
  return date.toLocaleDateString("pt-BR") + " " + date.toLocaleTimeString("pt-BR")
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
