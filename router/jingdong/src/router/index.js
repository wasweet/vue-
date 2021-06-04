import Vue from 'vue'
// 引入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)


let router = new VueRouter({
	routes:[
		{
			path:'/',
			component:() => import('@/view/Home'),
			meta:{title:'首页'}
		},
		{
			path:'/classify',
			component:() => import('@/view/Classify'),
			meta:{title:'分类'}
		},
		{
			path:'/logn',
			component:() => import('@/view/Lognin'),
			meta:{title:'登陆'}
		},
		// 路由传参 url 方式
		// {
		// 	path:'/goods/:id/:name',
		// 	component:() => import('@/view/Goods')
		// }
		
		// 路由传参 通过props解藕
		 // {
			//  path:'/goods/:id/:name',
			//  props:true,
			//  component:() => import('@/view/Goods')
		 // }
		 
		 // query 方式
		 {
			 path:'/goods',
			 component:() => import('@/view/Goods'),
			 meta:{title:'商品'}
		 }
	]
})

// 导航守卫

// 前置守卫
router.beforeEach((to, from, next) => {
  if(to.meta) {
	  document.title = to.meta.title
  }
  next()
})
// 后置守卫
router.afterEach((to, from) => {
 
})


export default router