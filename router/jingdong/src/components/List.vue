<template>
	<div>
	<div class="main">
		<div class="img flex">
			<img src="https://m.360buyimg.com/mobilecms/s250x200_jfs/t1/188633/29/5273/112760/60af4226Ee58c470b/d5ce8318cc373d64.jpg!q70.jpg.dpg" alt="">
			<img src="https://m.360buyimg.com/mobilecms/s250x200_jfs/t1/178866/21/6689/73063/60b44dddE9c0251ee/9df6c2552a189ccc.jpg!q70.jpg.dpg" alt="">
			<img src="https://m.360buyimg.com/mobilecms/s250x200_jfs/t1/182689/16/5926/100409/60b44d05E0ad27d92/021f2d9c56731822.jpg!q70.jpg.dpg" alt="">
		</div>
	</div>
		<div class="list">
			<!-- url -->
			<!-- <router-link tag="div"  v-for="(item,index) in list" class="nav-item" :to="'/goods/'+index+'/'+item">
				<div class="item-img">
					<img :src="'/images/jdlist'+index+'.png'" alt="">
				</div>
				<div class="title">{{item}}</div>
			</router-link> -->
			<!-- query -->
			<router-link tag="div"  v-for="(item,index) in list" class="nav-item" :to="'/goods?id='+index+'&name='+item">
				<div class="item-img">
					<img :src="'/images/jdlist'+index+'.png'" alt="">
				</div>
				<div class="title">{{item}}</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					'京东超市',
					'数码电器',
					'京东服饰',
					'京东生鲜',
					'京东到家',
					'充值缴费',
					'9.9元拼',
					'领券',
					'领津贴',
					'PULS会员'],
				
			}
		}
	}
</script>

<style scoped>
.main {
	width: 414px;
}
.main .img img{
	width: 100%;
	flex:1;
	height: 100px;
	margin-top: -5px;
}
.list {
	width: 414px;
	height: 180px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	 border-top-left-radius: 15px;
	 border-top-right-radius: 15px;
	background-color: #eee;
}
.nav-item{
	width: 20%;
	text-align: center;
	margin-top: 10px;
}
.item-img img {
	width: 44px;
	height: 44px;
}
.title {
	color: #666;
	font-size: 14px;
}
</style>
