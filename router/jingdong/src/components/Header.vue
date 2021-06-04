<template>
	<div class="flex j-s top-nav">
		<div class="top-img"><span></span></div>
		<div class="search">
			<div class="search-left flex">
				<i class="search-jd"></i>
				<i class="search-ss"></i>
					<input type="text" placeholder="清风抽纸">	
			</div>
		</div>
		<div class="lognin">
			<router-link tag="span" to="/logn">登陆</router-link>
			<!-- <span>登陆</span> -->
		</div>
		<div class="slider-bg"></div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style scoped>
.top-nav {
	height: 44px;
	width: 100vw;
	background-color: #f23030;
}
.top-img span{
	margin: 14px 0 0 15px;
	display: block;
	width: 20px;
	height: 18px;
	background: url(../assets/images/jd1.png) no-repeat;
	background-size: 100% 100%;
}
.search {
	margin-top: 7px;
}
.search-left {
	width: 300px;
	background-color: #fff;
	height: 30px;
	border-radius: 40px;
}
.search .search-jd{
	display:block;
	width: 20px;
	height: 15px;
	background: url(../assets/images/jd.png) no-repeat;
	background-size: 20px 15px;
	margin: 8px 8px 0 15px;
	position: relative;
	top: 1px;
	left: -8px;
}
.search .search-jd::after {
	content: "";
	position: absolute;
	border-right: 1px solid #ddd;
	top: 0;
	left: 26px;
	height: 16px;
}
.search-ss {
	display:block;
	width: 18px;
	height: 15px;
	background: url(../assets/images/jd-sprites.png) no-repeat;
	background-position: -80px 0;
	background-size: 200px;
	margin: 9px 0 0  -5px;
	position: relative;
}

.search-left input{
	width: 80%;
	border: none;
	margin-left: 5px;
	vertical-align: middle;
	text-overflow: ellipsis;
	white-space: nowrap;
	outline: none; 
	border-radius: 40px;
}
.lognin span{
	position: relative;
	top: 10px;
	left: -10px;
	color: #fff;
}
.slider-bg {
	background-image: linear-gradient(
	0deg
	,#f1503b,#c82519 50%);
	position: absolute;
    top: 44px;
    left: -25%;
    height: 7.25rem;
    /* width: 150%; */
	width: 517px;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 50%;
	/* border-bottom-left-radius: 10px; */
	/* border-bottom-right-radius: 40px; */
	overflow: hidden;
}
</style>
