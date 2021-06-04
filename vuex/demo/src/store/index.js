import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  // 全部频道
	  navs:[],
	  //显示频道
	  shownavs:[]
  },
  mutations: {
	  // 获取全部频道
	  setnav_mu(state,val) {
			state.navs = val
	  },
	  // 添加频道
	  increment(state,val) {
		  // 检测是否存在
		  if(state.shownavs.findIndex(r => r === val)=== -1) {
			  state.shownavs.push(val)
			  
			  // 从原始数组中获取索引，添加后删除
			  let index = state.navs.findIndex(r => r === val)
			  state.navs.splice(index,1)
		  }
	  },
	  //删除频道
	  decrement(state,val) {
		  // 获取下标
			let index = state.shownavs.findIndex(r => r === index)
			state.shownavs.splice(index,1)
			
			// 删除后在重新添加到原数组
			state.navs.push(val)
	  }
  },
  actions: {
	  setnav_ac(store,val) {
		  store.commit('setnav_mu',val)
	  }
  },
  modules: {
  }
})
