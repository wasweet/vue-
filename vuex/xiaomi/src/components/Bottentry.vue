<template>
	<div class="bottentry flex">
		<div class="left">
			<ul class="flex j-s a-c">
				<li class="one">
					<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&h=48" alt="">
					<div>小米秒杀</div>
				</li>
				<li class="one two">
					<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&h=48" alt="">
					<div>小米秒杀</div>
				</li>
				<li class="one two">
					<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eded6fa3b897a058163e2485532c4f10.png?w=48&h=48" alt="">
					<div>小米秒杀</div>
				</li>
				<li>
					<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&h=48" alt="">
					<div>小米秒杀</div>
				</li>
				<li class="two">
					<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&h=48" alt="">
					<div>小米秒杀</div>
				</li>
				<li class="two">
					<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&h=48" alt="">
					<div>小米秒杀</div>
				</li>
			</ul>
		</div>
		<div class="right">
			<ul class="flex j-s" >
				<li>
					<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d4298059889417157e8492750328492.jpg?w=632&h=340" alt="">
				</li>
				<li>
					<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b30177d629bfbe2fb42251c1b8538f7b.jpg?w=632&h=340" alt="">
				</li>
				<li>
					<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f18ac756fa2cedb16ea429b9c0001af.png?w=632&h=340" alt="">
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	
}
</script>

<style scoped>
.bottentry {
	width: 1260px;
	margin: 0 auto;
}
.left {
	width: 234px;
	height: 170px;
	background-color: #333;
}
.left ul {
	flex-wrap: wrap;	
}
.left ul li img {
	width: 30px;
	height: 30px;
}
.left ul li {
	width: 70px;
	height: 70px;
	/* border: 1px solid #000000; */
	text-align: center;
	margin-top: 15px;
	font-size: 12px;
	color: #fff;
}
.one {
	border-bottom: 1px solid #FFA500;
}
.two {
	border-left: 1px solid #F5F2F0;
}
.right {
	width: 1026px;
}
.right img {
	width: 316px;
	height: 170px;
	
}
.right ul li{
	margin-left: 15px;
}
</style>
