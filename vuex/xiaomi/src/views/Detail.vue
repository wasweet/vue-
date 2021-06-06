<template>
	<div class="detail">
		<div class="top flex">
			<div class="left">
				<ul class="flex ll">
					<li class="name">小米手机</li><span>|</span>
					<li class="type-f">RedMi Pro 5G</li>
				</ul>
			</div>
			<div class="right">
				<ul class="flex rr">
					<li>概述页</li><span>|</span>
					<li> 参数页</li><span>|</span>
					<li> F码通道 </li><span>|</span>
					<li> 咨询客服</li><span>|</span>
					<li> 用户评价</li>
				</ul>
			</div>
		</div>
		<div class="content flex">
			<div class="left">
				<img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1621955784.84614979.jpg" alt="">
			</div>
			<div class="right">
				<div class="name"> {{detail.name}}</div>
				<div class="type"> {{detail.subtitle}}</div>
				<div class="company-info">{{detail.info}}</div>
				<div class="price">{{detail.price}}元</div>
				<div class="line"></div>
				<!--  -->
				<div class="address-box">
					<div class="address-con">
						<div class="address-info flex">
							<ul class="flex">
								<li>北京</li>
								<li>北京市</li>
								<li>海淀区</li>
								<li>清河街道</li>
							</ul>
							<a href="">修改</a>
						</div>
						<div class="info">有现货</div>
					</div>
				</div>
				<!--  -->
				<div class="buy-option">
					<div class="buy-option-child">
						<div class="title">选择版本</div>
						<ul class="flex">
							<li class="active">6G+128G</li>
							<li>8G+128G</li>
							<li>8G+256G</li>
						</ul>
					</div>
					<div class="buy-option-child">
						<div class="title">选择颜色</div>
						<ul class="flex">
							<li class="active">星纱</li>
							<li>幻青</li>
							<li>月魄</li>
						</ul>
					</div>
				</div>
				<!--  -->
				<div class="selected-list">
					<div class="type">Redmi Note 10 Pro 6GB+128GB 月魄</div>
					<div class="totalprice">总计：1699元</div>
				</div>
				<!--  -->
				<div class="btn-box flex">
					<div class="sale-btn">加入购物车</div>
					<div class="fav-btn">喜欢</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
export default {
	data() {
		return {
			detail:{}
		}
	},
	async created() {
		let {data:{data}} = await axios.get('/json/product.json')
		// console.log(data)
		this.detail = data
	}
}
</script>

<style scoped>
.top {
	width: 1260px;
	height: 60px;
	margin: 0 auto;
	background: #fff;
	border-top: 1px solid #e0e0e0;
	border-bottom: 1px solid #e0e0e0;
	line-height: 60px;
}
.name {
	font-weight: 700;
}
.ll li{
	margin: 0 10px;
}
.ll span {
	font-size: 12px;
	color: #616161;
}
.type-f {
	font-size: 12px;
	color: #616161;
}

.right {
	flex: 1;
	position: relative;
}
.rr {
	position: absolute;
	right: 10px;
}
.rr li {
	margin: 0 10px;
	color: #616161;
	font-size: 14px;
}
.rr span {
	color: #616161;
	font-size: 14px;
}

.content {
	width: 1160px;
	margin: 0 auto;
}
.content .left {
	width: 560px;
	    height: 560px;
}
.content .left img {
	width: 560px;
	    height: 560px;
	
}
.content .right {
	margin-top: 30px;
}
.content .name {
	font-size: 24px;
	    font-weight: 400;
	    color: #212121;
}
.type {
	 color: #b0b0b0;
	     margin: 0;
	     padding: 0;
	     padding-top: 8px;
	     line-height: 1.5;
	 
 }
.company-info {
	 color: #ff6700;
}
.price {
	 font-size: 18px;
	     line-height: 1;
	     color: #ff6700;
	     padding: 12px 0 10px;
}
.line {
	 margin-top: 12px;
	 border-bottom: 1px solid #e0e0e0;
 }
 
.address-box {
	margin: 20px 0;
	padding: 30px 50px;
	position: relative;
	background: #fafafa;
	border: 1px solid #e0e0e0;
}
.address-info li {
	margin: 0 10px;
}
.address-info a {
	margin-left: 10px;
	color: #ff6700;
}
.info {
	margin-left: 10px;
	color: #ff6700;
}
.buy-option-child ul {
	flex-wrap: wrap;
	justify-content: space-between;
}
.buy-option-child li {
		margin-top: 10px;
	    line-height: 42px;
	    height: 42px;
	    position: relative;
	    border: 1px solid #e0e0e0;
	    list-style: none;
	    cursor: pointer;
	    transition: all .2s ease;
	    float: left;
	    width: 292px;
	    font-size: 16px;
	    text-align: center;
}
.buy-option-child .active {
	border: 1px solid #ff6700;
	color: #ff6700;
}
.buy-option-child li:hover {
	border: 1px solid #ff6700;
	color: #ff6700;
}
.selected-list {
	background: #f9f9fa;
	    padding: 30px;
	    margin-bottom: 30px;
}
.selected-list .totalprice {
	color:#ff6700 ;
	margin-top: 10px;
}
.sale-btn {
	padding: 20px 30px;
	background-color:#ff6700 ;
	color: #fff;
}
.fav-btn {
	padding: 20px 30px;
	background-color:#EEEEEE ;
	color: #fff;
	margin-left: 20px;
}
</style>
