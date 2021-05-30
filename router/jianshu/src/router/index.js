import Vue from 'vue'
// 引入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)


// import Home from '@/view/Home'
// import Logn from '../view/Logn.vue'
// import Register from '../view/Register.vue'

let router =  new VueRouter({
	  // routes:[
		 //  {
			//   path:'/',
			//   component:Home
		 //  },
		 //  {
			//   path:'/logn',
			//   component:Logn
		 //  },
		 //  {
			//   path:'/register',
			//   component:Register
		 //  }
	  // ]
	  
	  // 路由懒加载
	  routes:[
	  		  {
	  			  path:'/',
	  			  component:() => import('@/view/Home')
	  		  },
	  		  {
	  			  path:'/logn',
	  			  component:() => import('@/view/Logn.vue')
	  		  },
	  		  {
	  			  path:'/register',
	  			  component:() => import('@/view/Register.vue')
	  		  }
	  ]
  })

export default router