<template>
	<div class="home flex">
		<div class="left">
			<List :list="listInfo"></List>
		</div>
		<div class="right">
			<Recommend></Recommend>
		</div>
	</div>
</template>

<script>
	import List from '../components/List.vue'
	import Recommend from '../components/Recommend.vue'
	export default {
		components:{
			List,
			Recommend
		},
		data() {
			return {
				listInfo:[
					{
						title:'赵丽颖和冯绍峰的离婚，这值得让每个人深思',
						abstract:'基本说来，作为炙手可热的明星，一旦有什么风吹草动，外界都会很快察觉，然而赵丽颖和冯绍峰，两人结婚的消息来得猝不及防，离婚的消息也是。 赵丽颖和冯...',
						img:'/images/1.png'
					},
					{
						title:'怎样提高自己的情商？',
						abstract:'1.不要在别人说话的时候玩手机。 2.请客吃饭相当于分享，被请的人吃完就会忘记了，也不会领情，除非你请的是他从没有吃过的豪华大餐，怎么才能在交往...',
						img:'/images/11.png'
					},
					{
						title:'发现美句——村上春树',
						abstract:'1.哪里会有人喜欢孤独，不过是不喜欢失望罢了。——《挪威的森林》 2.白昼之光，岂知夜色之深。——《且听风吟》 3.孤独一人也没关系，只要能发自...',
						img:'/images/111.png'
					}
					]
				
			}
		}
	}
</script>

<style scoped>
	.home {
		width: 960px;
		height: 500px;
		margin: 0 270px;
	}
	.left {
		width: 625px;
	}
	.right {
		flex: 1;
	}
</style>
