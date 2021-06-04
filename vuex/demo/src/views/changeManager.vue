<template>
	<div>
	<div class="flex"> 
		<div class="back">
			<router-link to="/"><img src="/images/logo.png" alt=""></router-link>
			</div>
		<div class="nav">频道管理</div>
	</div>
	
	<div>
		<div>点击删除下面频道</div>
		<div class="navs">
			<div class="nav-item"
				 v-for="(item,index) in shownavs"
				 @click="decrement(item)">{{item}}</div>
		</div>
	</div>
	<div>
		<div>点击添加下面频道</div>
		<div class="navs">
			<div class="nav-item" 
				 v-for="(item,index) in navs"
				 @click=" increment(item)">{{item}}</div>
		</div>
	</div>
	</div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
	computed:{
		...mapState(['navs','shownavs'])
	},
	methods:{
		...mapMutations(['increment','decrement'])
	}
}
</script>

<style scoped>
.nav {
	height: 44px;
	background-color: #0077AA;
	color: #fff;
	text-align: center;
	font-weight: 700;
	flex: 1;
	line-height: 44px;
}
.back  img{
	width: 44px;
	height: 33px;
}
.back  {
	background-color: #0077AA;
}
.navs {
	display: flex;
	flex-wrap: wrap;
	margin-left: 15px;
}
.nav-item {
	border: 1px solid #000000;
	padding: 5px 10px;
	margin: 5px 10px;
}
</style>
