import { markAuth } from "./utilities/auth";

const routes = [
  {
    path: "/",
    component: () => import("layouts/V3/Landing/BaseLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Landing.vue"),
        name: "home",
      },
      {
        path: "/about",
        component: () => import("pages/About.vue"),
        name: "about",
      },

      {
        path: "/tokenomics",
        component: () => import("pages/V3/Tokenomics.vue"),
        name: "tokenomics",
      },
      {
        path: "/debug",
        component: () => import("pages/DebugComponents.vue"),
        name: "debug",
      },
    ],
  },
  
  
  
  {
    path: "/lk",
    component: () => import("layouts/V4/Baselayout.vue"),
    children: [
      ...markAuth(
        {
          path: "profile",
          component: () => import("pages/V4/Profile.vue"),
          name: "profile",
        },
        {
          path: "index-directive",
          component: () => import("pages/V4/IndexDirective.vue"),
          name: "index-directive",
        },
        {
          path: "history",
          component: () => import("pages/V4/History.vue"),
          name: "history",
        },
        {
          path: "portfolio",
          component: () => import("pages/V4/Portfolio.vue"),
          name: "portfolio",
        },
        {
          path: "portfolio2",
          component: () => import("pages/V4/Portfolio2.vue"),
          name: "portfolio2",
        },
        {
          path: "support",
          component: () => import("pages/V3/Support.vue"),
          name: "support",
        },
        {
          path: "messages",
          component: () => import("pages/V4/Messages.vue"),
          name: "messages",
        },
        {
          path: "trading",
          component: () => import("pages/V4/Trading.vue"),
          name: "trading",
        },
        
      ),
    ],
  },

  {
    path: "/",
    component: () => import("layouts/GuestLayout.vue"),
    children: [
      {
        path: "/login",
        component: () => import("pages/Auth/AuthLogin.vue"),
        name: "auth.login",
      },
      {
        path: "/registration",
        component: () => import("pages/Auth/AuthRegistration.vue"),
        name: "auth.registr",
      },
      {
        path: "/reset-password",
        component: () => import("pages/Auth/AuthResetPassword.vue"),
        name: "auth.reset-password",
      },
    ],
  },

  {
    path: "/",
    component: () => import("layouts/ReleaseLayout.vue"),
    children: [
      {
        path: "/release",
        component: () => import("pages/Release.vue"),
        name: "release",
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
