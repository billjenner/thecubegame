import { defineRouter } from '#q-app/wrappers'
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router'
import routes from './routes'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default defineRouter(async (/* { store, ssrContext } */) => {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
      ? createWebHistory
      : createWebHashHistory

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  })
  // Navigation guard to protect certain routes when user not logged in
  try {
    const { useUsersStore } = await import('../stores/users')
    const store = useUsersStore()
    const protectedPaths = ['/analyze', '/personality-review']

    Router.beforeEach((to, from, next) => {
      const loggedIn = Boolean(store.currentUser && store.currentUser.email)

      if (protectedPaths.includes(to.path) && !loggedIn) {
        return next('/login')
      }

      return next()
    })
  } catch {
    // If store cannot be loaded, skip adding the guard and rely on UI-level checks
  }

  return Router
})
