<template>
	<div class="banner flex">
		<div class="left">
			<ul>
				<li><a href="">手机 电话卡</a> <i class="iconfont icon-arrow-right"></i></li>
				<li><a href="">电视 盒子</a><i class="iconfont icon-arrow-right"></i></li>
				<li><a href="">笔记本 显示器</a><i class="iconfont icon-arrow-right"></i></li>
				<li><a href="">家电 插线板</a><i class="iconfont icon-arrow-right"></i></li>
				<li><a href="">出行 吃饭</a><i class="iconfont icon-arrow-right"></i></li>
				<li><a href="">智能 穿戴</a><i class="iconfont icon-arrow-right"></i></li>
				<li><a href="">电视 盒子</a><i class="iconfont icon-arrow-right"></i></li>
				<li><a href="">电视 盒子</a><i class="iconfont icon-arrow-right"></i></li>
				<li><a href="">电视 盒子</a><i class="iconfont icon-arrow-right"></i></li>
				<li><a href="">电视 盒子</a><i class="iconfont icon-arrow-right"></i></li>
			</ul>
		</div>
		<div class="right">
			 <swiper ref="mySwiper" :options="swiperOptions">
			    <swiper-slide>
					<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7f2e0acc18c3d9b6a9c1ab9e8281fbd6.jpg?thumb=1&w=2452&h=920&f=webp&q=90" alt="">
				</swiper-slide>
			    <swiper-slide>
					<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d7abb68ac50f82412d325f305cc62fb0.jpeg?w=2452&h=920" alt="">
				</swiper-slide>
			    <swiper-slide>
					<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c3e97686468231f3f78048d7f2b7fdc.jpg?thumb=1&w=2452&h=920&f=webp&q=90" alt="">
				</swiper-slide>
			    <div class="swiper-pagination" slot="pagination"></div>
				
			  </swiper>
			  <div class="swiper-button-prev"></div>
			  <div class="swiper-button-next"></div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
		      return {
		        swiperOptions: {
		          pagination: {
		            el: '.swiper-pagination'
		          },
				  loop:true,
		          autoplay: {
		              delay: 3000,
		          },
				  navigation: {
				        nextEl: '.swiper-button-next',
				        prevEl: '.swiper-button-prev',
				      },
		        }
		      }
		    },
	}
</script>

<style scoped>
.banner {
	width: 1260px;
	height: 460px;
	margin: 0 auto;
	font-size: 14px;
}
.left {
		width: 234px;
}
.left ul {
		height: 420px;
	    border: 0;
	    color: #fff;
	    background: rgba(105,101,101,.6);
		padding: 20px 0;
		list-style-type: none;
}
.left ul li a {
	padding-left: 30px;
	    height: 42px;
	    line-height: 42px;
		background-color: rgba(0,0,0,0);
		color: #fff;
}
.left ul li:hover {
	background-color: #FFA500;
}

.left ul li {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.right{
	width: 1026px;
	height: 460px;
	position: relative;
}
.right img {
	width: 100%;
	height: 460px;
	
}
.swiper-button-prev {
	position: absolute;
	/* left: 10px; */
}
</style>
