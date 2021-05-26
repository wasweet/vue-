Vue.component('swiper', {
				template:`
				<div class="img">
					<i class="left" @click="top"></i>
					<i class="right" @click="next"></i>
					<img  v-show="index === acitveindex" v-for="(item,index) in list" :src="item" alt="">
					<ul class="dian">
						<li v-for="(item,index) in list" 
						:class="{active: index === acitveindex}"
						@click="setActive(index)"></li>
					</ul>
				</div>
				`,
				props:['list'],
				data() {
					return {
						// 定义定时器
						timer:-1,
						acitveindex:0
					}
				},
				mounted() {
					// 调用定时器
					this.timerRun()
				},
				methods:{
					// 定时器
					timerRun() {
						timer = setInterval(() => {
							if(++this.acitveindex === this.list.length) {
								this.acitveindex = 0
							}
						},2000)
					},
					// 向左
					top() {
						// 清除定时器
						clearInterval(timer)
						this.acitveindex--
						if(this.acitveindex < 0) {
							this.acitveindex = this.list.length-1
						}
						// 重启定时器
						this.timerRun()
					},
					// 向右
					next() {
						// 清除定时器
						clearInterval(timer)
						this.acitveindex++
						if(this.acitveindex === this.list.length) {
							this.acitveindex = 0
						}
						// 重启定时器
						this.timerRun()
					},
					// 鼠标指定跳转
					setActive(id) {
						this.acitveindex = id
					}
				}
			})