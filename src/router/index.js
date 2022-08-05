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
        name: "home",
        component: function () {
          return import("../views/HomeView.vue");
        },
        meta: {
          icon: 'mdi-help-box',
          title: 'Menu3'
        }
      },
      {
        path: "/about",
        name: "about",
        component: function () {
          return import("../views/AboutView.vue");
        },
        meta: {
          icon: 'mdi-image',
          title: 'Menu2'
        }
      },
      //parent link
      {
        path: "/menu1",
        name: "menu1",
        meta: {
          icon: 'mdi-image',
          title: 'Menu1'
        }
      },
      {
        path: "/menu1/sub1",
        name: "sub1",
        component: function () {
          return import("../views/Menu1/Sub1View.vue");
        },
        meta: {
          icon: 'mdi-view-dashboard',
          title: 'sub1',
          parent: 'menu1'
        }
      },
      {
        path: "/menu1/sub2",
        name: "sub2",
        component: function () {
          return import("../views/Menu1/Sub2View.vue");
        },
        meta: {
          icon: 'mdi-view-dashboard',
          title: 'sub2',
          parent: 'menu1'
        }
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
