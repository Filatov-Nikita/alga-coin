const routes = [
  {
    path: "/",
    component: () => import("layouts/BaseLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Home.vue") },
      {
        path: "/components",
        component: () => import("pages/DebugComponents.vue"),
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
