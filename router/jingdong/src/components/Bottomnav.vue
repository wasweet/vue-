<template>
	<div class="main flex a-c ">
		
		<a class="shouye">
			<i class="iconfont iconshouye"></i>
			<!-- <span>首页</span> -->
			<router-link tag="span" to="/">首页</router-link>
		</a>
		<router-link tag="a" to="/classify">
			<i class="iconfont iconkinds"></i>
			<div>分类</div>
		</router-link>
		<!-- <a class="fenlei">
			<i class="iconfont iconkinds"></i>
			<div>分类</div>
		</a> -->
		<a class="gaoxiao">
			<i class="iconfont icongaoxiaoquwei"></i>
			<div>搞笑</div>
		</a>
		<a class="gouwuche">
			<i class="iconfont icongouwuche"></i>
			<div>购物车</div>
		</a>
		<a class="wode">
			<i class="iconfont iconwode"></i>
			<div>我的</div>
		</a>
	</div>
</template>

<script>
	export default {
		methods:{
			// shouye() {
			// 	this.$router.push('/')
			// }
		}
	}
</script>

<style scoped>
.main {
	position: absolute;
	bottom: 0;
	/* background-color: #000000; */
	width: 100%;
	height: 54px;
	background-color: rgb(255, 255, 255);
	padding-bottom: env(safe-area-inset-bottom);
}
.main a {
	flex: 1;
	text-align: center;
}
.main i{
	font-size: 20px;
}
.main div {
	color: #666;
	font-size: 15px;
}
span {
	display: block;
}
</style>
