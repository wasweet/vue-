<template>
	<div class="main">
		 <swiper ref="mySwiper" :options="swiperOptions">
		    <swiper-slide>
				<img src="https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/184493/21/6002/51836/60adfd5fE3abdacec/f51e15e548220a64.jpg!cr_1053x420_4_0!q70.jpg.dpg" alt="">
			</swiper-slide>
		    <swiper-slide>
				<img src="https://imgcps.jd.com/ling4/4448073/6Z2i6YOo5oqk6IKk5LyY5ZOB6LSt/5aSp5aSp5pyJ54m55Lu3/p-5c13869682acdd181deefeeb-618/128db2c7/cr_1125x449_0_166/s1125x690/q70.jpg" alt="">
			</swiper-slide>
		    <swiper-slide>
				<img src="https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/175039/40/12032/192479/60b1969eE31b59a6d/91f4e8597cd4ad3b.jpg!cr_1053x420_4_0!q70.jpg.dpg" alt="">
			</swiper-slide>
				 <div class="swiper-pagination" slot="pagination"></div>
		  </swiper>
		 
	</div>
</template>

<script>
import SwiperClass from 'swiper'
export default {
	data() {
	      return {
	        swiperOptions: {
	          pagination: {
	            el: '.swiper-pagination'
	          },
			   autoplay:{
				   disableOnInteraction:false,
				   delay:3000
			   },//自动切换
			   loop:true
	          // Some Swiper option/callback...
	        }
	      }
	    },
	    computed: {
	      swiper() {
	        return this.$refs.mySwiper.$swiper
	      }
	    },
	    mounted() {
	      this.swiper.slideTo(3, 1000, false)
		  
	    }    
}
</script>

<style scoped>
.main {
	margin-top: 10px;	
	text-align: center;
}
.main img {
	width: 380px;
	height: 150px;
	border-radius: 15px;
}
</style>
