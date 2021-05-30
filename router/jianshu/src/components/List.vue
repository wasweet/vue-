<template>
	<div class="flex list">
		<div class="main flex">
			<ul>
				<li class="flex a-c" v-for="(item, index) in list">
					<div class="content left">
						<a class="title" href="#">{{item.title}}</a>
						<p class="abstract">{{item.abstract}}</p>
					</div>
					<div class="right">
						<a href="#" class="wrap-img"><img :src="item.img" alt=""></a>
					</div>
				</li>
			</ul>
			
		</div>
		<div class="aside"></div>
	</div>
</template>

<script>
	export default {
		props:['list']
	}
</script>

<style scoped>
	.list {
		margin:10px;
	}
	.main li {
		margin: 0 0 15px;
		    padding: 15px 2px 20px 0;
		    border-bottom: 1px solid #f0f0f0;
	}
	.left .title {
		font-size: 18px;
		font-weight: 700;
		line-height: 1.5;
		color: #000000;
	}
	.abstract {
		font-size: 13px;
		line-height: 24px;
		color: #999;
		margin: 0 0 8px;
	}
	.wrap-img img{
		width: 150px;
		height: 100px;
		border-radius: 15px;
	}
</style>
