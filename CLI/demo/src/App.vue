<template>
  <div class="container">
	  <div class="header">
		  <Header></Header>
	  </div>
	  <div class="content">
		  <div class="left">
			  <Left></Left>
		  </div>
		  <div class="right">
			  <div id="char"></div>
		  </div>
	  </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Left from './components/Left.vue'
import * as echarts from 'echarts'
export default {
	components:{
		Header,
		Left
	},
	data() {
		return {
			charData:[
				{
					name:'衬衫',
					xl:10,
					lr:30
				},
				{
					name:'羊毛衫',
					xl:80,
					lr:100
				},
				{
					name:'雪纺衫',
					xl:20,
					lr:45
				},
				{
					name:'裤子',
					xl:30,
					lr:60
				}
			]
		}
	},
	mounted() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('char'));
		// var myChart = echarts.init(this.$refs.char);
		// 绘制图表
		myChart.setOption({
		    title: {
		        text: 'ECharts 入门示例'
		    },
		    tooltip: {},
		    xAxis: {
		        // data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
				data: this.charData.map(r => r.name)
		    },
		    yAxis: {},
		    series: [{
		        name: '销量',
		        type: 'bar',
		        // data: [5, 20, 36, 10, 10, 20]
				data: this.charData.map(r => r.xl)
		    },{
				name:'利润',
				type:'bar',
				// data:[10,10,10,10,10,10]
				data: this.charData.map(r => r.lr)
			}]
		});
	},
	
}
</script>

<style>
	#char {
		width: 400px;
		height: 400px;
	}
.container {
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
}
.header {
	height: 60px;
	background-color:#545c64;
}
.content {
	display: flex;
	flex: 1;
}
.left {
	width:202px;
	/* height: 100vh; */
	background-color: #545c64;
}
.right {
	flex:1;
}
</style>
