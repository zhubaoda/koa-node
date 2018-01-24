import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
let routes = [{
	path:'/hello',
	component: resolve => require(['../view/hello.vue'], resolve)
},{
	path:'/other',
	component: resolve => require(['../view/other.vue'], resolve)
}];

var router = new Router({
//	mode: 'history',
//	hashbang: true,
//	history: true,
	saveScrollPosition: true,
//	suppressTransitionError: true,
//	linkActiveClass: "myactive",
	routes: routes
})
export default router;