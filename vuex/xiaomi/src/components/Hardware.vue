<template>
	<div class="hardware">
		<div class="title">智能硬件</div>
		<div class="content flex">
			<div class="left">
				<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c583f2edc613f1be20fa415910b13ce3.jpg?thumb=1&w=468&h=1228&f=webp&q=90" alt="">
			</div>
			<div class="right">
				<div v-for="(item,index) in nav">
					<router-link to="/detail">
					<img :src="item.images" alt="">
					<div class="txt1">{{item.name}}</div>
					<div class="txt2">{{item.subtitle}}</div>
					<div class="txt3">{{item.price}}</div></router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		// props:['hardware'],
		data() {
			return {
				nav:[]
			}
		},
		async created() {
			let {data:{list}} = await axios.get('/json/nav.json')
			console.log(list)
			this.nav =list
		}
	}
</script>

<style scoped>
.hardware {
	width: 1260px;
	height: 670px;
	margin: 0 auto;
	background-color: #f5f5f5;
	
}
.title {
	color: #424242;
	font-size: 20px;
	font-weight: bold;
	line-height: 40px;
}
.conent {
	height: 614px;
	margin: 10px;
}
.left {
	height: 614px;
	width: 234px;
}
.left img {
	height: 614px;
	width: 234px;
}
.right {
	flex:1;
	margin-left: 10px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: space-between;
}
.right>div {
	width: 230px;
	height: 300px;
	background-color: #fff;
	font-size: 12px;
	text-align: center;
}
.right img {
	width: 200px;
	height: 200px;
}
.txt1 {
	color: #333;
}
.txt2 {
	color: #B0B0B0;
}
.txt3 {
	color: #F00;
}
</style>
