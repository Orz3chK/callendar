import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserLogin from "../pages/auth/UserLogin.vue";
import UserRegister from "../pages/auth/UserRegister.vue";
import AboutView from "../views/AboutView.vue";
import NotFound from "../pages/NotFound.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/about",
    component: AboutView,
  },
  { path: "/login", component: UserLogin },
  { path: "/register", component: UserRegister },
  { path: "/:notFound(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
