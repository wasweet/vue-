<template>
  <div id="app">
	<router-view></router-view>
  </div>
</template>
<script>
import axios from 'axios'
	import {mapActions} from 'vuex'
export default {
	async created() {
		let {data:{result}} = await axios.get('/json/nav.json')
		// console.log(result)
		// this.navs = result
		this.setnav_ac(result) 
	},
	methods:{
		...mapActions(['setnav_ac'])
	},
}
</script>
<style>
#app {
  
}
* {
	margin: 0;
	padding: 0;
	list-style: none;
}
.flex {
	display: flex;
}
.j-c {
	justify-content: center;
	
}
.j-s {
	justify-content: space-between;
}
.a-c {
	align-items: center;
}
</style>
