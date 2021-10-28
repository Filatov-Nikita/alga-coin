const routes = [
  {
    path: "",
    component: () => import("layouts/BaseLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Wallet.vue"),
        name: "wallet",
      },

      {
        path: "/output",
        component: () => import("pages/Output.vue"),
        name: "output",
      },

      {
        path: "history",
        component: () => import("pages/History.vue"),
        name: "history",
      },

      {
        path: "/profile",
        component: () => import("pages/Profile.vue"),
        name: "profile",
      },

      {
        path: "/vee-valid",
        component: () => import("pages/VeeValid.vue"),
      },

      {
        path: "/vee-valid-form",
        component: () => import("pages/VeeValidForm.vue"),
      },

      {
        path: "/components",
        component: () => import("pages/DebugComponents.vue"),
      },
    ],
  },

  {
    path: "",
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
    path: "",
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
