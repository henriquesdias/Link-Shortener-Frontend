import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RankingView from "../views/RankingView.vue";
import SignInViewVue from "@/views/SignInView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/ranking",
      name: "ranking",
      component: RankingView
    },
    {
      path: "/sign-in",
      name: "sign-in",
      component: SignInViewVue
    }
  ]
});

export default router;
