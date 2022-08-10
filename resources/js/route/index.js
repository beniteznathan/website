import routes from './routes';
import {
  createRouter,
  createWebHistory
} from 'vue-router';

const routeMiddlewares = resolveMiddleware();

function make() {
  const router = createRouter({
    history: createWebHistory(),
    routes: routes.map(beforeEnter)
  })

  router.beforeEach(async (to, from, next) => {
    next();
  })

  return router;
}

function beforeEnter(route) {
	if (route.children) {
    route.children.forEach(beforeEnter)
  }

  if (!route.middleware) {
    return route
  }

  route.beforeEnter = (...args) => {
    if (!Array.isArray(route.middleware)) {
      route.middleware = [route.middleware]
    }

    route.middleware.forEach(middleware => {
      if (typeof middleware === 'function') {
        middleware(...args)
      } else if (routeMiddlewares[middleware]) {
        routeMiddlewares[middleware](...args)
      } else {
        throw Error(`Undefined middleware [`+middleware+`]`)
      }
    })
  }

  return route;
}

function resolveMiddleware() {
  const modules = import.meta.glob('./middleware/*.js');

  return Object.keys(modules)
    .map(file => [file.replace(/(middleware\/)|(^.\/)|(\.js$)/g, ''), modules[file]])
    .reduce((guards, [name, guard]) => (
      { ...guards, [name]: guard }
    ), {});
}

export default make();