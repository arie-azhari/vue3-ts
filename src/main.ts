/* eslint-disable */
import "reflect-metadata";
import { createApp } from "vue";
import App from "./App.vue";
import router from "@/app/ui/router";
import store from "./store";
import { AppComponent } from "./app/infrastructures/di/AppComponent";
import "./app/ui/assets/css/tailwind.css";
AppComponent.init();

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
