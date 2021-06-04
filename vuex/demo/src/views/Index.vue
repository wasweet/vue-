<template>
 <div>
	   <Nav></Nav>
	   <div class="main flex" v-for="(item,index) in list">
		   <div class="pic">
			   <img :src="item.pic" alt="">
		   </div>
		   <div>
		   <div class="title">{{item.title}}</div>
		   <div class="flex aa">
			   <div>{{item.time}}</div>
			   <div>{{item.src}}</div>
		   </div>
		    </div>
	   </div>
 </div>
</template>

<script>
	import axios from 'axios'
	
import Nav from '@/components/Nav'
export default {
	data() {
		return {
			list:[]
		}
	},
  components: {
    Nav
  },
  async created() {
  	 let {data:{result:{list}}} = await axios.get('/json/news.json')
	 // console.log(list)
	 this.list = list
  }
}
</script>
<style scoped>
	.main {
		border-bottom: 1px solid #000000;
	}
	.pic {
		padding: 5px;
	}
	.pic img{
		width: 100px;
		height: 100px;
	}
	.title {
		margin-top: 5px;
	}
	.aa {
		margin-top: 40px;
	}
	.aa div {
		margin: 0 5px;
	}
</style>