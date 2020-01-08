import Vue from "vue";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import vueSmoothScroll from "vue2-smooth-scroll";

Vue.use(vueSmoothScroll);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  created() {
    AOS.init();
  },
  components: {
    App
  },
  render: h => h(App)
}).$mount("#app");
