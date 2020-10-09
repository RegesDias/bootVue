import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$urlApi = 'http://10.40.10.90:8000/api/'
/*Vuex */
var store = {
    state:{
      usuario: sessionStorage.getItem('usuario') ? JSON.parse(sessionStorage.getItem('usuario')) : null
    },
    getters:{
      getUsuario: state => {
        return state.usuario;
      },
      getToken: state =>{
        return state.usuario.token;
      }
    },
    mutations:{
      setUsuario(state, n){
        state.usuario = n;
      }
    }
  }
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: new Vuex.Store(store),
  router,
  render: h => h(App)
})
