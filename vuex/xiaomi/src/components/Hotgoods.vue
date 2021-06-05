<template>
	<div class="hotgoods">
		<div class="title">明星单品</div>
		<div class="flex j-s list">
			<div v-for="(item,index) in hotgoods">
				<img :src="item.images" alt="">
				<div class="txt1">{{item.title}}</div>
				<div class="txt2">{{item.desc}}</div>
			</div>
			
		</div>
	</div>
</template>

<script>
export default {
	props:['hotgoods'],
	data() {
		return {
			
		}
	}
}
</script>

<style scoped>
.hotgoods {
	width: 1260px;
	height: 300px;
	margin: 0 auto;
	margin-top: 10px;
}
.title {
	font-size: 20px;
	padding-left: 10px;
}
.list {
	height: 240px;
	margin-top: 10px;
}
.list>div {
	border-top: 1px solid #FFA500;
	width: 230px;
	height: 200px;
	padding-top:40px ;
	background-color: #fafafa;
	font-size: 12px;
	text-align: center;
}
.list>div>img {
	width: 120px;
	height: 100px;
}
.txt1 {
	color: #333;
}
.txt2 {
	color: #B0B0B0;
}
</style>
