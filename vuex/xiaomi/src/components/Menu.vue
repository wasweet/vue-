<template>
	<div class="menu flex a-c">
		<div class="left flex">
			<img src="https://s02.mifile.cn/assets/static/image/logo-mi2.png" alt="">
		</div>
		<div class="middle">
			<ul class="flex j-s">
				<li>小米手机</li>
				<li>Redmi红米</li>
				<li>电视</li>
				<li>笔记本</li>
				<li>家电</li>
				<li>路由器</li>
				<li>智能硬件</li>
				<li>服务</li>
				<li>社区</li>
			</ul>
		</div>
		<div class="right">
			<input class="text" type="text">
			<input class="btn iconfont iconsuosou" type="submit" value="" placeholder="以旧换新" >
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style scoped>
	
.menu {
	width: 1260px;
	margin: 0 auto;
	height: 100px;
	line-height: 100px;
	position: relative;
}
.left img{
	width: 56px;
	height: 56px;
}
.middle {
	margin-left: 200px;
}
.middle ul li {
	margin: 0 10px;
}
.middle ul li:hover {
	color: #FFA500;
}
.right {
	position: absolute;
	right: 10px;
}
.right .text {
	outline: none;
	width: 296px;
	height: 50px;
}
.right .btn {
	width: 51px;
	height: 54px;
	position: absolute;
	right: 0px;
	top: 25px;
	outline: none;
}
</style>
