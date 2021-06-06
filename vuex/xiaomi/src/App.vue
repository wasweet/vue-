<template>
  <div id="app">
	  <Header></Header>
	  <Menu></Menu>
    <router-view/>
  </div>
</template>
<script>
	import Header from '@/components/Header'
	import Menu from '@/components/Menu'
	export default {
		components:{
			Header,
			Menu
		}
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
a {
	text-decoration: none;
}
.flex {
	display: flex;
}
.a-c {
	align-items: center;
}
.j-c {
	justify-content: center;
}
.j-s {
	justify-content: space-between;
}
</style>
