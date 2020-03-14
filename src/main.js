import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "@/store";
import "./registerServiceWorker";
import VueTyperPlugin from 'vue-typer';
import VuePageTransition from 'vue-page-transition'
 




Vue.use(VuePageTransition)
Vue.use(VueTyperPlugin);
Vue.config.productionTip = false;



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
