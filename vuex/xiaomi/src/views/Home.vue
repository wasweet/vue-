<template>
	<div>
		<Header></Header>
		<Menu></Menu>
		<Banner></Banner>
		<Bottentry></Bottentry>
		<Hotgoods :hotgoods="hotgoods"></Hotgoods>
		<Hardware :hardware="hardware"></Hardware>
	</div>
</template>

<script>
import Header from '@/components/Header'
import Menu from '@/components/Menu'
import Banner from '@/components/Banner'
import Bottentry from '@/components/Bottentry'
import Hotgoods from '@/components/Hotgoods'
import Hardware from '@/components/Hardware'
export default {
  components:{
	  Header,
	  Menu,
	  Banner,
	  Bottentry,
	  Hotgoods,
	  Hardware
  },
  data() {
  	return  {
		hotgoods:[],
		hardware:[]
	}
  },
  created() {
	  // 获取数据
  	this.hotgoods = this.$store.state.hotgoods
	this.hardware = this.$store.state.hardware
  }
}
</script>
