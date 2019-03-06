import Vue from "vue";
import App from "./App.vue";
import "@/styles/font-awesome/css/font-awesome.min.css";
// iview
import iView from "iview";
import "iview/dist/styles/iview.css";
// ztree
// import "@ztree/ztree_v3/js/jquery.ztree.all.min.js";
import "@ztree/ztree_v3/js/jquery.ztree.core.min.js";
import "@ztree/ztree_v3/js/jquery.ztree.excheck.min.js";
import "@ztree/ztree_v3/js/jquery.ztree.exedit.min.js";
import "@/styles/ztree/ztree.less";

Vue.use(iView);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
