import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import myplugin from "./plugins/myplugin"
import "./style/index.css"

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(myplugin);


// 拦截ajax
if (process.env.NODE_ENV === "development") {
  require("./mock/index")
}
let vm = new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
console.log(vm)