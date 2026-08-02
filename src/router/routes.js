const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Intro.vue') },
      { path: 'personality-review', component: () => import('pages/PersonalityReview.vue') },
      { path: 'analyze', component: () => import('pages/PersonalityTest.vue') },
      { path: 'theary', component: () => import('pages/Concept.vue') },
      { path: 'login', component: () => import('pages/Login.vue') },
      { path: 'create-login', component: () => import('pages/CreateLogin.vue') },
      { path: 'users', component: () => import('pages/Users.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
