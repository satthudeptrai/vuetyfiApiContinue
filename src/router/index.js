import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: function () {
      return import("../views/AboutView.vue");
    },
  },
  {
    path: "/menu1/sub1",
    name: "sub1",
    component: function () {
      return import("../views/Menu1/Sub1View.vue");
    },
  },
  {
    path: "/menu1/sub2",
    name: "sub2",
    component: function () {
      return import("../views/Menu1/Sub2View.vue");
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
