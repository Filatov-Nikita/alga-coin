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
    ],
  },
  {
    path: "/",
    component: () => import("layouts/LayoutLandingDetailed.vue"),
    children: [
      {
        path: "/articles/:id",
        component: () => import("pages/ArticlesShow.vue"),
        name: "articles.show",
        props: true,
      },
      {
        path: "/projects/:id",
        component: () => import("pages/ProjectsShow.vue"),
        name: "projects.show",
        props: true,
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/LayoutGuest2.vue"),
    children: [
      {
        path: "/offer-project",
        component: () => import("pages/OfferInvestProject.vue"),
        name: "offer-project",
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/V3/Baselayout.vue"),
    children: [
      {
        path: "index-directive",
        component: () => import("pages/V3/IndexDirective.vue"),
        name: "index-directive",
        props: true,
      },
    ],
  },
  // {
  //   path: "",
  //   component: () => import("layouts/GuestLayout.vue"),
  //   children: [],
  // },

  {
    path: "/lk",
    component: () => import("layouts/BaseLayout.vue"),
    children: [
      ...markAuth(
        {
          path: "",
          component: () => import("pages/Wallet.vue"),
          name: "wallet",
        },
        {
          path: "profile2",
          component: () => import("pages/Profile.vue"),
          name: "profile2",
        },
        {
          path: "/output",
          component: () => import("pages/Output.vue"),
          name: "output",
        },

        // {
        //   path: "history",
        //   component: () => import("pages/History.vue"),
        //   name: "history",
        // },

        // {
        //   path: "/profile2",
        //   component: () => import("pages/Profile.vue"),
        //   name: "profile2",
        // },

        {
          path: "/polls",
          component: () => import("pages/Polls.vue"),
          name: "polls",
        }
      ),

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
    path: "/lk",
    component: () => import("layouts/V3/Baselayout.vue"),
    children: [
      ...markAuth(
        {
          path: "profile",
          component: () => import("pages/V3/Profile.vue"),
          name: "profile",
        },
        {
          path: "index-directive",
          component: () => import("pages/V3/IndexDirective.vue"),
          name: "index-directive",
        },
        {
          path: "history",
          component: () => import("pages/V3/History.vue"),
          name: "history",
        },
        {
          path: "portfolio",
          component: () => import("pages/V3/Portfolio.vue"),
          name: "portfolio",
        },
        {
          path: "support",
          component: () => import("pages/V3/Support.vue"),
          name: "support",
        }
        //  {
        //   path: "index-directive2",
        //   component: () => import("pages/V3/IndexDirective.vue"),
        //   name: "index-directive",
        // },
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
