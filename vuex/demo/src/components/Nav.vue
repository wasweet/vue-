<template>
	<div class="nav">
		<div class="title">新闻</div>
		<div class="pd flex">
			<ul class="flex  a-c list">
				<li v-for="(item,index) in shownavs">{{item}}</li>
			</ul>
			<div class="more">
				<router-link to="/changemanager"><img src="/images/logo.png" alt=""></router-link>
			</div>
		</div>
	</div>
</template>

<script>
	
	import {mapState} from 'vuex'
export default {
	computed:{
		...mapState(['shownavs'])
	},
	mounted() {
		
	}
}
</script>

<style scoped>
.nav {
	width: 100%;
}
.title {
	height: 44px;
	background-color: #0077AA;
	color: #fff;
	text-align: center;
	font-weight: 700;
	line-height: 44px;
}
.pd {
	background-color: #EEEEEE;
}
.list {
	flex: 1;
	overflow-x: scroll;
}
.list li {
	text-align: center;
	word-break: keep-all;
	margin: 0 5px;
}
.more img{
	width: 30px;
	height: 30px;
	border-left: 1px solid #000000;
}
</style>
