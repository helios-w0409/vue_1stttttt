import { createApp } from "vue";
import App from "./App.vue";
//引入pinia
import { createPinia } from "pinia";
import router from "./route";
import "@/assets/main.css";
//创建一个应用
const app = createApp(App);
//创建pinia实例
const pinia = createPinia();
//安装pinia
app.use(pinia);
app.use(router);
//挂载整个应用到app容器里
app.mount("#app");
// 创建根组件 mount挂载到 app容器里
