<template>
	
	<div>
		{{listid}}|{{listname}}|{{type}}
	</div>
</template>

<script>
	export default {
		// props:['id','name'],
		data() {
			return {
				goods:['asd','asf','dfg','ergw'],
				listid:'',
				listname:'',
				type:''
			}
		},
		created() {
			// console.log(this.$route)
			
			// url
			// let {id,name} = this.$route.params
			// this.listid = id
			// this.listname = this.goods[parseInt(id)]
			// this.type = name
			
			// props 解藕
			// this.listid = this.id
			// this.listname = this.goods[parseInt(this.id)]
			// this.type = this.name
			
			// query
			console.log(this.$route)
			let {id,name} = this.$route.query
			this.listid = id
			this.listname = this.goods[parseInt(id)]
			this.type = name
		}
	}
</script>

<style scoped>
</style>
