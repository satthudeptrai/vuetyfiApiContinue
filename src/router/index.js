import Vue from "vue";
import VueRouter from "vue-router";
import IndexView from "../views/IndexView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: IndexView,
    children: [
      {
        path: "/",
        name: "about",
        component: function () {
          return import("../views/HomeView.vue");
        },
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
    ]
  },
  {
    path: "/login",
    name: "login",
    component: function () {
      return import("../views/Login/LoginView.vue");
    },
  },
  {
    path: "/sigin",
    name: "sigin",
    component: function () {
      return import("../views/Login/SiginView.vue");
    },
  },
  {
    path: "/forgot",
    name: "forgot",
    component: function () {
      return import("../views/Login/ForgotPassword.vue");
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
