<template>
	<div class="flex j-s a-c nav">
		<div class="flex a-c nav-left">
			<div class="top-img">
				<a href="#">
				<img src="/images/logo.png" alt="">
				</a>
			</div>
			<ul class="flex  a-c main">
				<li class="sy">
					<a href="#" class="nav-item">
						<i class="iconfont icon-shouye"></i>
						<!-- <span>首页</span> -->
						<router-link tag="span" to="/">首页</router-link>
					</a>
				</li>
				<li class="dowmload">
					<a href="#" class="nav-item">
					<i class="iconfont icon-xiazaifuben"></i>
					<span>下载App</span>
					</a>
				</li>
				<li>
					<a href="#" class="nav-item search">
					<input type="text" placeholder="搜索">
					<i class="iconfont icon-sousuo"></i>
					</a>
				</li>
			</ul>
			
		</div>
		<div class="nav-right"> 
			<ul class="flex a-c">
				<li class="right-item">
					<a href="#">
						<span>Aa</span>
					</a>
				</li>
				<li class="right-item">
					<a href="#">
						<!-- <span>登陆</span> -->
						<router-link tag="span" to="/logn">登陆</router-link>
					</a>
				</li>
				<li class="right-item zhece">
					<a href="#" @click="gotoRegister">
						<div >注册</div>
					</a>
				</li>
				<li class="right-item wenzhang">
					<a href="#">
						<div>写文章</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		methods:{
			gotoRegister() {
				// console.log(this.$router)
				// 利用点击事件 进行手动跳转页面
				this.$router.push('/register')
			}
		}
	}
</script>

<style scoped>
	.nav {
		height: 56px;
	}
	.top-img img{
		height: 56px;
	}
	.main {
		margin-left: 200px;
	}
	.nav-item {
		color: #000000;
		margin: 0 10px;
	}
	.search {
		margin-left: 30px;
	}
	.search input {
		width: 200px;
		height: 40px;
		border: 1px solid #eee;
		border-radius: 40px;
		outline: none;
		text-indent: 10px;
		background-color: #eee;
	}
	.search i {
		font-size: 20px;
	}
	.sy a{
		color: #FFA500;
	}
	
	.nav-right li a{
		color: #999999;
		font-size: 17px;
	}
	.right-item {
		margin: 0 20px;
	}
	.zhece,.wenzhang {
		border: 1px solid #FF4500;
		padding: 5px 15px;
		border-radius: 40px;
	}
	.zhece div{
		color: #FF4500;
	}
	.wenzhang {
		color: #F5F2F0;
		background-color:#FF4500 ;
	}
	.wenzhang div {
		color: #FFFDEF;
	}
</style>
