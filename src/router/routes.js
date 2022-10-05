
const routes = [
  {
    path: '/',
    component: () => import('layouts/UsersPage.vue')
  },
  {
    path: '/?page=:pageNum&per-page=perPageNum',
    component: () => import('layouts/UsersPage.vue')
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
