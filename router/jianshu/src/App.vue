<template>
  <div id="app">
    <Header></Header>
	<router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import List from './components/List.vue'
export default {
  name: 'App',
  components: {
   Header,
   List
  }
}
</script>

<style>
#app {
  
}
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
}
</style>
