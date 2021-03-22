import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import UsersPage from "@/app/ui/views/Users/index.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Users",
    component: UsersPage,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
