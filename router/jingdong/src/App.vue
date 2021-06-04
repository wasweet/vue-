<template>
  <div id="app">
	  
   <router-view></router-view>
   <Bottomnav></Bottomnav>
  </div>
</template>

<script>
import Bottomnav from '@/components/Bottomnav'
export default {
  name: 'App',
  components: {
    Bottomnav
  }
}
</script>

<style>
.flex {
	display: flex;
}
.j-c {
	justify-content: center;
}
.j-s {
	justify-content:space-between
}
.a-c {
	align-items: center;
}
* {
	margin: 0;
	padding: 0;
	list-style: none;
	text-decoration: none;
	color: #666;
}
body {
	background-color: #E9E9E9;
}
</style>
