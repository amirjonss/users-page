
const routes = [
  {
    path: '/',
    component: () => import('layouts/UsersPage.vue')
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
