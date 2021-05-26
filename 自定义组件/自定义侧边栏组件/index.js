Vue.component('leftmenu', {
	template:`
	<div id="app">
	<div class="title1">管理系统</div>
	<div v-for="(item,i) in list">
		<div class="title flex j-s" @click="item.show = !item.show">
			<i class="iconfont menu1" :class="item.icon"></i>
		<span>{{item.name}}</span>
		<i class="iconfont" :class="{iconxiajiantou : item.show === false, iconarrow_up_fat:item.show}"></i>
		</div>
		<transition name="fade">
		<ul class="list"  v-show="item.show">
			<li v-for="(item1,j) in item.child"
			:class="{active:activeChild === j && activeParent === i}"
			@click="activeParent = i,activeChild = j">
			<i class="iconfont menu" :class="item1.icon"></i>
			{{item1.name}}</li>
		</ul>
		</transition>
	</div>
	</div>
	`,
	props:['list'] ,
	data() {
	return {
		activeParent:0,
		activeChild:0,
	}
	}
})