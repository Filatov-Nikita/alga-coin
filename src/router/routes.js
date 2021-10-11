const routes = [
  {
    path: "",
    component: () => import("layouts/BaseLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Wallet.vue"),
      },

      // {
      //   path: "/registration",
      //   component: () => import("pages/Auth/AuthRegistration.vue"),
      //   name: "auth.registr",
      // },
      // {
      //   path: "/verifing-code",
      //   component: () => import("pages/Auth/AuthVerifingCode.vue"),
      //   name: "auth.verifing-code",
      // },

      // {
      //   path: "/components",
      //   component: () => import("pages/DebugComponents.vue"),
      // },
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
