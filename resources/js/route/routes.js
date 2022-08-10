export default [
	{
        path: '/',
        name: 'home',
        component: () => import('@views/Home.vue')
    },
	{
		path: '/:pathMatch(.*)*',
		name:'404',
		component: () => import('@views/errors/404.vue')
	}
];

function middleware(middleware, routes) {
	routes.forEach(route =>
    	(route.middleware || (route.middleware = [])).unshift(middleware)
  	)

  	return routes;
}
