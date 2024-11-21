const routes = [
  {
    path: "/Peliculas",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },

      {
        path: "listado",
        component: () => import("components/ListaPeliculas.vue"),
      },
    ],
  },

  {
    path: "/",
    component: () => import("components/auth/Loginform.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
