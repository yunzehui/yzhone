import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "home",
    // meta: ["首页"],
    component: HomeView,
    children: [{
      path: "",
      name: "HomeIndex",
      component: () => import("../views/homes/HomeIndex.vue")
    }, {
      path: "2-1",
      name: "HomeUser",
      meta: ["数据管理", "用户列表"],
      component: () => import("../views/homes/HomeUser.vue")
    }, {
      path: "2-2",
      name: "HomeShop",
      meta: ["数据管理", "商家列表"],
      component: () => import("../views/homes/HomeShop.vue")
    }, {
      path: "2-3",
      name: "HomeFood",
      meta: ["数据管理", "食品列表"],
      component: () => import("../views/homes/HomeFood.vue")
    }, {
      path: "2-4",
      name: "HomeOrder",
      meta: ["数据管理", "订单列表"],
      component: () => import("../views/homes/HomeOrder.vue")
    }, {
      path: "2-5",
      name: "HomePerson",
      meta: ["数据管理", "管理员列表"],
      component: () => import("../views/homes/HomePerson.vue")
    }]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/form",
    name: "MyForm",
    component: () => import("../views/MyForm.vue")
  },
  {
    path: "/form2",
    name: "MyForm2",
    component: () => import("../views/MyForm2.vue")
  },
  {
    path: "/login",
    name: "MyLogin",
    component: () => import("../views/MyLogin.vue")
  }
];

const router = new VueRouter({
  routes,
});
// 权限管理
router.beforeEach(function (to, from, next) {
  console.log(to, from)
  if (to.name === "MyLogin") {
    next()

  } else {
    let token = localStorage.getItem("token")
    if (!token) return next({
      path: "/login"
    })
    if (token) return next()
  }

})

export default router;