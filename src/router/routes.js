const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'personality-review', component: () => import('pages/PersonalityReview.vue') },
      { path: 'analyze', component: () => import('pages/Analyze.vue') },
      { path: 'theary', component: () => import('pages/Theary.vue') },
      { path: 'reference', component: () => import('pages/Reference.vue') },
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
